import { NextRequest, NextResponse } from 'next/server';
import { AddProduct, deleteProduct, getProductById, getProducts, updateProduct } from '@/prisma-db';

// GET /api/users?productId=1
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get('productId');

  if (productId) {
    const product = await getProductById(Number(productId));
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json(product);
  }

  const products = await getProducts();
  return NextResponse.json(products);
}

// POST /api/products
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { title, price, description } = data;
    if (!title || !price || !description) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }
    const newProduct = await AddProduct({ title, price: Number(price), description });
    return NextResponse.json({ message: 'Product created', product: newProduct }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT /api/users?productId=1
export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('productId');
    if (!productId) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }
    const data = await request.json();
    const updated = await updateProduct(Number(productId), data);
    return NextResponse.json({ message: 'Product updated', product: updated });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE /api/users?productId=1
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('productId');
    if (!productId) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }
    await deleteProduct(Number(productId));
    return NextResponse.json({ message: 'Product deleted' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
