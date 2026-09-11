"use client";

import { useEffect, useState, type FormEvent } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, type User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setCheckingAuth(false);
    });

    return () => unsubscribe();
  }, []);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setError("Identifiants incorrects.");
    } finally {
      setSubmitting(false);
    }
  }

  if (checkingAuth) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-ink text-paper">
        <p className="text-paper/60">Chargement...</p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-ink px-4 text-paper">
        <form
          onSubmit={handleLogin}
          className="grid w-full max-w-sm gap-5 border border-white/10 bg-ink-soft px-6 py-8"
        >
          <h1 className="font-display text-3xl tracking-wide">Admin</h1>

          <label className="grid gap-2 text-sm text-paper/80">
            Email
            <input
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="border border-white/15 bg-ink px-4 py-3 text-paper focus:border-barber-red focus:outline-none"
            />
          </label>

          <label className="grid gap-2 text-sm text-paper/80">
            Mot de passe
            <input
              required
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="border border-white/15 bg-ink px-4 py-3 text-paper focus:border-barber-red focus:outline-none"
            />
          </label>

          {error && <p className="text-sm text-barber-red">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="rounded-sm bg-barber-red px-6 py-3 text-sm tracking-[0.15em] text-paper uppercase transition-colors hover:bg-barber-red/85 disabled:opacity-60"
          >
            {submitting ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ink text-paper">
      <AdminDashboard />
    </main>
  );
}
