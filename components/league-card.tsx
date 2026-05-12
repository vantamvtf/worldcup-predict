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
  l1: "from-[#d4e5cb] via-[#95b584] to-[#4d7f4f]",
  l2: "from-[#d5def1] via-[#9db7de] to-[#5b7fb2]",
  l3: "from-[#f0dbb5] via-[#d3ac6d] to-[#976538]",
  l4: "from-[#f0d8d2] via-[#c79f94] to-[#915f57]"
};

export function LeagueCard({ league }: LeagueCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-wc-borderSoft bg-white p-0 shadow-sm">
      <div className={`relative h-[74px] bg-gradient-to-r ${leagueVisual[league.id] ?? "from-[#c2d0c0] to-[#7a9278]"}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.45),transparent_45%)]" />
      </div>
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
