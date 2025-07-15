import { NextResponse } from 'next/server';
import { getProducts } from '@/prisma-db';

// GET /dbProducts/api/get-all
export async function GET() {
  try {
    const products = await getProducts();
    return NextResponse.json(products);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
