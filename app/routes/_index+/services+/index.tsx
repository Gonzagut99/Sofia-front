import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { NotebookTabs, BotIcon, FileText, PieChart } from "lucide-react";
import { Button, buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { Link } from "@remix-run/react";
import TypingAnimation from "~/components/ui/typing-animation";
import { AIPromptInput } from "./ai-prompt-input";

// interface ServicesOptions {
//   icon: JSX.Element;
//   title: string;
// }
// const servicesOptions: ServicesOptions[] = [
//   {
//     icon: <NotebookTabs className="text-blue-500"></NotebookTabs>,
//     title: "Planificación de clases",
//   },
//   {
//     icon: <BotIcon className="text-indigo-500" />,
//     title: "Clasificación de estilo de aprendizaje",
//   },
//   {
//     icon: <FileText className="text-green-500" />,
//     title: "Generación de recursos académicos",
//   },
//   {
//     icon: <PieChart className="text-pink-500" />,
//     title: "Generación de reportes",
//   },
// ];

interface FeatureCard {
  image: string;
  title: string;
  description: string;
  link?: string;
  buttonTitle?: string;
}
interface ServicesDetails {
  icon: JSX.Element;
  title: string;
  description: string;
  featureCard: FeatureCard;
}

const iconDefaultClasses = "size-[30px] md:size-[36px] lg:size-[40px]";
const servicesDetails: ServicesDetails[] = [
  {
    icon: <NotebookTabs className={cn("text-blue-500", iconDefaultClasses)}></NotebookTabs>,
    title: "Planificación de clases",
    description:
      "Planifica tus clases de forma sencilla y eficiente. La Planificación tu sesión de aprendizaje se alinea con los objetivos y enfoques propuestos por el estado Peruano.",
    featureCard: {
      image: "/assets/TeacherPlanning.png",
      title: "Simplifíca",
      description:
        "Tendras la opcion de elegir entre si quieres usar nuestros recursos y evaluaciones.",
      link: "/services/class-planning",
      buttonTitle: "Planificar",
    },
  },
  {
    icon: <BotIcon className={cn("text-indigo-500", iconDefaultClasses)} />,
    title: "Clasificación de estilo de aprendizaje",
    description:
      "Para Obtener mejores resultados en la planificación puedes clasificar a tus estudiantes por preferencias y estilos de aprendizaje.",
    featureCard: {
      image: "/assets/StandStudents.png",
      title: "Quiz de clasificación VAK",
      description: `Genera una sala para realizar un cuestionario para clasificar a tus estudiantes.
            Se debe ingresar el código generado para unirse a la sala.`,
      link: "/sections/vak-classification",
      buttonTitle: "Clasificar estudiante",
    },
  },
  {
    icon: <FileText className={cn("text-green-500", iconDefaultClasses)} />,
    title: "Generación de recursos académicos",
    description:
      "Puedes generar presentaciones, juegos, cuestionarios, mapas y usar videos de internet para que posteriormente los uses a la hora de planificar una sesión.",
    featureCard: {
      image: "/assets/GeneratedResources.png",
      title: "Reportes generales e individuales",
      description:
        "Facilita la gestión de tareas administrativas para una enseñanza más eficiente.",
      link: "/services/academic-resources",
      buttonTitle: "Ir a mis sesiones de aprendizaje",
    },
  },
  {
    icon: <PieChart className={cn("text-pink-500", iconDefaultClasses)} />,
    title: "Generación de reportes",
    description:
      "Para Obtener mejores resultados en la planificación al estar plenamente informado del desempeño de tus estudiantes, asi como de predicciones de su desempeño final para poder tomar medidas preventivas.Genera reportes de forma rápida y sencilla.",
    featureCard: {
      image: "/assets/TeacherStatistics.png",
      title: "Revisa reportes de tus secciones",
      description:
        "Inteligencia artificial para una enseñanza más personalizada y efectiva.En cada una de tus seccionespodrás llenar y generar reportes automáticos y visualizar los que ya tienes.",
      link: "/services/reports",
      buttonTitle: "Ir a mis secciones",
    },
  },
];

function index() {
  return (
    <>
      <section className="text-4xl font-light inline-flex flex-col sm:flex-row gap-2 items-center justify-center">
        <span className="tracking-[-0.02em]">Buen día, </span>
        <TypingAnimation
          className="leading-10 font-black bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
          duration={80}
          text="¿Cómo te ayudo?"
        ></TypingAnimation>
        {/* <span className="font-black bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          ¿Cómo te ayudo?
        </span> */}
      </section>
      <section>
        <div className="grid grid-cols-2 gap-4 max-w-screen-sm m-auto">
          {servicesDetails.map((option) => (
            <Drawer key={option.title}>
              <DrawerTrigger>
                <Card className="h-full dark:bg-zinc-900 dark:hover:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100">
                  <CardHeader className="pb-3">
                    <CardTitle className="mx-auto">{option.icon}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-lg">{option.title}</CardContent>
                </Card>
              </DrawerTrigger>
              <DrawerContent>
                <div className="max-w-screen-md m-auto">
                  <DrawerHeader className="flex flex-col gap-6">
                    <DrawerTitle className="flex flex-col gap-4 items-center">
                      {option.icon}
                      <span>{option.title}</span>
                    </DrawerTitle>
                    <DrawerDescription className="text-pretty">
                      {option.description}
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Card className="flex flex-col p-2 gap-6">
                      <div className="flex gap-2">
                        <figure className="w-1/3 min-h-[150px]">
                          <img
                            className="w-full h-[200px] min-h-[200px] object-contain"
                            src={option.featureCard.image}
                            alt={option.featureCard.title}
                          />
                        </figure>
                        <div className="w-2/3 flex flex-col justify-center">
                          <CardHeader>
                            <CardTitle className="text-center">
                              {option.featureCard.title}
                            </CardTitle>
                          </CardHeader>
                          <div className="flex flex-col gap-4 justify-center items-center">
                            <CardDescription className="text-center">
                              {option.featureCard.description}
                            </CardDescription>
                            {option.featureCard.link && (
                              <Link to={option.featureCard.link}>
                                <Button variant={"secondary"} size={"lg"}>
                                  {option.featureCard.buttonTitle}
                                </Button>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                      <DrawerClose
                        className={cn(
                          buttonVariants({ variant: "outline", size: "lg" })
                        )}
                      >
                        Cerrar
                      </DrawerClose>
                    </Card>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          ))}
        </div>
      </section>

      <section>
        <AIPromptInput></AIPromptInput>
      </section>
    </>
  );
}

export default index;
