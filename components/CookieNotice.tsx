"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie_notice_accepted");
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_notice_accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-[9999] px-3 md:px-6">
      <div
        className={[
          "mx-auto max-w-3xl",
          "rounded-2xl border border-white/10",
          "bg-violet-950/85 backdrop-blur-md",
          "shadow-lg shadow-black/30",
          "px-4 py-3 md:px-5",
        ].join(" ")}
        role="dialog"
        aria-live="polite"
        aria-label="Cookie notice"
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm leading-relaxed text-white/90">
            We use <span className="font-semibold text-white">essential cookies</span> to keep this site secure and working.
            No tracking or marketing cookies are currently used.{" "}
            <Link
              href="/privacy"
              className="font-semibold text-lime-200 underline underline-offset-4 hover:text-lime-100"
            >
              Learn more
            </Link>
            .
          </p>

          <div className="flex items-center gap-2 md:flex-shrink-0">
            <button
              onClick={handleAccept}
              className={[
                "inline-flex items-center justify-center",
                "rounded-xl px-4 py-2 text-sm font-semibold",
                "bg-lime-400 text-slate-900",
                "hover:bg-lime-300 active:bg-lime-200",
                "transition",
                "focus:outline-none focus:ring-2 focus:ring-lime-300/70 focus:ring-offset-2 focus:ring-offset-violet-950",
              ].join(" ")}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



