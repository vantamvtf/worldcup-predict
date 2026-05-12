import { PredictionSummary } from "@/lib/types";

interface MyPredictionSummaryProps {
  summary: PredictionSummary;
  scoringRules: string[];
}

const summaryItems: Array<{ key: keyof PredictionSummary; label: string }> = [
  { key: "totalSubmitted", label: "Dự đoán đã gửi" },
  { key: "correctResults", label: "Đúng kết quả" },
  { key: "exactScoreHits", label: "Đúng tỉ số" },
  { key: "currentPoints", label: "Điểm hiện tại" },
  { key: "currentRank", label: "Hạng hiện tại" }
];

export function MyPredictionSummary({ summary, scoringRules }: MyPredictionSummaryProps) {
  return (
    <section className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
      <article className="rounded-2xl border border-white/10 bg-wc-card p-5 shadow-card">
        <h2 className="text-lg font-bold text-white">Dự đoán của tôi</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {summaryItems.map((item) => (
            <div key={item.key} className="rounded-xl border border-white/10 bg-[#0a1428] p-3">
              <p className="text-xs text-slate-400">{item.label}</p>
              <p className="mt-1 text-xl font-extrabold text-white">{summary[item.key]}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-2xl border border-wc-gold/30 bg-gradient-to-br from-[#1c2238] to-[#19162b] p-5 shadow-card">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-wc-gold">Luật tính điểm</h3>
        <ul className="mt-3 space-y-2">
          {scoringRules.map((rule) => (
            <li key={rule} className="text-xs text-slate-200 sm:text-sm">
              • {rule}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
