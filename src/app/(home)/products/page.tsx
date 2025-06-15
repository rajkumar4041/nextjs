'use client';
const page = () => {
  return (
    <div className="flex gap-1">
      {[...Array(10)].map((_, ind) => (
        <button key={ind} onClick={() => console.log(ind)}>
          {ind}
        </button>
      ))}
    </div>
  );
};

export default page;
