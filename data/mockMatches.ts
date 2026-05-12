import { Match } from "@/lib/types";

export const mockMatches: Match[] = [
  {
    id: "m1",
    stage: "Vòng bảng",
    group: "Bảng A",
    kickoffVietnam: "12/06 · 07:00",
    kickoffISO: "2026-06-12T00:00:00.000Z",
    venue: "Sân vận động Mexico City (mock)",
    homeTeamId: "mex",
    awayTeamId: "jpn",
    status: "upcoming"
  },
  {
    id: "m2",
    stage: "Vòng bảng",
    group: "Bảng A",
    kickoffVietnam: "12/06 · 10:00",
    kickoffISO: "2026-06-12T03:00:00.000Z",
    venue: "Toronto Arena (mock)",
    homeTeamId: "usa",
    awayTeamId: "kor",
    status: "upcoming"
  },
  {
    id: "m3",
    stage: "Vòng bảng",
    group: "Bảng B",
    kickoffVietnam: "13/06 · 06:00",
    kickoffISO: "2026-06-12T23:00:00.000Z",
    venue: "Los Angeles Field (mock)",
    homeTeamId: "arg",
    awayTeamId: "mar",
    status: "upcoming"
  },
  {
    id: "m4",
    stage: "Vòng bảng",
    group: "Bảng B",
    kickoffVietnam: "13/06 · 09:00",
    kickoffISO: "2026-06-13T02:00:00.000Z",
    venue: "Seattle Stadium (mock)",
    homeTeamId: "bra",
    awayTeamId: "fra",
    status: "locked"
  },
  {
    id: "m5",
    stage: "Vòng bảng",
    group: "Bảng C",
    kickoffVietnam: "14/06 · 07:00",
    kickoffISO: "2026-06-14T00:00:00.000Z",
    venue: "Houston Dome (mock)",
    homeTeamId: "eng",
    awayTeamId: "ned",
    status: "upcoming"
  },
  {
    id: "m6",
    stage: "Vòng bảng",
    group: "Bảng C",
    kickoffVietnam: "14/06 · 10:00",
    kickoffISO: "2026-06-14T03:00:00.000Z",
    venue: "Vancouver Ground (mock)",
    homeTeamId: "esp",
    awayTeamId: "ger",
    status: "finished"
  },
  {
    id: "m7",
    stage: "Vòng bảng",
    group: "Bảng D",
    kickoffVietnam: "15/06 · 08:30",
    kickoffISO: "2026-06-15T01:30:00.000Z",
    venue: "Miami Arena (mock)",
    homeTeamId: "arg",
    awayTeamId: "eng",
    status: "upcoming"
  },
  {
    id: "m8",
    stage: "Vòng bảng",
    group: "Bảng D",
    kickoffVietnam: "16/06 · 06:30",
    kickoffISO: "2026-06-15T23:30:00.000Z",
    venue: "Dallas Park (mock)",
    homeTeamId: "bra",
    awayTeamId: "usa",
    status: "upcoming"
  }
];
