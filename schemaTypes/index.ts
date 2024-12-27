import {postType} from './postType'
import {blogPostType} from './blogPostType'
import landingPage from './landingPageType'
import productType from './productType'

/**
 * Product Copies
Information Pages
Landing Pages
Blog Posts
Translations
Maybe even having the categories as CMS data to drive the site structure
(and products)
A/B testing with Amplitude must work fine
Product copy and probably images too
 */
export const schemaTypes = [postType, blogPostType]

export const levitySchemaTypes = []

export const medexpressSchemaTypes = []

export const rocketrxSchemaTypes = []

export const dermaticaSchemaTypes = []
