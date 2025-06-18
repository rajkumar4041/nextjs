async function ProductDetail({ params }: { params: Promise<{ productId: string }> }) {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay

  const productId = params.then((e) => {
    if (e.productId === '1') {
      throw new Error('This is a client component, it should not be rendered on the server.');
    }

    return e.productId;
  });

  return (
    <div className="flex justify-center items-center h-screen text-2xl">
      Product Detail Page for ID:
      <div className="text-blue-500 font-bold">{await productId}</div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Review
      </button>
    </div>
  );
}

export default ProductDetail;
