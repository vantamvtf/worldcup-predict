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
        <a href="#" className="text-sm font-semibold text-wc-green hover:underline">
          Xem tất cả &gt;
        </a>
      </div>

      <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-1 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
        {leagues.map((league) => {
          return (
            <div key={league.id} className="min-w-[220px] flex-1 sm:min-w-0">
              <LeagueCard league={league} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
