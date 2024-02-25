import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  /**
   * @see https://nextjs.org/docs/pages/building-your-application/routing/internationalization
   */
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US', 'sv-SE'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
  },
};

/**
 * @see https://nextjs.org/docs/pages/building-your-application/configuring/mdx#remark-and-rehype-plugins
 */
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
