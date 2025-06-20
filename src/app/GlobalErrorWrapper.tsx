'use client';

import './(home)/globals.css';

import { useState } from 'react';

interface WrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({ message = 'An error occurred' }: { message?: string }) => {
  const [error, setError] = useState(false);

  if (error) throw new Error(message);

  return (
    <button
      title="Simulate an error"
      className="bg-red-950 text-red-100 px-4 py-2 rounded-md hover:bg-red-800 transition-colors"
      onClick={() => setError(true)}
    >
      Simulate Error
    </button>
  );
};

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex flex-col h-[100%] w-[100%]">
      <div className="absolute top-0 left-4 -translate-y-1/2">
        <ErrorSimulator message="Error in Root Layout" />
      </div>
      {children}
    </div>
  );
};
