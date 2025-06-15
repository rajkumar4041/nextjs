async function ProductDetail({ params }: { params: Promise<{ productId: string }> }) {
  const productId = params.then((e) => e.productId);

  return <div>{productId}</div>;
}

export default ProductDetail;
