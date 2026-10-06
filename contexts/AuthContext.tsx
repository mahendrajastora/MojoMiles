"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { User } from "@/types";

interface StoredUser extends User {
  password: string;
}

interface VerificationRecord {
  email: string;
  code: string;
  expiresAt: number;
}

interface AuthContextValue {
  user: User | null;
  pendingEmail: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  register: (
    name: string,
    email: string,
    phone: string,
    password: string
  ) => Promise<{ success: boolean; message: string }>;
  verifyCode: (code: string) => Promise<{ success: boolean; message: string }>;
  resendVerificationCode: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const USERS_STORAGE_KEY = "mojo_miles_users";
const CURRENT_USER_STORAGE_KEY = "mojo_miles_current_user";
const VERIFICATION_STORAGE_KEY = "mojo_miles_verification";

function loadUsers(): StoredUser[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

function saveUsers(users: StoredUser[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
}

function loadCurrentUser(): User | null {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem(CURRENT_USER_STORAGE_KEY) ?? "null");
  } catch {
    return null;
  }
}

function saveCurrentUser(user: User | null) {
  if (typeof window === "undefined") return;
  if (user) {
    localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
  }
}

function loadVerificationRecord(): VerificationRecord | null {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem(VERIFICATION_STORAGE_KEY) ?? "null");
  } catch {
    return null;
  }
}

function saveVerificationRecord(record: VerificationRecord | null) {
  if (typeof window === "undefined") return;
  if (record) {
    localStorage.setItem(VERIFICATION_STORAGE_KEY, JSON.stringify(record));
  } else {
    localStorage.removeItem(VERIFICATION_STORAGE_KEY);
  }
}

function createVerificationCode(email: string): VerificationRecord {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  return {
    email,
    code,
    expiresAt: Date.now() + 1000 * 60 * 10,
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [pendingEmail, setPendingEmail] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = loadCurrentUser();
    const verification = loadVerificationRecord();
    setUser(storedUser);
    setPendingEmail(verification?.email ?? null);
  }, []);

  const login = async (email: string, password: string) => {
    const users = loadUsers();
    const normalizedEmail = email.toLowerCase().trim();
    const storedUser = users.find((user) => user.email.toLowerCase() === normalizedEmail);
    if (!storedUser) {
      return { success: false, message: "No account found with this email." };
    }
    if (storedUser.password !== password) {
      return { success: false, message: "Incorrect password. Please try again." };
    }
    if (!storedUser.verified) {
      const verification = loadVerificationRecord();
      if (verification?.email !== storedUser.email) {
        const pending = createVerificationCode(storedUser.email);
        saveVerificationRecord(pending);
        setPendingEmail(pending.email);
      }
      return { success: false, message: "Your phone number is not verified. Check your code or resend verification." };
    }
    const authenticated = {
      id: storedUser.id,
      name: storedUser.name,
      email: storedUser.email,
      phone: storedUser.phone,
      verified: storedUser.verified,
    };
    setUser(authenticated);
    saveCurrentUser(authenticated);
    return { success: true, message: "Login successful." };
  };

  const logout = () => {
    setUser(null);
    saveCurrentUser(null);
  };

  const register = async (name: string, email: string, phone: string, password: string) => {
    const users = loadUsers();
    const normalizedEmail = email.toLowerCase().trim();
    if (users.some((entry) => entry.email.toLowerCase() === normalizedEmail)) {
      return { success: false, message: "An account with this email already exists." };
    }
    const newUser: StoredUser = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: normalizedEmail,
      phone: phone.trim(),
      password,
      verified: false,
    };
    const updatedUsers = [...users, newUser];
    saveUsers(updatedUsers);
    const verification = createVerificationCode(newUser.email);
    saveVerificationRecord(verification);
    setPendingEmail(newUser.email);
    return { success: true, message: "Account created. Enter the verification code sent to your phone." };
  };

  const verifyCode = async (code: string) => {
    const verification = loadVerificationRecord();
    if (!verification) {
      return { success: false, message: "No verification code is pending. Please register first." };
    }
    if (Date.now() > verification.expiresAt) {
      return { success: false, message: "The code has expired. Please resend the code." };
    }
    if (verification.code !== code.trim()) {
      return { success: false, message: "That code is not valid. Please try again." };
    }
    const users = loadUsers();
    const index = users.findIndex((entry) => entry.email === verification.email);
    if (index === -1) {
      return { success: false, message: "Unable to verify this account. Please register again." };
    }
    users[index].verified = true;
    saveUsers(users);
    const verifiedUser = {
      id: users[index].id,
      name: users[index].name,
      email: users[index].email,
      phone: users[index].phone,
      verified: true,
    };
    setUser(verifiedUser);
    saveCurrentUser(verifiedUser);
    saveVerificationRecord(null);
    setPendingEmail(null);
    return { success: true, message: "Phone verified successfully. You are now logged in." };
  };

  const resendVerificationCode = () => {
    const verification = loadVerificationRecord();
    if (!verification) {
      return;
    }
    const newVerification = createVerificationCode(verification.email);
    saveVerificationRecord(newVerification);
    setPendingEmail(newVerification.email);
  };

  const value = useMemo(
    () => ({
      user,
      pendingEmail,
      isAuthenticated: Boolean(user),
      login,
      logout,
      register,
      verifyCode,
      resendVerificationCode,
    }),
    [user, pendingEmail]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
