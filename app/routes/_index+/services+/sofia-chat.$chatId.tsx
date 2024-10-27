import type { LoaderFunctionArgs } from "@remix-run/node";
import { useEffect, useState } from "react"
import { useFetcher, useLoaderData } from "@remix-run/react"
import { ActionFunctionArgs, json } from "@remix-run/node"
import { Button } from "~/components/ui/button"
import { Send } from "lucide-react"
import { Textarea } from "components/ui/textarea"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { getValidatedFormData, RemixFormProvider, useRemixForm } from 'remix-hook-form'
import { FormDescription, FormField, FormItem, FormMessage } from "~/components/ui/form"
import { AiData, getChatById, sendPromptToAIService } from "./aiService";
import { P } from "~/components/ui/custom/CustomParagraph";
// eslint-disable-next-line @typescript-eslint/no-explicit-any

const schema = z.object({
  prompt: z.string().min(3, "Debes escribir al menos algo para enviar a Sofía."),
  questionCount: z.number().int().min(0, "No se envia ningun valor").max(10),
})

type FormData = z.infer<typeof schema>
const resolver = zodResolver(schema)
export const loader = async ({ params }: LoaderFunctionArgs) => {
  const chatId = params.chatId;
  if (!chatId) {
    throw new Error("chatId is required");
  }
  const chat = await getChatById(chatId);
  return json(chat);  
};


export const action = async ({ request, params }: ActionFunctionArgs) => {
  try {
    // Obtén y valida los datos del formulario
    const { data, errors, receivedValues } = await getValidatedFormData<FormData>(request, resolver);

    if (errors) {
      return json({ errors, receivedValues }, { status: 400 });
    }

    const { prompt, questionCount } = data;

    // Envía el prompt al servicio de IA
    if (!params?.chatId) {
      throw new Error("chatId is required");
    }
    const aiResponse = await sendPromptToAIService(prompt, params.chatId);

    // Simula el tiempo de procesamiento de la IA
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Devuelve la respuesta de la IA y el conteo de preguntas incrementado

    const bodyResponse = json({ success: true, aiResponse, questionCount: questionCount + 1 });
    return bodyResponse;
    // redirect('/services/ai-prompt-input', { 
    //   headers: { 'Cache-Control': 'no-store' } 
    // });
  } catch (error) {
    console.error("Error processing AI prompt:", error);
    return json({ error: "Error processing AI prompt" }, { status: 500 });
  }
}

export default function PromptOutput() {
  const chat = useLoaderData<typeof loader>()

  // const [conversationStarted, setConversationStarted] = useState(chat?.aiDataBlocks.length>0 || false)
  const conversationStarted = chat?.aiDataBlocks.length > 0
  const [actionData, setActionData] = useState<AiData>(chat)
  // const [textAreaValue, setTextAreaValue] = useState('')

  const questionCount = actionData?.aiDataBlocks.length || 0;

  // const actionData = useActionData<typeof action>()
  // const navigation = useNavigation()
  // const isSubmitting = navigation.state === "submitting"
  const fetcher = useFetcher<typeof action>({ key: "ai-prompt-input" })
  const isSubmitting = fetcher.state === "submitting"
  const data = fetcher.data

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

  useEffect(() => {
    if (data && 'success' in data) {
      setActionData(data.aiResponse)
      // setQuestionCount(actionData.aiDataBlocks.length)
      console.log("AI response:", actionData)
    }
  }, [actionData, data])

  // useEffect(() => {
  //   if(isSubmitting){
  //     setTextAreaValue('')
  //   }
  // }, [isSubmitting])

  // const handleSubmitForm = useCallback(() => {
  //   fetcher.submit(form.handleSubmit);
  // }, [form, fetcher]);
  
  return (
    <>
    <section className="relative max-h-[480px] min-h-[350px] h-[400px]">
      <div className="absolute z-10 inset-0 h-10 bg-gradient-to-b from-zinc-900 to-transparent "></div>
      <div className="overflow- h-full max-h-[480px] flex flex-col gap-12 justify-center items-center">
        {
          actionData?.aiDataBlocks.map((block, index) => (
            <div key={index} className="flex flex-col gap-3 max-w-screen-md">
              <div className="flex justify-end">
                <div className="relative py-3 pl-4 pr-6 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-customPrimary-400 min-w-80 max-w-[500px]">
                  {/* <h2>Pregunta {block.questionCount+1}:</h2> */}
                  <P className='relative'>{block.prompt}</P>
                  <span className="absolute bottom-1 right-4 text-xs opacity-50">{block.questionCount+1}/10</span>
                </div>
              </div>
              <div>
                <h2>Sofia</h2>
                <P>{block.aiResponse}</P>
              </div>
            </div>
          ))
        }
      </div>
    </section>
      <section className="w-full mx-auto space-y-4">
        <div className="max-w-screen-sm mx-auto">
          <RemixFormProvider {...form}>
            <fetcher.Form method="post" onSubmit={handleSubmit} className="flex gap-2" action={`/services/sofia-chat/${chat.chatId}`}>
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
                        questionCount >= 10 ||
                        !conversationStarted ||
                        isSubmitting
                      }
                      className="flex-grow"
          
                    />
                    <FormDescription>
                      Questions: {questionCount}/10
                    </FormDescription>
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
                <Button type="submit" size="icon" disabled={isSubmitting} onClick={
                  (e)=>{
                    e.preventDefault()
                    fetcher.submit(e.currentTarget)
                  }
                }>
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Enviar prompt</span>
                </Button>
              )}
            </fetcher.Form>
          </RemixFormProvider>
        </div>
        {/* <div className="flex justify-between items-center">
          <Button
            onClick={handleNewConversation}
            variant="outline"
            disabled={isSubmitting}
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Nueva conversación
          </Button>
        </div> */}
      </section>
    </>
  );
}

// export const NewConversationButton = () => {
//   const fetcher = useFetcher({key: 'ai-prompt-input'})
//   const isSubmitting = fetcher.state === "submitting"
//   return (
//     <div>
//       <fetcher.Form method="POST" action="/services/ai-prompt-input">
//         <Button
//           onClick={handleNewConversation}
//           variant="outline"
//           disabled={isSubmitting}
//         >
//           <PlusCircle className="h-4 w-4 mr-2" />
//           Nueva conversación
//         </Button>
//       </fetcher.Form>
//     </div>
//   );
// }
