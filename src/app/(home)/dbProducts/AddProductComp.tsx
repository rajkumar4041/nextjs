'use client';

import React, { Suspense, useState } from 'react';
import { useRouter } from 'next/navigation';

// Error boundary component for client components
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [error, setError] = useState<Error | null>(null);

  if (error) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
        <strong>Error:</strong> {error.message}
        <button
          className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
          onClick={() => setError(null)}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <React.Fragment>
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, { onError: setError })
      )}
    </React.Fragment>
  );
}

function ProductForm({
  onError,
  onSuccess,
}: {
  onError?: (e: Error) => void;
  onSuccess?: () => void;
}) {
  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    setLoading(true);
    try {
      const res = await fetch('dbProducts/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
        }),
      });
      if (!res.ok) {
        throw new Error('Failed to add product');
      }
      router.push('/dbProducts/api/get-all');
      onSuccess?.();
      setSuccess('Product added successfully!');
      setForm({ title: '', price: '', description: '' });
    } catch (err: any) {
      onError?.(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-4 max-w-md w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        className="p-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        className="p-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="p-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows={3}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add Product'}
      </button>
      {success && (
        <div className="bg-green-100 text-green-700 p-2 rounded text-center">{success}</div>
      )}
    </form>
  );
}

const AddProductComp = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-8 px-4">
      <ErrorBoundary>
        <Suspense fallback={<div className="text-purple-600">Loading form...</div>}>
          <ProductForm onSuccess={() => setOpen(false)} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default AddProductComp;
