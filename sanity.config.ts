import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {
  levitySchemaTypes,
  medexpressSchemaTypes,
  rocketrxSchemaTypes,
  schemaTypes,
} from './schemaTypes' // global schema types

// Define brand-specific schema types

export default defineConfig([
  // Levity US
  {
    name: 'levity-us',
    title: 'Levity US',
    basePath: '/levity-us/production',
    projectId: '7qpn02ls',
    dataset: 'production',
    plugins: [visionTool(), structureTool()],
    schema: {
      types: [...schemaTypes, ...levitySchemaTypes],
    },
  },
  {
    name: 'levity-us-dev',
    title: 'Levity US Dev',
    basePath: '/levity-us/dev',
    projectId: '7qpn02ls',
    dataset: 'development',
    plugins: [visionTool(), structureTool()],
    schema: {
      types: [...schemaTypes, ...levitySchemaTypes],
    },
  },
  // Levity UK
  {
    name: 'levity-uk',
    title: 'Levity UK',
    basePath: '/levity-uk/production',
    projectId: '7qpn02ls',
    dataset: 'production',
    plugins: [visionTool(), structureTool()],
    schema: {
      types: [...schemaTypes, ...levitySchemaTypes],
    },
  },
  {
    name: 'levity-uk-dev',
    title: 'Levity UK Dev',
    basePath: '/levity-uk/dev',
    projectId: '7qpn02ls',
    dataset: 'development',
    plugins: [visionTool(), structureTool()],
    schema: {
      types: [...schemaTypes, ...levitySchemaTypes],
    },
  },
  // Medexpress UK
  {
    name: 'medexpress-uk',
    title: 'Medexpress UK',
    basePath: '/medexpress-uk/production',
    projectId: '7qpn02ls',
    dataset: 'production',
    plugins: [visionTool(), structureTool()],
    schema: {
      types: [...schemaTypes, ...medexpressSchemaTypes],
    },
  },
  {
    name: 'medexpress-uk-dev',
    title: 'Medexpress UK Dev',
    basePath: '/medexpress-uk/dev',
    projectId: '7qpn02ls',
    dataset: 'development',
    plugins: [visionTool(), structureTool()],
    schema: {
      types: [...schemaTypes, ...medexpressSchemaTypes],
    },
  },
  // ZipHealth US
  {
    name: 'ziphealth-us',
    title: 'ZipHealth US',
    basePath: '/ziphealth-us/production',
    projectId: '7qpn02ls',
    dataset: 'production',
    plugins: [visionTool(), structureTool()],
    schema: {
      types: [...schemaTypes, ...medexpressSchemaTypes],
    },
  },
  {
    name: 'ziphealth-us-dev',
    title: 'ZipHealth US Dev',
    basePath: '/ziphealth-us/dev',
    projectId: '7qpn02ls',
    dataset: 'development',
    plugins: [visionTool(), structureTool()],
    schema: {
      types: [...schemaTypes, ...medexpressSchemaTypes],
    },
  },
  // Rocketrx US
  {
    name: 'rocketrx-us',
    title: 'Rocketrx US',
    basePath: '/rocketrx-us/production',
    projectId: '7qpn02ls',
    dataset: 'production',
    plugins: [visionTool(), structureTool()],
    schema: {
      types: [...schemaTypes, ...rocketrxSchemaTypes],
    },
  },
  {
    name: 'rocketrx-us-dev',
    title: 'Rocketrx US Dev',
    basePath: '/rocketrx-us/dev',
    projectId: '7qpn02ls',
    dataset: 'development',
    plugins: [visionTool(), structureTool()],
    schema: {
      types: [...schemaTypes, ...rocketrxSchemaTypes],
    },
  },
  // Rocketrx UK
  {
    name: 'rocketrx-uk',
    title: 'Rocketrx UK',
    basePath: '/rocketrx-uk/production',
    projectId: '7qpn02ls',
    dataset: 'production',
    plugins: [visionTool(), structureTool()],
    schema: {
      types: [...schemaTypes, ...rocketrxSchemaTypes],
    },
  },
  {
    name: 'rocketrx-uk-dev',
    title: 'Rocketrx UK Dev',
    basePath: '/rocketrx-uk/dev',
    projectId: '7qpn02ls',
    dataset: 'development',
    plugins: [visionTool(), structureTool()],
    schema: {
      types: [...schemaTypes, ...rocketrxSchemaTypes],
    },
  },
])
