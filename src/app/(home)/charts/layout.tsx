/**
 * this will work because it has a default export
 * export default charts;
 *
 * @description only this function will be public to files other will not be able to import this function
 *
 * other functions will no any effect on the public API of this file
 *
 */
export default function ChartsPage({
  pieChart,
  lineChart,
  barChart,
}: {
  pieChart: React.ReactNode;
  lineChart: React.ReactNode;
  barChart: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] w-[90vw] border-2 border-gray-300 p-2">
      <div className="flex w-[100%] h-[50%] gap-2">
        <div className="w-[50%] border-2 border-blue-400 p-2">{pieChart}</div>
        <div className="w-[50%] border-2 border-yellow-400 p-2">{lineChart}</div>
      </div>

      {barChart && (
        <div className="w-full mt-4 border-2 border-green-400 p-2 h-[50%]">
          <div className="w-[100%] h-[100%] flex items-center justify-center">{barChart}</div>
        </div>
      )}
    </div>
  );
}
