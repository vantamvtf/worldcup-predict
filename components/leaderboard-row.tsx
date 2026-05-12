import { LeaderboardRowData } from "@/services/leaderboardService";

interface LeaderboardRowProps {
  entry: LeaderboardRowData;
  isCurrentUser?: boolean;
}

const badgeTone: Record<string, string> = {
  "Vua tỉ số": "bg-[#fff2cf] text-[#9b6c07]",
  "Chuỗi 3 trận đúng": "bg-[#edf8f0] text-wc-deepGreen",
  "Fan Argentina": "bg-[#eaf3ff] text-[#2f5fa8]",
  "Top hôm nay": "bg-[#f2f4f3] text-[#54635a]"
};

export function LeaderboardRow({ entry, isCurrentUser = false }: LeaderboardRowProps) {
  return (
    <div
      className={`grid grid-cols-[40px_1.5fr_1fr_70px_110px] items-center gap-2 rounded-xl border px-3 py-2 text-xs sm:text-sm ${
        isCurrentUser ? "border-[#e9d09e] bg-[#fff7e4]" : "border-wc-borderSoft bg-white"
      }`}
    >
      <div className="text-center font-bold text-[#4f5c53]">#{entry.rank}</div>
      <div className="flex min-w-0 items-center gap-2">
        <div className={`h-7 w-7 rounded-full ${entry.user.avatarColor}`} />
        <p className="truncate font-semibold text-wc-textDark">{entry.user.name}</p>
      </div>
      <p className="truncate text-[#5f6e63]">{entry.favoriteTeam.name}</p>
      <p className="text-right font-bold text-wc-textDark">{entry.points}</p>
      <span
        className={`justify-self-end rounded-full px-2 py-1 text-[11px] font-medium ${
          badgeTone[entry.badgeLabel] ?? "bg-[#f3f5f4] text-[#4a5a50]"
        }`}
      >
        {entry.badgeLabel}
      </span>
    </div>
  );
}
