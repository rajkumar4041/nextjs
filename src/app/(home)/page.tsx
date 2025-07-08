// import Image from 'next/image';

'use client';

export default function Home() {
  const handleError = () => {
    throw new Error('This is a global error');
  };

  return (
    <div className="h-[86vh]  overflow-y-scroll">
      <main className=" flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-8">
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-center text-purple-700 mb-2">
            🚀 Welcome to the Showcase!
          </h1>
          <p className="text-lg text-gray-700 text-center">
            Explored next js concept in this Project
          </p>
          <p className="text-lg text-gray-700 text-center">
            Repo:{' '}
            <a
              href="https://github.com/rajkumar4041/nextjs.git"
              className="text-purple-600 underline"
            >
              https://github.com/rajkumar4041/nextjs.git
            </a>
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <li className="bg-purple-50 rounded-lg p-4 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-purple-600">File-based Routing</h2>
              <p className="text-sm text-gray-600">
                Navigate between pages using the file system structure. Each file or folder in{' '}
                <code>/app</code> or <code>/pages</code> becomes a route automatically.
              </p>
            </li>
            <li className="bg-blue-50 rounded-lg p-4 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-blue-600">Dynamic Routing</h2>
              <p className="text-sm text-gray-600">
                Support for dynamic segments using brackets, e.g. <code>[id]</code> for{' '}
                <code>/blog/[id]</code>.
              </p>
            </li>
            <li className="bg-green-50 rounded-lg p-4 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-green-600">API Routes</h2>
              <p className="text-sm text-gray-600">
                Create backend endpoints inside <code>/api</code> or route handlers in{' '}
                <code>/app</code> for serverless functions.
              </p>
            </li>
            <li className="bg-yellow-50 rounded-lg p-4 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-yellow-600">Server & Client Components</h2>
              <p className="text-sm text-gray-600">
                Use <code>'use client'</code> for client-side interactivity, or default to server
                components for performance.
              </p>
            </li>
            <li className="bg-pink-50 rounded-lg p-4 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-pink-600">Error Handling</h2>
              <p className="text-sm text-gray-600">
                Use error boundaries and custom error pages for robust error handling.
              </p>
              <button
                onClick={handleError}
                className="mt-2 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
              >
                Throw Global Error
              </button>
            </li>
            <li className="bg-indigo-50 rounded-lg p-4 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-indigo-600">Data Fetching</h2>
              <p className="text-sm text-gray-600">
                Fetch data on the server using <code>fetch</code>, <code>getServerSideProps</code>,{' '}
                <code>getStaticProps</code>, or directly in server components.
              </p>
            </li>
            <li className="bg-orange-50 rounded-lg p-4 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-orange-600">Static & Dynamic Rendering</h2>
              <p className="text-sm text-gray-600">
                Choose between static generation, server-side rendering, or incremental static
                regeneration for each page.
              </p>
            </li>
            <li className="bg-teal-50 rounded-lg p-4 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-teal-600">Middleware & Edge</h2>
              <p className="text-sm text-gray-600">
                Run code at the edge for authentication, redirects, and more using{' '}
                <code>middleware.ts</code>.
              </p>
            </li>
            <li className="bg-red-50 rounded-lg p-4 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-red-600">Image Optimization</h2>
              <p className="text-sm text-gray-600">
                Use the <code>next/image</code> component for automatic image optimization and
                responsive loading.
              </p>
            </li>
            <li className="bg-gray-50 rounded-lg p-4 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-gray-600">Built-in CSS & Styling</h2>
              <p className="text-sm text-gray-600">
                Style your app with CSS Modules, Tailwind CSS, or any CSS-in-JS solution.
              </p>
            </li>
            <li className="bg-lime-50 rounded-lg p-4 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-lime-600">Segment Routes</h2>
              <p className="text-sm text-gray-600">
                Organize your app with nested folders and parallel routes using segment naming (e.g.{' '}
                <code>(admin)</code>, <code>@shop</code>, <code>/(home)</code>). This enables
                layouts, grouping, and advanced routing patterns in the <code>/app</code> directory.
              </p>
            </li>
            <li className="bg-cyan-50 rounded-lg p-4 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-cyan-600">Catch-all Segment Route</h2>
              <p className="text-sm text-gray-600">
                Use catch-all segments (e.g. <code>[...slug].tsx</code>) to match and handle
                multiple or deeply nested routes like <code>/docs/nextjs/routing/basics</code> in a
                single file.
              </p>
            </li>
            <li className="bg-fuchsia-50 rounded-lg p-4 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-fuchsia-600">SEO & Metadata</h2>
              <p className="text-sm text-gray-600">
                Enhance your pages with <code>metadata</code> for SEO, Open Graph, and social
                sharing.
              </p>
            </li>
            <li className="bg-amber-50 rounded-lg p-4 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-amber-600">File Collision</h2>
              <p className="text-sm text-gray-600">
                Next.js prevents file name collisions in the routing system, ensuring unique routes
                for each file.
              </p>
            </li>
            <li className="bg-stone-50 rounded-lg p-4 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-stone-600">Private Folder</h2>
              <p className="text-sm text-gray-600">
                Use <code>_private</code> or folders with an underscore to prevent them from
                becoming routes.
              </p>
            </li>
            <li className="bg-slate-50 rounded-lg p-4 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-slate-600">Route Grouping</h2>
              <p className="text-sm text-gray-600">
                Group routes without affecting the URL using parentheses, e.g.{' '}
                <code>(marketing)</code>.
              </p>
            </li>
            <li className="bg-rose-50 rounded-lg p-4 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-rose-600">Error Page</h2>
              <p className="text-sm text-gray-600">
                Customize error handling with <code>error.tsx</code> for each route segment.
              </p>
            </li>
            <li className="bg-blue-100 rounded-lg p-4 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-blue-700">Loading Page</h2>
              <p className="text-sm text-gray-600">
                Show instant loading states with <code>loading.tsx</code> in any route segment.
              </p>
            </li>
            <li className="bg-green-100 rounded-lg p-4 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-green-700">Parallel Routes</h2>
              <p className="text-sm text-gray-600">
                Render multiple independent routes in the same layout using the <code>@</code>{' '}
                convention.
              </p>
            </li>
            <li className="bg-violet-50 rounded-lg p-4 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-violet-600">Suspense</h2>
              <p className="text-sm text-gray-600">
                Use <code>React.Suspense</code> for streaming UI and granular loading states.
              </p>
            </li>
            <li className="bg-yellow-100 rounded-lg p-4 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-yellow-700">
                generateStaticParams & generateDynamicParams
              </h2>
              <p className="text-sm text-gray-600">
                Pre-generate or dynamically generate params for static and dynamic routes using
                these new functions.
              </p>
            </li>
          </ul>
          <div className="text-center mt-6">
            <span className="text-xs text-gray-400">
              Powered by <span className="font-semibold text-purple-600">Next.js 15</span>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
