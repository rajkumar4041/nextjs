'use client';

import { useState } from 'react';

const UserSearchInput = () => {
  const [value, setValue] = useState<string>('');
  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default UserSearchInput;
