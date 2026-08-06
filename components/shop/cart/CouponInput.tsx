"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/Input";

interface CouponInputProps {
  onApply: (code: string) => void;
}

export function CouponInput({ onApply }: CouponInputProps) {
  const [code, setCode] = useState("");

  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-[#141312] p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[#CFCBC5]">Coupon</p>
          <p className="mt-2 text-lg font-semibold text-[#F9F8F6]">Apply promo code</p>
        </div>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/70">
          Save 15%
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
        <TextField
          label="Coupon code"
          value={code}
          onChange={(event) => setCode(event.target.value)}
          placeholder="MOJO15"
          className="mb-0"
        />
        <Button type="button" className="h-14 self-end" onClick={() => onApply(code)}>
          Apply
        </Button>
      </div>
    </div>
  );
}
