import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/Input";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function NewsletterSection() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-[#141312] p-8 shadow-soft sm:p-10">
      <SectionHeading
        eyebrow="Newsletter"
        title="Stay first on new drops and limited releases."
        description="Receive early access to product launches, exclusive previews, and styling updates from Mojo Miles."
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-[1fr_auto]">
        <TextField label="Email address" name="email" type="email" placeholder="you@example.com" />
        <Button className="w-full sm:w-auto">Subscribe</Button>
      </div>
    </section>
  );
}
