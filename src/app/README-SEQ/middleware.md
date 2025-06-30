# Middleware in Next.js

Middleware in Next.js allows you to run code before a request is completed. It enables you to modify the request or response, perform authentication, redirects, rewrites, and more—at the edge, before reaching your route handlers or pages.

## Key Features

- **Runs before rendering:** Middleware executes before a request is processed by your application.
- **Edge runtime:** Runs at the edge, providing low-latency responses.
- **Flexible:** Can be used for authentication, logging, redirects, rewrites, and more.

## How to Use Middleware

1. **Create a `middleware.ts` or `middleware.js` file** at the root of your `src` or project directory.

2. **Example: Basic Middleware**

```tsx
// filepath: /src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Example: Redirect users who are not  
  const isAuthenticated = request.cookies.get('token');
  if (!isAuthenticated && request.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}
```
