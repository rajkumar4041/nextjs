import { users } from '@/app/data/users';

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const userId = (await params).id;

  if (!userId) {
    return Response.json({ error: 'User ID is required' }, { status: 400 });
  }

  const user = users.find((user) => user.id === parseInt(userId));

  return Response.json(user || { error: 'User not found' }, { status: user ? 200 : 404 });
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const userId = (await params).id;

  if (!userId) {
    return Response.json({ error: 'User ID is required' }, { status: 400 });
  }

  const data = await request.json();

  const userIndex = users.findIndex((user) => user.id === parseInt(userId));

  if (userIndex === -1) {
    return Response.json({ error: 'User not found' }, { status: 404 });
  }

  users[userIndex] = { ...users[userIndex], ...data };

  return Response.json(
    { message: 'User updated successfully', user: users[userIndex] },
    { status: 200 }
  );
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const userId = (await params).id;

  if (!userId) {
    return Response.json({ error: 'User ID is required' }, { status: 400 });
  }

  const userIndex = users.findIndex((user) => user.id === parseInt(userId));

  if (userIndex === -1) {
    return Response.json({ error: 'User not found' }, { status: 404 });
  }

  users.toSpliced(userIndex, 1);

  return Response.json({ message: 'User deleted successfully' }, { status: 200 });
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const userId = (await params).id;

  if (!userId) {
    return Response.json({ error: 'User ID is required' }, { status: 400 });
  }

  const data = await request.json();

  const userIndex = users.findIndex((user) => user.id === parseInt(userId));

  if (userIndex === -1) {
    return Response.json({ error: 'User not found' }, { status: 404 });
  }

  users[userIndex] = { ...users[userIndex], ...data };

  return Response.json(
    { message: 'User updated successfully', user: users[userIndex] },
    { status: 200 }
  );
}
