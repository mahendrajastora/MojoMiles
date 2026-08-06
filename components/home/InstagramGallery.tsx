import { SectionHeading } from "@/components/ui/SectionHeading";

const images = [
  "/images/insta-1.jpg",
  "/images/insta-2.jpg",
  "/images/insta-3.jpg",
  "/images/insta-4.jpg",
  "/images/insta-5.jpg",
];

export default function InstagramGallery() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-[#141312] p-8 shadow-soft sm:p-10">
      <SectionHeading
        eyebrow="Instagram"
        title="Real looks from the Mojo Miles community."
        description="A visual edit for everyday styling, elevated by premium silhouettes and clean color palettes."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {images.map((src, index) => (
          <div key={src} className={`relative overflow-hidden rounded-[1.75rem] ${index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}>
            <div className="aspect-square bg-white/5" />
          </div>
        ))}
      </div>
    </section>
  );
}
