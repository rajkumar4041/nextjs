# Caching in Next.js

Next.js provides several caching strategies to optimize performance and reduce server load. Understanding and leveraging these caching mechanisms can significantly improve your application's speed and scalability.

## 1. Static Generation (SSG) Caching

- **What:** Pages are generated at build time and served as static HTML.
- **How:** Use `export async function getStaticProps()` and `getStaticPaths()` in your page components.
- **Cache:** Served from CDN edge locations, no server computation on each request.

## 2. Server-side Rendering (SSR) Caching

- **What:** Pages are generated on each request.
- **How:** Use `export async function getServerSideProps()`.
- **Cache:** By default, no caching. You can add HTTP cache headers to control browser/proxy caching.

## 3. Incremental Static Regeneration (ISR)

- **What:** Allows static pages to be updated after deployment.
- **How:** Use `revalidate` in `getStaticProps` return value.
- **Cache:** Pages are regenerated in the background after the specified time.

```tsx
export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: { data },
    revalidate: 60,
  };
}
```
