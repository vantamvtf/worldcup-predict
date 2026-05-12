import { Prediction, PredictionSummary } from "@/lib/types";

export const mockPredictions: Prediction[] = [
  {
    id: "p1",
    matchId: "m1",
    userId: "u1",
    homeScore: 2,
    awayScore: 1,
    createdAtISO: "2026-06-10T08:15:00.000Z"
  },
  {
    id: "p2",
    matchId: "m2",
    userId: "u1",
    homeScore: 1,
    awayScore: 1,
    createdAtISO: "2026-06-10T08:16:00.000Z"
  },
  {
    id: "p3",
    matchId: "m3",
    userId: "u1",
    homeScore: 3,
    awayScore: 0,
    createdAtISO: "2026-06-10T08:17:00.000Z"
  }
];

export const mockPredictionSummary: PredictionSummary = {
  totalSubmitted: 36,
  correctResults: 20,
  exactScoreHits: 7,
  currentPoints: 164,
  currentRank: 12
};

export const scoringRules: string[] = [
  "Đúng kết quả thắng/hòa/thua: + điểm theo điểm đã đặt",
  "Đúng tỉ số chính xác: + điểm theo tỉ lệ đã chọn",
  "Đúng số bàn của một đội: + điểm thưởng phụ",
  "Dự đoán trước trận hơn 24h: +10 điểm bonus",
  "Dự đoán bị khóa 5 phút trước giờ bóng lăn"
];
