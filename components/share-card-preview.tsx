"use client";

import { useState } from "react";

export function ShareCardPreview() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("https://wc26league.mock/challenge/brazil-morocco");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section className="overflow-hidden rounded-2xl border border-[#26603f] bg-gradient-to-r from-[#12482f] to-[#0f3d29] p-5 text-white shadow-card">
      <p className="text-xs uppercase tracking-[0.2em] text-emerald-100">Thử thách dự đoán đặc biệt</p>

      <div className="mt-2 rounded-xl bg-white/10 p-4 backdrop-blur">
        <p className="text-lg font-bold">Brazil 2-1 Morocco</p>
        <p className="text-sm text-emerald-100">Giải cảm xúc</p>
        <p className="mt-2 text-sm text-emerald-50">Hãy dự đoán tỉ số bàn thắng cuối cùng!</p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button className="gold-primary text-xs">Tham gia thử thách</button>
        <span className="rounded-full border border-white/30 bg-white/10 px-3 py-2 text-xs font-semibold">
          Còn 12:45:30
        </span>
        <button
          onClick={handleCopy}
          className="rounded-xl border border-white/40 bg-white/10 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/20"
        >
          {copied ? "Đã copy!" : "Copy link"}
        </button>
      </div>
    </section>
  );
}
