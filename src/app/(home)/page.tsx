// import Image from 'next/image';

'use client';
export default function Home() {
  const handleError = () => {
    throw new Error('This is a global error');
  };

  return (
    <div className="flex flex-col">
      <button onClick={() => handleError()}>new Error Throw</button>
      main page
    </div>
  );
}
