import {defineField, defineType} from 'sanity'

/**
 * Example Query
 * const FILTERED_BLOG_POSTS_QUERY = `*[_type == "blog-post" && "GBR" in locations[]->isoCode ]{
  _id,
  title,
  author,
  slug,
  publishedAt,
  imageUrl,
  overview,
  body,
  locations[]->{
    _id,
    name,
    isoCode
  }
}`;

const BLOG_POST_QUERY = `*[_type == "blog-post" && slug.current == $slug][0]`;

 * 
 */
export const blogPostType = defineType({
  name: 'blog-post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'string',
    }),
    defineField({
      name: 'imageUrl',
      type: 'string',
    }),
    defineField({
      name: 'overview',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'body',
      type: 'array',
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
  ],
})
