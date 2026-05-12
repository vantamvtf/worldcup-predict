import { BadgeCard } from "@/components/badge-card";
import { Badge } from "@/lib/types";

interface BadgesSectionProps {
  badges: Badge[];
}

export function BadgesSection({ badges }: BadgesSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-bold text-wc-textDark sm:text-xl">Thành tích &amp; Huy hiệu</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {badges.map((badge) => (
          <BadgeCard key={badge.id} badge={badge} />
        ))}
      </div>
    </section>
  );
}
