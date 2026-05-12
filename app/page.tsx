import { AppShell } from "@/components/app-shell";
import { BadgesSection } from "@/components/badges-section";
import { CafeLeaguePromo } from "@/components/cafe-league-promo";
import { HeroSection } from "@/components/hero-section";
import { Leaderboard } from "@/components/leaderboard";
import { MyPredictionSummary } from "@/components/my-prediction-summary";
import { PrivateLeagues } from "@/components/private-leagues";
import { ShareCardPreview } from "@/components/share-card-preview";
import { UpcomingMatches } from "@/components/upcoming-matches";
import { mockBadges } from "@/data/mockBadges";
import { mockLeagues } from "@/data/mockLeagues";
import { scoringRules } from "@/data/mockPredictions";
import { fixtureService } from "@/services/fixtureService";
import { leaderboardService } from "@/services/leaderboardService";
import { predictionService } from "@/services/predictionService";

export default function HomePage() {
  const matches = fixtureService.getUpcomingMatches(8);
  const summary = predictionService.getMyPredictionSummary();
  const topEntries = leaderboardService.getTopEntries(10);

  return (
    <AppShell>
      <div className="space-y-6">
        <HeroSection />
        <MyPredictionSummary summary={summary} scoringRules={scoringRules} />
        <UpcomingMatches matches={matches} />

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <Leaderboard entries={topEntries} />
          <ShareCardPreview />
        </div>

        <PrivateLeagues leagues={mockLeagues} />
        <CafeLeaguePromo />
        <BadgesSection badges={mockBadges} />
      </div>
    </AppShell>
  );
}
