import { type SchemaTypeDefinition } from 'sanity'
import quote from './schemas/quote'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    quote
  ],
}
