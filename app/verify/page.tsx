"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/Input";
import { useAuth } from "@/contexts/AuthContext";

export default function VerifyPage() {
  const { pendingEmail, verifyCode, resendVerificationCode } = useAuth();
  const [code, setCode] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await verifyCode(code);
    setMessage(result.message);
  };

  return (
    <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/10 bg-[#141312] p-10 shadow-soft">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-[#CFCBC5]">Phone verification</p>
          <h1 className="text-4xl font-semibold text-[#F9F8F6]">Verify your account</h1>
          <p className="text-sm leading-7 text-white/70">
            Enter the code sent to {pendingEmail ?? "your phone"}. If you did not receive it, resend the code.
          </p>
        </div>
        <form className="grid gap-5" onSubmit={handleSubmit}>
          <TextField label="Verification code" type="text" value={code} onChange={(event) => setCode(event.target.value)} required />
          <Button type="submit">Verify code</Button>
        </form>
        {message ? <p className="text-sm text-[#F9F8F6]/80">{message}</p> : null}
        <button
          type="button"
          onClick={resendVerificationCode}
          className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
        >
          Resend code
        </button>
      </div>
    </div>
  );
}
