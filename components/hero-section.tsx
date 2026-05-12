const stats = ["104 trận", "48 đội tuyển", "Miễn phí tham gia", "Leaderboard realtime"];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-hero bg-[#0e1b34] p-6 shadow-card sm:p-8">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-wc-green/20 blur-3xl" />
      <div className="absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-wc-gold/20 blur-2xl" />

      <div className="relative z-10 max-w-3xl space-y-5">
        <p className="inline-flex items-center rounded-full border border-wc-green/40 bg-wc-green/10 px-3 py-1 text-xs font-semibold text-wc-green">
          WORLD CUP 2026 FAN GAME
        </p>
        <h1 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
          Dự đoán World Cup 2026 cùng bạn bè
        </h1>
        <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
          Chọn tỉ số, đua bảng xếp hạng, tạo league riêng cho nhóm của bạn.
        </p>

        <div className="flex flex-wrap gap-3">
          <button className="rounded-full bg-wc-green px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:brightness-110">
            Dự đoán ngay
          </button>
          <button className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-wc-green hover:text-wc-green">
            Tạo league riêng
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs font-medium text-slate-200 sm:text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
