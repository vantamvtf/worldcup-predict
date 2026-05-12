import { BadgeCard } from "@/components/badge-card";
import { Badge } from "@/lib/types";

interface BadgesSectionProps {
  badges: Badge[];
}

export function BadgesSection({ badges }: BadgesSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">Huy hiệu thành tích</h2>
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {badges.map((badge) => (
          <BadgeCard key={badge.id} badge={badge} />
        ))}
      </div>
    </section>
  );
}
