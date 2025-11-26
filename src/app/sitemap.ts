import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://solgas-surquillo.vercel.app';

// Distritos disponibles
const distritos = [
  'surquillo',
  'miraflores',
  'san-isidro',
  'san-borja',
  'surco',
  'la-molina',
  'magdalena-del-mar',
  'jesus-maria',
  'pueblo-libre',
  'lince',
  'barranco',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/productos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/servicios`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Agregar rutas de distritos
  const districtRoutes: MetadataRoute.Sitemap = distritos.map((distrito) => ({
    url: `${siteUrl}/${distrito}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...baseRoutes, ...districtRoutes];
}

