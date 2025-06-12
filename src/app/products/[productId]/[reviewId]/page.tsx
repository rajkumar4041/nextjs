const ReviewDetail = async ({ params }: { params: { productId: string; reviewId: string } }) => {
  const productId = params.productId;
  const reviewId = params.reviewId;

  return (
    <div>
      product id: {productId} reviewId: {reviewId}
    </div>
  );
};

export default ReviewDetail;
