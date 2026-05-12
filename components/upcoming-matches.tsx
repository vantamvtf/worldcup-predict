import { MatchCard } from "@/components/match-card";
import { MatchWithTeams } from "@/services/fixtureService";

interface UpcomingMatchesProps {
  matches: MatchWithTeams[];
}

export function UpcomingMatches({ matches }: UpcomingMatchesProps) {
  return (
    <section className="wc-card space-y-4 p-4 sm:p-5 lg:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-wc-textDark sm:text-xl">Trận đấu sắp tới</h2>
        <a href="#" className="text-sm font-semibold text-wc-green hover:underline">
          Xem tất cả &gt;
        </a>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </section>
  );
}
