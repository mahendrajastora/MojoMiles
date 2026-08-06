import Link from "next/link";
import { products } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function BestSellers() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-[#141312] p-8 shadow-soft sm:p-10">
      <SectionHeading
        eyebrow="Best Sellers"
        title="The tees customers keep coming back for."
        description="Our most loved oversized shirts, refined for comfort, detail, and everyday confidence."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {products.slice(0, 3).map((product) => (
          <article key={product.id} className="rounded-[1.75rem] border border-white/10 bg-[#1c1b1a] p-6 transition hover:-translate-y-1 hover:border-white/20">
            <div className="flex items-center justify-between gap-4">
              <Badge label={product.badge} variant="secondary" />
              <span className="text-xs uppercase tracking-[0.25em] text-accent-ocean">{product.category}</span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-[#F9F8F6]">{product.name}</h3>
            <p className="mt-4 text-sm leading-7 text-white/60">{product.description}</p>
            <div className="mt-6 flex items-center justify-between gap-3">
              <p className="text-lg font-semibold text-[#F9F8F6]">{formatCurrency(product.price)}</p>
              <Link
                href={`/product/${product.slug}`}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
              >
                View
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
