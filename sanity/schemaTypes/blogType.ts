import {defineField, defineType} from 'sanity'

const CATEGORIES = [
  {title: 'Career & Finance', value: 'career-finance'},
  {title: 'Design', value: 'design'},
  {title: 'Mental Health', value: 'mental-health'},
  {title: 'Health & Wellness', value: 'health-wellness'},
  {title: 'Nutrition', value: 'nutrition'},
]

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
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
      name: 'summary',
      title: 'Summary',
      description: 'Short excerpt shown in listings',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'featured',
      title: 'Featured?',
      type: 'boolean',
      initialValue: false,
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
    select: {title: 'title', featured: 'featured', category: 'category', media: 'thumbnail'},
    prepare({title, featured, category, media}) {
      return {
        title: featured ? `★ ${title}` : title,
        subtitle: category,
        media,
      }
    },
  },
})
