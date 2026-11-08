import type { MetadataRoute } from 'next';
import { servicios } from '@/lib/servicios';
import { cursos } from '@/lib/cursos';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();
  return [
    { url: SITE, lastModified: ahora, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE}/servicios`, lastModified: ahora, changeFrequency: 'monthly', priority: 0.9 },
    ...servicios.map((s) => ({ url: `${SITE}/servicios/${s.slug}`, lastModified: ahora, changeFrequency: 'monthly', priority: 0.8 })),
    { url: `${SITE}/cursos`, lastModified: ahora, changeFrequency: 'monthly', priority: 0.8 },
    ...cursos.map((c) => ({ url: `${SITE}/cursos/${c.slug}`, lastModified: ahora, changeFrequency: 'monthly', priority: 0.8 })),
    { url: `${SITE}/nosotros`, lastModified: ahora, changeFrequency: 'yearly', priority: 0.7 },
  ];
}
