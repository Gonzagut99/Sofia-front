// import { json } from "@remix-run/node";
// //import Stripe from "stripe";
// import { stripe } from "~/utils/stripe.server";

// // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
// //     apiVersion: "2022-11-15",
// // });

// // export async function handleStripeWebhook(request: Request) {
// //     // const stripeInstance = stripe
// //     // const sig = request.headers.get("stripe-signature") as string;
// //     // const body = await request.text();

// //     // let event;

// //     // try {
// //     //     event = stripe.webhooks.constructEvent(
// //     //         body,
// //     //         sig,
// //     //         process.env.STRIPE_WEBHOOK_SECRET as string
// //     //     );
// //     // } catch (err) {
// //     //     console.error(`⚠️  Webhook signature verification failed.`, err.message);
// //     //     return json({ error: "Webhook signature verification failed." }, { status: 400 });
// //     // }

// //     // // Handle the event
// //     // switch (event.type) {
// //     //     case "payment_intent.succeeded":
// //     //         const paymentIntent = event.data.object;
// //     //         console.log(`PaymentIntent was successful!`, paymentIntent);
// //     //         // Handle successful payment here
// //     //         break;
// //     //     case "payment_method.attached":
// //     //         const paymentMethod = event.data.object;
// //     //         console.log(`PaymentMethod was attached to a Customer!`, paymentMethod);
// //     //         // Handle payment method attachment here
// //     //         break;
// //     //     // ... handle other event types
// //     //     default:
// //     //         console.warn(`Unhandled event type ${event.type}`);
// //     // }

// //     // return json({ received: true });
    
// // }

// // export class StripeService {
// //     constructor() {
// //         console.log('StripeService constructor');
// //     }

// //     updateCustomer() {
// //         console.log('updateCustomer');
// //     }
// // }