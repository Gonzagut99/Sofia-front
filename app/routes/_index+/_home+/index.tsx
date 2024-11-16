import type { LoaderFunctionArgs } from "@remix-run/node";
import { Link } from "@remix-run/react"
import { useRef } from "react"
import { Button } from "~/components/ui/button"
import { CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "~/components/ui/carousel"
import CustomCard from "~/components/ui/custom/CustomCard"
import { P } from "~/components/ui/custom/CustomParagraph"
import { PageContainer } from "~/components/ui/custom/PageContainer"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "~/components/ui/hover-card"
import Autoplay from 'embla-carousel-autoplay'
import { CircleCheck, WandSparkles } from "lucide-react"
//import { ThemeSwitch } from "../resources+/theme-switch"

interface SofiaSlogan {
  letter: string
  word: string
  title: string,
  description?: string
  image?: string
}
const sofiaSlogan: SofiaSlogan[] = [
  {
    letter: "S",
    word: "implifíca",
    title: "Simplifíca",
    image: "/assets/Students.png",
    description: "Simplifica la creación de contenido educativo para un aprendizaje óptimo."
  },
  {
    letter: "O",
    word: "ptimiza",
    title: "Optimiza",
    image: "/assets/Teachers.png",
    description: "Optimiza el tiempo y los recursos para una enseñanza más efectiva."
  },
  {
    letter: "F",
    word: "acilíta",
    title: "Facilíta",
    image: "/assets/Administrators.png",
    description: "Facilita la gestión de tareas administrativas para una enseñanza más eficiente."
  },
  {
    letter: "I",
    word: "nteligencia",
    title: "Inteligencia Artficial",
    image: "/assets/Institutions.png",
    description: "Inteligencia artificial para una enseñanza más personalizada y efectiva."
  },
  {
    letter: "A",
    word: "rtificial",
    title: "Inteligencial Artificial",
    image: "/assets/Schools.png",
    description: "Inteligencia artificial para una enseñanza más personalizada y efectiva."
  }
]

interface VAKLearningStyles {
  letter: string
  word: string
  title: string
  description: string
}
const vakLearningStyles: VAKLearningStyles[] = [
  {
    letter: "V",
    word: "isual",
    title: "Visual",
    description: "Aprende mejor a través de imágenes, gráficos y mapas mentales."
  },
  {
    letter: "A",
    word: "uditivo",
    title: "Auditivo",
    description: "Aprende mejor a través de la escucha y la conversación."
  },
  {
    letter: "K",
    word: "inestésico",
    title: "Kinestésico",
    description: "Aprende mejor a través de la práctica y la experiencia."
  }
]

interface CarouselCardInfo {
  title: string
  description: string
  image: string
}
const carouselCards: CarouselCardInfo[] = [
  {
    title: "Dedica mayor tiempo a la planificación de tus clases",
    description: "Planifica tus clases de manera más eficiente, dedicando más tiempo a la preparación y reflexión, y asu vez, menos a tareas administrativas.",
    image: "/assets/TeacherPlanning.png"
  },
  {
    title: "Crea materiales y actividades diferenciadas y significativas",
    description: "Adapta materiales y actividades a las necesidades individuales de cada estudiante, promoviendo un aprendizaje más efectivo y personalizado.",
    image: "/assets/GeneratedDocuments.png"
  },
  {
    title: "Clasifica, califica, mide, y supervisa el desempeño",
    description: "Organiza y evalúa exámenes de manera eficiente, asegurando un seguimiento detallado del progreso de cada estudiante para la toma de decisiones asertadas.",
    image: "/assets/QualifingTest.png"
  }
]

function Index() {

  // const [api, setApi] = useState<CarouselApi>()
  // const [current, setCurrent] = useState(0)
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   if (!api) {
  //     return
  //   }
 
  //   setCount(api.scrollSnapList().length)
  //   setCurrent(api.selectedScrollSnap() + 1)
 
  //   api.on("select", () => {
  //     setCurrent(api.selectedScrollSnap() + 1)
  //   })
  // }, [api])

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <PageContainer className="flex flex-col gap-4">
      <section
        className="flex flex-col
      justify-center  md:flex-row-reverse md:items-center gap-4 lg:gap-10"
      >
        <div className="flex flex-col items-center md:gap-8 lg:gap-14 xl:gap-20">
          <div className="flex flex-col">
            <h2 className="text-2xl text-center text-customPrimary-100 text-shadow-zinc-50 font-semibold">
              ¿Te agobia tu carga de trabajo?
            </h2>
            <h1 className=" text-4xl sm:text-5xl md:text-7xl text-center text-customPrimary-100 md:text-customPrimary-50 text-shadow-md shadow-customPrimary-100 font-extrabold text-shadow-zinc-50">
              Bienvenido a Sofía
            </h1>
          </div>
          <Link className="max-w-80 w-full hidden md:block" to="/services">
            <Button
              className="w-full text-3xl py-8 px-12 bg-transparent border border-collapse backdrop-blur-none
              hover:backdrop-blur-lg
              hover:bg-transparent
              transition-all duration-300 dark:border-zinc-50 dark:text-zinc-50 hover:scale-125 hover:shadow-lg font-bold "
            >
              <div className="w-full flex gap-2 justify-center">
                <WandSparkles size={32} strokeWidth={1}></WandSparkles>
                <span>Comenzar</span>
              </div>
            </Button>
          </Link>
        </div>
        <figure>
          <img
            src="/assets/MainImage.png"
            alt="Sofía"
            className="w-full md:w-full mx-auto"
          />
        </figure>
        <div className="flex justify-center">
          <Link className="max-w-80 w-full block md:hidden" to="/services">
            <Button className="w-full text-xl py-6 px-8 border border-collapse transition-all duration-300 hover:scale-125 hover:shadow-lg font-bold shadow-lg border-none outline-none shadow-customPrimary-700/50 dark:shadow-customPrimary-500/50 dark:text-customPrimary-100 flex gap-2">
              <WandSparkles></WandSparkles>
              Comenzar
            </Button>
          </Link>
        </div>
      </section>
      <section className="pt-10">
        <header className="flex flex-col gap-2">
          <h2 className="text-3xl text-center dark:text-customPrimary-100 text-shadow-zinc-50 font-semibold">
            ¿Qué es Sofía?
          </h2>
          <P className="font-light text-center text-lg dark:text-customPrimary-50 text-shadow-zinc-50">
            Sofía es una plataforma educativa que facilita la creación de
            contenido educativo para un aprendizaje óptimo.
          </P>
        </header>
        <div className="flex items-center justify-center">
          <figure>
            <img
              className="md:max-w-[500px]"
              src="/assets/SofiaSlogan.png"
              alt="Satisfied Teachers"
            />
          </figure>
          <div className="flex flex-col gap-2 md:gap-4">
            {sofiaSlogan.map((slogan) => (
              <HoverCard key={slogan.title} openDelay={200} closeDelay={100}>
                {/* <figure>
                    <img src={slogan.image} alt={slogan.title} />
                  </figure> */}
                <div className="flex gap-4 items-center">
                  <HoverCardTrigger asChild>
                    <Button className="animate-jump font-extrabold text-4xl px-4 py-4 size-14 sm:size-16 transition-all duration-300 hover:scale-125 hover:shadow-2xl">
                      {slogan.letter}
                    </Button>
                  </HoverCardTrigger>
                  <P className="text-3xl font-bold hidden md:block">
                    {slogan.word}
                  </P>
                </div>
                <HoverCardContent>
                  <h3 className="text-2xl dark:text-customPrimary-100 text-shadow-zinc-50 font-semibold">
                    {slogan.title}
                  </h3>
                  <P className="dark:text-customPrimary-50 text-shadow-zinc-50">
                    {slogan.description}
                  </P>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4 mb-8">
        <header className="flex flex-col gap-2">
          <h2 className="text-3xl text-center dark:text-customPrimary-100 text-shadow-zinc-50 font-semibold">
            ¿Por qué Sofía?
          </h2>
          <P className="font-light text-center text-lg dark:text-customPrimary-50 text-shadow-zinc-50">
            Sofía es una plataforma educativa que facilita la creación de
            contenido educativo para un aprendizaje óptimo.
          </P>
        </header>
        <Carousel
          className="w-full"
          plugins={[plugin.current]}
          opts={{
            loop: true,
            align: "start",
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          onTouchStart={plugin.current.stop}
          onTouchEnd={plugin.current.reset}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {carouselCards.map((card) => (
              <CarouselItem
                key={card.title}
                className="md:basis-1/2 pl-2 md:pl-4"
              >
                <div className="py-1">
                  <CustomCard>
                    <CardHeader className="flex flex-col gap-1 relative">
                      <CircleCheck
                        size={32}
                        className="font-bold absolute text-customPrimary-700 dark:text-customPrimary-400"
                      ></CircleCheck>
                      <figure className="w-full flex justify-center">
                        <img
                          className="size-[250px] object-contain"
                          src={card.image}
                          alt="Planning teaching session"
                        />
                      </figure>
                      <CardTitle className="text-xl text-center dark:text-customPrimary-100 text-shadow-zinc-50 font-semibold">
                        {card.title}
                      </CardTitle>
                      <CardDescription>
                        <span className="block text-pretty font-light text-center text-base dark:text-customPrimary-50 text-shadow-zinc-50">
                          {card.description}
                        </span>
                      </CardDescription>
                    </CardHeader>
                  </CustomCard>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      <section className="flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <h2 className="text-2xl text-center dark:text-customPrimary-100 text-shadow-zinc-50 font-semibold">
            <span className="font-black text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Sofía
            </span>{" "}
            clasifica a tus estudiantes según su estilo de aprendizaje
          </h2>
          {/* <P className="font-light text-center text-lg dark:text-customPrimary-50 text-shadow-zinc-50">
            Sofía es una plataforma educativa que facilita la creación de
            contenido educativo para un aprendizaje óptimo.
          </P> */}
        </header>
        <div className="flex gap-4 items-center justify-center">
          <figure>
            <img
              className="md:max-w-[500px]"
              src="/assets/TeacherThinking.png"
              alt="Satisfied Teachers"
            />
          </figure>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-2 md:gap-4">
              {vakLearningStyles.map((ls) => (
                <HoverCard key={ls.title} openDelay={200} closeDelay={100}>
                  {/* <figure>
                      <img src={slogan.image} alt={slogan.title} />
                    </figure> */}
                  <div className="flex gap-4 items-center">
                    <HoverCardTrigger asChild>
                      <Button className="animate-jump font-extrabold text-4xl px-4 py-4 size-14 sm:size-16 transition-all duration-300 hover:scale-125 hover:shadow-2xl">
                        {ls.letter}
                      </Button>
                    </HoverCardTrigger>
                    <P className="text-3xl font-bold hidden md:block">
                      {ls.word}
                    </P>
                  </div>
                  <HoverCardContent>
                    <h3 className="text-2xl dark:text-customPrimary-100 text-shadow-zinc-50 font-semibold">
                      {ls.title}
                    </h3>
                    <P className="dark:text-customPrimary-50 text-shadow-zinc-50">
                      {ls.description}
                    </P>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
            <Link to={"/services"}>
              <Button variant={"outlinePrimary"} size={'lg'} className="hidden py-8 w-full md:flex gap-2 text-2xl">
                <WandSparkles></WandSparkles>
                <span>Comenzar</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to={'/services'}>
            <Button
              variant={"outline"}
              size={"lg"}
              className="max-w-60 flex py-6 w-full md:hidden gap-2 text-2xl border-customPrimary-700 dark:border-customPrimary-400 text-customPrimary-700 dark:text-customPrimary-400"
            >
              <WandSparkles></WandSparkles>
              <span>Comenzar</span>
            </Button>
          </Link>
        </div>
      </section>
    </PageContainer>
  );
}

export default Index