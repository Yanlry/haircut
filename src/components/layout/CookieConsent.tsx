"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "haircut-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (!stored) setVisible(true);
  }, []);

  function choose(value: "accepted" | "declined") {
    window.localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentement aux cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink-soft/95 px-4 py-5 backdrop-blur sm:px-6"
    >
      <div className="barber-stripe absolute inset-x-0 top-0 h-1" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-paper/80">
          Ce site utilise des cookies pour assurer son bon fonctionnement et,
          si vous l&apos;acceptez, mesurer sa fréquentation. Vous pouvez
          accepter ou refuser ces cookies à tout moment.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("declined")}
            className="rounded-md border border-white/20 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-paper uppercase transition hover:border-white/40"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-md bg-barber-red px-4 py-2 text-xs font-semibold tracking-[0.12em] text-paper uppercase transition hover:brightness-110"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
