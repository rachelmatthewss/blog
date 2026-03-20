import {defineField, defineType} from 'sanity'

const CATEGORIES = [
  {title: 'Healthy', value: 'healthy'},
  {title: 'Easy', value: 'easy'},
  {title: 'Vegetarian', value: 'vegetarian'},
  {title: 'Quick', value: 'quick'},
  {title: 'Breakfast', value: 'breakfast'},
  {title: 'Salads', value: 'salads'},
  {title: 'Soups', value: 'soups'},
]

export const recipeType = defineType({
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', title: 'Alt text', type: 'string'}),
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {list: CATEGORIES},
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'blockContent',
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'blockContent',
    }),
    defineField({
      name: 'notes',
      title: 'Notes',
      type: 'blockContent',
    }),
    defineField({
      name: 'story',
      title: 'Story',
      type: 'blockContent',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({name: 'alt', title: 'Alt text', type: 'string'}),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'title', category: 'category', media: 'thumbnail'},
    prepare({title, category, media}) {
      return {title, subtitle: category, media}
    },
  },
})
