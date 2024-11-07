import type { LoaderFunctionArgs } from "@remix-run/node";
import { GraduationCap, ChartColumnBig, FileUser, FileStack } from "lucide-react"
import { Link } from "@remix-run/react";
import {
    Card,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    return null;
};
const index = () => {
    return (
        <>
            <section className="flex flex-row gap-4 justify-start md:justify-center">

                <figure className="flex flex-col justify-start">
                    <GraduationCap className="w-10 h-10" />
                </figure>

                <div className="flex flex-col justify-start gap-2">
                    <h2 className="text-gray-800 font-semibold text-base md:text-2xl">Sección: BTE-01</h2>
                    <p className="text-gray-700 font-light text-sm md:text-base">Curso: Proyecto Integrador</p>
                </div>

            </section>

            <section className="flex flex-row justify-center items-center md:gap-20">

                <figure className="w-3/5 md:w-1/4 ">
                    <img
                        src="/assets/TeacherDesk.png"
                        alt="imgTeacherDesk"
                        className="w-full" />
                </figure>


                <div className="flex flex-col justify-center items-center text-center gap-4 md:gap-10">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xs md:text-lg">Nro. estudiantes</h2>
                        <h1 className="text-2xl font-bold md:text-4xl">29</h1>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-xs md:text-lg">Promedio general</h2>
                        <h1 className="text-2xl font-bold md:text-4xl">16.4</h1>
                    </div>
                </div>

            </section>

            <section className="flex flex-col
            items-center justify-center gap-4  ">

                <Link to="/none" className="w-full md:w-2/4">
                    <Card className="h-full w-full dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 cursor-pointer">
                        <CardHeader>
                            <CardTitle className="flex flex-row gap-4">
                                <figure className="flex flex-col justify-start">
                                    <FileStack />
                                </figure>
                                <div className="flex flex-col justify-start gap-2 ">
                                    <h2 className="text-gray-800 text-sm font-bold md:text-lg">Gestión y control de evaluaciones y asistencia por sesión de aprendizaje</h2>
                                    <p className="text-gray-700 text-xs font-light md:text-base">Formulario de calificación de tareas, actividades, exámenes, marcado de asistencia y participación.</p>
                                </div>
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </Link>

                <Link to="/none" className="w-full md:w-2/4">
                    <Card className="h-full w-full  dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 cursor-pointer">
                        <CardHeader>
                            <CardTitle className="flex flex-row gap-4">
                                <figure className="flex flex-col justify-start">
                                    <FileUser />
                                </figure>
                                <div className="flex flex-col justify-start gap-2 ">
                                    <h2 className="text-gray-800 text-sm font-bold md:text-lg ">Lista de Estudiantes</h2>
                                    <p className="text-gray-700 text-xs font-light md:text-base">Historial de aprendizaje y predicción de desempeño</p>
                                </div>
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </Link>

                <Link to="/none" className="w-full md:w-2/4">
                    <Card className="h-full w-full  dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 cursor-pointer">
                        <CardHeader>
                            <CardTitle className="flex flex-row gap-4">
                                <figure className="flex flex-col justify-start">
                                    <ChartColumnBig />
                                </figure>
                                <div className="flex flex-col justify-start gap-2 ">
                                    <h2 className="text-gray-800 text-sm font-bold md:text-lg ">Reportes estadísticos de la sección</h2>
                                    <p className="text-gray-700 text-xs font-light md:text-base">Clasificación VAK, promedios, notas y sugerencia de mejora</p>
                                </div>
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </Link>

            </section>

            <h1 className="text-gray-800 text-center text-lg font-bold md:text-xl ">¿Nuevo Mes?</h1>

            <section className="flex flex-col
            items-center justify-center gap-4">

            <Link to="/none" className="w-full md:w-2/4">
                    <Card className="h-full w-full dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 cursor-pointer">
                        <CardHeader>
                            <CardTitle className="flex flex-row gap-4">
                                <figure className="flex flex-col justify-start">
                                    <FileStack />
                                </figure>
                                <div className="flex flex-col justify-start gap-2 ">
                                    <h2 className="text-gray-800 text-sm font-bold md:text-lg ">Gestión y control de evaluaciones y asistencia por sesión de aprendizaje</h2>
                                    <p className="text-gray-700 text-xs font-light md:text-base">Formulario de calificación de tareas, actividades, exámenes, marcado de asistencia y participación.</p>
                                </div>
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </Link>

            </section>

        </>
    )
}

export default index

