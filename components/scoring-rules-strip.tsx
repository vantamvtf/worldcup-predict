const infoItems = [
  { icon: "✅", title: "Dễ dàng & rõ ràng", desc: "Minh bạch tuyệt đối" },
  { icon: "⚡", title: "Dữ liệu cập nhật", desc: "Realtime" },
  { icon: "🔐", title: "Công nghệ bảo mật", desc: "An toàn tuyệt đối" },
  { icon: "🎉", title: "Dự đoán hoàn toàn", desc: "Miễn phí" },
  { icon: "🤝", title: "Dự đoán & thách đấu", desc: "Cùng bạn bè" },
  { icon: "🛟", title: "Hỗ trợ 24/7", desc: "Luôn đồng hành" }
];

export function ScoringRulesStrip() {
  return (
    <section className="wc-card p-4">
      <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#6a766d]">Luật tính điểm</h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {infoItems.map((item) => (
          <div key={item.title} className="flex items-center gap-2 rounded-xl border border-wc-borderSoft bg-[#fefcf7] p-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f4ebd8] text-sm">{item.icon}</span>
            <div>
              <p className="text-xs font-semibold text-wc-textDark">{item.title}</p>
              <p className="text-[11px] text-[#6d7a6f]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
