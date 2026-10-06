"use client";

import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/Input";
import { useState } from "react";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const [name, setName] = useState(user?.name ?? "");
  const [phone, setPhone] = useState(user?.phone ?? "");
  const [message, setMessage] = useState<string | null>(null);

  if (!user) {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-[#141312] p-10 text-white">
        <h1 className="text-3xl font-semibold">Please sign in to view your profile.</h1>
      </div>
    );
  }

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Profile updates are saved locally in your browser.");
  };

  return (
    <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-[#141312] p-10 shadow-soft">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-[#CFCBC5]">Your account</p>
          <h1 className="text-4xl font-semibold text-[#F9F8F6]">Profile settings</h1>
          <p className="text-sm leading-7 text-white/70">Manage your account and review verification status.</p>
        </div>
        <form className="grid gap-5" onSubmit={handleSave}>
          <TextField label="Full name" type="text" value={name} onChange={(event) => setName(event.target.value)} required />
          <TextField label="Email" type="email" value={user.email} readOnly />
          <TextField label="Phone" type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} required />
          <div className="rounded-[1.75rem] border border-white/10 bg-[#101010] p-6 text-sm text-white/70">
            Verification status: <strong>{user.verified ? "Verified" : "Pending verification"}</strong>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button type="submit">Save profile</Button>
            <Button variant="secondary" type="button" onClick={logout}>
              Log out
            </Button>
          </div>
        </form>
        {message ? <p className="text-sm text-[#F9F8F6]/80">{message}</p> : null}
      </div>
    </div>
  );
}
