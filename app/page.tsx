import { AppShell } from "@/components/app-shell";
import { BadgesSection } from "@/components/badges-section";
import { CafeLeaguePromo } from "@/components/cafe-league-promo";
import { HeroSection } from "@/components/hero-section";
import { Leaderboard } from "@/components/leaderboard";
import { MobilePreviewRail } from "@/components/mobile-preview-rail";
import { MyPredictionSummary } from "@/components/my-prediction-summary";
import { PrivateLeagues } from "@/components/private-leagues";
import { ScoringRulesStrip } from "@/components/scoring-rules-strip";
import { ShareCardPreview } from "@/components/share-card-preview";
import { UpcomingMatches } from "@/components/upcoming-matches";
import { mockBadges } from "@/data/mockBadges";
import { mockLeagues } from "@/data/mockLeagues";
import { fixtureService } from "@/services/fixtureService";
import { leaderboardService } from "@/services/leaderboardService";
import { predictionService } from "@/services/predictionService";

export default function HomePage() {
  const matches = fixtureService.getUpcomingMatches(5);
  const summary = predictionService.getMyPredictionSummary();
  const topEntries = leaderboardService.getTopEntries(6);

  return (
    <AppShell>
      <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_328px] xl:items-start xl:gap-6">
        <div className="space-y-5 lg:space-y-6">
          <HeroSection />

          <section className="grid gap-4 xl:grid-cols-[1.5fr_0.7fr]">
            <UpcomingMatches matches={matches} />
            <MyPredictionSummary summary={summary} />
          </section>

          <section className="grid gap-4 xl:grid-cols-[1.38fr_0.92fr]">
            <Leaderboard entries={topEntries} />
            <PrivateLeagues leagues={mockLeagues} />
          </section>

          <section className="grid gap-4 xl:grid-cols-[1.38fr_0.92fr]">
            <BadgesSection badges={mockBadges} />
            <div className="space-y-4">
              <ShareCardPreview />
              <CafeLeaguePromo compact />
            </div>
          </section>

          <ScoringRulesStrip />
        </div>

        <MobilePreviewRail />
      </div>
    </AppShell>
  );
}
