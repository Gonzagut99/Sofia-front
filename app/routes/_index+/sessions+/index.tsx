import type { LoaderFunctionArgs } from "@remix-run/node";
import { CalendarCheck } from "lucide-react"
import { Button } from "~/components/ui/button";
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


const index = () => {
    return (
        <>
            <section className="flex flex-col
                  justify-center md:flex-row-reverse md:items-center gap-4 lg:gap-10">

                <div className="flex flex-col gap-3 text-center w-full md:w-1/3">
                    <TypingAnimation
                        className="text-4xl leading-10 font-black bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
                        duration={80}
                        text="Mis sesiones de aprendizaje"
                    ></TypingAnimation>
                </div>
                <figure>
                    <img
                        src="/assets/TeacherStatistics.png"
                        alt="imgTeacherStatistics"
                        className="w-full md:w-3/4 mx-auto" />
                </figure>
            </section>



            <h1 className="text-gray-800 dark:text-zinc-100 text-center text-lg font-bold md:text-xl">Mis sesiones de aprendizaje</h1>


            <section className="flex justify-center items-center ">

                <div className="flex flex-col justify-center gap-5 w-full md:w-2/4 items-center">

                    <div className="flex flex-col gap-4 w-full md:w-3/4">
                        <label htmlFor="exampleSelect" className="text-xs font-bold md:text-xl">
                            Selecciona una opción:
                        </label>
                        <select
                            id="exampleSelect"
                            className="w-full md:w-full border border-gray-300 rounded-lg p-2 text-[10px] md:text-lg"
                        >
                            <option value="opcion1">Inglés B1 - BTE-01</option>
                            <option value="opcion2">Inglés B1 - BTE-02</option>
                            <option value="opcion3">Inglés B1 - BTE-03</option>
                            <option value="opcion4">Inglés B1 - BTE-04</option>
                        </select>
                    </div>

                </div>

            </section>

            <section className="flex flex-col
            items-center justify-center gap-2 ">
                <h1 className="text-gray-800 dark:text-zinc-100 text-left text-lg font-bold md:text-xl t">Módulo 1: Everyday Communication </h1>

                <div className=" flex flex-col gap-4 ">
                    <div className="flex flex-row gap-2 justify-center">
                        <Link to="/none" className="w-2/4 md:w-2/4">
                            <Card className="h-full w-full  dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 cursor-pointer ">
                                <CardHeader className="p-3">
                                    <CardTitle className="flex flex-row gap-2 md:gap-4">
                                        <figure className="flex flex-col justify-start">
                                            <CalendarCheck />
                                        </figure>
                                        <div className="flex flex-col justify-start gap-2">
                                            <h2 className="text-gray-800 dark:text-zinc-100 text-xs font-bold md:text-xl ">06 de agosto</h2>
                                            <p className="text-gray-700 dark:text-zinc-50 text-[10px] font-light md:text-lg">Personal Introductions</p>
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
                                            <CalendarCheck />
                                        </figure>
                                        <div className="flex flex-col justify-start gap-2">
                                            <h2 className="text-gray-800 dark:text-zinc-100 text-xs font-bold md:text-xl ">13 de agosto</h2>
                                            <p className="text-gray-700 dark:text-zinc-50 text-[10px] font-light md:text-lg">Workplace Interactions</p>
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
                                            <CalendarCheck />
                                        </figure>
                                        <div className="flex flex-col justify-start gap-2">
                                            <h2 className="text-gray-800 dark:text-zinc-100 text-xs font-bold md:text-xl ">20 de agosto</h2>
                                            <p className="text-gray-700 dark:text-zinc-50 text-[10px] font-light md:text-lg">Descriptions and Opinions</p>
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
                                            <CalendarCheck />
                                        </figure>
                                        <div className="flex flex-col justify-start gap-2">
                                            <h2 className="text-gray-800 dark:text-zinc-100 text-xs font-bold md:text-xl ">27 de agosto</h2>
                                            <p className="text-gray-700 dark:text-zinc-50 text-[10px] font-light md:text-lg">Asking and Answering Questions</p>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                            </Card>
                        </Link>

                    </div>

                </div>
            </section>

            <section className="flex justify-center items-center gap-2 md:gap-10">
                <div className="flex flex-col ">
                    <Link to="/none">
                        <Button className="text-white text-sm font-semibold md:text-lg p-3 md:p-6 dark:bg-gray-600 dark:hover:bg-zinc-700 ">Generar Evaluación</Button>
                    </Link>
                </div>

            </section>


            <section className="flex flex-col
            items-center justify-center gap-2 ">
                <h1 className="text-gray-800 dark:text-zinc-100 text-left text-lg font-bold md:text-xl t">Módulo 2: Travel and Culture </h1>

                <div className=" flex flex-col gap-4 ">
                    <div className="flex flex-row gap-2 justify-center">
                        <Link to="/none" className="w-2/4 md:w-2/4">
                            <Card className="h-full w-full  dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 cursor-pointer ">
                                <CardHeader className="p-3">
                                    <CardTitle className="flex flex-row gap-2 md:gap-4">
                                        <figure className="flex flex-col justify-start">
                                            <CalendarCheck />
                                        </figure>
                                        <div className="flex flex-col justify-start gap-2">
                                            <h2 className="text-gray-800 dark:text-zinc-100 text-xs font-bold md:text-xl ">3 de septiembre</h2>
                                            <p className="text-gray-700 dark:text-zinc-50 text-[10px] font-light md:text-lg">Travel Planning</p>
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
                                            <CalendarCheck />
                                        </figure>
                                        <div className="flex flex-col justify-start gap-2">
                                            <h2 className="text-gray-800 dark:text-zinc-100 text-xs font-bold md:text-xl ">10 de septiembre</h2>
                                            <p className="text-gray-700 dark:text-zinc-50 text-[10px] font-light md:text-lg">At the Airport and Transportation</p>
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
                                            <CalendarCheck />
                                        </figure>
                                        <div className="flex flex-col justify-start gap-2">
                                            <h2 className="text-gray-800 dark:text-zinc-100 text-xs font-bold md:text-xl ">17 de septiembre</h2>
                                            <p className="text-gray-700 dark:text-zinc-50 text-[10px] font-light md:text-lg">Hotel and Restaurant Reservations</p>
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
                                            <CalendarCheck />
                                        </figure>
                                        <div className="flex flex-col justify-start gap-2">
                                            <h2 className="text-gray-800 dark:text-zinc-100 text-xs font-bold md:text-xl ">24 de septiembre</h2>
                                            <p className="text-gray-700 dark:text-zinc-50 text-[10px] font-light md:text-lg">Cultural and Tourist Experiences</p>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                            </Card>
                        </Link>

                    </div>

                </div>
            </section>

            <section className="flex justify-center items-center gap-2 md:gap-10">
                <div className="flex flex-col ">
                    <Link to="/none">
                        <Button className="text-white text-sm font-semibold md:text-lg p-3 md:p-6 dark:bg-gray-600 dark:hover:bg-zinc-700 ">Generar Evaluación</Button>
                    </Link>
                </div>

            </section>


            <section className="flex flex-col
            items-center justify-center gap-2 ">
                <h1 className="text-gray-800 dark:text-zinc-100 text-left text-lg font-bold md:text-xl">Módulo 2: Academic Life </h1>

                <div className=" flex flex-col gap-4 ">
                    <div className="flex flex-row gap-2 justify-center">
                        <Link to="/none" className="w-2/4 md:w-2/4">
                            <Card className="h-full w-full  dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 cursor-pointer ">
                                <CardHeader className="p-3">
                                    <CardTitle className="flex flex-row gap-2 md:gap-4">
                                        <figure className="flex flex-col justify-start">
                                            <CalendarCheck />
                                        </figure>
                                        <div className="flex flex-col justify-start gap-2">
                                            <h2 className="text-gray-800 dark:text-zinc-100 text-xs font-bold md:text-xl ">1 de octubre</h2>
                                            <p className="text-gray-700 dark:text-zinc-50 text-[10px] font-light md:text-lg">Travel Planning</p>
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
                                            <CalendarCheck />
                                        </figure>
                                        <div className="flex flex-col justify-start gap-2">
                                            <h2 className="text-gray-800 dark:text-zinc-100 text-xs font-bold md:text-xl ">8 de octubre</h2>
                                            <p className="text-gray-700 dark:text-zinc-50 text-[10px] font-light md:text-lg">At the Airport and Transportation</p>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                            </Card>
                        </Link>

                    </div>


                </div>
            </section>

            <section className="flex flex-col justify-center items-center gap-4 md:gap-4 md:w-full">
                <div className="flex flex-col ">
                    <Link to="/none" className="flex justify-center">
                        <Button className="text-white text-sm font-semibold md:text-base p-3 md:p-6 dark:bg-gray- dark:hover:bg-zinc-700 bg-zinc-600 hover:bg-zinc-700 ">Exportar en Excel</Button>
                    </Link>
                </div>
                <div className="flex flex-col">
                    <Link to="/none" className="flex justify-center">
                        <Button className="text-black text-sm font-semibold md:text-base p-3 md:p-6 dark:bg-gray- dark:hover:bg-zinc-700 bg-gray-100 hover:bg-zinc-200">Generar siguiente sesión</Button>
                    </Link>
                </div>


            </section>
        </>
    )
}

export default index
