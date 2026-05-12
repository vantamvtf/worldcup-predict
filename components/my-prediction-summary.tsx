import { PredictionSummary } from "@/lib/types";

interface MyPredictionSummaryProps {
  summary: PredictionSummary;
}

const detailStats = [
  { label: "Xếp hạng chung", value: "28" },
  { label: "Dự đoán đúng", value: "16" },
  { label: "Đúng tỉ số", value: "5" },
  { label: "Điểm hiện tại", value: "186" },
  { label: "Xếp hạng", value: "#12" },
  { label: "Badge", value: "Top 12%" }
];

export function MyPredictionSummary({ summary }: MyPredictionSummaryProps) {
  return (
    <section className="wc-card h-full p-4 sm:p-5 lg:p-6">
      <h2 className="text-lg font-bold text-wc-textDark">Dự đoán của tôi</h2>

      <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[#efe3cc] bg-[#fffaf0] p-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f3c86e] to-[#c98a13] text-sm font-bold text-white">
          TN
        </div>
        <div>
          <p className="text-base font-bold text-wc-textDark">Tam Nguyen</p>
          <span className="inline-flex rounded-full border border-[#d6e9dc] bg-[#edf7f1] px-2 py-0.5 text-[11px] font-semibold text-wc-green">
            Fan Argentina
          </span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {detailStats.map((item) => (
          <div key={item.label} className="rounded-xl border border-wc-borderSoft bg-white p-2.5">
            <p className="text-[11px] text-wc-textMuted">{item.label}</p>
            <p
              className={`mt-1 text-lg font-extrabold ${
                item.label === "Badge" ? "text-wc-primaryGold" : "text-wc-textDark"
              }`}
            >
              {item.label === "Điểm hiện tại" ? summary.currentPoints : item.label === "Xếp hạng" ? `#${summary.currentRank}` : item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <div className="mb-1 flex items-center justify-between text-xs text-wc-textMuted">
          <span>Tiến độ mùa giải</span>
          <span>68%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-[#e4eee7]">
          <div className="h-full w-[68%] rounded-full bg-wc-green" />
        </div>
      </div>
    </section>
  );
}
