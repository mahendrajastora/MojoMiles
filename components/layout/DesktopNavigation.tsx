import Link from "next/link";
import { mainNavigation } from "@/constants/site";

export default function DesktopNavigation() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {mainNavigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm uppercase tracking-[0.25em] text-white/70 transition hover:text-white"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
