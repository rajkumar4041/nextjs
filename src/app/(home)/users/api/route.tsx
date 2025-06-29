import { cookies, headers } from 'next/headers';
import { NextRequest } from 'next/server';
import { log } from 'console';
import { users } from '@/app/data/users';

export async function GET(request: NextRequest) {
  const searchParam = request.nextUrl.searchParams;
  const name = searchParam.get('name');
  const reqHeaders = await headers();
  const reqCookies = await cookies();
  log('Cookies:', reqCookies.get('theme'));
  const role = reqHeaders.get('role');

  if (!name && !role) {
    return new Response(`<h2>Role or name not found</h2>`, {
      headers: { 'content-type': 'text/html', 'set-cookie': 'theme=dark' },
    });
  }

  return Response.json(
    users?.filter((user) =>
      //name search by query
      user.name?.toLocaleLowerCase().startsWith(
        name?.toLocaleLowerCase() ||
          //role search by header
          user?.role?.toLocaleLowerCase(role?.toLocaleLowerCase()) ||
          ''
      )
    ) || users
  );
}

export async function POST(request: NextRequest) {
  const data = await request.json();

  const newUser = {
    id: users.length + 1,
    ...data,
  };

  users.push(newUser);

  const resp = { message: 'User created successfully', user: newUser };

  return Response.json(resp, { status: 201 });
}
