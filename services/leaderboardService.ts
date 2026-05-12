import { mockLeaderboard } from "@/data/mockLeaderboard";
import { mockTeams } from "@/data/mockTeams";
import { mockUsers } from "@/data/mockUsers";
import { LeaderboardEntry, Team, User } from "@/lib/types";

export interface LeaderboardRowData extends LeaderboardEntry {
  user: User;
  favoriteTeam: Team;
}

const userMap = new Map(mockUsers.map((user) => [user.id, user]));
const teamMap = new Map(mockTeams.map((team) => [team.id, team]));

export const leaderboardService = {
  getTopEntries(limit = 10): LeaderboardRowData[] {
    return mockLeaderboard.slice(0, limit).map((entry) => {
      const user = userMap.get(entry.userId)!;
      const favoriteTeam = teamMap.get(user.favoriteTeamId)!;

      return {
        ...entry,
        user,
        favoriteTeam
      };
    });
  }
};
