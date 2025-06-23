import { users } from '@/app/data/users';

export function GET() {
  return Response.json(users);
}

export async function POST(response: Response) {
  const data = await response.json();

  const newUser = {
    id: users.length + 1,
    ...data,
  };

  users.push(newUser);

  const resp = { message: 'User created successfully', user: newUser };

  return Response.json(resp, { status: 201 });
}
