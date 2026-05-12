import { LeaderboardRowData } from "@/services/leaderboardService";

interface LeaderboardRowProps {
  entry: LeaderboardRowData;
}

export function LeaderboardRow({ entry }: LeaderboardRowProps) {
  const rankClass =
    entry.rank <= 3
      ? "bg-gradient-to-br from-wc-gold to-yellow-300 text-slate-900"
      : "bg-white/10 text-white";

  return (
    <div className="grid grid-cols-[44px_1fr_auto] items-center gap-3 rounded-xl border border-white/10 bg-[#0a1428] px-3 py-2">
      <div className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${rankClass}`}>
        #{entry.rank}
      </div>

      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <div className={`h-7 w-7 rounded-full ${entry.user.avatarColor}`} />
          <p className="truncate text-sm font-semibold text-white">{entry.user.name}</p>
        </div>
        <p className="truncate text-xs text-slate-400">
          Team yêu thích: {entry.favoriteTeam.name} · {entry.badgeLabel}
        </p>
      </div>

      <p className="text-right text-sm font-bold text-wc-green">{entry.points}đ</p>
    </div>
  );
}
