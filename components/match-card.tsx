import { PredictionInput } from "@/components/prediction-input";
import { MatchWithTeams } from "@/services/fixtureService";

interface MatchCardProps {
  match: MatchWithTeams;
}

const statusMap = {
  upcoming: { label: "Sắp diễn ra", className: "border-emerald-400/35 bg-emerald-500/10 text-emerald-300" },
  locked: { label: "Đã khóa dự đoán", className: "border-amber-400/35 bg-amber-500/10 text-amber-300" },
  finished: { label: "Đã kết thúc", className: "border-slate-300/25 bg-slate-500/10 text-slate-300" }
};

function TeamPill({ name, shortName, gradient }: { name: string; shortName: string; gradient: string }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br text-[10px] font-bold text-slate-950 ${gradient}`}
      >
        {shortName}
      </div>
      <span className="text-sm font-medium text-white">{name}</span>
    </div>
  );
}

export function MatchCard({ match }: MatchCardProps) {
  const status = statusMap[match.status];

  return (
    <article className="rounded-2xl border border-white/10 bg-wc-card p-4 shadow-card">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs text-slate-300">
          {match.stage} · {match.group}
        </p>
        <span className={`rounded-full border px-2 py-1 text-[10px] font-semibold ${status.className}`}>
          {status.label}
        </span>
      </div>

      <p className="text-xs font-medium text-wc-green">{match.kickoffVietnam} (GMT+7)</p>

      <div className="my-3 space-y-2 rounded-xl bg-[#0a1428] p-3">
        <TeamPill name={match.homeTeam.name} shortName={match.homeTeam.shortName} gradient={match.homeTeam.flagGradient} />
        <div className="border-t border-white/10" />
        <TeamPill name={match.awayTeam.name} shortName={match.awayTeam.shortName} gradient={match.awayTeam.flagGradient} />
      </div>

      <p className="mb-3 text-xs text-slate-400">📍 {match.venue}</p>
      <PredictionInput matchId={match.id} disabled={match.status !== "upcoming"} />
    </article>
  );
}
