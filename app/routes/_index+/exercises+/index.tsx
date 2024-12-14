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
                            question: "Ejercicio 1: Completa las Oraciones Rellena los espacios en blanco con la forma correcta del present perfect del verbo entre paréntesis:",
                            options: [
                                "1. She ________ (read) that book several times.",
                                "2. They ________ (travel) to Japan.",
                                "3. I ________ never ________ (see) such a beautiful sunset.",
                                "4. We ________ (write) three essays this semester.",
                                "5. He ________ (break) his leg."
                            ],
                        },
                        {
                            question: "Ejercicio 2: Corrige los Errores Encuentra y corrige los errores en las siguientes oraciones:",
                            options: [
                                "1. I has eat breakfast already.",
                                "2. They have see that movie twice.",
                                "3. She has went to the gym today.",
                                "4. We has lived here for five years.",
                                "5. He have worked in that company since 2010."
                            ],
                        },
                        {
                            question: "Ejercicio 3: Forma de Past Participle Escribe la forma de past participle de estos verbos irregulares:",
                            options: ["1. Begin", "2. Drink", "3. Drive", "4. Sing", "5. Take"],
                        },
                        {
                            question: "Ejercicio 4: Transformar Oraciones Transforma las siguientes oraciones en preguntas usando el present perfect:",
                            options: [
                                "1. She has finished her homework.",
                                "2. They have visited the museum.",
                                "3. He has bought a new car.",
                                "4. We have learned a lot this year.",
                                "5. I have traveled to Europe."
                            ],
                        },
                        {
                            question: "Ejercicio 5: Redacción Escribe un párrafo de al menos cinco oraciones usando el present perfect y al menos tres verbos irregulares para describir tus experiencias recientes.",
                            options: null, // Aquí indicamos que no hay opciones
                        },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <h1 className="text-xs font-bold md:text-xl">
                                {item.question}
                            </h1>
                            <div className="text-[10px] md:text-lg">
                                {item.options ? (
                                    item.options.map((option, optIndex) => {
                                        // Reemplazar los guiones bajos con un input
                                        const inputField = option.replace(/________/g, `<input type="text" className="border border-gray-300 rounded p-1 text-[10px] md:text-lg" " />`);
                                        return (
                                            <p key={optIndex} className="mb-2" dangerouslySetInnerHTML={{ __html: inputField }} />
                                        );
                                    })
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
