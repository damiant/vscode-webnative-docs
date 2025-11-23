# Copilot Instructions for WebNative Docs

## Project Overview
- This is a documentation site for the WebNative VS Code Extension, built with [Astro Starlight](https://starlight.astro.build).
- Content is organized in Markdown/MDX files under `src/content/docs/`, each file mapping to a route.
- Images are stored in `src/assets/` and referenced via relative links in docs.
- Static assets (favicons, etc.) go in `public/`.

## Key Files & Structure
- `astro.config.mjs`: Astro configuration.
- `tsconfig.json`: TypeScript config for type safety.
- `src/content/docs/`: Main documentation source (MD/MDX).
- `src/assets/`: Images for documentation.
- `src/components/`: Astro components (e.g., `video.astro`).
- `content.config.ts`: Content configuration for Starlight.

## Developer Workflows
- **Install dependencies:** `npm install`
- **Start dev server:** `npm run dev` (local at `localhost:4321`)
- **Build site:** `npm run build` (output to `./dist/`)
- **Preview build:** `npm run preview`
- **Astro CLI:** `npm run astro ...` (e.g., `astro add`, `astro check`)

## Patterns & Conventions
- All documentation lives in `src/content/docs/` as `.md` or `.mdx`.
- Use relative paths for images from `src/assets/`.
- Custom components (Astro) can be used in MDX files for rich content.
- No custom build/test scripts beyond standard Astro commands.
- No backend/server code; this is a static site.

## Integration Points
- Built on Astro Starlight; refer to [Starlight docs](https://starlight.astro.build) for advanced features.
- No external APIs or dynamic data sources.

## Example: Adding a Doc Page
1. Create a new `.mdx` file in `src/content/docs/` (e.g., `features/new-feature.mdx`).
2. Add content using Markdown/MDX syntax. Import Astro components if needed.
3. Reference images from `src/assets/`.
4. Run `npm run dev` to preview locally.

---
For more details, see `README.md` and `astro.config.mjs`.
