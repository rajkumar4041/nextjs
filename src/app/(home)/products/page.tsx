'use client';

import Link from 'next/link';

const page = () => {
  return (
    <div className="flex mt-[10%] gap-2">
      {[...Array(7)].map((_, idx) => (
        <Link href={`products/${idx + 1}`} key={idx}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Products {idx + 1}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default page;
