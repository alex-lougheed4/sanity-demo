import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {deskStructure} from './deskstructure'
import {documentInternationalization} from '@sanity/document-internationalization'
import {amplitudeExperiment} from '@tinloof/sanity-amplitude-experiment'

export default defineConfig([
  {
    projectId: '7qpn02ls',
    dataset: 'production',
    name: 'production-workspace',
    basePath: '/production',
    title: 'Production',
    subtitle: 'production',
    plugins: [
      structureTool({
        structure: (S) => deskStructure(S),
      }),
      visionTool(),
      documentInternationalization({
        // Required configuration
        supportedLanguages: [
          {id: 'de', title: 'German'},
          {id: 'en', title: 'English'},
        ],
        schemaTypes: ['blog-post', 'landing-page', 'product'],
      }),
      amplitudeExperiment(),
    ],
    schema: {
      types: schemaTypes,
    },
  },
  {
    projectId: '7qpn02ls',
    dataset: 'production',
    name: 'staging-workspace',
    basePath: '/staging',
    title: 'Staging',
    subtitle: 'staging',
    plugins: [
      structureTool({
        structure: (S) => deskStructure(S),
      }),
      visionTool(),
      amplitudeExperiment(),
    ],
    schema: {
      types: schemaTypes,
    },
  },
])
