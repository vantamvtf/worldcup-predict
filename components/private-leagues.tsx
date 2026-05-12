import { LeagueCard } from "@/components/league-card";
import { League } from "@/lib/types";

interface PrivateLeaguesProps {
  leagues: League[];
}

export function PrivateLeagues({ leagues }: PrivateLeaguesProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-wc-textDark sm:text-xl">League của tôi</h2>
        <a href="#" className="text-sm font-semibold text-wc-deepGreen hover:underline">
          Xem tất cả &gt;
        </a>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {leagues.map((league) => (
          <LeagueCard key={league.id} league={league} />
        ))}
      </div>
    </section>
  );
}
