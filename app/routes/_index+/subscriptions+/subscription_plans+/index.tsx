import type { LoaderFunctionArgs } from "@remix-run/node";
import { tiers } from "~/data/tierList";
import { json, useLoaderData, useNavigate } from "@remix-run/react";
import { TierCard } from "~/components/ui/custom/TierCard";
import { isAuthenticated } from "~/utils/auth.server";
import { Tier } from "~/types/subscription-tiers";
import { getSubscriptionByUserId } from "~/services/subscription.server";
import { getAuthCookies } from "~/services/auth-cookies.server";
import { envs } from "~/config/envs";


export const loader = async ({request} : LoaderFunctionArgs) => {
    const {error, user} = await isAuthenticated(request);
    const authCookies = await getAuthCookies(request);
    const customerPortalUrl = envs.stripeCustomerPortal
    console.log(error)
    const plans = tiers;
    // if (error || !user) {
    //     return redirect('/login');
    // }
    let currentSubscription = null;
    if (user && user.plan !== 'FREE') {
        currentSubscription = await getSubscriptionByUserId(user.id, authCookies.accessToken);
    }
    return json({ plans, error, user, currentSubscription, customerPortalUrl });
};


const SubscriptionPage = () => {
    const data = useLoaderData<typeof loader>();
    const tiers = data.plans;
    const authenticated = ()=>{
        if (data.error || !data.user) {
            return false;
        }
        return true;
    };
    const isAuthenticated = authenticated();   
    const isPro = data.user?.plan === 'PRO';
    const subscription = data.currentSubscription;
    const customerPortalUrl = data.customerPortalUrl;
  const navigate = useNavigate();
return (
    <section className="flex flex-col items-center gap-6 p-6">
        {/* Encabezado */}
        <h1 className="text-3xl font-bold dark:text-zinc-50">Planes de <span className="text-customPrimary-500 dark:text-customPrimary-400">Suscripción</span></h1>
        <p className="text-zinc-600 dark:text-zinc-300">Elige el plan que mejor se adapte a tus necesidades.</p>

        {/* <div className="flex flex-wrap justify-center gap-6 ">
        <Card className="w-72 flex flex-col hover:bg-slate-100 dark:hover:bg-zinc-800 hover:scale-105 hover:opacity-90 transition-all duration-300">
            <CardHeader>
                <CardTitle>Plan Básico</CardTitle>
                <CardDescription>S/10 al mes</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow ">
                <ul className="list-disc list-inside text-sm text-zinc-600">
                <li>Acceso limitado al contenido</li>
                <li>1 usuario</li>
                <li>Soporte básico</li>
                </ul>
            </CardContent>
            <CardFooter className="flex justify-center gap-4">
                <Button variant="default" size="sm" className="px-2 py-1">Comprar</Button>
                <Button variant="outlinePrimary" size="sm" className="px-2 py-1">Actualizar</Button>
                <Button variant="destructive" size="sm" className="px-2 py-1">Cancelar</Button>
            </CardFooter>
        </Card>

        <Card className="w-72 flex flex-col hover:bg-slate-100 dark:hover:bg-zinc-800 hover:scale-105 hover:opacity-90 transition-all duration-300">
            <CardHeader>
                <CardTitle>Plan Premium</CardTitle>
                <CardDescription>S/30 al mes</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <ul className="list-disc list-inside text-sm text-zinc-600">
                <li>Acceso ilimitado</li>
                <li>Hasta 5 usuarios</li>
                <li>Soporte prioritario</li>
                </ul>
            </CardContent>
            <CardFooter className="flex justify-center gap-4">
                <Button variant="default" size="sm" className="px-2 py-1">Comprar</Button>
                <Button variant="outlinePrimary" size="sm" className="px-2 py-1">Actualizar</Button>
                <Button variant="destructive" size="sm" className="px-2 py-1">Cancelar</Button>
            </CardFooter>
        </Card>

        <Card className="w-72 flex flex-col hover:bg-slate-100 dark:hover:bg-zinc-800 hover:scale-105 hover:opacity-90 transition-all duration-300">
            <CardHeader>
                <CardTitle>Plan Empresarial</CardTitle>
                <CardDescription>S/100 al mes</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <ul className="list-disc list-inside text-sm text-zinc-600">
                <li>Acceso ilimitado con funciones avanzadas</li>
                <li>Hasta 20 usuarios</li>
                <li>Soporte dedicado 24/7</li>
                </ul>
            </CardContent>
            <CardFooter className="flex justify-center gap-4">
                <Button variant="default" size="sm" className="px-2 py-1">Comprar</Button>
                <Button variant="outlinePrimary" size="sm" className="px-2 py-1">Actualizar</Button>
                <Button variant="destructive" size="sm" className="px-2 py-1">Cancelar</Button>
            </CardFooter>
        </Card>
        </div> */}

        <div className="w-fullflex justify-center">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {tiers.map((tier) => {
                let localTier: Tier
                if(isAuthenticated){
                    localTier = tier
                } else {
                    localTier = {...tier, href: '/login', isExternal: false}
                }
                const isCustomer = subscription && isPro;
                if (isCustomer){
                    localTier = {...localTier, href: customerPortalUrl, isExternal: true, }
                    return (
                        <TierCard key={tier.id} tierData={localTier} type={tier.originalPrice==0?'free':'acquired'}
                        />
                        // <TierCard key={tier.id} tierData={localTier} type={tier.originalPrice==0?'free':'acquired'} actionCallback={() => navigate(tier.href)}
                        // />
                    )
                }

                
                return (
                    <TierCard key={tier.id} tierData={localTier} type={tier.originalPrice==0?'free':'buy'} actionCallback={() => navigate('/subscriptions/billing')}
                    />
                    // <TierCard key={tier.id} tierData={localTier} type={tier.originalPrice==0?'free':'buy'} actionCallback={() => navigate(tier.href)}
                    // />
                )
              })}
          </div>
        </div>
    </section>
    );
};

export default SubscriptionPage;
