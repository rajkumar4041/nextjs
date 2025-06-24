import Link from 'next/link';

const BarChart = () => {
  return (
    <div className="flex flex-col">
      BarChart
      {/* sub navigation
        `@folder` structure - parallel routes 

        @file sub-nav-chart/page.tsx
        @description this will be used to navigate to the sub navigation chart

        @see - this parallel route act like small application
            - where all the routes are independently working
            - only the parent barChart will change
            - this will not change the main layout and also other parallel routes

      */}
      <Link href={'/charts/sub-nav-chart'}>go to Sub Nav Chart</Link>
    </div>
  );
};

export default BarChart;
