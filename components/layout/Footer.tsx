import Link from "next/link";
import { footerNavigation } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0f0d0d] py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">Mojo Miles</p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-white/60">
              Premium oversized T-shirts designed for elevated comfort, effortless style, and daily escape.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.25em] text-white/70">
            {footerNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="text-xs text-white/40">© 2026 Mojo Miles. All rights reserved.</div>
      </div>
    </footer>
  );
}
