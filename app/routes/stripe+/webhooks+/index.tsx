import { redirect, type ActionFunctionArgs } from "@remix-run/node";
import Stripe from "stripe";
import { envs } from "~/config/envs";
import { deleteSubscription, upsertSubscription } from "~/services/subscription.server";
import { getUserByCustomerId, getUserByEmail, updateUserStripe } from "~/services/user.server";
import { stripe } from "~/utils/stripe.server";

export const action = async ({ request }: ActionFunctionArgs) => {
    // const body = new URLSearchParams(await request.text());
    const body = await request.text();
    const stripeInstance = stripe;
    // const stripeService = 

    const sig = request.headers.get("stripe-signature") as string;
    let event: Stripe.Event;
    try {
        event = stripeInstance.webhooks.constructEvent(body, sig, envs.stripeWebhookSecret);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch (err:any) {
        console.error(`⚠️  Webhook signature verification failed.`, err.message);
        // return json({ error: "Webhook signature verification failed." }, { status: 400 });
        return null
    }

    try{
        switch (event.type) {
            case "checkout.session.completed": {
                const session = await stripeInstance.checkout.sessions.retrieve(
                    (event.data.object as Stripe.Checkout.Session).id,
                    { expand: ["line_items"] }
                );
                const customerId = session.customer as string;
                const customerDetails = session.customer_details
            
                if (customerDetails?.email){
                    const user = await getUserByEmail(customerDetails.email);
                    console.log(user)
                    if (!user) throw new Error("User not found");
                    if (!user.customerId) {
                        await updateUserStripe(user.id, { customerId, plan: "PRO" });
                    }
                    const lineItems = session.line_items?.data || [];
            
                    for (const lineItem of lineItems) {
                        console.log(`Got line item: ${lineItem.price?.id}`);
                        const priceId = lineItem.price?.id;
                        const isSubscription = lineItem.price?.type === "recurring";
                        if (isSubscription) {
                            console.log(`Got subscription ${priceId}`);
                            const endDate = new Date();
                            if (priceId === envs.stripeYearlyPriceId) {
                                endDate.setFullYear(endDate.getFullYear() + 1);
                            } else if (priceId === envs.stripeMonthlyPriceId) {
                                endDate.setMonth(endDate.getMonth() + 1);
                            } else {
                                console.warn(`Unhandled price id ${priceId}`);
                                throw new Error(`Unhandled price id ${priceId}`);
                            }
                            await upsertSubscription(
                                user.id,
                                {
                                    userId: user.id,
                                    endDate: endDate,
                                    plan: "PRO",
                                    period: priceId === envs.stripeYearlyPriceId ? "YEARLY" : "MONTHLY",
                                }
                            )
                        }
                    }
                }
                
                console.log(`Session ${session.id} was successful!`);
                return redirect("/", { status: 200 });
            }
            // case "customer.subscription.updated":{
            //     const subscription = await stripeInstance.subscriptions.retrieve(
            //         (event.data.object as Stripe.Subscription).id
            //     );
            //     break;
            // }
                
            case "customer.subscription.deleted": {
                const subscription = await stripeInstance.subscriptions.retrieve(
                    (event.data.object as Stripe.Subscription).id
                );
                const user = await getUserByCustomerId(subscription.customer as string);
                if(user){
                    await deleteSubscription(user.id);
                    await updateUserStripe(user.id, { 
                        //customerId: undefined,
                        plan: "FREE" 
                    });
                }else{
                    console.warn(`User not found with customerId ${subscription.customer}`);
                    throw new Error(`User not found with customerId ${subscription.customer}`);
                }
                return redirect("/", { status: 200 });
            }
            default:
                console.warn(`Unhandled event type ${event.type}`);
                return redirect("/", { status: 200 });
        }
        
    }catch (error) {
        console.error(`Error handling event: ${error}`);
        // return json({ error: "Error handling event" }, { status: 500 });
        return null
    }
    // const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY as string);
    // const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ["card"],
    //     line_items: [
    //         {
    //             price: process.env.STRIPE_MONTHLY_PRICE_ID as string,
    //             quantity: 1,
    //         },
    //     ],
    //     mode: "subscription",
    //     success_url: process.env.STRIPE_MONTHLY_PLAN_LINK as string,
    //     cancel_url: process.env.BASE_BACKEND_URL as string,
    // });

    // return {
    //     status: 302,
    //     headers: {
    //         location: session.url,
    //     },
    // };
};
