# Toldo Lux

Web moderna y SEO-first para Toldo Lux, empresa de toldos, pérgolas y protección solar en Segur de Calafell.

## Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- next-themes (dark/light)
- react-image-gallery
- Yarn 4 con versiones fijas

## Scripts

```bash
yarn dev      # desarrollo
yarn build    # build estático en /dist
yarn lint     # lint
```

## Estructura

- `app/[locale]/` — páginas y layouts por idioma
- `components/` — componentes reutilizables
- `sections/` — secciones de la home
- `messages/` — traducciones (es, ca, en)
- `public/images/` — imágenes generadas con IA

## SEO incluido

- Metadata dinámica por idioma
- hreflang y canonical
- sitemap.xml y robots.txt
- JSON-LD LocalBusiness

## Reseñas de Google

La sección de reseñas (`sections/Reviews.tsx`) se sincroniza automáticamente desde Google Places API (New):

- Crear una API key en [Google Cloud Console](https://console.cloud.google.com/google/maps-apis) con la **Places API (New)** habilitada y facturación asociada.
- Añadirla a `.env.local` (nunca commitear):

  ```bash
  GOOGLE_MAPS_API_KEY=tu_api_key
  ```

- Sin key, la sección muestra un snapshot estático de reseñas reales (`lib/reviews.ts`).
- El `place_id` se resuelve en runtime por nombre + dirección, y los datos se cachean 24h (`unstable_cache`), así las reseñas nuevas aparecen solas en menos de un día. Coste estimado: < $1/mes.

## Notas

- Los menús son visuales; las rutas internas se añadirán en siguientes fases.
- El CTA de presupuesto es visual por ahora, sin lógica de envío.
- Reemplaza las imágenes de `public/images/` por el material definitivo del cliente.
