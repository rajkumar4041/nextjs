'use client';

import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '@/redux/feature/CounterSlice';

const Counter = () => {
  const value = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Redux Counter</h2>
      <div className="flex items-center gap-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="text-xl font-semibold text-white-800">{value}</span>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
};

const page = () => {
  return <Counter />;
};

export default page;
