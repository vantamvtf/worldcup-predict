import { mockMatches } from "@/data/mockMatches";
import { mockTeams } from "@/data/mockTeams";
import { Match, Team } from "@/lib/types";

export interface MatchWithTeams extends Match {
  homeTeam: Team;
  awayTeam: Team;
}

const teamMap = new Map(mockTeams.map((team) => [team.id, team]));

export const fixtureService = {
  getTeams(): Team[] {
    return mockTeams;
  },

  getUpcomingMatches(limit = 8): MatchWithTeams[] {
    return mockMatches.slice(0, limit).map((match) => ({
      ...match,
      homeTeam: teamMap.get(match.homeTeamId)!,
      awayTeam: teamMap.get(match.awayTeamId)!
    }));
  }
};
