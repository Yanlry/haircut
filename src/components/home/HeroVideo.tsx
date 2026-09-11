"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { salon, addressLine } from "@/data/salon";
import { assetPath } from "@/lib/site-paths";

const TIMED_IMAGE_START_SECONDS = 16.2;
const entryImage = assetPath("/images/entrer-sur-site.png");
const logoImage = assetPath("/images/HAIRCUT.png");
const salonVideo = assetPath("/video.mp4");
const videoPoster = assetPath("/images/salon/salon-exterieur.png");

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showTimedImage, setShowTimedImage] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (reduceMotion.matches) {
      video.pause();
      video.loop = false;
      return;
    }

    video.muted = true;
    video.pause();
    video.currentTime = 0;
  }, []);

  useEffect(() => {
    if (hasEntered) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [hasEntered]);

  const enterSalon = () => {
    const video = videoRef.current;
    setHasEntered(true);
    setIsMuted(false);
    setShowTimedImage(false);

    if (!video) return;

    video.currentTime = 0;
    video.muted = false;
    void video.play().catch(() => {
      video.muted = true;
      setIsMuted(true);
    });
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    if (!nextMuted) {
      void video.play().catch(() => {
        video.muted = true;
        setIsMuted(true);
      });
    }
  };

  const updateTimedImage = () => {
    const video = videoRef.current;
    if (!video) return;

    const shouldShow =
      hasEntered && video.currentTime >= TIMED_IMAGE_START_SECONDS;

    setShowTimedImage((current) =>
      current === shouldShow ? current : shouldShow
    );
  };

  const soundIcon = (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 9.5V14.5H8L13 19V5L8 9.5H4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {isMuted ? (
        <>
          <path
            d="M17 9L21 13"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M21 9L17 13"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <path
            d="M16.5 9.5C17.2 10.2 17.6 11.1 17.6 12C17.6 12.9 17.2 13.8 16.5 14.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M18.8 7.2C20 8.5 20.7 10.2 20.7 12C20.7 13.8 20 15.5 18.8 16.8"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );

  return (
    <section
      id="accueil"
      className="relative h-[100svh] w-full overflow-hidden bg-ink"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={salonVideo}
        poster={videoPoster}
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        onTimeUpdate={updateTimedImage}
        onEnded={() => setShowTimedImage(false)}
      />

      {!hasEntered && (
        <div className="fixed inset-0 z-[80] overflow-hidden bg-ink px-6 text-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-[position:49%_59%] opacity-70 md:bg-center"
            style={{ backgroundImage: `url('${entryImage}')` }}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 flex min-h-svh flex-col items-center justify-center">
            <div className="barber-stripe rounded-sm p-[2px] shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
              <button
                type="button"
                onClick={enterSalon}
                className="rounded-[1px] bg-black/65 px-8 py-4 text-sm tracking-[0.18em] text-paper uppercase backdrop-blur-sm transition-colors hover:bg-paper hover:text-ink"
              >
                Entrer dans le salon
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/70" />

      {showTimedImage && (
        <div className="pointer-events-none absolute inset-0 z-10 flex -translate-y-24 items-center justify-center px-6">
          <Image
            src={logoImage}
            alt=""
            width={1672}
            height={941}
            aria-hidden="true"
            className="h-auto max-h-[58svh] w-full max-w-5xl object-contain opacity-95"
          />
        </div>
      )}

<div className="relative z-10 flex h-full translate-y-40 flex-col items-center justify-center px-6 text-center md:translate-y-70">
        <p className="text-sm tracking-[0.3em] text-paper/90 uppercase sm:text-base">
          {salon.tagline}
        </p>

        <p className="mt-2 text-xs tracking-[0.15em] text-paper/60 uppercase sm:text-sm">
          {addressLine}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/tarifs"
            className="rounded-sm border border-paper/50 px-8 py-3 text-sm tracking-[0.15em] text-paper uppercase transition-colors hover:border-paper hover:bg-paper hover:text-ink"
          >
            Voir les tarifs
          </Link>
          <div className="flex items-center justify-center gap-3">
            <a
              href={salon.phone.href}
              className="rounded-sm bg-barber-red px-8 py-3 text-sm tracking-[0.15em] text-paper uppercase transition-colors hover:bg-barber-red/85"
            >
              Appeler
            </a>
            <button
              type="button"
              onClick={toggleSound}
              aria-label={isMuted ? "Activer le son" : "Couper le son"}
              title={isMuted ? "Activer le son" : "Couper le son"}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-paper/40 bg-black/35 text-paper backdrop-blur-sm transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              {soundIcon}
            </button>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-6 z-10 flex justify-center motion-reduce:hidden"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="animate-bounce text-paper/70"
        >
          <path
            d="M4 7L10 13L16 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
