'use client';

import { use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Lectures = ({ params }: { params: Promise<{ slugs: string[] }> }) => {
  const { slugs } = use(params);
  console.log('Lectures slugs:', slugs);
  const router = useRouter();

  if (slugs?.length === 1) {
    return (
      <div className="flex flex-col gap-2">
        <Link href={`/lectures/${slugs[0]}/2`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            sub Lecture of lecture {slugs[0]}
          </button>
        </Link>
        <button onClick={() => router.back()}>back</button>
      </div>
    );

    // return <div>Lecture: {slugs[0]}</div>;

    // return NotFoundPage();

    // works fine
    // return <NotFoundPage/>
  }

  if (slugs?.length === 2) {
    return <div>Lecture: {slugs[1]}</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      {[...Array(7)].map((_, idx) => (
        <Link href={`/lectures/${idx + 1}`} key={idx}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Lecture {idx + 1}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Lectures;
