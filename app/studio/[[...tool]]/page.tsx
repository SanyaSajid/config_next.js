'use client'

import { Studio } from 'sanity'
import config from '../../../sanity.config'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return <Studio config={config} />
}
