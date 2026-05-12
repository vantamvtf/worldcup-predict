"use client";

import { useState } from "react";
import { predictionService } from "@/services/predictionService";

interface PredictionInputProps {
  matchId: string;
  disabled?: boolean;
}

export function PredictionInput({ matchId, disabled = false }: PredictionInputProps) {
  const [homeScore, setHomeScore] = useState("");
  const [awayScore, setAwayScore] = useState("");
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const savePrediction = async () => {
    if (disabled || homeScore === "" || awayScore === "") {
      setMessage("Nhập đủ tỉ số trước khi lưu");
      return;
    }

    setIsSaving(true);
    await predictionService.savePrediction({
      matchId,
      homeScore: Number(homeScore),
      awayScore: Number(awayScore)
    });
    setIsSaving(false);
    setMessage("Đã lưu dự đoán thành công!");
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <input
          type="number"
          min={0}
          value={homeScore}
          onChange={(event) => setHomeScore(event.target.value)}
          disabled={disabled}
          className="w-14 rounded-lg border border-white/20 bg-[#0a1428] px-2 py-1.5 text-center text-sm text-white outline-none transition focus:border-wc-green disabled:cursor-not-allowed disabled:opacity-60"
          placeholder="-"
        />
        <span className="text-xs text-slate-400">:</span>
        <input
          type="number"
          min={0}
          value={awayScore}
          onChange={(event) => setAwayScore(event.target.value)}
          disabled={disabled}
          className="w-14 rounded-lg border border-white/20 bg-[#0a1428] px-2 py-1.5 text-center text-sm text-white outline-none transition focus:border-wc-green disabled:cursor-not-allowed disabled:opacity-60"
          placeholder="-"
        />
      </div>

      <button
        type="button"
        onClick={savePrediction}
        disabled={disabled || isSaving}
        className="w-full rounded-xl bg-wc-green px-3 py-2 text-xs font-bold text-slate-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSaving ? "Đang lưu..." : "Lưu dự đoán"}
      </button>

      {message && <p className="text-xs text-emerald-300">{message}</p>}
    </div>
  );
}
