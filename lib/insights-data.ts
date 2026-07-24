export type InsightMeta = {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  image: string
  fileName: string
}

export const INSIGHTS: InsightMeta[] = [
  {
    slug: 'repeatability-matters',
    title: 'Why Repeatability Matters More Than Taste in FMCG Snacks',
    excerpt:
      'Why the products consumers comfortably return to often outperform the ones that only impress on the first bite.',
    category: 'Research',
    readTime: '8 min read',
    image: '/images/insights/consumer-behaviour.png',
    fileName: 'insight-1.md',
  },
  {
    slug: 'texture-retention-mechanism',
    title: 'Texture Is Not Just a Sensory Attribute — It Is a Retention Mechanism',
    excerpt:
      'Why texture quietly shapes trust, freshness perception, bingeability, and repeat purchase behavior in snacks.',
    category: 'Framework',
    readTime: '7 min read',
    image: '/images/insights/taste-texture.png',
    fileName: 'insight-2.md',
  },
  {
    slug: 'price-sensitivity-loyalty',
    title: 'Price Sensitivity Does Not Always Mean Weak Consumer Loyalty',
    excerpt:
      'Why switching behavior often reflects adaptation, not abandonment, and how brands should measure elasticity.',
    category: 'Insights',
    readTime: '8 min read',
    image: '/images/insights/pricing-loyalty.png',
    fileName: 'insight-3.md',
  },
] as const
