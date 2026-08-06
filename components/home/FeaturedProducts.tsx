import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";
import type { Product } from "@/types";

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="grid gap-8 xl:grid-cols-3">
      {products.slice(0, 3).map((product) => (
        <article
          key={product.id}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_35px_80px_-50px_rgba(0,0,0,0.65)]"
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            <Badge label={product.badge} variant="primary" />
            <span className="text-xs uppercase tracking-[0.28em] text-white/50">{product.category}</span>
          </div>
          <h2 className="text-2xl font-semibold leading-tight text-[#F9F8F6]">{product.name}</h2>
          <p className="mt-4 text-sm leading-7 text-white/70">{product.description}</p>
          <div className="mt-6 flex items-center justify-between gap-4 text-lg font-semibold text-[#F9F8F6]">
            <span>{formatCurrency(product.price)}</span>
            <Link
              href={`/product/${product.slug}`}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
            >
              View product
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
