'use client'

/**
 * This configuration is used for the Sanity Studio that’s mounted on the `/app/Studio/[[...tool]]/page.tsx` route.
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Import API versioning details
import { apiVersion, dataset, projectId } from './sanity/env'

// Import the schema
import { schemaTypes } from './sanity/schemaTypes' // Ensure this file exports a `types` array

// Import the structure for custom sidebar navigation
import { structure } from './sanity/structure'

export default defineConfig({
  basePath: '/Studio',
  projectId,
  dataset,
  // Corrected schema format
  schema: {
    types: schemaTypes, // Now correctly references the schema array
  },
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
