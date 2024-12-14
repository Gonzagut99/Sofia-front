import type { LoaderFunctionArgs } from "@remix-run/node";
import { GraduationCap } from "lucide-react";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import TypingAnimation from "~/components/ui/typing-animation";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "~/components/ui/chart"
import React from 'react'

const chartData = [
    { category: "Tarea 1", calificaciones: 85, calificacionPonderada: 8.5 },
    { category: "Examen Final", calificaciones: 75, calificacionPonderada: 22.5 },
    { category: "Tarea 2", calificaciones: 90, calificacionPonderada: 9 },
    { category: "Proyecto Final", calificaciones: 88, calificacionPonderada: 17.6 },
    { category: "Examen Final 2", calificaciones: 82, calificacionPonderada: 0 },
]

const chartConfig = {
    calificaciones: {
        label: "Calificaciones",
        color: "#2563eb", // Color para calificaciones
    },
    calificacionPonderada: {
        label: "Calificación Ponderada",
        color: "#60a5fa", // Color para calificación ponderada
    },
} satisfies ChartConfig

export const loader = async ({ request }: LoaderFunctionArgs) => {
    return null;
};


const index = () => {
    return (
        <>
            <section className="flex flex-row gap-4 justify-start ">

                <figure className="flex flex-col justify-start">
                    <GraduationCap className="w-10 h-10" />
                </figure>

                <div className="flex flex-col justify-start gap-2">
                    <h2 className="text-gray-800 dark:text-zinc-100 font-semibold text-base md:text-2xl">Detalle de estudiante</h2>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Sección: BTE-01</p>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Curso: Proyecto Integrador</p>
                </div>

            </section>

            <section className="flex flex-row justify-center items-center md:gap-20">

                <figure className="w-3/5 md:w-1/4 ">
                    <img
                        src="/assets/StudentDetails.png"
                        alt="imgTeacherDesk"
                        className="w-full" />
                </figure>


                <div className="flex flex-col justify-center items-center text-center gap-4 md:gap-10">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-base font-bold md:text-xl">Gonzalo Gutiérrez</h1>
                        <h2 className="text-xs md:text-lg">Código: 012</h2>
                        <h2 className="text-xs md:text-lg">74060336@certus.edu.pe</h2>
                        <h2 className="text-xs md:text-lg">Kinesthetic</h2>
                    </div>

                    <div className="flex flex-col ">
                        <Link to="/none">
                            <Button className="text-white text-sm font-semibold md:text-base p-3 md:p-6 dark:bg-gray- dark:hover:bg-zinc-700 bg-zinc-600 hover:bg-zinc-700">Modificar datos</Button>
                        </Link>
                    </div>
                </div>

            </section>



            <section className="flex flex-col justify-center items-center  md:gap-20">

                <div className="flex flex-col content-center justify-center gap-4 md:gap-20">

                    <div className="flex flex-row justify-center items-center text-center gap-4 md:gap-40">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-sm md:text-2xl">Promedio general</h2>
                            <h1 className="text-lg font-bold md:text-4xl">16.4</h1>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-sm md:text-2xl">Promedio de participación</h2>
                            <h1 className="text-lg font-bold md:text-4xl">7.53</h1>
                        </div>
                    </div>


                    <div className="flex flex-col justify-center items-center text-center md:gap-4">
                        <h2 className="text-sm md:text-2xl">Predicción de promedio ponderado final</h2>
                        <TypingAnimation
                            className="text-xl md:text-4xl leading-10 font-black bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
                            duration={80}
                            text="15.4"
                        ></TypingAnimation>
                    </div>
                </div>

            </section>

            <div className="flex flex-col justify-center items-center ">
                <Link to="/none">
                    <Button className="text-gray-800 text-sm font-semibold md:text-xl m-4 p-3 md:p-6 dark:bg-zinc-700 dark:hover:bg-zinc-600 bg-white hover:bg-gray-100">Modificar Calificaciones</Button>
                </Link>
            </div>

            <h1 className="text-gray-800 dark:text-zinc-100 text-center text-lg font-bold md:text-2xl ">Progreso estadístico de calificaciones</h1>

            <div className=" m-auto md:w-/6">
                <ChartContainer
                    config={chartConfig}
                    className="min-h-[200px] w-full sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] xl:min-h-[300px]"
                >
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        width={undefined} // Responsive width
                        height={undefined} // Responsive height
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value} // Muestra la categoría completa
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="calificaciones" fill="var(--color-calificaciones)" radius={4} />
                        <Bar dataKey="calificacionPonderada" fill="var(--color-calificacionPonderada)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </div>

            <h1 className="text-gray-800 dark:text-zinc-100 text-center text-lg font-bold md:text-2xl ">Objetivos</h1>

            <div className="flex flex-col justify-center items-center">
                <Link to="/none">
                    <Button className="text-white text-sm font-semibold md:text-xl p-3 md:p-6 dark:bg-gray- dark:hover:bg-zinc-700 bg-zinc-600 hover:bg-zinc-700">Objetivos para mejorar desempeño individual</Button>
                </Link>
            </div>
            
            <div className="flex flex-col justify-center items-center ">
                <Link to="/none">
                    <Button className="text-gray-800 text-sm font-semibold md:text-xl p-3 md:p-6 dark:bg-zinc-700 dark:hover:bg-zinc-600 bg-white hover:bg-gray-100">Ir a gestión de evaluaciones y asistencia</Button>
                </Link>
            </div>
        </>
    )
}

export default index
