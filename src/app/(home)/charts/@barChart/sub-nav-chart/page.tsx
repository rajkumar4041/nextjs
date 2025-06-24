import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className="flex flex-col">
      SubNav Chart bar
      <Link href={'/charts/'}>go to BarChart</Link>
    </div>
  );
};

export default page;
