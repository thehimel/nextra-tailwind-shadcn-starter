import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const BRAND_NAME = 'Core'
const REPO = "https://github.com/thehimel/nextra-tailwind-shadcn-starter"

const config: DocsThemeConfig = {
  logo: <span>{BRAND_NAME}</span>,
  project: {
    link: REPO,
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com',
  footer: {
    text: 'Docs Template',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    const { title: pageTitle } = useConfig()
    return {
      additionalLinkTags: [
        {
          rel: 'icon',
          href: '/favicon.svg',
          type: 'image/svg+xml',
        }
      ],
      title: asPath !== '/' ? `${pageTitle} - ${BRAND_NAME}` : BRAND_NAME,
    }
  },
}

export default config
