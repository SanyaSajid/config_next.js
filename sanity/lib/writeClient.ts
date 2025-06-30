import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

if (!process.env.SANITY_WRITE_TOKEN) {
  throw new Error("Missing SANITY_WRITE_TOKEN environment variable");
}


export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, 
  token: process.env.SANITY_WRITE_TOKEN, 
})
