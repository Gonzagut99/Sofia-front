import type { LoaderFunctionArgs } from "@remix-run/node";
import { Sparkles, FileText, BookOpenCheck } from "lucide-react"
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
                    <h2 className="text-gray-800 dark:text-zinc-100 font-semibold text-base md:text-2xl">Plan de sesión de aprendizaje</h2>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Sección: BTE-01</p>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Nivel: Universidad</p>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Fecha: 08/10/24</p>
                </div>

            </section>


            <section className="flex flex-col justify-center items-center  md:w-full">

                <div className="flex flex-col gap-5 w-full md:w-3/4 md:gap-10 ">

                    <div className="flex flex-col ">
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl">Título</h1>
                            <textarea className="text-[10px] md:text-lg w-full p-2 rounded-xl text-gray-400">Present perfect and irregular verbs</textarea>
                        </div>

                    </div>

                    <div className="flex flex-row justify-between gap-1 md:gap-4 ">
                        <div className="flex flex-col gap-2 w-full">
                            <h1 className="text-xs font-bold md:text-xl" >Warm-Up</h1>
                            <textarea className="text-[10px] md:text-lg w-full p-2 rounded-xl text-gray-400">Empezamos con una breve charla sobre las experiencias recientes de los alumnos, usando frases como "Have you ever...?" para introducir el uso del present perfect.</textarea>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl">Tiempo</h1>
                            <textarea className="text-[10px] md:text-lg p-2 rounded-xl text-gray-400">10 min</textarea>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between gap-1 md:gap-4 ">
                        <div className="flex flex-col gap-2 w-full">
                            <h1 className="text-xs font-bold md:text-xl" >Warm-Up</h1>
                            <textarea className="text-[10px] md:text-lg w-full p-2 rounded-xl text-gray-400">Empezamos con una breve charla sobre las experiencias recientes de los alumnos, usando frases como "Have you ever...?" para introducir el uso del present perfect.</textarea>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl">Tiempo</h1>
                            <textarea className="text-[10px] md:text-lg p-2 rounded-xl text-gray-400">10 min</textarea>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between gap-1 md:gap-4 ">
                        <div className="flex flex-col gap-2 w-full">
                            <h1 className="text-xs font-bold md:text-xl" >Introducción</h1>
                            <textarea className="text-[10px] md:text-lg w-full p-2 rounded-xl text-gray-400">Explicamos la estructura básica del present perfect: have/has + past participle.
                            Mostramos ejemplos: "I have visited Paris," "She has seen that movie."</textarea>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl">Tiempo</h1>
                            <textarea className="text-[10px] md:text-lg p-2 rounded-xl text-gray-400">15 min</textarea>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between gap-1 md:gap-4 ">
                        <div className="flex flex-col gap-2 w-full">
                            <h1 className="text-xs font-bold md:text-xl" >Cuerpo</h1>
                            <textarea className="text-[10px] md:text-lg w-full p-2 rounded-xl text-gray-400">Listamos algunos de los verbos irregulares más comunes y sus formas de past participle: "go - gone," "see - seen," "write - written."
                            Hacemos un juego de memoria para que los estudiantes relacionen los verbos con sus formas irregulares.</textarea>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl">Tiempo</h1>
                            <textarea className="text-[10px] md:text-lg p-2 rounded-xl text-gray-400">20 min</textarea>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between gap-1 md:gap-4 ">
                        <div className="flex flex-col gap-2 w-full">
                            <h1 className="text-xs font-bold md:text-xl" >Práctica Guiada</h1>
                            <textarea className="text-[10px] md:text-lg w-full p-2 rounded-xl text-gray-400">Los estudiantes trabajan en parejas para hacer preguntas y responder utilizando el present perfect, enfocándose en los verbos irregulares.
                            Ejemplo: "Have you ever written a poem?" "Yes, I have written a poem."</textarea>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl">Tiempo</h1>
                            <textarea className="text-[10px] md:text-lg p-2 rounded-xl text-gray-400">20 min</textarea>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between gap-1 md:gap-4 ">
                        <div className="flex flex-col gap-2 w-full">
                            <h1 className="text-xs font-bold md:text-xl" >Práctica Independiente</h1>
                            <textarea className="text-[10px] md:text-lg w-full p-2 rounded-xl text-gray-400">Los estudiantes completan una hoja de ejercicios que combina oraciones con espacios en blanco y preguntas sobre sus propias experiencias.</textarea>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xs font-bold md:text-xl">Tiempo</h1>
                            <textarea className="text-[10px] md:text-lg p-2 rounded-xl text-gray-400">15 min</textarea>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between gap-1 md:gap-4 ">
                        <div className="flex flex-col gap-2 w-full">
                            <h1 className="text-xs font-bold md:text-xl" >Retroalimentación y Revisión</h1>
                            <textarea className="text-[10px] md:text-lg w-full p-2 rounded-xl text-gray-400">Revisamos las respuestas de los ejercicios en grupo, resolviendo dudas y aclarando errores comunes.</textarea>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xs font-bold md:text-xl">Tiempo</h1>
                            <textarea className="text-[10px] md:text-lg p-2 rounded-xl text-gray-400">10 min</textarea>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between gap-1 md:gap-4 ">
                        <div className="flex flex-col gap-2 w-full">
                            <h1 className="text-xs font-bold md:text-xl" >Tarea</h1>
                            <textarea className="text-[10px] md:text-lg w-full p-2 rounded-xl text-gray-400">Asignamos una breve redacción donde los estudiantes deben usar al menos cinco verbos irregulares en present perfect para describir sus experiencias.</textarea>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xs font-bold md:text-xl">Tiempo</h1>
                            <textarea className="text-[10px] md:text-lg p-2 rounded-xl text-gray-400">15 min</textarea>
                        </div>
                    </div>

                </div>

            </section>

            <section className="flex justify-center items-center gap-2 md:gap-10">

                <div className="flex flex-col ">
                    <Link to="/none">
                        <Button className="text-black text-sm font-semibold md:text-base p-3 md:p-6 dark:bg-gray- dark:hover:bg-zinc-700 bg-gray-100 hover:bg-zinc-200">Historial de sesiones</Button>
                    </Link>
                </div>
                <div className="flex flex-col ">
                    <Link to="/none">
                        <Button className="text-white text-sm font-semibold md:text-base p-3 md:p-6 dark:bg-gray- dark:hover:bg-zinc-700 bg-zinc-600 hover:bg-zinc-700">Guardar</Button>
                    </Link>
                </div>
            </section>

        </>
    )
}

export default index
