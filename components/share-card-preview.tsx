export function ShareCardPreview() {
  return (
    <section className="rounded-2xl border border-white/10 bg-wc-card p-5 shadow-card">
      <h2 className="text-xl font-bold">Share Card preview</h2>

      <div className="mt-4 rounded-2xl border border-wc-gold/30 bg-gradient-to-br from-[#1f253b] to-[#2f1d1f] p-4">
        <p className="text-sm font-semibold text-slate-100">
          Tam vừa đoán đúng tỉ số Brazil 2-1 Morocco
        </p>
        <p className="mt-1 text-2xl font-black text-wc-green">+8 điểm</p>
        <p className="mt-1 text-xs text-wc-gold">Hạng #3 trong Cafe bóng đá Quận 1</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button className="rounded-lg border border-[#1877f2]/50 bg-[#1877f2]/20 px-3 py-2 text-xs font-semibold text-blue-200">
          Share Facebook
        </button>
        <button className="rounded-lg border border-[#0180ff]/50 bg-[#0180ff]/20 px-3 py-2 text-xs font-semibold text-sky-200">
          Share Zalo
        </button>
        <button className="rounded-lg border border-white/25 px-3 py-2 text-xs font-semibold text-white">
          Copy link
        </button>
      </div>
    </section>
  );
}
