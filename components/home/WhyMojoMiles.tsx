import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Premium materials",
    description: "240 GSM cotton blends with a brushed finish that feels refined and durable.",
  },
  {
    title: "Clean luxury fit",
    description: "Oversized silhouettes with refined details, built to layer and move.",
  },
  {
    title: "Thoughtful production",
    description: "Focused on long-lasting quality, timeless design, and low visual clutter.",
  },
];

export default function WhyMojoMiles() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-[#141312] p-8 shadow-soft sm:p-10">
      <SectionHeading
        eyebrow="Why Mojo Miles"
        title="Designed for quiet confidence and premium everyday ease."
        description="A modern essentials collection with oversized comfort, considered details, and a refined aesthetic."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {reasons.map((reason) => (
          <div key={reason.title} className="rounded-[1.75rem] border border-white/10 bg-[#1c1b1a] p-6 transition hover:-translate-y-0.5 hover:border-white/20">
            <h3 className="text-xl font-semibold text-[#F9F8F6]">{reason.title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/70">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
