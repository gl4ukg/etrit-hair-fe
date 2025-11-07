export default async function TestLoaderPage() {
  // Simulate a slow loading page
  await new Promise((resolve) => setTimeout(resolve, 3000000));

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#181818] text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Test Page Loaded!</h1>
        <p className="mt-4 text-gray-400">The loader should have appeared for 3 seconds</p>
        <a href="/" className="mt-8 inline-block rounded bg-white px-6 py-3 text-black">
          Go Back Home
        </a>
      </div>
    </div>
  );
}
