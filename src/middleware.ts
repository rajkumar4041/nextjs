import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  const response = NextResponse.next();

  //conditional way
  if (response.cookies.get("name")) {
    console.log("check cookie", response.cookies.get("name"));
  } else {
    response.cookies.set("abc", "12345");
    response.headers.set("my-header", "my-val");

    return response;
  }

  if (request.nextUrl.pathname === "/about") {
    // console.log('hit');
    return NextResponse.redirect(new URL("/", request.url));
  }

  // return NextResponse.redirect(new URL('/', request.url));
};

//one of the way matcher
// export const config = {
//   matcher: '/about',
// };

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
