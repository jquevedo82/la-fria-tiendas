# La Fría — Directorio de Tiendas

Frontend liviano (React + Vite + Tailwind) de la vitrina pública de La Fría, García de Hevia.
Consume el endpoint público `GET /api/directorio/:groupSlug` del backend de TuCatálogo
(`tucatalogo-svke.onrender.com`), sin autenticación.

Proyecto bespoke — el contenido de las secciones (Hero, Acerca de, Ubicación, Contacto) está
escrito directo en los componentes, no viene de una config genérica. Si se replica este
directorio para otro cliente, se clona este repo y se adapta el contenido/diseño a mano.

## Desarrollo local

```bash
npm install
cp .env.example .env   # ajustar VITE_API_URL si hace falta
npm run dev
```

## Variables de entorno

- `VITE_API_URL` — URL del backend de TuCatálogo
- `VITE_GROUP_SLUG` — slug del grupo en la tabla `groups` (`la-fria`)

## Deploy

Render Static Site, build command `npm run build`, publish directory `dist`.
