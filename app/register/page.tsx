"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/Input";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export default function RegisterPage() {
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await register(name, email, phone, password);
    setMessage(result.message);
  };

  return (
    <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/10 bg-[#141312] p-10 shadow-soft">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-[#CFCBC5]">Create account</p>
          <h1 className="text-4xl font-semibold text-[#F9F8F6]">Register for Mojo Miles</h1>
          <p className="text-sm leading-7 text-white/70">
            Start your journey with a verified account. We will send a one-time code to your phone.
          </p>
        </div>
        <form className="grid gap-5" onSubmit={handleSubmit}>
          <TextField label="Full name" type="text" value={name} onChange={(event) => setName(event.target.value)} required />
          <TextField label="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          <TextField label="Phone" type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} required />
          <TextField label="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          <Button type="submit">Create account</Button>
        </form>
        {message ? <p className="text-sm text-[#F9F8F6]/80">{message}</p> : null}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-white/70">Already have an account?</p>
          <Link href="/login" className="text-sm uppercase tracking-[0.2em] text-accent-ocean hover:text-white">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
