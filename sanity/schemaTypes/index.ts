import {type SchemaTypeDefinition} from 'sanity'

import {blockContentType} from './blockContentType'
import {sundayType} from './sundayType'
import {recipeType} from './recipeType'
import {blogType} from './blogType'
import {travelType} from './travelType'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [blockContentType, sundayType, recipeType, blogType, travelType],
}
