"use client";

import { useState } from "react";
import { League } from "@/lib/types";

interface LeagueCardProps {
  league: League;
}

export function LeagueCard({ league }: LeagueCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(league.inviteLink);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <article className="rounded-2xl border border-white/10 bg-wc-card p-4 shadow-card">
      <h3 className="text-base font-bold text-white">{league.name}</h3>

      <div className="mt-3 space-y-1 text-xs text-slate-300">
        <p>Thành viên: {league.memberCount}</p>
        <p>Hạng của bạn: #{league.userRank}</p>
        <p>
          Mã mời: <span className="font-semibold text-wc-gold">{league.inviteCode}</span>
        </p>
      </div>

      <div className="mt-4 flex gap-2">
        <button className="flex-1 rounded-xl bg-wc-green px-3 py-2 text-xs font-bold text-slate-950 transition hover:brightness-110">
          Vào league
        </button>
        <button
          onClick={handleCopy}
          className="flex-1 rounded-xl border border-white/20 px-3 py-2 text-xs font-semibold text-white transition hover:border-wc-green hover:text-wc-green"
        >
          {copied ? "Đã copy!" : "Copy link mời"}
        </button>
      </div>
    </article>
  );
}
