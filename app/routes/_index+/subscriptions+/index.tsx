import { Link } from "@remix-run/react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";


// Historial de pagos (solo ejemplo de cómo organizarlo)
const paymentHistory = [
    { date: "2024-01-01", amount: "S/. 19.99", status: "Pagado" },
    { date: "2024-02-01", amount: "S/. 19.99", status: "Pagado" },
    ];

// Datos del usuario (deberían venir de tu lógica de autenticación o estado global)
const user = {
    name: "Usuario",
    photoUrl: "data:image/jpeg;base64,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", // Ejemplo de foto de perfil
};

const SubscriptionPage = () => {
    return (
        <section className="max-w-4xl mx-auto p-8">
            
        {/* Contenedor con saludo y foto */}
        <div className="flex items-center mb-8 gap-4">
            <img
                src={user.photoUrl}
                alt={user.name}
                className="w-10 h-10 rounded-full border-2 border-white"
            />
            <p className=" text-lg font-semibold">¡Hola, {user.name}!</p>
        </div>

        {/* Información del plan */}
        <Card className="dark:bg-zinc-800 mb-6">
            <CardHeader>
            <CardTitle className="text-2xl font-semibold">Plan: Premium</CardTitle>
            </CardHeader>
            <CardContent>
            <div className="space-y-4">
                <p><strong>Precio:</strong> s/. 19.99/mes</p>
                <p><strong>Fecha de inicio:</strong> 01/01/2024</p>
                <p><strong>Fecha de expiración:</strong> 01/02/2024</p>
                <p><strong>Beneficios:</strong></p>
                <ul className="list-disc pl-5">
                <li>Acceso a contenido exclusivo</li>
                <li>Soporte prioritario</li>
                <li>Acceso anticipado a nuevas funcionalidades</li>
                </ul>
                <div className="flex justify-between gap-4 mt-6">
                <Button variant="outline" size="lg">Renovar</Button>
                <Button variant="destructive" size="lg">Cancelar</Button>
                </div>
            </div>
            </CardContent>
        </Card>

        

        {/* Historial de pagos */}
        <Card className="dark:bg-zinc-800 mb-6">
            <CardHeader>
            <CardTitle className="text-2xl font-semibold">Historial de Pagos</CardTitle>
            </CardHeader>
            <CardContent>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                <thead>
                    <tr>
                    <th className="px-4 py-2 text-left">Fecha</th>
                    <th className="px-4 py-2 text-left">Monto</th>
                    <th className="px-4 py-2 text-left">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {paymentHistory.map((payment, index) => (
                    <tr key={index} className={index % 2 === 0 ? "dark:bg-zinc-700 bg-zinc-50" : "dark:bg-zinc-600 bg-slate-100"}>
                        <td className="px-4 py-2">{payment.date}</td>
                        <td className="px-4 py-2">{payment.amount}</td>
                        <td className="px-4 py-2">{payment.status}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </CardContent>
        </Card>

        {/* Otras opciones */}
        <div className="flex flex-col items-center gap-4">
            <Link to="/subscriptions/billing">
                <Button variant="default" size="lg" className="mt-4">Detalles de Facturación</Button>
            </Link>
            <Link to="/subscriptions/subscription_plans">
                <Button variant="secondary" size="lg" className="mt-4">Ver Planes Disponibles</Button>
            </Link>
        </div>
        </section>
    );
};

export default SubscriptionPage;
