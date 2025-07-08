'use client';

import { use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Lectures = ({ params }: { params: Promise<{ slugs: string[] }> }) => {
  const { slugs } = use(params);
  const router = useRouter();

  // Main lectures list
  if (!slugs || slugs.length === 0) {
    return (
      <section className="flex flex-col items-center justify-center min-h-[60vh] py-8 px-4">
        <div className="border rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Lectures</h2>
          <div className="grid grid-cols-1 gap-3 w-full">
            {[...Array(7)].map((_, idx) => (
              <Link href={`/lectures/${idx + 1}`} key={idx}>
                <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition">
                  Lecture {idx + 1}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Sub-lecture navigation
  if (slugs.length === 1) {
    return (
      <section className="flex flex-col items-center justify-center min-h-[60vh] py-8 px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center gap-6">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Lecture {slugs[0]}</h2>
          <Link href={`/lectures/${slugs[0]}/2`}>
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition">
              Go to Sub Lecture 2
            </button>
          </Link>
          <button
            onClick={() => router.back()}
            className="w-full mt-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded transition"
          >
            Back
          </button>
        </div>
      </section>
    );
  }

  // Show sub-lecture details
  if (slugs.length === 2) {
    return (
      <section className="flex flex-col items-center justify-center min-h-[60vh] py-8 px-4">
        <div className="border rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Sub Lecture {slugs[1]}</h2>
          <p className="text-gray-600">
            You are viewing sub lecture <span className="font-semibold">{slugs[1]}</span> of lecture{' '}
            <span className="font-semibold">{slugs[0]}</span>.
          </p>
          <button
            onClick={() => router.back()}
            className="w-full mt-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded transition"
          >
            Back
          </button>
        </div>
      </section>
    );
  }

  // Fallback for deeper nesting or invalid routes
  return (
    <section className="w-[50vw] flex flex-col items-center justify-center min-h-[60vh] py-8 px-4">
      <div className="w-[50vw] border rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center gap-4">
        <h2 className="text-xl font-bold text-red-600 mb-2">Not Found</h2>
        <p className="text-gray-600">This lecture path does not exist.</p>
        <Link href="/lectures">
          <button className="w-full mt-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition">
            Back to Lectures
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Lectures;
