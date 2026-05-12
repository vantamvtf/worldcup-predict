import Image from "next/image";

export function CafeLeaguePromo() {
  return (
    <section className="wc-card p-4 sm:p-5 lg:p-6">
      <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
        <div className="space-y-3.5">
          <h2 className="text-lg font-bold text-wc-textDark sm:text-xl">Cộng đồng &amp; Cafe League</h2>
          <p className="max-w-xl text-sm text-[#5f6f63]">
            Tham gia cộng đồng, học hỏi, tranh luận và nhận quà hấp dẫn.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="gold-primary">Tạo Cafe League</button>
            <button className="white-gold-outline">Xem thêm</button>
          </div>
        </div>

        <div className="relative h-[160px] overflow-hidden rounded-2xl border border-wc-borderSoft bg-[#f9f2e3] sm:h-[200px]">
          <Image
            src="/images/wc26/cafe-league-preview.svg"
            alt="Cafe League preview"
            fill
            className="object-contain object-center p-2"
          />
        </div>
      </div>
    </section>
  );
}
