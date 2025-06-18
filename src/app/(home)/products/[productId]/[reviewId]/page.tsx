const ReviewDetail = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId } = await params;
  const { reviewId } = await params;

  if (reviewId === '1') {
    throw new Error('This is a client component, it should not be rendered on the server.');
  }

  return (
    <div>
      product id: {productId} reviewId: {reviewId}
    </div>
  );
};

export default ReviewDetail;
