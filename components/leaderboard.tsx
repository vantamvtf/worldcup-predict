import { LeaderboardRow } from "@/components/leaderboard-row";
import { LeaderboardRowData } from "@/services/leaderboardService";

interface LeaderboardProps {
  entries: LeaderboardRowData[];
}

export function Leaderboard({ entries }: LeaderboardProps) {
  return (
    <section className="space-y-4 rounded-2xl border border-white/10 bg-wc-card p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Leaderboard</h2>
        <span className="rounded-full border border-wc-gold/30 bg-wc-gold/10 px-3 py-1 text-xs font-semibold text-wc-gold">
          Top 10 tuần này
        </span>
      </div>
      <div className="space-y-2">
        {entries.map((entry) => (
          <LeaderboardRow key={entry.userId} entry={entry} />
        ))}
      </div>
    </section>
  );
}
