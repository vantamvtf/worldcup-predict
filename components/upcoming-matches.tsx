import { MatchCard } from "@/components/match-card";
import { MatchWithTeams } from "@/services/fixtureService";

interface UpcomingMatchesProps {
  matches: MatchWithTeams[];
}

export function UpcomingMatches({ matches }: UpcomingMatchesProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Trận sắp diễn ra</h2>
        <a href="#" className="text-sm text-wc-green hover:underline">
          Xem toàn bộ lịch
        </a>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </section>
  );
}
