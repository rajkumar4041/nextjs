'use client';

const GlobalError = () => {
  return (
    <html>
      <body>
        <title>Global Error</title>
        <div>
          <button onClick={() => window.location.reload()}>refresh page</button>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
