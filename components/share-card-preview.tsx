"use client";

import { useState } from "react";
import Image from "next/image";

const WC26_CHALLENGE_BANNER_SRC = "/images/wc26/challenge-brazil-banner.svg?v=2";

export function ShareCardPreview() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("https://wc26league.mock/challenge/brazil-morocco");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section className="relative overflow-hidden rounded-2xl border border-[#286347] p-5 text-white shadow-card">
      <Image
        src={WC26_CHALLENGE_BANNER_SRC}
        alt="Thử thách dự đoán Brazil"
        fill
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f3e2b]/88 to-[#0f4f33]/72" />

      <div className="relative z-10">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-100">Thử thách dự đoán đặc biệt</p>

        <div className="mt-2 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur">
          <p className="text-lg font-bold">Brazil 2-1 Morocco</p>
          <p className="text-sm text-emerald-100">Giải cảm xúc</p>
          <p className="mt-2 text-sm text-emerald-50">Hãy dự đoán tỷ số bàn thắng cuối cùng!</p>
        </div>
      </div>

      <div className="relative z-10 mt-4 flex flex-wrap items-center gap-2">
        <button className="gold-primary text-xs">Tham gia thử thách</button>
        <span className="inline-flex h-11 items-center rounded-xl border border-white/30 bg-white/10 px-3 text-xs font-semibold">
          Còn 12:45:30
        </span>
        <button onClick={handleCopy} className="white-gold-outline text-xs">
          {copied ? "Đã copy!" : "Copy link"}
        </button>
      </div>
    </section>
  );
}
