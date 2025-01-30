import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export function getEditorClient(token: string) {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
  })

  return client.withConfig({
    token: token,
    useCdn: false,
    ignoreBrowserTokenWarning: true,
  })
}
