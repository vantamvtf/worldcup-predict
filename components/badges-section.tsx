import { BadgeCard } from "@/components/badge-card";
import { Badge } from "@/lib/types";

interface BadgesSectionProps {
  badges: Badge[];
}

export function BadgesSection({ badges }: BadgesSectionProps) {
  return (
    <section className="wc-card space-y-4 p-4 sm:p-5 lg:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-wc-textDark sm:text-xl">Thành tích &amp; Huy hiệu</h2>
        <a href="#" className="text-xs font-semibold text-wc-green hover:underline sm:text-sm">
          Xem tất cả &gt;
        </a>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {badges.map((badge) => (
          <BadgeCard key={badge.id} badge={badge} />
        ))}
      </div>
    </section>
  );
}
