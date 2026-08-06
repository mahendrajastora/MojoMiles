import { TextField, TextArea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function ShippingAddressForm() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#121110] p-6">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[#CFCBC5]">Shipping address</p>
          <p className="mt-2 text-2xl font-semibold text-[#F9F8F6]">Where should we deliver it?</p>
        </div>
      </div>
      <div className="grid gap-4">
        <TextField label="Full name" placeholder="Jordan Lee" />
        <TextField label="Email address" type="email" placeholder="jordan@example.com" />
        <TextField label="Phone number" type="tel" placeholder="(555) 123-4567" />
        <TextField label="Street address" placeholder="123 Ridge Ave" />
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField label="City" placeholder="Los Angeles" />
          <TextField label="Postal code" placeholder="90001" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField label="State / province" placeholder="California" />
          <TextField label="Country" placeholder="United States" />
        </div>
        <TextArea label="Delivery notes" placeholder="Leave it with concierge or at the front desk." />
        <Button type="button" className="w-full">
          Save address
        </Button>
      </div>
    </div>
  );
}
