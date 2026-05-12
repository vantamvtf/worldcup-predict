import { LeaderboardRow } from "@/components/leaderboard-row";
import { LeaderboardRowData } from "@/services/leaderboardService";

interface LeaderboardProps {
  entries: LeaderboardRowData[];
  currentUserId?: string;
}

export function Leaderboard({ entries, currentUserId = "u1" }: LeaderboardProps) {
  return (
    <section className="wc-card space-y-4 p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-wc-textDark sm:text-xl">Bảng xếp hạng toàn hệ thống</h2>
        <span className="rounded-full border border-[#f1deb6] bg-[#fff5dd] px-3 py-1 text-xs font-semibold text-[#9f6d0f]">
          Top 10 tuần này
        </span>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[650px] space-y-2">
          <div className="grid grid-cols-[40px_1.5fr_1fr_70px_110px] px-3 text-[11px] font-semibold uppercase tracking-wide text-[#708074]">
            <p>#</p>
            <p>Người chơi</p>
            <p>Đội tuyển yêu thích</p>
            <p className="text-right">Điểm</p>
            <p className="text-right">Hạng / Badge</p>
          </div>

          {entries.map((entry) => (
            <LeaderboardRow key={entry.userId} entry={entry} isCurrentUser={entry.userId === currentUserId} />
          ))}
        </div>
      </div>
    </section>
  );
}
