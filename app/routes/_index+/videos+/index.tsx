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
                    <h2 className="text-gray-800 dark:text-zinc-100 font-semibold text-base md:text-2xl">Videos para la sesión</h2>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Sección: BTE-01</p>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Nivel: Universidad</p>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Fecha: 08/10/24</p>
                </div>

            </section>


            <section className="flex flex-col justify-center items-center gap-4 ">

                <iframe width="560" height="315" src="https://www.youtube.com/embed/MGlAf4M3de4?si=7wE_Avv71dtOujOo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-xl"></iframe>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/Z76T5ZsCJo4?si=ARaegXNGXtYB5vLM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-xl"></iframe>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/nvAo8yA8tPs?si=rZnjfUh8dWECwzMB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-xl"></iframe>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/6xDlj_wQ1O0?si=uZ1C4GFxQP_JMmdY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-xl"></iframe>
            </section>

            <section className="flex justify-center items-center gap-2 md:gap-10">

                <div className="flex flex-col ">
                    <Link to="/none">
                        <Button className="text-black text-sm font-semibold md:text-base p-3 md:p-6 dark:bg-gray- dark:hover:bg-zinc-700 bg-gray-100 hover:bg-zinc-200">Historial de sesiones</Button>
                    </Link>
                </div>
                <div className="flex flex-col ">
                    <Link to="/none">
                        <Button className="text-white text-sm font-semibold md:text-base p-3 md:p-6 dark:bg-gray- dark:hover:bg-zinc-700 bg-zinc-600 hover:bg-zinc-700">Exportar a Word</Button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default index
