import { MatchWithTeams } from "@/services/fixtureService";
import Link from "next/link";

interface MatchCardProps {
  match: MatchWithTeams;
}

const statusMap = {
  upcoming: { label: "Sắp diễn ra", className: "border-[#c9e6d7] bg-[#eef9f2] text-wc-deepGreen" },
  locked: { label: "Đã khóa dự đoán", className: "border-[#f3dfb4] bg-[#fff7e6] text-[#a56e11]" },
  finished: { label: "Đã kết thúc", className: "border-[#d9e0d9] bg-[#f6f8f6] text-[#707b73]" }
};

function TeamPill({ name, shortName, gradient }: { name: string; shortName: string; gradient: string }) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-wc-textDark">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full border border-white bg-gradient-to-br text-[10px] font-bold text-slate-900 ${gradient}`}
      >
        {shortName}
      </div>
      <span>{name}</span>
    </div>
  );
}

export function MatchCard({ match }: MatchCardProps) {
  const status = statusMap[match.status];

  return (
    <article className="wc-card min-w-[210px] p-4">
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="text-[11px] text-[#6a776d]">
          {match.stage} · {match.group}
        </p>
        <span className={`rounded-full border px-2 py-1 text-[10px] font-semibold ${status.className}`}>
          {status.label}
        </span>
      </div>

      <p className="text-xs font-semibold text-wc-deepGreen">{match.kickoffVietnam}</p>

      <div className="my-3 space-y-2 rounded-xl border border-[#f0e8d8] bg-[#fcfaf4] p-3">
        <TeamPill name={match.homeTeam.name} shortName={match.homeTeam.shortName} gradient={match.homeTeam.flagGradient} />
        <p className="text-center text-[11px] font-semibold text-[#97a296]">VS</p>
        <TeamPill name={match.awayTeam.name} shortName={match.awayTeam.shortName} gradient={match.awayTeam.flagGradient} />
      </div>

      <p className="mb-3 text-[11px] text-[#6f7d72]">📍 {match.venue}</p>
      <Link href={`/du-doan/${match.id}`} className="white-green-outline block w-full text-center text-xs">
        Dự đoán
      </Link>
    </article>
  );
}
