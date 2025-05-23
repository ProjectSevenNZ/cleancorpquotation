/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\pages\studio\[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'
import { client } from './sanity/lib/client'

const quotes = await client.fetch(`*[_type == 'quote']`);
const businessQuotes = await client.fetch(`*[_type == 'quote' && !(email match '@gmail.com' || email match '@hotmail.com' || email match '@hotmail.co.nz' || email match '@yahoo.com')]`);
const individualQuotes = await client.fetch(`*[_type == 'quote' && (email match '@gmail.com' || email match '@hotmail.com' || email match '@hotmail.co.nz' || email match '@yahoo.com')]`);

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            S.listItem()
              .title(`Quotes (${quotes.length})`)
              .child(
                S.list()
                  .title(`Quotes (${quotes.length})`)
                  .items([
                    S.listItem()
                      .title(`Business (${businessQuotes.length})`)
                      .child(
                        S.documentTypeList('quote')
                          .filter("_type == 'quote' && !(email match '@gmail.com' || email match '@hotmail.com' || email match '@hotmail.co.nz' || email match '@yahoo.com')")
                          .title(`Business (${businessQuotes.length})`)
                      ),
                    S.listItem()
                      .title(`Individual (${individualQuotes.length})`)
                      .child(
                        S.documentTypeList('quote')
                          .filter("_type == 'quote' && (email match '@gmail.com' || email match '@hotmail.com' || email match '@hotmail.co.nz' || email match '@yahoo.com')")
                          .title(`Individual (${individualQuotes.length})`)
                      )
                  ])
              )
          ])
      }
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
