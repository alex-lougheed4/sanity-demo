import {defineField, defineType} from 'sanity'
/**
 * example query
 * const LANDING_PAGE_QUERY = `*[_type == "landing-page" && slug.current == $slug][0]{
    title,
    slug,
    category,
    medications[]->{
      _id,
      name,
      doses,
    },
    description,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    body,
    locations[]->{
      _id,
      name,
      isoCode,
    },
    brands[]->{
      _id,
      name,
    },
    language
  }`;
 */
export default defineType({
  type: 'document',
  name: 'landing-page',
  title: 'Landing Page',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'category',
      title: 'Category',
      options: {
        list: [
          {title: 'Weight Loss', value: 'weightLoss'},
          {title: 'Hair Loss', value: 'hairLoss'},
          {title: 'Erectile Dysfunction', value: 'erectileDysfunction'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'medications',
      title: 'Medications',
      of: [{type: 'reference', to: [{type: 'product'}]}],
    }),
    defineField({
      type: 'text',
      name: 'description',
      title: 'Description',
    }),
    defineField({
      type: 'image',
      name: 'mainImage',
      title: 'Main Image',
    }),
    defineField({
      type: 'array',
      name: 'body',
      title: 'Body',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'locations',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'location'}]}],
      title: 'Locations',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'brands',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'brand'}]}],
      title: 'Brands',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
    }),
  ],
})
