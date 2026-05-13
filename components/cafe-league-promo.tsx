import Image from "next/image";

const WC26_CAFE_PREVIEW_SRC = "/images/wc26/cafe-league-preview.svg?v=2";

interface CafeLeaguePromoProps {
  compact?: boolean;
}

export function CafeLeaguePromo({ compact = false }: CafeLeaguePromoProps) {
  return (
    <section className={`wc-card ${compact ? "p-4" : "p-4 sm:p-5 lg:p-6"}`}>
      <div className={`grid gap-4 ${compact ? "sm:grid-cols-[1.12fr_0.88fr] sm:items-center" : "lg:grid-cols-[1.25fr_0.75fr] lg:items-center"}`}>
        <div className="space-y-3.5">
          <h2 className={`font-bold text-wc-textDark ${compact ? "text-base sm:text-lg" : "text-lg sm:text-xl"}`}>Cộng đồng &amp; Cafe League</h2>
          <p className="max-w-xl text-sm text-[#5f6f63]">
            Tham gia cộng đồng, học hỏi, tranh luận và nhận quà hấp dẫn.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className={`gold-primary ${compact ? "h-10 px-3.5 text-xs" : ""}`}>Tạo Cafe League</button>
            <button className={`white-gold-outline ${compact ? "h-10 px-3.5 text-xs" : ""}`}>Xem thêm</button>
          </div>
        </div>

        <div className={`relative overflow-hidden rounded-2xl border border-wc-borderSoft bg-[#f9f2e3] ${compact ? "h-[150px] sm:h-[170px]" : "h-[160px] sm:h-[200px]"}`}>
          <Image
            src={WC26_CAFE_PREVIEW_SRC}
            alt="Cafe League preview"
            fill
            className="object-contain p-2"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
