import type { LoaderFunctionArgs } from "@remix-run/node";
import { GraduationCap } from "lucide-react"
import { Link } from "@remix-run/react";
import TypingAnimation from "~/components/ui/typing-animation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return null;
};

import React from 'react'

function index() {
  return (
    <>
      <section className="flex flex-col
      justify-center md:flex-row-reverse md:items-center gap-4 lg:gap-10">

        <div className="flex flex-col gap-3 text-center w-full md:w-1/3">
          <TypingAnimation
            className="text-4xl leading-10 font-black bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
            duration={80}
            text="Mis secciones"
          ></TypingAnimation>
          <h2 className="text-xl"> Selecciona una sección para ver información de estudiantes, <span className="font-light">promedio general y más.</span> </h2>
        </div>
        <figure>
          <img
            src="/assets/TeacherStatistics.png"
            alt="imgTeacherStatistics"
            className="w-full md:w-3/4 mx-auto" />
        </figure>
      </section>

      <section className="flex flex-col justify-center items-center gap-4">

        <Link to="/sectionView" className="w-full md:w-2/4">
          <Card className="h-full w-full dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 cursor-pointer">
            <CardHeader>
              <CardTitle className="flex flex-row gap-4">
                <figure className="flex flex-col justify-start">
                  <GraduationCap />
                </figure>
                <div className="flex flex-col justify-start gap-2 ">
                  <h2 className="text-gray-800 font-semibold text-base md:text-xl">Sección: BTE-01</h2>
                  <p className="text-gray-700 font-light text-base md:text-lg">Curso: Proyecto Integrador</p>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>
        </Link>

        <Link to="/none" className="w-full md:w-2/4">
          <Card className="h-full w-full dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 cursor-pointer">
            <CardHeader>
              <CardTitle className="flex flex-row gap-4">
                <figure className="flex flex-col justify-start">
                  <GraduationCap />
                </figure>
                <div className="flex flex-col justify-start gap-2 ">
                  <h2 className="text-gray-800 font-semibold text-base md:text-xl">Sección: KBJ-02</h2>
                  <p className="text-gray-700 font-light text-base md:text-lg">Curso: Base de datos</p>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>
        </Link>

        <Link to="none" className="w-full md:w-2/4">
          <Card className="h-full w-full dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 cursor-pointer">
            <CardHeader>
              <CardTitle className="flex flex-row gap-4">
                <figure className="flex flex-col justify-start">
                  <GraduationCap />
                </figure>
                <div className="flex flex-col justify-start gap-2 ">
                  <h2 className="text-gray-800 font-semibold text-base md:text-xl">Sección: JSA-03</h2>
                  <p className="text-gray-700 font-light text-base md:text-lg">Curso: Inteligencia Artificial</p>
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
