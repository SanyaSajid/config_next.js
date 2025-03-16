import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'kd8y05km', 
  dataset: 'production', 
  useCdn: true,
  apiVersion: '2023-01-01',
});
