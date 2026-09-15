# Workspace Agent Guidelines & Skill Rules

This repository incorporates all global **Web Development** and **Cloudflare Deployment** skills and standards. All AI agent workflows, code generation, refactoring, and deployment tasks within this project MUST strictly follow the directives below.

---

## 🌐 1. Web Development Standards (`web-development`, `design-director`, `ui-ux-pro-max`)

### 🎨 Visual & Aesthetic Standards
- **Anti-AI-Slop Visuals**: Use clean, modern vector icons (Lucide React, Heroicons, or inline SVG). Avoid generic clipart, 3D glossy icons, or tacky badge highlights. Maintain consistent icon stroke weights (1.5px - 2.0px).
- **Typography & Hierarchy**: Use Google Fonts (`Inter`, `Outfit`, `Plus Jakarta Sans`, `Geist`). Apply explicit font weight scaling (`font-normal`, `font-medium`, `font-semibold`, `font-bold`).
- **Navbar & Responsive Layouts**: 
  - Header items must have clear labels (`FEATURES`, `SOLUTIONS`, `PRICING`, `ABOUT`).
  - Header navigation text must specify `whitespace-nowrap` to prevent awkward wrapping.
  - Provide a responsive drawer/hamburger navigation for viewports `< 768px` (`md:hidden`).
- **Color Systems**: Use harmonious HSL/Hex color palettes (e.g. sleek dark modes, subtle glassmorphism, soft gradients) rather than pure unstyled HTML defaults.

### 🏗️ Architecture & Component Logic
- **Framework & Types**: Build with React 19 / Vite / Next.js using TypeScript for strict type safety.
- **Accessibility (a11y)**:
  - Form inputs must include explicit `id`, `name`, and valid `autoComplete` attributes (e.g., `autoComplete="email"`, `autoComplete="name"`).
  - All interactive buttons/links must have `aria-label` or visible text labels.
  - Ensure clear focus indicators for keyboard navigation.
- **SEO Optimization**:
  - Unique `<title>` and `<meta name="description">` on every page.
  - Exactly one `<h1>` tag hierarchy per page.
  - OpenGraph meta tags (`og:title`, `og:description`, `og:image`).
- **Performance**:
  - Target 90+ Lighthouse score.
  - Optimize bundle sizes, compress static assets (WebP/AVIF).
  - Hardware-accelerated 60fps micro-animations via CSS or Framer Motion primitives.

---

## ⚡ 2. Cloudflare Deployment & Setup (`cloudflare-deployment`, `cloudflare-setup`, `global-setup`)

### 🚨 Critical Rule: Choose the Correct Cloudflare Model
Never mix Cloudflare Pages (Git integration) with Cloudflare Workers static assets!

| Parameter | Model A: Cloudflare Pages (Git) | Model B: Cloudflare Workers + Static Assets |
|---|---|---|
| **Deploy Command (Dashboard)** | *(Leave completely BLANK)* | `npx wrangler deploy` |
| **`wrangler.jsonc` setting** | `pages_build_output_dir: "./dist"` | `assets: { directory: "./dist", not_found_handling: "single-page-application" }` |
| **Use Case** | Native Git push to Pages | Worker script + static frontend assets |

> ⚠️ **CRITICAL**: Never add `assets` to a Pages project (causes `Configuration file for Pages projects does not support "assets"`). Never run `npx wrangler deploy` without `assets.directory` (causes `Missing entry-point to Worker script or to assets directory`).

### 🔒 Security Headers (`public/_headers`)
Create `public/_headers` at project root:
```http
/*
  Content-Security-Policy: default-src 'self' https: data: blob: 'unsafe-inline'; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: blob:; font-src 'self' https: data:; connect-src 'self' https: wss:;
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
```
> *Do not wrap header lines in comment blocks `/* ... */` as Cloudflare edge will ignore commented headers.*

### 🌐 CSP Meta Tag Synchronization (`index.html`)
Include matching CSP meta tag in `index.html`:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self' https: data: blob: 'unsafe-inline'; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: blob:; font-src 'self' https: data:; connect-src 'self' https: wss:;" />
```

### 🛠️ `package.json` Postbuild & SPA Routing Fallback
Ensure standard scripts and postbuild cleanup hook:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "postbuild": "node -e \"const fs = require('fs'); fs.copyFileSync('dist/index.html', 'dist/200.html'); ['dist/_redirects','dist/.assetsignore','dist/wrangler.json'].forEach(f => { try { fs.unlinkSync(f); } catch(_) {} });\"",
    "deploy": "npm run build",
    "lint": "tsc",
    "preview": "vite preview"
  }
}
```

### ⚙️ Build & Dashboard Environment Setup
- **Framework Preset**: None / Vite / React
- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`
- **Environment Variables**: `NODE_VERSION=20`

---

## 🛠️ 3. Quick Reference Troubleshooting Matrix

| Issue / Error | Root Cause | Action / Solution |
|---|---|---|
| `Missing entry-point to Worker script or to assets directory` | `npx wrangler deploy` executed without `assets.directory` in `wrangler.jsonc` | Add `assets: { directory: "./dist", not_found_handling: "single-page-application" }` to `wrangler.jsonc`. |
| `Configuration file for Pages projects does not support "assets"` | `assets` block present in `wrangler.jsonc` for a Pages project | Remove `assets` block; use `pages_build_output_dir: "./dist"`. |
| `Authentication error [code: 10000]` | Embedded `wrangler deploy` in build script within Cloudflare CI | Remove deploy script from dashboard/package.json; let Cloudflare CI deploy. |
| 404 on Direct Route Refresh | SPA routing missing fallback | Copy `dist/index.html` to `dist/200.html` in `postbuild` script and set `not_found_handling: "single-page-application"`. |
| Infinite redirect loop (`code 100324`) | `/* /index.html 200` in `public/_redirects` | Remove `_redirects` file; rely on `wrangler.jsonc` assets configuration. |
