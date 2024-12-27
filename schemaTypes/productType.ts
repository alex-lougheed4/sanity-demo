import {defineField, defineType} from 'sanity'
import {baseLanguage} from './localeStringType'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    //defineField({
    //  name: 'title',
    //  title: 'Title',
    //  type: 'localeString',
    //}),
    defineField({
      name: 'overview',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'doses',
      title: 'Doses',
      type: 'array',
      of: [{type: 'number'}],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: `title.${baseLanguage?.id}`,
    },
  },
})
