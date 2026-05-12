import { LeaderboardRow } from "@/components/leaderboard-row";
import { LeaderboardRowData } from "@/services/leaderboardService";

interface LeaderboardProps {
  entries: LeaderboardRowData[];
  currentUserId?: string;
}

export function Leaderboard({ entries, currentUserId = "u1" }: LeaderboardProps) {
  return (
    <section className="wc-card space-y-4 p-4 sm:p-5 lg:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-wc-textDark sm:text-xl">Bảng xếp hạng toàn hệ thống</h2>
        <button className="white-gold-outline hidden h-9 px-3 text-xs sm:inline-flex">Xem thêm</button>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[640px] space-y-2">
          <div className="grid grid-cols-[36px_1.4fr_1fr_70px_110px] px-3 text-[11px] font-semibold uppercase tracking-wide text-[#708074]">
            <p>#</p>
            <p>Người chơi</p>
            <p>Đội tuyển yêu thích</p>
            <p className="text-right">Điểm</p>
            <p className="text-right">Hạng</p>
          </div>

          {entries.map((entry) => (
            <LeaderboardRow key={entry.userId} entry={entry} isCurrentUser={entry.userId === currentUserId} />
          ))}
        </div>
      </div>
    </section>
  );
}
