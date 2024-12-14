import type { LoaderFunctionArgs } from "@remix-run/node";
import { Sparkles, FileText, BookOpenCheck } from "lucide-react"
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
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
                    <h2 className="text-gray-800 dark:text-zinc-100 font-semibold text-base md:text-2xl">Plan de sesión de aprendizaje</h2>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Sección: BTE-01</p>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Nivel: Universidad</p>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Fecha: 08/10/24</p>
                </div>

            </section>


            <section className="flex justify-center items-center gap-2 md:gap-20">

                <div className="flex flex-col ">
                    <Link to="/none">
                        <Button className="text-black text-sm font-semibold md:text-base p-3 md:p-6 dark:bg-gray- dark:hover:bg-zinc-700 bg-gray-100 hover:bg-zinc-200">Marcar asistencia y notas</Button>
                    </Link>
                </div>
                <div className="flex flex-col ">
                    <Link to="/none">
                        <Button className="text-white text-sm font-semibold md:text-base p-3 md:p-6 dark:bg-gray- dark:hover:bg-zinc-700 bg-zinc-600 hover:bg-zinc-700">Modificar datos</Button>
                    </Link>
                </div>
            </section>

            <section className="flex flex-col justify-center items-center  md:w-full">

                <div className="flex flex-col gap-5 w-full md:w-3/4 md:gap-10 ">

                    <div className="flex flex-col ">
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl">Título</h1>
                            <p className="text-[10px] text-gray-400 md:text-lg">Present perfect and irregular verbs</p>
                        </div>

                    </div>

                    <div className="flex flex-row justify-between gap-1 md:gap-4 ">
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl" >Warm-Up</h1>
                            <p className="text-[10px] md:text-lg">Empezamos con una breve charla sobre las experiencias recientes de los alumnos, usando frases como "Have you ever...?" para introducir el uso del present perfect.</p>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl">Tiempo</h1>
                            <p className="text-[10px] md:text-lg">10 min</p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between gap-1 md:gap-4 ">
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl" >Introducción</h1>
                            <p className="text-[10px] md:text-lg">Explicamos la estructura básica del present perfect: have/has + past participle.
                                Mostramos ejemplos: "I have visited Paris," "She has seen that movie."</p>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl">Tiempo</h1>
                            <p className="text-[10px] md:text-lg">15 min</p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between gap-1 md:gap-4 ">
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl" >Cuerpo</h1>
                            <p className="text-[10px] md:text-lg">Listamos algunos de los verbos irregulares más comunes y sus formas de past participle: "go - gone," "see - seen," "write - written."
                                Hacemos un juego de memoria para que los estudiantes relacionen los verbos con sus formas irregulares.</p>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl">Tiempo</h1>
                            <p className="text-[10px] md:text-lg">20 min</p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between gap-1 md:gap-4 ">
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl" >Práctica Guiada</h1>
                            <p className="text-[10px] md:text-lg">Los estudiantes trabajan en parejas para hacer preguntas y responder utilizando el present perfect, enfocándose en los verbos irregulares.
                                Ejemplo: "Have you ever written a poem?" "Yes, I have written a poem."</p>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl">Tiempo</h1>
                            <p className="text-[10px] md:text-lg">20 min</p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between gap-1 md:gap-4 ">
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl" >Práctica Independientes</h1>
                            <p className="text-[10px] md:text-lg">Los estudiantes completan una hoja de ejercicios que combina oraciones con espacios en blanco y preguntas sobre sus propias experiencias.</p>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl">Tiempo</h1>
                            <p className="text-[10px] md:text-lg">15 min</p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between gap-1 md:gap-4 ">
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl" >Retroalimentación y Revisión</h1>
                            <p className="text-[10px] md:text-lg">Revisamos las respuestas de los ejercicios en grupo, resolviendo dudas y aclarando errores comunes.</p>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl">Tiempo</h1>
                            <p className="text-[10px] md:text-lg">10 min</p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between gap-1 md:gap-4 ">
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl" >Tarea</h1>
                            <p className="text-[10px] md:text-lg">Asignamos una breve redacción donde los estudiantes deben usar al menos cinco verbos irregulares en present perfect para describir sus experiencias.</p>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl">Tiempo</h1>
                            <p className="text-[10px] md:text-lg">15 min</p>
                        </div>
                    </div>

                </div>

            </section>

            <section className="flex flex-col justify-center items-center gap-4 md:gap-4 md:w-full">
                <div className="flex flex-col">
                    <Link to="/none" className="flex justify-center">
                        <Button className="text-black text-sm font-semibold md:text-lg p-3 md:p-6 dark:bg-gray- dark:hover:bg-zinc-700 bg-gray-100 hover:bg-zinc-200">Historial de sesiones</Button>
                    </Link>
                </div>
                <div className="flex flex-col ">
                    <Link to="/none" className="flex justify-center">
                        <Button className="text-white text-sm font-semibold md:text-lg p-3 md:p-6 dark:bg-gray- dark:hover:bg-zinc-700 bg-zinc-600 hover:bg-zinc-700 ">Historial de sesiones</Button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default index
