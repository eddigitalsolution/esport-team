---
name: web-and-cloudflare-skills
description: Enforces all global web development, design standards, and Cloudflare deployment/setup skills across the workspace.
trigger: always_on
---

# Web Development & Cloudflare Deployment Rules

## 1. Web Development & UI/UX Directives
- Apply modern, responsive layout patterns with clean typography (Inter, Outfit, Plus Jakarta Sans, Geist).
- Anti-AI-slop icon selection: Use Lucide React or vector line SVGs with uniform stroke width. No glossy 3D icons or generic clipart badges.
- Prevent navbar link wrapping by using `whitespace-nowrap` on header elements and providing a mobile drawer on screens `< 768px`.
- Enforce accessibility: input fields must include `id`, `name`, and valid `autoComplete` attributes. Buttons/links must have `aria-label` or descriptive text.
- Enforce SEO: single `<h1>` hierarchy per page, descriptive `<title>`, `<meta name="description">`, and OpenGraph meta tags.

## 2. Cloudflare Deployment Directives
- **Model A (Pages)**: Dashboard Deploy command MUST be blank; `wrangler.jsonc` specifies `pages_build_output_dir: "./dist"`. Do NOT add `assets` block.
- **Model B (Workers)**: Dashboard Deploy command is `npx wrangler deploy`; `wrangler.jsonc` specifies `assets: { "directory": "./dist", "not_found_handling": "single-page-application" }`.
- Always generate `public/_headers` with active Security Headers and matching `<meta http-equiv="Content-Security-Policy">` in `index.html`.
- Always include `NODE_VERSION=20` in Cloudflare build environment variables.
- Add `postbuild` script in `package.json` to duplicate `dist/index.html` to `dist/200.html` and clean up conflicting redirect files.
