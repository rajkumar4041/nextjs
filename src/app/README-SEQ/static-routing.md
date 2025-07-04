# Static Routing in Next.js

Static routing in Next.js is based on the file system. Each file inside the `pages` (or `app` in the App Router) directory automatically becomes a route in your application. This approach makes routing simple, predictable, and easy to manage.

---

## How Static Routing Works

- **File-based:** The structure of your `pages` or `app` directory maps directly to your URL routes.
- **Automatic:** No need to manually configure routes; Next.js handles it for you.
- **Supports Nested Routes:** Create folders for nested routes.

---

## Example: Pages Directory

- `pages/index.tsx` → `/`
- `pages/about.tsx` → `/about`
- `pages/blog/index.tsx` → `/blog`
- `pages/blog/[id].tsx` → `/blog/:id` (dynamic segment)

---

## Example: App Directory (App Router)

---

## Static vs. Dynamic Routes

- **Static Route:** Defined by a fixed file name (e.g., `about.tsx`).
- **Dynamic Route:** Defined by brackets (e.g., `[id].tsx`).

---

## Benefits

- **Simplicity:** No need for a separate routing configuration.
- **Predictability:** URL structure matches your file structure.
- **SEO Friendly:** Each route is a real page, easily indexed by search engines.

---
