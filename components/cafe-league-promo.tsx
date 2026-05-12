export function CafeLeaguePromo() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-wc-green/30 bg-gradient-to-br from-[#102642] via-[#0d2139] to-[#112a2f] p-6 shadow-card">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-wc-green/20" />
      <div className="absolute bottom-0 left-0 h-20 w-20 rounded-tr-full bg-wc-gold/20" />
      <div className="relative z-10 max-w-2xl space-y-3">
        <h2 className="text-xl font-bold text-white">
          Tạo league riêng cho quán cafe, công ty hoặc cộng đồng
        </h2>
        <p className="text-sm text-slate-200">
          In QR code, để khách hoặc thành viên scan tham gia và xem bảng xếp hạng.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <button className="rounded-xl bg-wc-green px-4 py-2 text-sm font-bold text-slate-950 transition hover:brightness-110">
            Tạo QR league
          </button>
          <button className="rounded-xl border border-white/25 px-4 py-2 text-sm font-semibold text-white transition hover:border-wc-gold hover:text-wc-gold">
            Xem demo TV leaderboard
          </button>
        </div>
      </div>
    </section>
  );
}
