import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { SITE_ROUTES } from '@/lib/constants';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SITE_ROUTES.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path.startsWith('/compliance') || path.startsWith('/solutions') ? 0.8 : 0.7,
  }));
}
