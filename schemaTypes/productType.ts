import {defineField, defineType} from 'sanity'

/**EXAMPLE QUERY
  const PRODUCT_QUERY = `*[_type == "product" && slug.current == $slug][0]{
    name,
    slug,
    overview,
    doses,
    images[]{
      asset->{
        _id,
        url
      }
    },
    category,
    locations[]->{
      _id,
      name,
      isoCode
    },
    brands[]->{
      _id,
      title
    },
    language
  }`; */
export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    }),
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
  preview: {
    select: {
      title: 'name',
      subtitle: 'language',
    },
  },
})
