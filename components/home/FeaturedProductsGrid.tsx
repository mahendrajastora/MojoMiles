import Link from "next/link";
import { products } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function FeaturedProductsGrid() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-[#141312] p-8 shadow-soft sm:p-10">
      <SectionHeading
        eyebrow="Featured Products"
        title="Premium oversized tees with refined details."
        description="Discover the signature collection built for relaxed luxury and everyday confidence."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {products.map((product) => (
          <article key={product.id} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#1c1b1a] shadow-card transition hover:-translate-y-1 hover:border-white/20">
            <div className="h-2 bg-gradient-to-r from-accent-coral via-accent-melon to-accent-ocean" />
            <div className="aspect-[4/5] bg-white/5" />
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <Badge label={product.badge} variant="outline" />
                <span className="text-xs uppercase tracking-[0.2em] text-white/40">{product.category}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#F9F8F6]">{product.name}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{product.description}</p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="text-lg font-semibold text-[#F9F8F6]">{formatCurrency(product.price)}</span>
                <Link
                  href={`/product/${product.slug}`}
                  className="rounded-full border border-transparent bg-gradient-to-r from-accent-coral via-accent-melon to-accent-ocean px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#0F0B08] transition hover:brightness-110"
                >
                  Shop
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
