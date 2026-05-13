import { Badge } from "@/lib/types";
import { ReactNode } from "react";

interface BadgeCardProps {
  badge: Badge;
}

const badgeStyle: Record<string, { tone: string; icon: ReactNode }> = {
  crown: {
    tone: "from-[#ffe8af] to-[#f0c76a]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#8f5f05]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m3 8 4.2 4.3L12 5l4.8 7.3L21 8l-2.2 11H5.2z" />
      </svg>
    )
  },
  medal: {
    tone: "from-[#fbe4aa] to-[#e8b14f]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#8f5f05]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 3h8l-2 7h-4zM12 13a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
      </svg>
    )
  },
  streak: {
    tone: "from-[#d5efde] to-[#97d3ad]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-wc-greenDark" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2 6 13h5l-1 9 8-12h-5z" />
      </svg>
    )
  },
  shield: {
    tone: "from-[#dce8ff] to-[#afc5f4]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#2f5fa8]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3 5 6v6c0 4.5 2.8 7.7 7 9 4.2-1.3 7-4.5 7-9V6z" />
      </svg>
    )
  },
  spark: {
    tone: "from-[#ececef] to-[#d0d4d9]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#4e5f58]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" />
      </svg>
    )
  }
};

export function BadgeCard({ badge }: BadgeCardProps) {
  const style = badgeStyle[badge.icon] ?? badgeStyle.spark;

  return (
    <article className="rounded-2xl border border-wc-borderSoft bg-[#fffdf8] p-3 text-center shadow-sm">
      <div className={`mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${style.tone}`}>
        {style.icon}
      </div>
      <h3 className="mt-2 text-[13px] font-bold text-wc-textDark">{badge.title}</h3>
      <p className="mt-1 text-xs text-[#66756a]">{badge.description}</p>
    </article>
  );
}
