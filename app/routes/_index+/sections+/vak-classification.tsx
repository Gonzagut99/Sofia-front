import { zodResolver } from "@hookform/resolvers/zod";
import type { ActionFunctionArgs } from "@remix-run/node";
import { json, useFetcher } from "@remix-run/react";
import { useEffect } from "react";
import { getValidatedFormData, RemixFormProvider, useRemixForm } from "remix-hook-form";

import { z } from "zod";
import { Button } from "~/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
// import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Textarea } from "~/components/ui/textarea";
import TypingAnimation from "~/components/ui/typing-animation";
// import { predictScore } from "~/services/score-prediction-model";
import { classifyVak } from "~/services/vak_classification";
// import { AcceptedValues } from "~/types/ml-model";

// const acceptedValues: AcceptedValues = {
//     gender:['female', 'male'],
//     race_ethnicity: ['group B', 'group C', 'group A', 'group D', 'group E'],
//     parental_level_of_education: ["bachelor's degree", 'some college', "master's degree", "associate's degree", 'high school', 'some high school'],
//     lunch: ['standard', 'free/reduced'],
//     test_preparation_course: ['none', 'completed'],
// }

const predictionSchema = z.object({
    sentence: z.string().min(5).max(1000),
});

type FormData = z.infer<typeof predictionSchema>
const resolver = zodResolver(predictionSchema)

export const action = async ({ request }: ActionFunctionArgs) => {
    try {
        // Obtén y valida los datos del formulario
        const { data, errors, receivedValues } = await getValidatedFormData<FormData>(request, resolver);
    
        if (errors) {
          return json({ errors, receivedValues }, { status: 400 });
        }

        // Envía el data al servicio de DL
        const dlResponse = await classifyVak(data);

        //Missing Validation
    
        // Devuelve la respuesta de la IA y el conteo de preguntas incrementado
    
        const bodyResponse = json({ success: true, dlModelResponse: dlResponse });
        return bodyResponse;
      } catch (error) {
        console.error("Error processing AI prompt:", error);
        return json({ error: "Error processing AI prompt" }, { status: 500 });
      }
};

export default function Predictions() {
    const fetcher = useFetcher<typeof action>({ key: "ai-prompt-input" })
  const isSubmitting = fetcher.state === "submitting"
  const data = fetcher.data

  const response = data && 'success' in data ? data.dlModelResponse : false

  const form = useRemixForm<FormData>({
    mode: "onSubmit",
    resolver,
    fetcher: fetcher,
  })

  const {
    handleSubmit,
    control, 
  } = form

useEffect(() => {
    if (response) {
        if (response.data.result)
        {
            console.log("Response received:", response);
            form.resetField("sentence");
            // form.resetField("sentence");
        }
    }
}, [response]);

// useEffect(() => {
//     if (isSubmitting) {
//         console.log("Submitting form...");
//     }
// }, [isSubmitting]);

  return (
    <>
        <section className="flex justify-center items-center flex-col gap-6">
            <header className="text-center text-2xl ">
                <span className="font-bold text-customPrimary-500 dark:text-customPrimary-400">Clasificación VAK</span> (Visual, Auditivo, Kinestésico)
            </header>
            
            <RemixFormProvider {...form}>
                <fetcher.Form className="flex felx-col w-full max-w-screen-xl" onSubmit={handleSubmit} method="POST">
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="flex flex-col gap-4">
                            <FormField
                                control={control}
                                name="sentence"
                                render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel className="text-lg">Cuentanos y expláyate. ¿Que es lo que más te gusta hacer?</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            className="border-zinc-700"
                                            placeholder="Escribe una frase"
                                            name="sentence"
                            
                                        >
                            
                                        </Textarea>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            ></FormField>
                            <div>
                                <Button type="submit" disabled={isSubmitting}>{
                                    isSubmitting ? "Enviando..." : "Enviar"
                                }</Button>

                                <div className="w-full ">
                                    {
                                        response && (
                                            <div className="flex flex-col justify-center items-center gap-2 text-center">
                                                <h2 className="text-2xl">Eres una persona</h2>
                                                <TypingAnimation
                                                    className="leading-10 font-black bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
                                                    duration={80}
                                                    text={response.data.result}
                                                ></TypingAnimation>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <img src="/assets/InteligentRobot.png" alt="Robot" className="object-contain aspect-square max-w-80 "/>
                    </div>
                    
                </fetcher.Form>
            </RemixFormProvider>
                
        </section>
    </>
  )
}
