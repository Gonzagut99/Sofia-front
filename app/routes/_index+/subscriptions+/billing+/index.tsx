import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function Billing() {
    return (
        <div className="mx-auto max-w-4xl p-6">
            {/* Encabezado */}
            <header className="mb-6">
                <h1 className="text-2xl font-bold">Facturación</h1>
                <p className="text-gray-600">Revisa tu historial de pagos y administra tu facturación.</p>
            </header>

            {/* Historial de pagos */}
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Historial de Pagos</CardTitle>
                    </CardHeader>
                <CardContent>
                <table className="w-full text-left border-collapse">
                    <thead>
                    <tr className="border-b">
                        <th className="py-2 px-4">Fecha</th>
                        <th className="py-2 px-4">Monto</th>
                        <th className="py-2 px-4">Método</th>
                        <th className="py-2 px-4">Estado</th>
                        <th className="py-2 px-4">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* Filas de ejemplo */}
                    <tr className="hover:bg-gray-100">
                        <td className="py-2 px-4">15/11/2024</td>
                        <td className="py-2 px-4">S/10.00</td>
                        <td className="py-2 px-4">Tarjeta Visa</td>
                        <td className="py-2 px-4 text-green-600">Completado</td>
                        <td className="py-2 px-4">
                        <Button variant="outline" size="sm">Descargar</Button>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="py-2 px-4">15/10/2024</td>
                        <td className="py-2 px-4">S/10.00</td>
                        <td className="py-2 px-4">PayPal</td>
                        <td className="py-2 px-4 text-red-600">Fallido</td>
                        <td className="py-2 px-4">
                        <Button variant="outline" size="sm">Reintentar</Button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </CardContent>
            </Card>

            {/* Próximo cobro y método de pago */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Próximo cobro */}
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Próximo Cobro</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center gap-4 p-4">
                        <p className="text-lg font-medium">S/ 29.99</p>
                        <p className="text-sm text-muted-foreground">Fecha: 05 de Diciembre, 2024</p>
                        <p className="text-xs text-muted-foreground text-center">
                        Este cobro corresponde al plan actual y se procesará automáticamente.
                        </p>
                        <Button variant="outline" size="sm">Cancelar Suscripción</Button>
                    </CardContent>
                </Card>
                
                {/* Método de pago */}
                <Card>
                <CardHeader>
                    <CardTitle>Método de Pago</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Tarjeta bancaria visual */}
                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-4 text-white shadow-md">
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Banco XYZ</span>
                        <span className="text-sm uppercase">Visa</span>
                    </div>
                    <div className="mt-4 text-2xl font-mono tracking-widest">
                        •••• •••• •••• 1234
                    </div>
                    <div className="mt-2 flex justify-between text-sm">
                        <div>
                        <p>Titular</p>
                        <p className="font-medium">Joche Mamani Choque</p>
                        </div>
                        <div>
                        <p>Expira</p>
                        <p className="font-medium">12/25</p>
                        </div>
                    </div>
                    </div>
                    {/* Botón para actualizar */}
                    <div className="mt-4">
                    <Button variant="outline" size="sm">Actualizar Método</Button>
                    </div>
                </CardContent>
                </Card>
            </div>
        </div>
    );
}
