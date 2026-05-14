import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-center px-4 py-[clamp(5rem,12svh,7rem)] text-center md:px-8">
      <p className="text-sm uppercase tracking-[0.35em] text-[#d5ad6f]">404</p>
      <h1 className="mt-5 font-display text-[clamp(2.7rem,10vw,4.5rem)] font-semibold leading-tight">This frame never rendered.</h1>
      <p className="mt-5 max-w-xl text-neutral-300">
        The page you are looking for has moved or does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-white/15 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#f4d79d]"
      >
        Back to home
      </Link>
    </main>
  );
}
