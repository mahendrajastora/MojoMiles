"use client";

import { useEffect } from "react";
import {
  ArrowRight,
  ArrowUpFromLine,
  BadgeCheck,
  Camera,
  Eye,
  Heart,
  Search,
  Shirt,
  ShoppingCart,
  Sparkles,
  Star,
  UserRound,
} from "lucide-react";

const trendingProducts = [
  {
    name: "Summit Tee",
    price: "₹1,299",
    oldPrice: "₹1,799",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop",
    badge: "-28%",
    rating: "(234)",
  },
  {
    name: "Desert Drift",
    price: "₹1,499",
    oldPrice: "₹1,999",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=600&auto=format&fit=crop",
    badge: "-25%",
    rating: "(189)",
  },
  {
    name: "Ocean Wanderer",
    price: "₹1,399",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop",
    rating: "(312)",
  },
  {
    name: "City Explorer",
    price: "₹1,599",
    oldPrice: "₹2,199",
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=600&auto=format&fit=crop",
    badge: "-27%",
    rating: "(156)",
  },
];

const arrivals = [
  {
    name: "Mountain Soul",
    price: "₹1,349",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Aurora Drop",
    price: "₹1,699",
    oldPrice: "₹2,299",
    image:
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop",
    badge: "28%",
  },
  {
    name: "Neon Nomad",
    price: "₹1,249",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Forest Ghost",
    price: "₹1,449",
    oldPrice: "₹1,899",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop",
    badge: "24%",
  },
];

const steps = [
  { icon: Camera, title: "Upload Photo", copy: "Add your selfie or portrait" },
  { icon: Sparkles, title: "Choose AI Style", copy: "Anime, sketch, cyberpunk & more" },
  { icon: UserRound, title: "Generate Avatar", copy: "AI creates your unique look" },
  { icon: Shirt, title: "Customize Tee", copy: "Place and resize your design" },
  { icon: Eye, title: "Live Preview", copy: "See it on a real tee" },
  { icon: ShoppingCart, title: "Order", copy: "Delivered to your door" },
];

const styleCards = [
  {
    title: "Anime Style",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Cyberpunk Style",
    image:
      "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Watercolor Style",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    quote:
      '“Wore the Summit Tee on my Himalayan trek — got compliments at every campsite. The fabric is insanely comfortable and the oversized fit is perfect.”',
    name: "Arjun Sharma",
    location: "Manali, HP",
  },
  {
    quote:
      '“The AI customization feature is mind-blowing! I designed my own tee with my anime avatar and it arrived looking exactly like the preview.”',
    name: "Priya Nair",
    location: "Bangalore",
  },
  {
    quote:
      '“Ocean Wanderer is my go-to tee now. The quality is premium — thick fabric, great print, and the fit is exactly what streetwear should feel like.”',
    name: "Rohan Mehta",
    location: "Mumbai",
  },
];

