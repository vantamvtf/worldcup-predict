import { Badge } from "@/lib/types";

interface BadgeCardProps {
  badge: Badge;
}

export function BadgeCard({ badge }: BadgeCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-wc-card p-4 shadow-card">
      <div className="text-2xl">{badge.icon}</div>
      <h3 className="mt-2 text-sm font-bold text-white">{badge.title}</h3>
      <p className="mt-1 text-xs text-slate-400">{badge.description}</p>
    </article>
  );
}
