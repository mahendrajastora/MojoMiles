"use client";

import { ArrowRight, Check, ShoppingCart, Sparkles, Star } from "lucide-react";

const featuredProducts = [
  {
    name: "Summit Hoodie",
    price: "₹1,799",
    oldPrice: "₹2,499",
    image: "/images/31bae74d344ed02c26319fe510585c4f.jpg",
    badge: "-28%",
  },
  {
    name: "Desert Drift Tee",
    price: "₹1,499",
    oldPrice: "₹1,999",
    image: "/images/06ea8010fb6daa828f4c422551fa282d.jpg",
    badge: "-25%",
  },
  {
    name: "Ocean Wanderer Hoodie",
    price: "₹1,899",
    image: "/images/095edea7e08e8b5dd8dd85e3a594d43b.jpg",
  },
  {
    name: "City Explorer Tee",
    price: "₹1,599",
    oldPrice: "₹2,199",
    image: "/images/2893d3f3f9d3c21f5a17da89834ffdb6.jpg",
    badge: "-27%",
  },
];

const benefits = [
  "Premium cotton blend",
  "Relaxed oversized fit",
  "Fast delivery across India",
];

const collectionHighlights = [
  {
    title: "Hoodies",
    description: "Warm, structured layers for everyday escapes.",
    image: "/images/3422e41cd65b95902fcb6e9ca16d09b0.jpg",
  },
  {
    title: "T-shirts",
    description: "Clean essentials that move with you.",
    image: "/images/369f91b72f645cb230ea9cfe499ddf4b.jpg",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#f4efe9] text-[#1d1a1a]">
      <section className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-[2rem] border border-[#e6dfd6] bg-[#fbf8f5] shadow-[0_20px_60px_rgba(31,27,25,0.08)]">
          <div className="grid items-center gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-14 lg:py-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#d8d2ca] bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#5a524d]">
                <Sparkles className="h-3.5 w-3.5 text-[#b76d3c]" />
                Comfort meets wanderlust
              </span>

              <h1 className="mt-6 max-w-xl font-display text-5xl leading-none tracking-[-0.04em] text-[#171311] sm:text-6xl lg:text-7xl">
                Wear your next favorite hoodie.
              </h1>

              <p className="mt-5 max-w-lg text-base leading-8 text-[#5d5652] sm:text-lg">
                Premium oversized hoodies and T-shirts built for everyday comfort, clean styling, and epic city-to-trail energy.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#shop"
                  className="inline-flex items-center gap-2 rounded-full bg-[#171311] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2d2724]"
                >
                  Shop now
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#collections"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d4c9c1] bg-white px-6 py-3 text-sm font-semibold text-[#1d1a1a] transition hover:border-[#b8a799]"
                >
                  Explore collection
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-[#4d4844]">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 rounded-full border border-[#e2d8d0] bg-[#f9f5f2] px-3 py-2">
                    <Check className="h-4 w-4 text-[#3d7b5b]" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-10 h-28 w-28 rounded-full bg-[#e9d7c5] blur-3xl" />
              <div className="absolute -right-6 bottom-8 h-32 w-32 rounded-full bg-[#dfe7eb] blur-3xl" />

              <div className="relative grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-[1.75rem] border border-[#e7dfd6] bg-white p-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:col-span-2">
                  <img src="/images/56a4dc1f4d58dd1ddea57f1e48d2d945.jpg" alt="Mojo Miles hoodie" className="h-[290px] w-full rounded-[1.2rem] object-cover" />
                </div>
                <div className="overflow-hidden rounded-[1.5rem] border border-[#e7dfd6] bg-white p-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                  <img src="/images/06ea8010fb6daa828f4c422551fa282d.jpg" alt="Desert Drift tee" className="h-[190px] w-full rounded-[1rem] object-cover" />
                </div>
                <div className="overflow-hidden rounded-[1.5rem] border border-[#e7dfd6] bg-white p-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                  <img src="/images/31bae74d344ed02c26319fe510585c4f.jpg" alt="Summit Hoodie" className="h-[190px] w-full rounded-[1rem] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-4 pb-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7a726d]">Best sellers</p>
            <h2 className="mt-2 font-display text-3xl text-[#171311] sm:text-4xl">Loved by everyday explorers</h2>
          </div>
          <a href="#shop" className="hidden items-center gap-2 text-sm font-semibold text-[#1d1a1a] sm:inline-flex">
            View all <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div id="shop" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <article key={product.name} className="group overflow-hidden rounded-[1.75rem] border border-[#e7dfd6] bg-white p-3 shadow-[0_12px_30px_rgba(31,27,25,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(31,27,25,0.08)]">
              <div className="relative overflow-hidden rounded-[1.25rem] bg-[#f3efe9]">
                {product.badge ? (
                  <span className="absolute right-3 top-3 z-10 rounded-full bg-[#c8612b] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    {product.badge}
                  </span>
                ) : null}
                <img src={product.image} alt={product.name} className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>

              <div className="p-3">
                <div className="mb-2 flex items-center gap-1 text-[#f3b63f]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-[#1d1a1a]">{product.name}</h3>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xl font-bold text-[#171311]">{product.price}</span>
                  {product.oldPrice ? <span className="text-sm text-[#8a817b] line-through">{product.oldPrice}</span> : null}
                </div>

                <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#171311] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2c2725]">
                  <ShoppingCart className="h-4 w-4" />
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-[#e7dfd6] bg-[#f8f4f1] p-6 sm:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7a726d]">Collections</p>
              <h2 className="mt-2 font-display text-3xl text-[#171311] sm:text-4xl">Built for every move</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {collectionHighlights.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[1.75rem] border border-[#e7dfd6] bg-white shadow-[0_12px_26px_rgba(31,27,25,0.04)]">
                <img src={item.image} alt={item.title} className="h-72 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#171311]">{item.title}</h3>
                  <p className="mt-2 text-[#5d5652]">{item.description}</p>
                  <a href="#shop" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1d1a1a]">
                    Shop now <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] bg-[#171311] px-6 py-10 text-white sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d4c5be]">Why Mojo Miles</p>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl">The everyday essentials you’ll reach for first.</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#d9b69b] text-[#171311]">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Premium finish</h3>
                <p className="mt-2 text-sm leading-6 text-[#d9d2cd]">Soft-touch fabric with a strong structure and elevated feel.</p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#cad9d2] text-[#171311]">
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <h3 className="text-lg font-semibold">Relaxed fit</h3>
                <p className="mt-2 text-sm leading-6 text-[#d9d2cd]">Oversized silhouettes designed for comfort, layering, and ease.</p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#d7d9e8] text-[#171311]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Made to move</h3>
                <p className="mt-2 text-sm leading-6 text-[#d9d2cd]">Built for travel, workdays, and off-duty style without compromise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16 pt-6 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-[#e7dfd6] bg-[#fbf8f5] px-6 py-8 text-center shadow-[0_12px_30px_rgba(31,27,25,0.04)] sm:px-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7a726d]">Drop alert</p>
          <h2 className="mt-3 font-display text-3xl text-[#171311] sm:text-5xl">Fresh arrivals every week.</h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[#5d5652]">Join the list for early access to hoodie drops, limited tees, and daily style notes from the tribe.</p>

          <form className="mx-auto mt-6 flex max-w-lg flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-full border border-[#d9d1ca] bg-white px-4 py-3 text-sm text-[#171311] outline-none ring-0 placeholder:text-[#7e756f] focus:border-[#aa8771]"
            />
            <button type="submit" className="rounded-full bg-[#171311] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2b2624]">
              Join now
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
