# Alma & Light wedding photography template

Next.js App Router wedding photography portfolio using React, MUI Joy, and
shadcn/ui with Tailwind CSS 4. The portfolio uses a warm editorial style, fluid typography, and responsive layouts.
Fonts are installed locally through Fontsource, so builds do not fetch Google Fonts.

## Run locally

```bash
npm ci
npm run dev
```

- Template: http://localhost:3001
- Registry browser: http://localhost:3001/registry
- Registry catalog: http://localhost:3001/r/registry.json
- Installable template: http://localhost:3001/r/wedding-photography.json

Port 3001 avoids the other project already using port 3000 on this machine.
The development server binds to localhost.

## Install from the registry

In a separate Next.js App Router project with shadcn initialized:

```bash
npx shadcn@latest add http://localhost:3001/r/wedding-photography.json
```

The block includes the portfolio and couple story routes, root layout, Joy theme/provider,
shadcn button, utilities, CSS, and PostCSS configuration. Review the CLI's
prompts before overwriting files in an existing application. This is a visual
template: login and contact pages do not include backend services.

Photographs in the installed block load from the registry host. Keep that host
running, or copy the original files from `public/` into the consuming app and
change image URLs back to local paths. The generated registry replaces image
references with absolute URLs; the original template still uses local images.

This project's `components.json` defines `@zurich`, so this also works locally:

```bash
npx shadcn@latest add @zurich/wedding-photography
```

## Build and validate

```bash
npm run registry:build
npm run lint
npm run typecheck
npm run build
npm start -- --port 3001
```

`predev` and `prebuild` regenerate the registry from `registry.json` and the
current source files. Generated JSON under `public/r/` and `public/registry.json`
is not committed.

## Publish a public registry

Build with the public HTTPS origin where this application and its photos will
be hosted:

```bash
REGISTRY_URL=https://your-domain.example npm run build
```

Deploy the application, then change `@zurich` in `components.json` to
`https://your-domain.example/r/{name}.json`. Consumers can install the template
from `https://your-domain.example/r/wedding-photography.json`.

A localhost registry is available to your local CLI; it is not a public listing.
For inclusion in shadcn's public directory, publish first and follow the
[registry directory submission requirements](https://ui.shadcn.com/docs/registry/registry-directory).

## Demo content and photography

Alma & Light and its couple stories are fictional examples. Added photographs are stored locally, with source links and credit in `public/IMAGE-CREDITS.md`. The gallery uses distinct wedding imagery, a photographer portrait, and responsive navigation and typography.

## Reference design and interactions

The portfolio follows the supplied serif/script photography references, including
blush buttons, image-overlay album cards, overlapping about panels, a photo-grid
lightbox, full-screen mobile navigation, and a dark footer. Use the floating moon/sun
control at the bottom-right to switch between light and dark themes (saved locally).

- `/work`: sort albums by date or couple name.
- `/stories/[slug]`: reveal more photographs; click to open the lightbox, use
  arrow keys or the previous/next buttons, copy an image link, or press Escape.
- `/news` and `/news/[slug]`: travel and photography journal examples.
- `/contact`: validated enquiry form with an explicit demo confirmation.
- Newsletter: validated demo signup; no personal data is stored or transmitted.
- Unknown URLs: custom photography-themed 404 page.

Forms are previews. Connect a real email or newsletter provider before launch.
