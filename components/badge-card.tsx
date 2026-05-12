import { Badge } from "@/lib/types";

interface BadgeCardProps {
  badge: Badge;
}

export function BadgeCard({ badge }: BadgeCardProps) {
  return (
    <article className="wc-card p-4 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#ecd9b0] bg-[#fff6de] text-2xl">
        {badge.icon}
      </div>
      <h3 className="mt-2 text-sm font-bold text-wc-textDark">{badge.title}</h3>
      <p className="mt-1 text-xs text-[#66756a]">{badge.description}</p>
    </article>
  );
}
