import { Rating } from "@/components/common/Rating";
import type { Review } from "@/types";

interface ReviewsSectionProps {
  reviews: Review[];
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <section className="space-y-8 rounded-[2rem] border border-white/10 bg-white/5 p-10">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#D8C3A5]/80">Customer reviews</p>
        <h2 className="mt-3 text-3xl font-semibold text-[#F9F8F6]">Loved for the fit, fabric, and feeling.</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.id} className="rounded-3xl border border-white/10 bg-[#121110]/95 p-6">
            <Rating rating={review.rating} />
            <h3 className="mt-4 text-lg font-semibold text-[#F9F8F6]">{review.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">{review.message}</p>
            <div className="mt-6 text-xs uppercase tracking-[0.25em] text-white/40">{review.author}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
