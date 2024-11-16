import type { LoaderFunctionArgs } from "@remix-run/node";
import { GraduationCap } from "lucide-react"
import { Link } from "@remix-run/react";
import React from 'react'
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "~/components/ui/chart"

const chartData = [
    { learningStyle: "Kinesthetic", students: 7, fill: "var(--color-kinesthetic)" },
    { learningStyle: "Auditory", students: 6, fill: "var(--color-auditory)" },
    { learningStyle: "Visual", students: 8, fill: "var(--color-visual)" },
];

const chartConfig = {
    students: {
        label: "Students",
    },
    kinesthetic: {
        label: "Kinesthetic",
        color: "hsl(var(--chart-1))",
    },
    auditory: {
        label: "Auditory",
        color: "hsl(var(--chart-2))",
    },
    visual: {
        label: "Visual",
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig;

export const loader = async ({ request }: LoaderFunctionArgs) => {
    return null;
};

const index = () => {

    const totalStudents = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.students, 0);
    }, []);

    return (
        <>
            <section className="flex flex-row gap-4 justify-start ">

                <figure className="flex flex-col justify-start">
                    <GraduationCap className="w-10 h-10" />
                </figure>

                <div className="flex flex-col justify-start gap-2">
                    <h2 className="text-gray-800 dark:text-zinc-100 font-semibold text-base md:text-2xl">Lista de estudiantes</h2>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Sección: BTE-01</p>
                    <p className="text-gray-700 dark:text-zinc-50 font-light text-sm md:text-base">Curso: Proyecto Integrador</p>
                </div>

            </section>

            <Card className="flex flex-col">
                <CardHeader className="items-center pb-0">
                    <CardTitle>Grafico Circular - Estilos de Aprendizjae</CardTitle>
                    {/* <CardDescription>January - June 2024</CardDescription> */}
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                    <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square max-h-[250px]"
                    >
                        <PieChart>
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Pie
                                data={chartData}
                                dataKey="students"
                                nameKey="learningStyle"
                                innerRadius={60}
                                strokeWidth={5}
                            >
                                <Label
                                    content={({ viewBox }) => {
                                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                            return (
                                                <text
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                >
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        className="fill-foreground text-3xl font-bold"
                                                    >
                                                        {totalStudents.toLocaleString()}
                                                    </tspan>
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={(viewBox.cy || 0) + 24}
                                                        className="fill-muted-foreground"
                                                    >
                                                        Alumnos
                                                    </tspan>
                                                </text>
                                            );
                                        }
                                    }}
                                />
                            </Pie>
                        </PieChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col gap-2 text-sm">
                    {/* <div className="flex items-center gap-2 font-medium leading-none">
                        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                    </div> */}
                    <div className="leading-none text-muted-foreground">
                    Se muestran los estilos de aprendizaje totales de los estudiantes durante los últimos 6 meses
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}

export default index
