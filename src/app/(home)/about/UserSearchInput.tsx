'use client';

import { useState } from 'react';

const UserSearchInput = () => {
  const [value, setValue] = useState<string>('');
  return (
    <div className="border border-white-300 rounded-md p-2 color-black-500  shadow-sm hover:shadow-md transition">
      <input
        className="border-none outline-none w-full color-black-500"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default UserSearchInput;
