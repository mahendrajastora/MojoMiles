"use client";

import Logo from "@/components/layout/Logo";
import DesktopNavigation from "@/components/layout/DesktopNavigation";
import HeaderActions from "@/components/layout/HeaderActions";
import type { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  onOpenMenu: () => void;
}

export default function Navbar({ onOpenMenu }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-10 lg:px-16">
        <Logo />
        <DesktopNavigation />
        <HeaderActions onOpenMenu={onOpenMenu} />
      </div>
    </header>
  );
}
