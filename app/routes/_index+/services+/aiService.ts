import { v4 as uuidv4 } from 'uuid';

export interface AiData {
    chatId: string,
    aiDataBlocks: {
        prompt: string,
        questionCount: number,
        aiResponse: string,
    }[]
}

const aiData: AiData[] = []

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc consectetur fermentum. Nulla facilisi. Sed malesuada, nunc nec lacinia fermentum, felis nunc tincidunt purus, nec ultricies nisi nunc nec purus. Nulla facilisi. Sed malesuada, nunc nec lacinia ferment um, felis nunc tincidunt purus, nec ultricies nisi nunc nec purus."

export const startNewConversation = async (prompt: string): Promise<string> => {
    // Aquí enviarías el prompt a tu servicio de IA y obtendrías la respuesta
    // Este es un ejemplo simulado
    return new Promise((resolve) => {
        //GENERATE A uuid
        const chatId = uuidv4();
    
      setTimeout(() => {
        aiData.push(
            {
                chatId,
                aiDataBlocks: [
                {
                    prompt,
                    questionCount: 0,
                    aiResponse: `AI response: ${lorem}`,
                },
                ],
            }
        )
        const newAiData = aiData.find((conversation) => conversation.chatId === chatId)
        if (newAiData?.chatId) {
            resolve(newAiData.chatId);
        } else {
            throw new Error('Failed to start a new conversation: chatId is undefined');
        }
      }, 500);
    });
}

export const sendPromptToAIService = async (prompt: string, chatId:string):Promise<AiData> => {
    // Aquí enviarías el prompt a tu servicio de IA y obtendrías la respuesta
    // Este es un ejemplo simulado
    return new Promise((resolve) => {
        setTimeout(() => {
            aiData.forEach((conversation) => {
                if (conversation.chatId === chatId) {
                    conversation.aiDataBlocks.push({
                        prompt,
                        questionCount: conversation.aiDataBlocks.length,
                        aiResponse: `AI response: ${lorem}`,
                    });
                }
            });
            const foundConversation = aiData.find((conversation) => conversation.chatId === chatId);
            if (!foundConversation) {
                throw new Error(`Conversation with chatId ${chatId} not found`);
            }
            resolve(foundConversation);
        }, 500);
    });
  }


  export const getChatById = async (chatId: string): Promise<AiData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const foundConversation = aiData.find((conversation) => conversation.chatId === chatId);
            if (!foundConversation) {
                throw new Error(`Conversation with chatId ${chatId} not found`);
            }
            resolve(foundConversation);
        }, 500);
    });
  }