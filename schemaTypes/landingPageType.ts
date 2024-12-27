import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'landing page',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      group: 'content',
    }),
    //defineField({
    //  name: 'experiment',
    //  type: 'amplitude-experiment',
    //}),
  ],
})
