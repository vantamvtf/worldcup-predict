import { mockPredictionSummary } from "@/data/mockPredictions";
import { PredictionSummary } from "@/lib/types";

export interface SavePredictionPayload {
  matchId: string;
  homeScore: number;
  awayScore: number;
}

export const predictionService = {
  getMyPredictionSummary(): PredictionSummary {
    return mockPredictionSummary;
  },

  async savePrediction(payload: SavePredictionPayload): Promise<{ ok: boolean; payload: SavePredictionPayload }> {
    await new Promise((resolve) => setTimeout(resolve, 250));
    return { ok: true, payload };
  }
};
