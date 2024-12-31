import {defineField, defineType} from 'sanity'

export const brand = defineType({
  name: 'brand',
  title: 'Brand',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'locations',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'location'}]}],
      title: 'Locations',
      validation: (rule) => rule.required(),
    }),
  ],
})
