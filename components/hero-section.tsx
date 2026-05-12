const stats = [
  { value: "104", label: "Trận đấu", icon: "⚽" },
  { value: "48", label: "Đội tuyển", icon: "🏳️" },
  { value: "Miễn phí", label: "Tham gia", icon: "⭐" },
  { value: "Realtime", label: "Leaderboard", icon: "🔥" }
];

export function HeroSection() {
  return (
    <section className="wc-card relative overflow-hidden bg-hero p-5 sm:p-6 lg:p-8">
      <div className="absolute left-0 top-0 h-28 w-28 rounded-br-full bg-[#f9f0df]" />
      <div className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-full bg-[#eef8f1]" />

      <div className="relative z-10 grid gap-5 lg:grid-cols-[1.2fr_1.1fr_0.65fr]">
        <div className="space-y-5">
          <h1 className="text-4xl font-black leading-[1.03] sm:text-5xl">
            <span className="text-wc-textDark">Dự đoán</span>
            <br />
            <span className="text-wc-primaryGold">World Cup 2026</span>
            <br />
            <span className="text-wc-textDark">cùng bạn bè</span>
          </h1>

          <p className="max-w-xl text-sm text-[#47584f] sm:text-base">
            Chọn tỉ số, so tài cùng bạn bè và leo hạng trên bảng xếp hạng cộng đồng.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="gold-primary inline-flex items-center gap-2">
              Dự đoán ngay
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/60 text-xs">
                →
              </span>
            </button>
            <button className="white-green-outline inline-flex items-center gap-2">
              <span>👥</span>
              Tạo league riêng
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-[#d9ccb0] bg-gradient-to-br from-[#123f2a] via-[#0f6036] to-[#194c34] p-4 text-white shadow-card">
          <div className="flex h-full min-h-[190px] flex-col justify-center rounded-xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.28),transparent_62%)] px-3 text-center">
            <p className="text-[10px] uppercase tracking-[0.22em] text-emerald-100">FIFA 2026 Festival</p>
            <div className="mt-2 text-7xl leading-none sm:text-8xl">🏆</div>
            <p className="mt-2 text-xs text-emerald-50/90">Không khí sân vận động • Nhịp bóng toàn cầu</p>
            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="h-2 w-16 rounded-full bg-wc-goldLight" />
              <span className="h-2 w-20 rounded-full bg-emerald-300/90" />
            </div>
          </div>
        </div>

        <div className="hidden flex-col gap-3 lg:flex">
          {stats.map((item) => (
            <div key={item.label} className="rounded-xl border border-wc-borderSoft bg-white p-3 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f8f1e2] text-base">
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm font-bold text-wc-textDark">{item.value}</p>
                  <p className="text-xs text-[#617063]">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2 lg:hidden">
        {stats.map((item) => (
          <div key={item.label} className="rounded-xl border border-wc-borderSoft bg-white p-2 text-center">
            <p className="text-sm font-bold text-wc-textDark">{item.value}</p>
            <p className="text-[11px] text-[#6a786d]">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
