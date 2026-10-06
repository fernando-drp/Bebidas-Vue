import { openRouter } from '../lib/ia'
import { streamText } from 'ai'

export default {
  async generarReceta(prompt) {
    const resultado = streamText({
      model: openRouter('openrouter/free'),

      prompt: prompt,
      systemMessage:
        'Eres un experto en coctelería y mixología. Genera recetas de bebidas y cócteles de manera creativa y detallada, incluyendo ingredientes, cantidades y pasos de preparación.',
      temperature: 0.7,
    })

    return resultado.textStream
  },
}
