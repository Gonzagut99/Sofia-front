import { zodResolver } from "@hookform/resolvers/zod";
import type { ActionFunctionArgs } from "@remix-run/node";
import { json, useFetcher } from "@remix-run/react";
import { getValidatedFormData, RemixFormProvider, useRemixForm } from "remix-hook-form";

import { z } from "zod";
import { Button } from "~/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { predictScore } from "~/services/score-prediction-model";
import { AcceptedValues } from "~/types/ml-model";

const acceptedValues: AcceptedValues = {
    gender:['female', 'male'],
    race_ethnicity: ['group B', 'group C', 'group A', 'group D', 'group E'],
    parental_level_of_education: ["bachelor's degree", 'some college', "master's degree", "associate's degree", 'high school', 'some high school'],
    lunch: ['standard', 'free/reduced'],
    test_preparation_course: ['none', 'completed'],
}

const predictionSchema = z.object({
    gender: z.string(),
    race_ethnicity: z.string(),
    parental_level_of_education: z.string(),
    lunch: z.string(),
    test_preparation_course: z.string(),
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

        // Envía el data al servicio de ML
        const mlResponse = await predictScore(data);

        //Missing Validation
    
        // Devuelve la respuesta de la IA y el conteo de preguntas incrementado
    
        const bodyResponse = json({ success: true, mlModelResponse: mlResponse });
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

  const form = useRemixForm<FormData>({
    mode: "onSubmit",
    resolver,
    fetcher: fetcher,
  })

  const {
    handleSubmit,
    control, 
  } = form

  return (
    <>
        <section className="flex justify-center flex-col gap-6">
            <header className="text-center text-2xl">
                Predicción de notas Sofía
            </header>
            
            <RemixFormProvider {...form}>
                <fetcher.Form className="flex" onSubmit={handleSubmit} method="POST">
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <FormField
                            control={control}
                            name="gender"
                            render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Género</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                    >
                                        {
                                            acceptedValues.gender.map((value) => (
                                                <FormItem key={value} className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                    <RadioGroupItem value={value} />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                    {value}
                                                    </FormLabel>
                                                </FormItem>
                                            ))
                                        }
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        ></FormField>
                        <FormField
                            control={control}
                            name="lunch"
                            render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Tipo de almuerzo</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                    >
                                        {
                                            acceptedValues.lunch.map((value) => (
                                                <FormItem key={value} className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                    <RadioGroupItem value={value} />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                    {value}
                                                    </FormLabel>
                                                </FormItem>
                                            ))
                                        }
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        ></FormField>
                        <FormField
                            control={control}
                            name="parental_level_of_education"
                            render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Nivel de educación de los padres</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                    >
                                        {
                                            acceptedValues.parental_level_of_education.map((value) => (
                                                <FormItem key={value} className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                    <RadioGroupItem value={value} />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                    {value}
                                                    </FormLabel>
                                                </FormItem>
                                            ))
                                        }
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        ></FormField>
                        <FormField
                            control={control}
                            name="race_ethnicity"
                            render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Raza / Etnia</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                    >
                                        {
                                            acceptedValues.race_ethnicity.map((value) => (
                                                <FormItem key={value} className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                    <RadioGroupItem value={value} />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                    {value}
                                                    </FormLabel>
                                                </FormItem>
                                            ))
                                        }
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        ></FormField>
                        <FormField
                            control={control}
                            name="test_preparation_course"
                            render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Curso de preparación para el exámen</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                    >
                                        {
                                            acceptedValues.test_preparation_course.map((value) => (
                                                <FormItem key={value} className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                    <RadioGroupItem value={value} />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                    {value}
                                                    </FormLabel>
                                                </FormItem>
                                            ))
                                        }
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        ></FormField>
                    </div>
                    <div>
                        <Button type="submit" disabled={isSubmitting}>{
                            isSubmitting ? "Enviando..." : "Enviar"
                        }</Button>

                        <div>
                            {
                                data && (
                                    <pre>
                                        {JSON.stringify(data, null, 2)}
                                    </pre>
                                )
                            }
                        </div>
                    </div>
                </fetcher.Form>
            </RemixFormProvider>
                
        </section>
    </>
  )
}
