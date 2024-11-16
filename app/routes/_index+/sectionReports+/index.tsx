import type { LoaderFunctionArgs } from "@remix-run/node";
import { ChartPie, ChartColumnBig } from "lucide-react"
import { Link } from "@remix-run/react";
import TypingAnimation from "~/components/ui/typing-animation";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button"

export const loader = async ({ request }: LoaderFunctionArgs) => {
    return null;
};

import React from 'react'

const index = () => {
    return (
        <>
            <section className="flex flex-row gap-4 justify-start md:justify-center">

                <figure className="flex flex-col justify-start">
                    <ChartPie className="w-10 h-10" />
                </figure>

                <div className="flex flex-col justify-start gap-2">
                    <h2 className="text-gray-800 dark:text-zinc-100 font-semibold text-base md:text-2xl">Reportes estadísticos generales</h2>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Sección: BTE-01</p>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Curso: Proyecto Integrador</p>
                </div>

            </section>


            <section className="flex flex-row justify-center items-center  md:gap-20">

                <figure className="w-3/5 md:w-1/4">
                    <img
                        src="/assets/StatisticsMan.png"
                        alt="imgTeacherDesk"
                        className="w-full" />
                </figure>

                <div className="flex flex-col content-center justify-center gap-4">
                    <div className="flex flex-row justify-center items-center text-center gap-4 md:gap-10">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xs md:text-lg">Nro. estudiantes</h2>
                            <h1 className="text-base font-bold md:text-4xl">29</h1>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xs md:text-lg">Promedio general</h2>
                            <h1 className="text-base font-bold md:text-4xl">16.4</h1>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center items-center text-center gap-4 md:gap-10">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xs md:text-lg">Nro. estudiantes</h2>
                            <h1 className="text-base font-bold md:text-4xl">29</h1>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xs md:text-lg">Promedio general</h2>
                            <h1 className="text-base font-bold md:text-4xl">16.4</h1>
                        </div>
                    </div>


                    <div className="flex flex-col justify-center items-center text-center">
                        <h2 className="text-xs md:text-lg">Predicción de % de aprobados</h2>
                        <TypingAnimation
                            className="text-xl md:text-4xl leading-10 font-black bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
                            duration={80}
                            text="95%"
                        ></TypingAnimation>
                        <p className="text-xs md:text-lg">*A la fecha 5/10</p>
                    </div>
                </div>

            </section>

            <section className="flex flex-col
            items-center justify-center gap-4  ">

                <Link to="/vakReport" className="w-full md:w-2/4">
                    <Card className="h-full w-full dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 cursor-pointer">
                        <CardHeader>
                            <CardTitle className="flex flex-row gap-4">
                                <figure className="flex flex-col justify-start">
                                    <ChartColumnBig />
                                </figure>
                                <div className="flex flex-col justify-start gap-2 ">
                                    <h2 className="text-gray-800 dark:text-zinc-100 text-sm font-bold md:text-lg">Clasificación de estudiantes VAK</h2>
                                    <p className="text-gray-700 dark:text-zinc-50 text-xs font-light md:text-base">Grafico Pie</p>
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
                                    <h2 className="text-gray-800 dark:text-zinc-100 text-sm font-bold md:text-lg ">Notas a través de los meses</h2>
                                    <p className="text-gray-700 dark:text-zinc-50 text-xs font-light md:text-base">Histograma</p>
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
                                    <h2 className="text-gray-800 dark:text-zinc-100 text-sm font-bold md:text-lg ">Distribución de notas</h2>
                                    <p className="text-gray-700 dark:text-zinc-50 text-xs font-light md:text-base">Diagrama de dispersión</p>
                                </div>
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </Link>

            </section>

            <section className="flex justify-center items-center">
                <Link to="/services" className="w-2/3 md:w-2/5 lg:w-2/6 flex justify-center items-center">
                    <Card className="h-full w-full  dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-gradient-primary-bl hover:bg-gradient-primary-br-hover cursor-pointer">
                        <CardHeader>
                            <CardTitle className="text-center ">
                                <h1 className="text-white text-sm font-bold md:text-lg ">Generar sugerencia de acciones de mejora</h1>
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </Link>
            </section>


            {/* <section className="flex justify-center items-center ">
                <Link to="/services">
                    <Button className="w-full p-9 text-white text-sm font-bold md:text-lg dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-gradient-primary-bl hover:bg-gradient-primary-br-hover">
                        Generar sugerencia de acciones de mejora
                    </Button>
                </Link>
            </section> */}
        </>
    )
}

export default index
