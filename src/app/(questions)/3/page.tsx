import { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <main className="flex flex-col w-1/3 gap-1 text-center text-white">
      <header className="bg-blue-400 h-14">header</header>

      <div className="flex h-96 gap-1">
        <div className="flex-1 flex flex-col gap-1">
          <div className="h-[40%] bg-purple-400">hero</div>

          <div className="h-[60%] bg-emerald-400">sidebar</div>
        </div>

        <div className="flex-1 flex flex-col gap-1">
          <div className="h-2/3 bg-yellow-500">main content</div>

          <div className="h-1/3 bg-gray-500">extra content</div>
        </div>
      </div>

      <div className="flex gap-1">
        <div className="flex-1 bg-green-600">related images</div>

        <div className="flex-2 bg-pink-300">related posts</div>
      </div>

      <footer className="h-14 bg-orange-400">footer</footer>
    </main>
  );
};

export default Page;
