import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

const SubscriptionPage = () => {
return (
    <section className="flex flex-col items-center gap-6 p-6">
        {/* Encabezado */}
        <h1 className="text-2xl font-bold text-white">Planes de Suscripción</h1>
        <p className="text-gray-600">Elige el plan que mejor se adapte a tus necesidades.</p>

        {/* Contenedor de planes */}
        <div className="flex flex-wrap justify-center gap-6 ">
        {/* Plan Básico */}
        <Card className="w-72 flex flex-col hover:bg-gray-800 hover:scale-105 hover:opacity-90 transition-all duration-300">
            <CardHeader>
                <CardTitle>Plan Básico</CardTitle>
                <CardDescription>S/10 al mes</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow ">
                <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Acceso limitado al contenido</li>
                <li>1 usuario</li>
                <li>Soporte básico</li>
                </ul>
            </CardContent>
            <CardFooter className="flex justify-center gap-4">
                {/* Comprar */}
                <Button variant="default" size="sm" className="px-2 py-1">Comprar</Button>

                {/* Actualizar */}
                <Button variant="outlinePrimary" size="sm" className="px-2 py-1">Actualizar</Button>

                {/* Cancelar */}
                <Button variant="destructive" size="sm" className="px-2 py-1">Cancelar</Button>
            </CardFooter>
        </Card>

        {/* Plan Premium */}
        <Card className="w-72 flex flex-col hover:bg-gray-800 hover:scale-105 hover:opacity-90 transition-all duration-300">
            <CardHeader>
                <CardTitle>Plan Premium</CardTitle>
                <CardDescription>S/30 al mes</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Acceso ilimitado</li>
                <li>Hasta 5 usuarios</li>
                <li>Soporte prioritario</li>
                </ul>
            </CardContent>
            <CardFooter className="flex justify-center gap-4">
                {/* Comprar */}
                <Button variant="default" size="sm" className="px-2 py-1">Comprar</Button>

                {/* Actualizar */}
                <Button variant="outlinePrimary" size="sm" className="px-2 py-1">Actualizar</Button>

                {/* Cancelar */}
                <Button variant="destructive" size="sm" className="px-2 py-1">Cancelar</Button>
            </CardFooter>
        </Card>

        {/* Plan Empresarial */}
        <Card className="w-72 flex flex-col hover:bg-gray-800 hover:scale-105 hover:opacity-90 transition-all duration-300">
            <CardHeader>
                <CardTitle>Plan Empresarial</CardTitle>
                <CardDescription>S/100 al mes</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Acceso ilimitado con funciones avanzadas</li>
                <li>Hasta 20 usuarios</li>
                <li>Soporte dedicado 24/7</li>
                </ul>
            </CardContent>
            <CardFooter className="flex justify-center gap-4">
                {/* Comprar */}
                <Button variant="default" size="sm" className="px-2 py-1">Comprar</Button>

                {/* Actualizar */}
                <Button variant="outlinePrimary" size="sm" className="px-2 py-1">Actualizar</Button>

                {/* Cancelar */}
                <Button variant="destructive" size="sm" className="px-2 py-1">Cancelar</Button>
            </CardFooter>
        </Card>
        </div>
    </section>
    );
};

export default SubscriptionPage;
