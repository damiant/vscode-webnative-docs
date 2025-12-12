# Copilot Instructions for WebNative Docs

## Overview
- Static documentation site for the WebNative VS Code extension, built with Astro Starlight.
- Pages are `.md`/`.mdx` under [src/content/docs/](../src/content/docs); each file maps to a route by path.
- Images live in [src/assets/](../src/assets); public, non-processed assets in [public/](../public).

## Architecture
- Starlight integration configured in [astro.config.mjs](../astro.config.mjs): sets `logo`, `social`, `customCss`, and `sidebar`.
- Sidebar mixes manual entries and `autogenerate` for directories: `web-projects`, `features`, `capacitor`, `integrations`.
- MDX can import Astro and Starlight components. Example usage in [src/content/docs/index.mdx](../src/content/docs/index.mdx):
	- Frontmatter fields like `title`, `description`, `template`, `hero` with `actions`.
	- Embeds: `@astro-community/astro-embed-youtube` and local [src/components/video.astro](../src/components/video.astro).
- Styling via [src/styles/global.css](../src/styles/global.css) and [src/styles/custom.css](../src/styles/custom.css) registered in config.

## Workflows
- Install and run locally:

```bash
npm install
npm run dev   # http://localhost:4321
```

- Build and preview:

```bash
npm run build   # outputs to ./dist
npm run preview
```

- Astro CLI utilities:

```bash
npm run astro -- --help
npm run astro add <integration>
npm run astro check
```

## Conventions & Patterns
- Place docs under directory that matches sidebar section to appear automatically (e.g., [src/content/docs/features/](../src/content/docs/features)).
- Use relative image links from `src/assets` in Markdown (see logos in [src/content/docs/index.mdx](../src/content/docs/index.mdx)).
- Prefer MDX when embedding components: import then use the component tag.
- Link to VS Code resources using the `vscode:` protocol as in the homepage action.
- Keep content static; there is no backend or dynamic data fetching.

## Dependencies
- Core: `astro@^5`, `@astrojs/starlight@0.36.x`, `sharp@0.34.x` for image processing.
- Embeds: `@astro-community/astro-embed-youtube` for YouTube components.
- ESM project (`"type": "module"` in [package.json](../package.json)).

## Add/Update a Page
1. Create `.mdx` in the appropriate folder (e.g., within [src/content/docs/capacitor/](../src/content/docs/capacitor/)).
2. Include frontmatter (`title`, optional `description`; homepage uses `template: splash` and `hero`).
3. Add content; import components as needed (e.g., `YouTube`, `Video`).
4. Use relative assets from [src/assets](../src/assets) or place files in [public](../public).
5. Run the dev server to verify navigation and styling.

See [README.md](../README.md) and [astro.config.mjs](../astro.config.mjs) for details on structure and navigation.
