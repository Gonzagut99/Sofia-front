import { useState } from "react"
import { Form, redirect, useLoaderData, useNavigation, useSubmit } from "@remix-run/react"
import { ActionFunctionArgs, json } from "@remix-run/node"
import { Button } from "~/components/ui/button"
import { Send, PlusCircle } from "lucide-react"
import { Textarea } from "components/ui/textarea"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { getValidatedFormData, RemixFormProvider, useRemixForm } from 'remix-hook-form'
import { FormDescription, FormField, FormItem, FormMessage } from "~/components/ui/form"
import { startNewConversation } from "./aiService";
// eslint-disable-next-line @typescript-eslint/no-explicit-any

const schema = z.object({
  prompt: z.string().min(3, "Debes escribir al menos algo para enviar a Sofía."),
  questionCount: z.number().int().min(0, "No se envia ningun valor").max(10),
})

type FormData = z.infer<typeof schema>
const resolver = zodResolver(schema)

// services/aiService.ts
// export const startNewConversation = async (prompt: string) => {
//   // Aquí enviarías el prompt a tu servicio de IA y obtendrías la respuesta
//   // Este es un ejemplo simulado
//   return new Promise((resolve) => {
//       //GENERATE A uuid
//       const chatId = uuidv4();
      
//     setTimeout(() => {
//       aiData.push(
//           {
//               chatId,
//               aiDataBlocks: [
//               {
//                   prompt,
//                   questionCount: 0,
//                   aiResponse: `AI response: ${lorem}`,
//               },
//               ],
//           }
//       )
//       resolve(aiData);
//     }, 500);
//   });
// }


export const loader = async () => {
  return json({
    conversationStarted:false,
    questionCount:0
  });
};



export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    // Obtén y valida los datos del formulario
    const { data, errors, receivedValues } = await getValidatedFormData<FormData>(request, resolver);

    if (errors) {
      return json({ errors, receivedValues }, { status: 400 });
    }

    const { prompt } = data;

    // Envía el prompt al servicio de IA
    const chatId = await startNewConversation(prompt);

    // Simula el tiempo de procesamiento de la IA
    // await new Promise(resolve => setTimeout(resolve, 1000));
    return redirect('/services/sofia-chat/'+chatId);
  } catch (error) {
    return json({ error: "Error processing AI prompt" }, { status: 500 });
  }
}

// interface AIPromptInputProps extends HTMLDivElement {
//   prompt?: string,
//   questionCount?: number,
// }

export function AIPromptInput() {
  const loaderData= useLoaderData<typeof loader>()
  const [questionCount, setQuestionCount] = useState(loaderData?.questionCount)
  const [conversationStarted, setConversationStarted] = useState(loaderData?.conversationStarted)


  // const actionData = useActionData<typeof action>()
  const submit = useSubmit()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"

  const form = useRemixForm<FormData>({
    mode: "onSubmit",
    resolver,
  })

  const {
    handleSubmit,
    control, 
  } = form

  const promptValue = form.watch("prompt")

  // const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setInputText(e.target.value)
  // }

  const handleNewConversation = () => {
    setQuestionCount(0)
    setConversationStarted(true)
  }

  // if (actionData && 'success' in actionData) {
  //   setQuestionCount(actionData.questionCount)
  //   console.log("AI response:", actionData.aiResponse)
  // }

  return (
    <div className="w-full mx-auto max-w-screen-sm space-y-4 grid">
      <div className="flex justify-between items-center">
        <Button
          onClick={handleNewConversation}
          variant="outline"
          disabled={isSubmitting}
        >
          <PlusCircle className="h-4 w-4 mr-2 text-customPrimary-700 dark:text-customPrimary-400" />
          Nueva conversación
        </Button>
        {/* <span className="text-sm text-muted-foreground">
          Questions: {questionCount}/10
        </span> */}
      </div>
      <RemixFormProvider {...form}>
        <Form method="POST" onSubmit={handleSubmit} className="flex gap-2 max-w-screen-sm w-full" action="/services/ai-prompt-input">
          <FormField
            control={control}
            name="prompt"
            render={({ field }) => (
              <FormItem className="w-full">
                <Textarea
                  {...field}
                  name="prompt"
                  id="prompt"
                  placeholder="Enter your prompt..."
                  disabled={
                    questionCount >= 10 || !conversationStarted || isSubmitting
                  }
                  className="flex-grow dark:bg-zinc-800 bg-slate-50 transition-all "
                />
                <FormDescription>Questions: {questionCount}/10</FormDescription>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          ></FormField>
          <FormField
            name="questionCount"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="hidden"
                name="questionCount"
                value={questionCount}
              />
            )}
          ></FormField>
          {promptValue?.trim() && questionCount < 10 && (
            <Button type="submit" size="icon" disabled={isSubmitting} className="animate-fade animate-in" onClick={
              (e) => {
                e.preventDefault()
                submit(e.currentTarget)
              }
            }>
              <Send className="h-4 w-4" />
              <span className="sr-only">Enviar prompt</span>
            </Button>
          )}
        </Form>
      </RemixFormProvider>
      
    </div>
  );
}