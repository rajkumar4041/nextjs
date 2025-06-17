'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const ProductLayout = ({ children }: { children: ReactNode }) => {
  const params = useParams();
  const productId = params?.productId; // Assumes route is /products/[productId]

  if (productId === '1') {
    throw new Error(
      'Product ID is not defined. This component should be rendered with a valid productId.'
    );
  }
  // throw new Error('This is a client component, it should not be rendered on the server.');
  return (
    <div className="flex gap-2 flex-col">
      <div className="flex mt-[10%] gap-2">
        {[...Array(7)].map((_, idx) => {
          const reviewId = idx + 1;
          return (
            <Link href={`/products/${productId}/${reviewId}`} key={reviewId}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Review {reviewId}
              </button>
            </Link>
          );
        })}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ProductLayout;
