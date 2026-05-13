import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">404</p>
      <h1 className="mt-5 font-display text-5xl font-semibold">This frame never rendered.</h1>
      <p className="mt-5 max-w-xl text-neutral-300">
        The page you are looking for has moved or does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-white/15 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
      >
        Back to home
      </Link>
    </main>
  );
}
