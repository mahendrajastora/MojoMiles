"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/Input";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export default function LoginPage() {
  const { login, pendingEmail } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await login(email, password);
    setMessage(result.message);
  };

  return (
    <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/10 bg-[#141312] p-10 shadow-soft">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-[#CFCBC5]">Customer login</p>
          <h1 className="text-4xl font-semibold text-[#F9F8F6]">Sign in to Mojo Miles</h1>
          <p className="text-sm leading-7 text-white/70">
            Enter your email and password. New customers can create an account below.
          </p>
        </div>
        <form className="grid gap-5" onSubmit={handleSubmit}>
          <TextField label="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          <TextField label="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          <Button type="submit">Sign in</Button>
        </form>
        {message ? <p className="text-sm text-[#F9F8F6]/80">{message}</p> : null}
        {pendingEmail ? (
          <div className="rounded-[1.75rem] border border-[#1F3A2D] bg-[#1F3A2D]/10 p-4 text-sm text-[#D8F5D6]">
            A verification code is pending for <strong>{pendingEmail}</strong>. Use the code page to verify and complete login.
          </div>
        ) : null}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-white/70">Don’t have an account yet?</p>
          <Link href="/register" className="text-sm uppercase tracking-[0.2em] text-accent-ocean hover:text-white">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}
