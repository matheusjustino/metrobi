import { NextPage } from "next";
import Link from "next/link";
import { useMemo } from "react";

const HomePage: NextPage = () => {
  const pages = useMemo(
    () =>
      Array(5)
        .fill(0)
        .map((_, idx) => ({
          id: `${idx + 1}`,
          href: `${idx + 1}`,
          label: `Question ${idx + 1}`,
        })),
    []
  );

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <header className="mb-20">
        <h1 className="text-6xl">
          <span className="text-purple-600 underline">Metrobi</span> Challenge
        </h1>
      </header>

      <ul>
        {pages.map(({ id, href, label }) => {
          return (
            <Link key={id} href={href} className="hover:underline">
              <ol>{label}</ol>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
