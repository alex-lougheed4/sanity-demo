import {defineField, defineType} from 'sanity'

export const location = defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'ID',
      validation: (rule) =>
        rule.required().custom(async (id, context) => {
          const {document} = context
          const client = context.getClient({apiVersion: '2021-06-07'})
          const existing = await client.fetch(
            `count(*[_type == "location" && id == $id && _id != $documentId])`,
            {id, documentId: document?._id},
          )
          return existing === 0 ? true : 'ID must be unique'
        }),
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Location Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isoCode',
      type: 'string',
      title: 'ISO Code',
      validation: (rule) =>
        rule
          .regex(/^[A-Z]{2,3}$/, {
            name: 'ISO code', // Error message is "Does not match ISO code pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
          })
          .error('Must be a valid ISO code (2 or 3 uppercase letters)'),
    }),
  ],
})
