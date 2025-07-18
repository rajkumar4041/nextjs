This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

# Prisma Setup
open terminal and Run below Commands
1. npx prisma init --datasource-provider sqlite <- db name as per your convenience
2. npx prisma migrate dev --name init
```

### Prisma Setup

Open terminal and run the following commands:

1. `npx prisma init --datasource-provider sqlite`  
   _Set the DB name as per your convenience_
2. `npx prisma migrate dev --name init`

---

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Or visit the deployed site:  
[https://nextjs-gg4th3r2d-rajkumar-rathods-projects.vercel.app/](https://nextjs-gg4th3r2d-rajkumar-rathods-projects.vercel.app/)

---

## 🏆 Implemented Features & Concepts (Showcased)

### Routing

- **File-based Routing:** Each file/folder in `/app` or `/pages` becomes a route automatically.
- **Nested Routing:** Organize routes in nested folders.
- **Dynamic Routing:** Dynamic segments using brackets, e.g. `[id]` for `/blog/[id]`.
- **Nested Dynamic Routing:** Combine nested and dynamic segments.
- **Catch-all Segment Route:** Catch-all segments (e.g. `[...slug].tsx`) to match multiple/deeply nested routes.
- **Default Catch-all Route:** Fallback for unmatched routes.
- **404 Not Found Page Route:** Custom not found page.
- **Route Grouping:** Group routes without affecting the URL using parentheses, e.g. `(marketing)`.
- **Segment Routes:** Nested folders and parallel routes using segment naming (e.g. `(admin)`, `@shop`, `/(home)`).
- **Parallel Routes:** Render multiple independent routes in the same layout using the `@` convention.
- **Private Folder:** Use `_private` or folders with an underscore to prevent them from becoming routes.
- **File Collision Prevention:** Unique routes for each file, preventing file name collisions.

### Rendering & Data

- **Server & Client Components:** Use `'use client'` for client-side interactivity, server components for performance.
- **Data Fetching:** Fetch data on the server using `fetch`, `getServerSideProps`, `getStaticProps`, or in server components.
- **Static & Dynamic Rendering:** Static generation, server-side rendering, and incremental static regeneration.
- **generateStaticParams & generateDynamicParams:** Pre-generate or dynamically generate params for static and dynamic routes.

### API & Middleware

- **API Routes:** Backend endpoints inside `/api` or route handlers in `/app`.
- **Middleware & Edge:** Run code at the edge for authentication, redirects, etc. using `middleware.ts`.

### UI & Styling

- **Built-in CSS & Styling:** CSS Modules, Tailwind CSS, or CSS-in-JS.
- **Image Optimization:** Use the `next/image` component for optimized and responsive images.
- **Custom Buttons & Transitions:** Interactive UI elements with Tailwind CSS.

### Error Handling & UX

- **Error Handling:** Error boundaries and custom error pages.
- **Error Page:** Customize error handling with `error.tsx` for each route segment.
- **Loading Page:** Show loading states with `loading.tsx` in any route segment.
- **Suspense:** Use `React.Suspense` for streaming UI and granular loading states.

### SEO & Metadata

- **SEO & Metadata:** Enhance pages with metadata for SEO, Open Graph, and social sharing.

### Authentication, Authorization & Protected Routes

- **Clerk Authentication:** User authentication with Clerk.
- **Protected Routes:** Restrict access to certain pages using Clerk's authentication guards.
- **Authorization:** Example of role/email-based access control for sensitive routes.
- **Conditional Rendering:** Show/hide UI based on authentication state.
- **Sign In/Out Modal & User Button:** User authentication controls and modal login setup.
- **Login Setup:** Easy sign-in/sign-out flow with modal and button components.

### State Management

- **Redux State Management:** Global state management with Redux.

### Database

- **Prisma ORM:** Database integration and migrations with Prisma and SQLite.
- **DB-driven Product Listing:** Products fetched from the database.

### Visualization & Content

- **Charts & Visualization:** Charting libraries integration (see `/charts` route).
- **Blog & Content:** Blog pages and dynamic blog routing.
- **Contact Form:** Example contact form implementation.
- **Product Listing:** Static and DB-driven product listing.
- **Lectures Section:** Example lectures section.

### Showcase

- **Showcase Page:** Visual summary of all implemented Next.js concepts.

---

_Explore the [home page](<./src/app/(home)/page.tsx>) for a visual showcase of these concepts!_
