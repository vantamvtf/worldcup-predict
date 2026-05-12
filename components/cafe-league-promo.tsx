export function CafeLeaguePromo() {
  return (
    <section className="wc-card p-4 sm:p-5">
      <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-wc-textDark sm:text-xl">Cộng đồng &amp; Cafe League</h2>
          <p className="text-sm text-[#5f6f63]">
            Tham gia cộng đồng, học hỏi, tranh luận và nhận quà hấp dẫn.
          </p>

          <div className="h-28 rounded-xl border border-wc-borderSoft bg-gradient-to-r from-[#c4a06e] via-[#9f6d38] to-[#684424]" />

          <div className="flex flex-wrap gap-3">
            <button className="gold-primary">Tạo Cafe League</button>
            <button className="white-gold-outline">Xem thêm</button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="rounded-xl border border-wc-borderSoft bg-[#fdf9ef] p-3">
            <div className="grid h-28 w-28 grid-cols-6 gap-1 rounded-lg bg-white p-2">
              {Array.from({ length: 36 }).map((_, index) => (
                <span
                  key={index}
                  className={`rounded-[2px] ${index % 3 === 0 || index % 5 === 0 ? "bg-[#202826]" : "bg-transparent"}`}
                />
              ))}
            </div>
            <p className="mt-2 text-center text-xs font-medium text-[#5e6d62]">QR tham gia league</p>
          </div>
        </div>
      </div>
    </section>
  );
}
