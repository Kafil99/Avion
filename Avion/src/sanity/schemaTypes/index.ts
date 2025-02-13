import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { Category } from './category'
import orderSchema from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product , Category , orderSchema],
}
