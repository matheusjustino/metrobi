import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex flex-col gap-3 items-center justify-center">
      <Link
        href="/"
        passHref
        className="rounded-lg bg-purple-600 text-white px-4 py-2"
      >
        <button>Back</button>
      </Link>

      {children}
    </div>
  );
}
