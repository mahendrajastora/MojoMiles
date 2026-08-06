import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 text-white">
      <div className="flex h-12 w-12 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-xl font-semibold">
        M
      </div>
      <div className="hidden flex-col text-left sm:flex">
        <span className="text-xs uppercase tracking-[0.35em] text-white/50">Mojo Miles</span>
        <span className="text-sm text-white/70">Wear Your Escape.</span>
      </div>
    </Link>
  );
}
