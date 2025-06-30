import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  //conditional way
  if (request.nextUrl.pathname === '/about') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.redirect(new URL('/', request.url));
};

//one of the way matcher
export const config = {
  matcher: '/about',
};
