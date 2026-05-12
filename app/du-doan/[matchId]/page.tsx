import { notFound } from "next/navigation";
import { PredictionDetailPage } from "@/components/prediction-detail-page";
import { fixtureService } from "@/services/fixtureService";

interface MatchDetailPageProps {
  params: Promise<{ matchId: string }>;
}

export default async function MatchDetailPage({ params }: MatchDetailPageProps) {
  const { matchId } = await params;
  const match = fixtureService.getMatchById(matchId);

  if (!match) {
    notFound();
  }

  const otherMatches = fixtureService.getOtherMatches(matchId, 3);

  return <PredictionDetailPage match={match} otherMatches={otherMatches} />;
}
