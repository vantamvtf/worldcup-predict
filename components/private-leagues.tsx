import { LeagueCard } from "@/components/league-card";
import { League } from "@/lib/types";

interface PrivateLeaguesProps {
  leagues: League[];
}

export function PrivateLeagues({ leagues }: PrivateLeaguesProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">League riêng của bạn</h2>
        <a href="#" className="text-sm text-wc-green hover:underline">
          Tạo league mới
        </a>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {leagues.map((league) => (
          <LeagueCard key={league.id} league={league} />
        ))}
      </div>
    </section>
  );
}
