import type { LoaderFunctionArgs } from "@remix-run/node";
import { Sparkles, FileText, BookOpenCheck, BookOpenText, TvMinimalPlay, BrainCircuit, Gamepad2 } from "lucide-react"
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import React from 'react'


export const loader = async ({ request }: LoaderFunctionArgs) => {
    return null;
};


const index = () => {
    return (
        <>
            <section className="flex flex-row gap-4 justify-start ">

                <figure className="flex flex-col justify-start">
                    <Sparkles className="w-10 h-10" />
                </figure>

                <div className="flex flex-col justify-start gap-2">
                    <h2 className="text-gray-800 dark:text-zinc-100 font-semibold text-base md:text-2xl">Lista de estudiantes</h2>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Sección: BTE-01</p>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Nivel: Universidad</p>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Fecha: 08/10/24</p>
                </div>

            </section>


            <section className="flex flex-row justify-center items-center gap-2 md:gap-20">

                <figure className="w-3/5 md:w-1/4 ">
                    <img
                        src="/assets/DocumentImg.png"
                        alt="imgTeacherDesk"
                        className="w-full" />
                </figure>


                <div className="flex flex-col justify-center items-center text-center gap-4 md:gap-10 w-3/5 md:w-1/4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-base font-bold md:text-xl">Present Perfect and Irregular Verbs</h1>
                        <h2 className="text-xs md:text-lg">1 hora académica</h2>
                        <h2 className="text-xs md:text-lg">Módulo 1</h2>
                        <h2 className="text-[10px] md:text-lg font-light">En esta sesión, exploraremos el present perfect y los verbos irregulares a través de ejemplos, juegos de memoria y ejercicios interactivos. Los estudiantes practican en parejas y completan una tarea para consolidar su aprendizaje.</h2>
                    </div>

                </div>

            </section>

            <section className="flex justify-center items-center gap-2 md:gap-20">
                <div className="flex flex-col ">
                    <Link to="/none">
                        <Button className="text-black text-sm font-semibold md:text-lg p-3 md:p-6 dark:bg-gray- dark:hover:bg-zinc-700 bg-gray-100 hover:bg-zinc-200">Historial de sesiones</Button>
                    </Link>
                </div>
                <div className="flex flex-col ">
                    <Link to="/none">
                        <Button className="text-white text-sm font-semibold md:text-lg p-3 md:p-6 dark:bg-gray- dark:hover:bg-zinc-700 bg-zinc-600 hover:bg-zinc-700">Modificar datos</Button>
                    </Link>
                </div>
            </section>

            <h1 className="text-gray-800 dark:text-zinc-100 text-center text-lg font-bold md:text-xl">Recursos generados</h1>

            <section className="flex flex-col
            items-center justify-center gap-4  ">

                <Link to="/none" className="w-full md:w-2/4">
                    <Card className="h-full w-full dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 cursor-pointer">
                        <CardHeader>
                            <CardTitle className="flex flex-row gap-4">
                                <figure className="flex flex-col justify-start">
                                    <FileText className="text-customPrimary-600" />
                                </figure>
                                <div className="flex flex-col justify-start gap-2 ">
                                    <h2 className="text-gray-800 dark:text-zinc-100 text-sm font-bold md:text-xl">Gestión y control de evaluaciones y asistencia por sesión de aprendizaje</h2>
                                    <p className="text-gray-700 dark:text-zinc-50 text-xs font-light md:text-lg">Formulario de calificación de tareas, actividades, exámenes, marcado de asistencia y participación.</p>
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
                                    <BookOpenCheck />
                                </figure>
                                <div className="flex flex-col justify-start gap-2 ">
                                    <h2 className="text-gray-800 dark:text-zinc-100 text-sm font-bold md:text-xl ">Cuestionario</h2>
                                    <p className="text-gray-700 dark:text-zinc-50 text-xs font-light md:text-lg">Tomamos la informacion mas relevante respecto al tema</p>
                                </div>
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </Link>

                <Link to="/sectionReports" className="w-full md:w-2/4">
                    <Card className="h-full w-full  dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 cursor-pointer">
                        <CardHeader>
                            <CardTitle className="flex flex-row gap-4">
                                <figure className="flex flex-col justify-start">
                                    <BookOpenCheck />
                                </figure>
                                <div className="flex flex-col justify-start gap-2 ">
                                    <h2 className="text-gray-800 dark:text-zinc-100 text-sm font-bold md:text-xl ">Ejercicios</h2>
                                    <p className="text-gray-700 dark:text-zinc-50 text-xs font-light md:text-lg">Tomamos en cuenta el estilo de aprendizaje de tus estudiantes</p>
                                </div>
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </Link>

            </section>

            <section className="flex flex-col
            items-center justify-center  ">
                <div className=" flex flex-col gap-4 ">
                    <div className="flex flex-row gap-2 justify-center">
                        <Link to="/none" className="w-2/4 md:w-2/4">
                            <Card className="h-full w-full  dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 cursor-pointer ">
                                <CardHeader className="p-3">
                                    <CardTitle className="flex flex-row gap-2 md:gap-4">
                                        <figure className="flex flex-col justify-start">
                                            <BookOpenText />
                                        </figure>
                                        <div className="flex flex-col justify-start gap-2">
                                            <h2 className="text-gray-800 dark:text-zinc-100 text-sm font-bold md:text-xl ">Lecturas recomendadas</h2>
                                            <p className="text-gray-700 dark:text-zinc-50 text-xs font-light md:text-lg">Encontramos  lecturas que a tus estudiantes les pueden ser útiles</p>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                            </Card>
                        </Link>

                        <Link to="/none" className="w-2/4 md:w-2/4">
                            <Card className="h-full w-full  dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 cursor-pointer ">
                                <CardHeader className="p-3">
                                    <CardTitle className="flex flex-row gap-2 md:gap-4">
                                        <figure className="flex flex-col justify-start">
                                            <TvMinimalPlay />
                                        </figure>
                                        <div className="flex flex-col justify-start gap-2">
                                            <h2 className="text-gray-800 dark:text-zinc-100 text-sm font-bold md:text-xl ">Videos</h2>
                                            <p className="text-gray-700 dark:text-zinc-50 text-xs font-light md:text-lg">Enlaces a videos relacionados al tema y tus necesidades especificas</p>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                            </Card>
                        </Link>

                    </div>

                    <div className="flex flex-row gap-2 justify-center ">
                        <Link to="/none" className="w-2/4 md:w-2/4">
                            <Card className="h-full w-full  dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 cursor-pointer ">
                                <CardHeader className="p-3">
                                    <CardTitle className="flex flex-row gap-2 md:gap-4">
                                        <figure className="flex flex-col justify-start">
                                            <BrainCircuit />
                                        </figure>
                                        <div className="flex flex-col justify-start gap-2">
                                            <h2 className="text-gray-800 dark:text-zinc-100 text-sm font-bold md:text-xl ">Mapas Mentales</h2>
                                            <p className="text-gray-700 dark:text-zinc-50 text-xs font-light md:text-lg">Para conectar los conocimientos de manera significativa</p>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                            </Card>
                        </Link>

                        <Link to="/none" className="w-2/4 md:w-2/4">
                            <Card className="h-full w-full  dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 cursor-pointer ">
                                <CardHeader className="p-3">
                                    <CardTitle className="flex flex-row gap-2 md:gap-4">
                                        <figure className="flex flex-col justify-start">
                                            <Gamepad2 />
                                        </figure>
                                        <div className="flex flex-col justify-start gap-2">
                                            <h2 className="text-gray-800 dark:text-zinc-100 text-sm font-bold md:text-xl ">Juegos</h2>
                                            <p className="text-gray-700 dark:text-zinc-50 text-xs font-light md:text-lg">Enlaces a videos relacionados al tema y tus necesidades especificas</p>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                            </Card>
                        </Link>

                    </div>

                </div>
            </section>

            <h1 className="text-gray-800 dark:text-zinc-100 text-center text-lg font-bold md:text-xl">Objetivos</h1>

            <section className="flex flex-col justify-center items-center gap-4 md:gap-4 md:w-full">
                <div className="flex flex-col ">
                    <Link to="/none" className="flex justify-center">
                        <Button className="text-white text-sm font-semibold md:text-base p-3 md:p-6 dark:bg-gray- dark:hover:bg-zinc-700 bg-zinc-600 hover:bg-zinc-700 ">Objetivos para mejorar desempeño individual</Button>
                    </Link>
                </div>
                <div className="flex flex-col">
                    <Link to="/none" className="flex justify-center">
                        <Button className="text-black text-sm font-semibold md:text-base p-3 md:p-6 dark:bg-gray- dark:hover:bg-zinc-700 bg-gray-100 hover:bg-zinc-200">Ir a gestión de evaluaciones y asistencia</Button>
                    </Link>
                </div>


            </section>
        </>
    )
}

export default index
