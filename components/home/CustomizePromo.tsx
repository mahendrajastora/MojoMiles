import { Button } from "@/components/ui/Button";

export default function CustomizePromo() {
  return (
    <section className="grid gap-10 rounded-[2rem] border border-white/10 bg-[#151312]/90 p-10 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-[#D8C3A5]/80">Customization</p>
        <h2 className="mt-4 text-3xl font-semibold text-[#F9F8F6] sm:text-4xl">
          Build your signature oversized tee with AI-powered design.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
          Upload your inspiration, select an art style, and preview your custom design on a premium tee.
          The interface is intentionally simple to make design feel effortless.
        </p>
        <ul className="mt-8 space-y-4 text-sm text-white/70">
          <li>• Upload photo or sketch</li>
          <li>• Choose an AI art style</li>
          <li>• Preview, resize, and place designs</li>
          <li>• Checkout with confidence</li>
        </ul>
      </div>
      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#151312] via-[#1c1b1a] to-[#171615] p-8">
        <div className="space-y-4">
          <div className="rounded-3xl bg-[#1c1b1a] p-5 text-sm text-white/70">
            <p className="font-semibold text-[#F9F8F6]">Design workflow</p>
            <p className="mt-3 leading-7">
              Upload → choose style → generate AI art → place on tee → order. The first version is built to scale when backend is ready.
            </p>
          </div>
          <div className="grid gap-3 text-sm text-white/70">
            <div className="rounded-3xl border border-white/10 bg-[#111010] p-4">
              <p className="font-semibold text-[#F9F8F6]">AI Style</p>
              <p className="mt-2 text-white/60">Anime, Sketch, Watercolor, Cyberpunk, Pop Art</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#111010] p-4">
              <p className="font-semibold text-[#F9F8F6]">Preview</p>
              <p className="mt-2 text-white/60">Drag, resize, and place your design on the tee canvas.</p>
            </div>
          </div>
          <div className="mt-6">
            <Button variant="secondary">Start customization</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
