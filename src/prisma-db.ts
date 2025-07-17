import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const addManyProducts = async () => {
  const productCount = await prisma.product.count();

  if (productCount === 0) {
    await prisma.product.createMany({
      data: [
        { title: "Product 1", price: 100, description: "This is product 1" },
        { title: "Product 2", price: 200, description: "This is product 2" },
        { title: "Product 3", price: 300 },
      ],
    });
  }
};

addManyProducts();

export const getProducts = async () => {
  return await prisma.product.findMany();
};

export const getProductById = async (id: number) => {
  return await prisma.product.findUnique({ where: { id } });
};

export const AddProduct = async (data: {
  title: string;
  price: number;
  description?: string;
}) => {
  return await prisma.product.create({ data });
};

export const updateProduct = async (
  id: number,
  data: {
    title?: string;
    price?: number;
    description?: string;
  }
) => {
  return await prisma.product.update({
    where: { id },
    data,
  });
};

export const deleteProduct = async (id: number) => {
  return await prisma.product.delete({ where: { id } });
};
