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
                    <h2 className="text-gray-800 dark:text-zinc-100 font-semibold text-base md:text-2xl">Cuestionario sugerido</h2>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Sección: BTE-01</p>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Nivel: Universidad</p>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Fecha: 08/10/24</p>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Modulo: 1</p>
                </div>

            </section>


            <section className="flex flex-col justify-center items-center md:w-full">

                <div className="flex flex-col gap-5 w-full md:w-3/4 md:gap-10">

                    {[
                        {
                            question: "Completa las oraciones usando la forma correcta del present perfect:",
                            options: ["a) (they / be) to Paris many times.", "b) (she / never / see) that movie before.", "c) (you / finish) your homework yet?"],
                        },
                        {
                            question: "Cambia las siguientes oraciones al present perfect:",
                            options: ["a) I wrote a poem.", "b) He sees this movie.", "c) We go to the beach every summer."],
                        },
                        {
                            question: "Escribe la forma de past participle de los siguientes verbos irregulares:",
                            options: ["a) Write", "b) Eat", "c) Go"],
                        },
                        {
                            question: "Haz preguntas y responde usando el present perfect y verbos irregulares:",
                            options: ["a) Have you ever (read) a book in one day?", "b) Have they (visit) the new museum in town?", "c) Has she (meet) any famous people?"],
                        },
                        {
                            question: "Redacta un párrafo de cinco oraciones usando el present perfect y al menos tres verbos irregulares para describir una experiencia personal.",
                            options: null, // Aquí indicamos que no hay opciones
                        },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <h1 className="text-xs font-bold md:text-xl">
                                {index + 1}. {item.question}
                            </h1>
                            <div className="text-[10px] md:text-lg">
                                {item.options ? (
                                    item.options.map((option, optIndex) => (
                                        <p key={optIndex} className="mb-2">{option}</p>
                                    ))
                                ) : (
                                    <textarea
                                        className="w-full border border-gray-300 rounded p-2 text-[10px] md:text-lg"
                                        placeholder="Escribe tu respuesta aquí..."
                                    ></textarea>
                                )}
                            </div>
                        </div>
                    ))}

                </div>

            </section>

            <section className="flex justify-center items-center gap-2 md:gap-10">

                <div className="flex flex-col ">
                    <Link to="/none">
                        <Button className="text-black text-sm font-semibold md:text-base p-3 md:p-6 dark:bg-gray- dark:hover:bg-zinc-700 bg-gray-100 hover:bg-zinc-200">Crear sala Quiz en Sofia</Button>
                    </Link>
                </div>
                <div className="flex flex-col ">
                    <Link to="/none">
                        <Button className="text-white text-sm font-semibold md:text-base p-3 md:p-6 dark:bg-gray- dark:hover:bg-zinc-700 bg-zinc-600 hover:bg-zinc-700">Exportar en Word</Button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default index
