import { League } from "@/lib/types";

interface LeagueCardProps {
  league: League;
}

const leagueMultipliers: Record<string, string> = {
  l1: "x2",
  l2: "x5",
  l3: "x3",
  l4: "x1"
};

const leagueVisual: Record<string, string> = {
  l1: "from-[#b6d3b4] to-[#5f855f]",
  l2: "from-[#bfd4ea] to-[#537ca8]",
  l3: "from-[#ceb27a] to-[#8a5d2f]",
  l4: "from-[#d7beb4] to-[#8c5c50]"
};

export function LeagueCard({ league }: LeagueCardProps) {
  return (
    <article className="wc-card overflow-hidden p-0">
      <div className={`h-16 bg-gradient-to-r ${leagueVisual[league.id] ?? "from-[#c2d0c0] to-[#7a9278]"}`} />
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-bold text-wc-textDark">{league.name}</h3>
          <span className="rounded-full border border-[#f1deb6] bg-[#fff6df] px-2 py-0.5 text-xs font-semibold text-[#9f6d0f]">
            {leagueMultipliers[league.id] ?? "x2"}
          </span>
        </div>

        <p className="text-xs text-[#66766a]">{league.memberCount} thành viên</p>
        <p className="text-xs text-[#66766a]">Hạng của bạn: #{league.userRank}</p>

        <button className="white-gold-outline w-full text-xs">Xem league</button>
      </div>
    </article>
  );
}
