import {defineField, defineType} from 'sanity'

export const sundayType = defineType({
  name: 'sunday',
  title: 'Sunday',
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
      name: 'movement',
      title: 'Movement',
      description: 'How I\'m moving this week',
      type: 'blockContent',
    }),
    defineField({
      name: 'food',
      title: 'Food',
      description: 'What I\'m making this week',
      type: 'blockContent',
    }),
    defineField({
      name: 'cravings',
      title: 'Cravings',
      description: 'Comma-separated list of things I\'m craving',
      type: 'string',
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
    select: {title: 'title', date: 'date', media: 'thumbnail'},
    prepare({title, date, media}) {
      return {title, subtitle: date, media}
    },
  },
})
