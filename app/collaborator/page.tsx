"use client";
import Link from 'next/link'

import React, { useMemo, useState } from "react";
import { Share2, Download, UserPlus, CheckCircle, Info } from "lucide-react";
import MainNavbar from '../components/hompage/MainNavbar';


type LinkButtonProps = {
  href: string;
  enabled: boolean;
  children: React.ReactNode;
  onEnabledClick?: () => void;
  classNameEnabled?: string;
  classNameDisabled?: string;
};

function LinkButton({
  href,
  enabled,
  children,
  onEnabledClick,
  classNameEnabled,
  classNameDisabled,
}: LinkButtonProps) {
  // Treat "/" as "not ready yet" placeholder.
  const locked = !enabled || !href || href === "/";

  return (
    <a
      href={locked ? "#" : href}
      target="_blank"
      rel="noreferrer"
      aria-disabled={locked}
      tabIndex={locked ? -1 : 0}
      onClick={(e) => {
        if (locked) {
          e.preventDefault();
          return;
        }
        onEnabledClick?.();
      }}
      className={[
        "inline-flex items-center justify-center px-6 py-2 rounded-lg font-medium transition-colors",
        locked
          ? classNameDisabled ??
            "bg-slate-200 text-slate-400 cursor-not-allowed pointer-events-none"
          : classNameEnabled ?? "bg-blue-600 hover:bg-blue-700 text-white",
      ].join(" ")}
    >
      {children}
    </a>
  );
}

type StepCardProps = {
  active: boolean;
  done: boolean;
  icon: React.ReactNode;
  title: string;
  desc: string;
  action: React.ReactNode;
};

function StepCard({ active, done, icon, title, desc, action }: StepCardProps) {
  return (
    
    <div
      className={[
        "p-4 rounded-xl border-2 transition-all",
        active ? "border-blue-500 bg-blue-50" : "border-slate-100",
        !active && !done ? "opacity-60" : "",
      ].join(" ")}
    >
      <div className="flex items-start gap-4">
        <div
          className={[
            "p-2 rounded-lg",
            active ? "bg-blue-500 text-white" : "bg-slate-200 text-slate-500",
          ].join(" ")}
        >
          {icon}
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600 mb-3">{desc}</p>
          {action}
        </div>

        {done ? <CheckCircle className="text-green-500" /> : null}
      </div>
    </div>
  );
}

export default function CollaboratorPage() {
  // Steps:
  // 1 = join group
  // 2 = enroll as tester
  // 3 = download app
  const [step, setStep] = useState<number>(1);

  // ✅ Replace these later
  const GOOGLE_GROUP_LINK = "/";
  const PLAY_STORE_LINK = "/";

  const isGroupReady = GOOGLE_GROUP_LINK && GOOGLE_GROUP_LINK !== "/";
  const isPlayReady = PLAY_STORE_LINK && PLAY_STORE_LINK !== "/";

  const bannerText = useMemo(() => {
    if (!isGroupReady && !isPlayReady)
      return "Links not added yet — this page is a preview (safe to share).";
    if (!isGroupReady) return "Google Group link not added yet.";
    if (!isPlayReady) return "Play Store testing link not added yet.";
    return null;
  }, [isGroupReady, isPlayReady]);

  const canEnroll = step >= 2; // step 2 link should only be usable after step 1 done
  const canDownload = step >= 3; // step 3 link should only be usable after step 2 done

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-6 bg-slate-50">
   
      <div className="w-full max-w-2xl p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Join the Early Access
          </h1>
          <p className="text-slate-600">
            Help us polish the experience and get exclusive first access to new features.
          </p>

          {bannerText ? (
            <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-900">
              <Info size={16} />
              <span>{bannerText}</span>
            </div>
          ) : null}
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {/* Step 1 */}
          <StepCard
            active={step === 1}
            done={step > 1}
            icon={<UserPlus size={24} />}
            title="Step 1: Join the Access Group"
            desc="Google requires testers to be part of our official group to download the app."
            action={
              <div className="flex flex-wrap gap-2">
                <LinkButton
                  href={GOOGLE_GROUP_LINK}
                  enabled={true} // Always clickable if link is real; if "/", it will be locked.
                  onEnabledClick={() => setStep(2)}
                  classNameEnabled="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Join Google Group
                </LinkButton>

                {/* Manual confirm (in case they joined on another tab/device) */}
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center justify-center px-6 py-2 rounded-lg font-medium transition-colors bg-slate-900 hover:bg-slate-800 text-white"
                >
                  I already joined
                </button>
              </div>
            }
          />

          {/* Step 2 */}
          <StepCard
            active={step === 2}
            done={step > 2}
            icon={<Share2 size={24} />}
            title="Step 2: Become a Tester"
            desc='Click the link below and select "Become a Tester" on the Google Play page.'
            action={
              <div className="flex flex-wrap gap-2">
                <LinkButton
                  href={PLAY_STORE_LINK}
                  enabled={canEnroll}
                  onEnabledClick={() => setStep(3)}
                  classNameEnabled="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Enroll on Play Store
                </LinkButton>

                <button
                  type="button"
                  disabled={!canEnroll}
                  onClick={() => setStep(3)}
                  className={[
                    "inline-flex items-center justify-center px-6 py-2 rounded-lg font-medium transition-colors",
                    canEnroll
                      ? "bg-slate-900 hover:bg-slate-800 text-white"
                      : "bg-slate-200 text-slate-400 cursor-not-allowed",
                  ].join(" ")}
                >
                  I already enrolled
                </button>
              </div>
            }
          />

          {/* Step 3 */}
          <StepCard
            active={step === 3}
            done={false}
            icon={<Download size={24} />}
            title="Step 3: Install & Explore"
            desc="Download the app! Please keep it installed for at least 14 days to help us stay on the store."
            action={
              <div className="flex flex-wrap items-center gap-2">
                <LinkButton
                  href={PLAY_STORE_LINK}
                  enabled={canDownload}
                  classNameEnabled="bg-green-600 hover:bg-green-700 text-white"
                >
                  Download App
                </LinkButton>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center justify-center px-6 py-2 rounded-lg font-medium transition-colors bg-white border border-slate-200 hover:bg-slate-50 text-slate-900"
                >
                  Start over
                </button>
              </div>
            }
          />
        </div>

        {/* VIP Note */}
        <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-100">
          <p className="text-xs text-amber-800 text-center leading-relaxed">
            <strong>Note for our VIPs:</strong> To help us pass Google s quality check, please open the
            app occasionally over the next 2 weeks. We really appreciate your support!
          </p>
        </div>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">

                  <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-2 rounded-lg font-medium transition-colors bg-blue-600 hover:bg-slate-800 text-white"
            >
              Back to homepage
            </Link>
    </div>
      </div>

    </div>
  
     
  );
}