export default function HomePage() {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    reveals.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-hidden">
      <section
        id="home"
        className="relative flex min-h-[82vh] items-center justify-center overflow-hidden rounded-[2rem] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 via-purple-600/75 to-purple-900/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center text-white sm:px-10 lg:px-16">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] shadow-lg backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-amber-300" />
            AI-powered customization
          </div>
          <h1 className="reveal delay-100 font-display mt-8 text-6xl leading-none tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            WEAR YOUR ESCAPE.
          </h1>
          <p className="reveal delay-200 mx-auto mt-5 max-w-2xl text-lg font-light text-white/90 sm:text-2xl">
            Premium oversized streetwear designed for explorers.
          </p>
          <div className="reveal delay-300 mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#men"
              className="flex items-center gap-2 rounded-2xl bg-brand-orange px-8 py-4 font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-orange-600"
            >
              <Sparkles className="h-4 w-4" />
              Shop Men
            </a>
            <a
              href="#women"
              className="flex items-center gap-2 rounded-2xl bg-brand-purple px-8 py-4 font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-purple-700"
            >
              <Star className="h-4 w-4" />
              Shop Women
            </a>
            <a
              href="#ai-studio"
              className="flex items-center gap-2 rounded-2xl border-2 border-white/70 bg-transparent px-8 py-4 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-brand-black"
            >
              <ArrowUpFromLine className="h-4 w-4" />
              Customize Your Tee
            </a>
          </div>
        </div>
      </section>

      <section className="bg-brand-blue py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="reveal mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.3em] text-white/80">Hot right now</p>
              <h2 className="font-display text-4xl sm:text-5xl">Trending now</h2>
            </div>
            <a href="#" className="flex items-center gap-1 text-sm font-bold hover:underline">
              View all <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trendingProducts.map((product, index) => (
              <div
                key={product.name}
                className={`reveal delay-${100 * (index + 1)} rounded-[1.5rem] bg-white p-3 text-brand-black shadow-lg transition-transform duration-300 hover:-translate-y-2`}
              >
                <div className="relative mb-3 aspect-square overflow-hidden rounded-[1rem] bg-gray-100">
                  {product.badge ? (
                    <span className="absolute right-3 top-3 z-10 rounded-md bg-brand-orange px-2 py-1 text-xs font-black text-white">
                      {product.badge}
                    </span>
                  ) : null}
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-bold">{product.name}</h3>
                  <div className="mb-2 flex items-center gap-1 text-xs text-yellow-400">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <span className="ml-1 text-gray-400">{product.rating}</span>
                  </div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-lg font-extrabold">{product.price}</span>
                    {product.oldPrice ? <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span> : null}
                  </div>
                </div>
                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue py-3 font-bold text-white transition-colors hover:bg-blue-600">
                  <ShoppingCart className="h-4 w-4" />
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="men" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="reveal mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.3em] text-gray-400">Fresh drops</p>
              <h2 className="font-display inline-block text-4xl sm:text-5xl">
                New arrivals
                <span className="mt-2 block h-1.5 w-full rounded-full bg-brand-orange" />
              </h2>
            </div>
            <a href="#" className="flex items-center gap-1 text-sm font-bold text-gray-600 hover:text-brand-orange">
              View all <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {arrivals.map((product, index) => (
              <div
                key={product.name}
                className={`reveal delay-${100 * (index + 1)} rounded-[1.5rem] border border-gray-100 bg-white p-3 shadow-sm transition-shadow hover:shadow-lg`}
              >
                <div className="relative mb-3 aspect-square overflow-hidden rounded-[1rem] bg-gray-50">
                  {product.badge ? (
                    <span className="absolute right-3 top-3 rounded-md bg-brand-orange px-2 py-1 text-xs font-black text-white">
                      {product.badge}
                    </span>
                  ) : null}
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-bold">{product.name}</h3>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-lg font-extrabold">{product.price}</span>
                    {product.oldPrice ? <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span> : null}
                  </div>
                </div>
                <button className="w-full rounded-xl bg-brand-blue py-3 font-bold text-white">Add to cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ai-studio" className="relative overflow-hidden bg-[#0b0e14] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-10 lg:px-16">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em]">
            <Sparkles className="h-4 w-4 text-brand-purple" />
            AI studio
          </div>
          <h2 className="reveal delay-100 mt-6 font-display text-5xl tracking-wider text-transparent sm:text-6xl md:text-7xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
            DESIGN YOUR OWN TEE
          </h2>
          <p className="reveal delay-200 mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Upload your photo. Choose a style. Wear your creation.
          </p>

          <div className="relative mx-auto mb-16 mt-16 max-w-6xl">
            <div className="absolute left-[8%] right-[8%] top-[28px] hidden h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 md:block" />
            <div className="relative z-10 grid grid-cols-2 gap-6 md:grid-cols-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className={`reveal delay-${index + 1}00 flex flex-col items-center`}>
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-700/60 bg-[#1e2538] text-xl text-brand-blue shadow-lg backdrop-blur-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mb-1 text-sm font-bold text-white">{step.title}</h4>
                    <p className="text-center text-[11px] leading-tight text-gray-400">{step.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="reveal delay-200 mb-12 flex flex-wrap items-center justify-center gap-3">
            {['Anime', 'Sketch', 'Minimal', 'Watercolor', 'Comic', 'Cyberpunk'].map((pill) => (
              <button
                key={pill}
                className={`rounded-full border px-6 py-2 text-sm font-semibold transition-all ${pill === 'Anime' ? 'bg-white text-black' : 'border-slate-700/50 bg-[#182030] text-gray-300 hover:bg-[#232d42]'}`}
              >
                {pill}
              </button>
            ))}
          </div>

          <div className="mx-auto mb-16 grid max-w-6xl gap-8 md:grid-cols-3">
            {styleCards.map((card, index) => (
              <div
                key={card.title}
                className={`reveal delay-${index + 1}00 rounded-[1.5rem] border border-slate-800 bg-[#121722] p-4 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]`}
              >
                <div className="mb-4 aspect-[4/3] overflow-hidden rounded-[1rem] bg-slate-900">
                  <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
                </div>
                <h3 className="font-display text-2xl tracking-wider text-white">{card.title.toUpperCase()}</h3>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="reveal delay-300 inline-flex items-center gap-3 rounded-[1.25rem] bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-purple px-10 py-4 text-lg font-extrabold text-white shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-transform hover:scale-105"
          >
            <Sparkles className="h-5 w-5" />
            Start designing
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="reveal mb-12">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.3em] text-gray-400">Explorer stories</p>
            <h2 className="font-display text-4xl sm:text-5xl">What explorers say</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`reveal delay-${index + 1}00 flex flex-col justify-between rounded-[1.5rem] border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md`}
              >
                <div>
                  <div className="mb-6 flex items-center gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mb-8 text-base leading-relaxed text-gray-700">{testimonial.quote}</p>
                </div>
                <div className="flex items-end justify-between border-t border-gray-100 pt-5">
                  <div>
                    <h4 className="text-base font-bold text-brand-black">{testimonial.name}</h4>
                    <span className="mt-1 flex items-center gap-1.5 text-sm text-gray-400">
                      <Search className="h-3.5 w-3.5" />
                      {testimonial.location}
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 text-sm font-medium text-brand-green">
                    <BadgeCheck className="h-4 w-4" />
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-blue py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/20" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-10 lg:px-16">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.3em] backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-amber-300" />
            Exclusive access
          </div>
          <h2 className="reveal delay-100 mt-8 font-display text-5xl sm:text-6xl md:text-7xl">
            Join the mojo tribe
          </h2>
          <p className="reveal delay-200 mx-auto mt-4 max-w-2xl text-lg font-light text-white/95">
            Get early access to drops, exclusive designs and adventure stories.
          </p>
          <form className="reveal delay-300 mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full flex-1 rounded-2xl border border-white/40 bg-white/20 px-5 py-4 text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="rounded-2xl bg-white px-8 py-4 font-bold text-brand-blue transition-colors hover:bg-gray-100">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
