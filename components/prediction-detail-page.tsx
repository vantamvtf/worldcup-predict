"use client";

import Link from "next/link";
import { useState } from "react";
import { MatchWithTeams } from "@/services/fixtureService";
import { predictionService } from "@/services/predictionService";

interface PredictionDetailPageProps {
  match: MatchWithTeams;
  otherMatches: MatchWithTeams[];
}

function TeamBadge({ name, shortName, gradient }: { name: string; shortName: string; gradient: string }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full border border-white bg-gradient-to-br text-[10px] font-bold text-slate-900 ${gradient}`}
      >
        {shortName}
      </span>
      <span className="text-sm font-semibold text-white">{name}</span>
    </div>
  );
}

export function PredictionDetailPage({ match, otherMatches }: PredictionDetailPageProps) {
  const [homeScore, setHomeScore] = useState("");
  const [awayScore, setAwayScore] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const savePrediction = async () => {
    if (homeScore === "" || awayScore === "") {
      setMessage("Vui lòng nhập đủ tỉ số");
      return;
    }
    setSaving(true);
    await predictionService.savePrediction({
      matchId: match.id,
      homeScore: Number(homeScore),
      awayScore: Number(awayScore)
    });
    setSaving(false);
    setMessage("Đã lưu dự đoán thành công!");
    window.setTimeout(() => setMessage(null), 1800);
  };

  return (
    <div className="min-h-screen bg-wc-bgWarm pb-24">
      <header className="sticky top-0 z-20 border-b border-wc-borderSoft bg-white/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link href="/" className="flex h-9 w-9 items-center justify-center rounded-xl border border-wc-borderSoft">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9">
              <path d="m15 5-7 7 7 7" />
            </svg>
          </Link>
          <p className="text-sm font-bold text-wc-textDark">Dự đoán</p>
          <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-wc-borderSoft">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M15 17h5l-1.4-1.4a2 2 0 0 1-.6-1.4V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5" />
              <path d="M10 17a2 2 0 0 0 4 0" />
            </svg>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl space-y-4 px-4 py-4">
        <section className="overflow-hidden rounded-2xl border border-[#1d5b3c] bg-gradient-to-br from-[#0b4b2f] to-[#0f6a3d] p-4 text-white shadow-card">
          <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-100">
            {match.stage} · {match.group}
          </p>
          <p className="mt-1 text-xs text-emerald-100">{match.kickoffVietnam}</p>
          <p className="mt-1 flex items-center gap-1 text-xs text-emerald-100">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {match.venue}
          </p>

          <div className="mt-4 space-y-3 rounded-xl bg-white/10 p-3">
            <TeamBadge name={match.homeTeam.name} shortName={match.homeTeam.shortName} gradient={match.homeTeam.flagGradient} />
            <p className="text-center text-xs font-semibold text-emerald-100">VS</p>
            <TeamBadge name={match.awayTeam.name} shortName={match.awayTeam.shortName} gradient={match.awayTeam.flagGradient} />
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            <input
              type="number"
              min={0}
              placeholder="0"
              value={homeScore}
              onChange={(event) => setHomeScore(event.target.value)}
              className="h-10 w-16 rounded-lg border border-white/40 bg-white/90 text-center text-base font-bold text-[#1e2f26] outline-none"
            />
            <span className="text-lg font-bold">:</span>
            <input
              type="number"
              min={0}
              placeholder="0"
              value={awayScore}
              onChange={(event) => setAwayScore(event.target.value)}
              className="h-10 w-16 rounded-lg border border-white/40 bg-white/90 text-center text-base font-bold text-[#1e2f26] outline-none"
            />
          </div>

          <button onClick={savePrediction} className="gold-primary mt-4 w-full justify-center" disabled={saving}>
            {saving ? "Đang lưu..." : "Lưu dự đoán"}
          </button>
        </section>

        <section className="wc-card p-4">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-bold text-wc-textDark">Trận đấu cùng giờ</h2>
            <Link href="/" className="text-xs font-semibold text-wc-green">
              Xem lịch đầy đủ &gt;
            </Link>
          </div>

          <div className="space-y-2">
            {otherMatches.map((item) => (
              <div key={item.id} className="rounded-xl border border-wc-borderSoft bg-[#fefcf7] p-3">
                <p className="text-[11px] text-[#6b786d]">
                  {item.group} · {item.kickoffVietnam}
                </p>
                <p className="mt-1 text-sm font-semibold text-wc-textDark">
                  {item.homeTeam.name} vs {item.awayTeam.name}
                </p>
                <Link href={`/du-doan/${item.id}`} className="gold-primary mt-2 inline-flex h-9 text-xs">
                  Dự đoán
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      {message && (
        <div className="fixed bottom-20 left-1/2 z-30 -translate-x-1/2 rounded-xl border border-[#1f7a4d] bg-[#0c6639] px-4 py-2 text-xs font-semibold text-white shadow-lg">
          {message}
        </div>
      )}
    </div>
  );
}
