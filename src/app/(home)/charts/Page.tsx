/**
 * this will work because it has a default export
 * export default charts;
 *
 * @description only this function will be public to files other will not be able to import this function
 * 
 * other functions will no any effect on the public API of this file
 * 
 */
export default function ChartsPage() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Charts Page</h1>
      <p>This is the charts page.</p>
    </div>
  );
}

// export default charts;
