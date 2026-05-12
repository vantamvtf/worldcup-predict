import { MatchWithTeams } from "@/services/fixtureService";
import Link from "next/link";

interface MatchCardProps {
  match: MatchWithTeams;
}

const statusMap = {
  upcoming: { label: "Sắp diễn ra", className: "border-[#cfe7da] bg-[#eef9f2] text-wc-green" },
  locked: { label: "Đã khóa dự đoán", className: "border-[#f3dfb4] bg-[#fff7e6] text-[#a56e11]" },
  finished: { label: "Đã kết thúc", className: "border-[#d9e0d9] bg-[#f6f8f6] text-[#707b73]" }
};

function TeamPill({ name, shortName, gradient }: { name: string; shortName: string; gradient: string }) {
  return (
    <div className="flex items-center gap-2 text-sm font-semibold text-wc-textDark">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full border border-[#f3ebda] bg-gradient-to-br text-[10px] font-bold text-slate-900 ${gradient}`}
      >
        {shortName}
      </div>
      <span className="truncate">{name}</span>
    </div>
  );
}

export function MatchCard({ match }: MatchCardProps) {
  const status = statusMap[match.status];

  return (
    <article className="rounded-2xl border border-wc-borderSoft bg-white p-3.5 shadow-sm">
      <div className="mb-1.5 flex items-center justify-between gap-2">
        <p className="text-[11px] text-wc-textMuted">
          {match.stage} · {match.group}
        </p>
        <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${status.className}`}>
          {status.label}
        </span>
      </div>

      <p className="text-xs font-semibold text-wc-green">{match.kickoffVietnam}</p>

      <div className="my-3 space-y-2 rounded-xl border border-[#f1e6d1] bg-[#fefcf7] p-2.5">
        <TeamPill name={match.homeTeam.name} shortName={match.homeTeam.shortName} gradient={match.homeTeam.flagGradient} />
        <p className="text-center text-[11px] font-semibold text-[#97a296]">VS</p>
        <TeamPill name={match.awayTeam.name} shortName={match.awayTeam.shortName} gradient={match.awayTeam.flagGradient} />
      </div>

      <p className="mb-3 flex items-center gap-1 text-[11px] text-wc-textMuted">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-wc-green" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
        <span className="truncate">{match.venue}</span>
      </p>
      <Link href={`/du-doan/${match.id}`} className="white-green-outline w-full text-center text-xs">
        Dự đoán
      </Link>
    </article>
  );
}
