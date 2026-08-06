"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { siteTagline } from "@/constants/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#1c1b1a] bg-hero-radial px-6 py-16 sm:px-10 lg:px-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-5xl"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-accent-melon/80">{siteTagline}</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#F9F8F6] sm:text-5xl lg:text-6xl">
          Premium oversized T-shirts that feel like freedom.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
          Crafted for motion, comfort, and minimalist confidence. The first collection is designed to layer, lounge,
          and escape through the city with clean luxury and effortless form.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/shop">
            <Button className="w-full sm:w-auto">Shop T-Shirts</Button>
          </Link>
          <Link href="/customize">
            <Button variant="secondary" className="w-full sm:w-auto">
              Customize Your Tee
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
