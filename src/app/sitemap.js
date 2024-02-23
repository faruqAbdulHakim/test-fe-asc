/**
 * @returns {import('next').MetadataRoute.Sitemap}
 */
export default function sitemap() {
  return [
    {
      url: 'https://test-fe-asc.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
