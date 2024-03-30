import { ChatOpenAI } from "@langchain/openai"

export const openRouterModel = async ({
  modelName,
  apiKey
}: {
  modelName: string
  apiKey: string
}) => {
  return new ChatOpenAI({
    modelName: modelName,
    openAIApiKey: apiKey,
    configuration: {
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: apiKey,
      defaultHeaders: {
        "HTTP-Referer": "https://dialoqlite.n4ze3m.com/",
        "X-Title": "Dialoqlite"
      }
    }
  })
}
