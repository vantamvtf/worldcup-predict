const infoItems = [
  { title: "Dễ dàng & rõ ràng", desc: "Minh bạch tuyệt đối" },
  { title: "Dữ liệu cập nhật", desc: "Realtime" },
  { title: "Công nghệ bảo mật", desc: "An toàn tuyệt đối" },
  { title: "Dự đoán hoàn toàn", desc: "Miễn phí" },
  { title: "Dự đoán & thách đấu", desc: "Cùng bạn bè" },
  { title: "Hỗ trợ 24/7", desc: "Luôn đồng hành" }
];

export function ScoringRulesStrip() {
  return (
    <section className="wc-card p-4 lg:p-5">
      <div className="flex gap-3 overflow-x-auto pb-1 lg:grid lg:grid-cols-6 lg:overflow-visible lg:pb-0">
        {infoItems.map((item, index) => (
          <div key={item.title} className="min-w-[200px] rounded-xl border border-wc-borderSoft bg-[#fefcf7] p-2.5 lg:min-w-0">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f4ebd8] text-xs font-bold text-wc-goldDark">
                {index + 1}
              </span>
              <div>
                <p className="text-xs font-semibold text-wc-textDark">{item.title}</p>
                <p className="text-[11px] text-[#6d7a6f]">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
