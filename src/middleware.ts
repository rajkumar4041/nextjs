import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  const response = NextResponse.next();

  //conditional way
  if (response.cookies.get('name')) {
    console.log('check cookie', response.cookies.get('name'));
  } else {
    response.cookies.set('abc', '12345');
    response.headers.set('my-header', 'my-val');

    return response;
  }

  if (request.nextUrl.pathname === '/about') {
    // console.log('hit');
    return NextResponse.redirect(new URL('/', request.url));
  }

  // return NextResponse.redirect(new URL('/', request.url));
};

//one of the way matcher
// export const config = {
//   matcher: '/about',
// };
