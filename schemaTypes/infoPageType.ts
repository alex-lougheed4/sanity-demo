import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'information-page',
  title: 'Info Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      type: 'text',
      title: 'Overview',
      description: 'A brief overview of the information page',
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [{type: 'block'}],
      description: 'The main content of the information page',
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          {title: 'Terms and Conditions', value: 'termsAndConditions'},
          {title: 'Privacy Policy', value: 'privacyPolicy'},
          {title: 'FAQ', value: 'faq'},
          {title: 'About Us', value: 'aboutUs'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
    },
  },
})
