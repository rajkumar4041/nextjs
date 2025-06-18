'use client';

import { ReactNode } from 'react';

const GlobalErrorWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
};

export default GlobalErrorWrapper;
