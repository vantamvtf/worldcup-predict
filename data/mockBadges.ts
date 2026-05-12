import { Badge } from "@/lib/types";

export const mockBadges: Badge[] = [
  {
    id: "b1",
    title: "Đoán đúng tỉ số",
    description: "3 lần đoán chính xác trong 1 tuần",
    icon: "🎯"
  },
  {
    id: "b2",
    title: "Top 1 hôm nay",
    description: "Dẫn đầu điểm số trong ngày",
    icon: "🥇"
  },
  {
    id: "b3",
    title: "Chuỗi 5 trận có điểm",
    description: "Giữ phong độ ổn định qua 5 trận",
    icon: "🔥"
  },
  {
    id: "b4",
    title: "Fan trung thành",
    description: "Luôn dự đoán đội yêu thích",
    icon: "💚"
  },
  {
    id: "b5",
    title: "Chuyên gia hòa",
    description: "Dự đoán hòa chính xác nhiều nhất",
    icon: "🤝"
  }
];
