import { Nav } from '@/components/nav';

export default function Home({
  auth,
}: Readonly<{
  auth: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen items-start p-24">
        <div className="w-1/2 flex content-center p-12">
          <h1 className="text-5xl font-bold">Cool app</h1>
        </div>
        <div className="w-1/2 min-w-[640px] p-12">
          <div className="border border-slate-200 rounded min-h-[480px] w-full flex justify-center items-center shadow-lg overflow-hidden">
            <p className="font-bold text-lg">Some content</p>
          </div>
        </div>
      </main>
    </>
  );
}
