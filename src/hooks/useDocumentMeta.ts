import { useEffect } from 'react'
import { siteConfig } from '../data/siteConfig'

type MetaOptions = {
  title?: string
  description?: string
  /** Appended to the canonical site URL. Use '' for the homepage. */
  path?: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

function setTag(selector: string, attribute: string, key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

function setStructuredData(id: string, data: Record<string, unknown> | Record<string, unknown>[]) {
  let script = document.getElementById(id) as HTMLScriptElement | null
  if (!script) {
    script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = id
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
}

/** Updates the document title, meta description, canonical URL and JSON-LD. */
export function useDocumentMeta({ title, description, path = '', jsonLd }: MetaOptions) {
  useEffect(() => {
    const fullTitle = title ?? siteConfig.seo.title
    const fullDescription = description ?? siteConfig.seo.description
    const canonical = new URL(path || '/', siteConfig.siteUrl).toString()

    document.title = fullTitle
    setTag('meta[name="description"]', 'name', 'description', fullDescription)
    setTag('meta[property="og:title"]', 'property', 'og:title', fullTitle)
    setTag('meta[property="og:description"]', 'property', 'og:description', fullDescription)
    setTag('meta[property="og:url"]', 'property', 'og:url', canonical)
    setTag('meta[property="og:type"]', 'property', 'og:type', path ? 'article' : 'website')
    setTag('meta[property="og:image"]', 'property', 'og:image', new URL(siteConfig.seo.ogImage, siteConfig.siteUrl).toString())
    setTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    setTag('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle)
    setTag('meta[name="twitter:description"]', 'name', 'twitter:description', fullDescription)
    setTag('meta[name="twitter:image"]', 'name', 'twitter:image', new URL(siteConfig.seo.ogImage, siteConfig.siteUrl).toString())
    setCanonical(canonical)

    if (jsonLd) {
      setStructuredData('page-structured-data', jsonLd)
    }
  }, [title, description, path, jsonLd])
}
