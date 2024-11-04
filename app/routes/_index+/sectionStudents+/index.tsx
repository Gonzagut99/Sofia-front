import type { LoaderFunctionArgs } from "@remix-run/node";
import { GraduationCap } from "lucide-react"
import { Link } from "@remix-run/react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table"

export const loader = async ({ request }: LoaderFunctionArgs) => {
    return null;
};

import React from 'react'

const index = () => {
    return (
        <>
            <section className="flex flex-row gap-4 justify-start ">

                <figure className="flex flex-col justify-start">
                    <GraduationCap className="w-10 h-10" />
                </figure>

                <div className="flex flex-col justify-start gap-2">
                    <h2 className="text-gray-800 font-semibold text-base md:text-2xl">Lista de estudiantes</h2>
                    <p className="text-gray-700 font-light text-sm md:text-base">Sección: BTE-01</p>
                    <p className="text-gray-700 font-light text-sm md:text-base">Curso: Proyecto Integrador</p>
                </div>

            </section>

            <section className="flex justify-center items-center">
                <figure className="w-1/4 md:hidden ">
                    <img
                        src="/assets/Students.png"
                        alt="imgTeacherDesk"
                        className="w-full" />
                </figure>
            </section>

            <h1 className="text-gray-800 text-left text-lg font-semibold md:text-xl md:text-center ">Curso: Proyecto Integrador</h1>

            <div className="m-auto w-full md:w-5/6">
                <Table className="text-xs md:text-sm rounded-lg bg-white">
                    <TableHeader className="">
                        <TableRow>
                            <TableHead>Codigo</TableHead>
                            <TableHead>Nombres y Apellidos</TableHead>
                            <TableHead>Promedio general</TableHead>
                            <TableHead >Detalle</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>001</TableCell>
                            <TableCell>Gutiérrez, Gonzalo</TableCell>
                            <TableCell>16.8</TableCell>
                            <TableCell className="text-decoration-line: underline text-blue-500"><Link to="/none">Ver detalle</Link></TableCell>
                        </TableRow>
                    </TableBody>
                    <TableBody>
                        <TableRow>
                            <TableCell>002</TableCell>
                            <TableCell>Arevalo, Dayane</TableCell>
                            <TableCell>16.4</TableCell>
                            <TableCell className="text-decoration-line: underline text-blue-500"><Link to="/none">Ver detalle</Link></TableCell>
                        </TableRow>
                    </TableBody>
                    <TableBody>
                        <TableRow>
                            <TableCell>003</TableCell>
                            <TableCell>Choque, Jean Pierre</TableCell>
                            <TableCell>13.9</TableCell>
                            <TableCell className="text-decoration-line: underline text-blue-500"><Link to="/none">Ver detalle</Link></TableCell>
                        </TableRow>
                    </TableBody>
                    <TableBody>
                        <TableRow>
                            <TableCell>004</TableCell>
                            <TableCell>Huamán, Melissa</TableCell>
                            <TableCell>18.7</TableCell>
                            <TableCell className="text-decoration-line: underline text-blue-500"><Link to="/none">Ver detalle</Link></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

        </>
    )
}

export default index
