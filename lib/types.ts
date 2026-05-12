export type MatchStatus = "upcoming" | "locked" | "finished";

export interface Team {
  id: string;
  name: string;
  shortName: string;
  fifaCode: string;
  confederation: string;
  flagGradient: string;
}

export interface Match {
  id: string;
  stage: string;
  group: string;
  kickoffVietnam: string;
  kickoffISO: string;
  venue: string;
  homeTeamId: string;
  awayTeamId: string;
  status: MatchStatus;
}

export interface Prediction {
  id: string;
  matchId: string;
  userId: string;
  homeScore: number;
  awayScore: number;
  createdAtISO: string;
}

export interface PredictionSummary {
  totalSubmitted: number;
  correctResults: number;
  exactScoreHits: number;
  currentPoints: number;
  currentRank: number;
}

export interface User {
  id: string;
  name: string;
  avatarColor: string;
  favoriteTeamId: string;
}

export interface League {
  id: string;
  name: string;
  memberCount: number;
  userRank: number;
  inviteCode: string;
  inviteLink: string;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface LeaderboardEntry {
  userId: string;
  rank: number;
  points: number;
  badgeLabel: string;
}
