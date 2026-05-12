import { PredictionSummary } from "@/lib/types";

interface MyPredictionSummaryProps {
  summary: PredictionSummary;
}

const quickStats = [
  { label: "Xếp hạng chung", value: "28" },
  { label: "Dự đoán đúng", value: "16" },
  { label: "Đúng tỉ số", value: "5" }
];

export function MyPredictionSummary({ summary }: MyPredictionSummaryProps) {
  return (
    <section className="wc-card p-4 sm:p-5">
      <h2 className="text-lg font-bold text-wc-textDark">Dự đoán của tôi</h2>

      <div className="mt-4 flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-[#f2e4cd]" />
        <div>
          <p className="text-sm font-bold text-wc-textDark">Tam Nguyen</p>
          <span className="inline-flex rounded-full border border-[#d6e9dc] bg-[#edf7f1] px-2 py-0.5 text-[11px] font-medium text-wc-deepGreen">
            Fan Argentina
          </span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {quickStats.map((item) => (
          <div key={item.label} className="rounded-xl border border-wc-borderSoft bg-[#fefcf8] p-2 text-center">
            <p className="text-[11px] text-[#6f7d72]">{item.label}</p>
            <p className="text-lg font-extrabold text-wc-textDark">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-xl border border-wc-borderSoft bg-white p-2">
          <p className="text-[11px] text-[#6f7d72]">Điểm hiện tại</p>
          <p className="text-lg font-black text-wc-textDark">{summary.currentPoints}</p>
        </div>
        <div className="rounded-xl border border-wc-borderSoft bg-white p-2">
          <p className="text-[11px] text-[#6f7d72]">Xếp hạng</p>
          <p className="text-lg font-black text-wc-textDark">#{summary.currentRank}</p>
        </div>
        <div className="rounded-xl border border-wc-borderSoft bg-white p-2">
          <p className="text-[11px] text-[#6f7d72]">Badge</p>
          <p className="text-lg font-black text-wc-primaryGold">Top 12%</p>
        </div>
      </div>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#e4eee7]">
        <div className="h-full w-2/3 rounded-full bg-wc-deepGreen" />
      </div>
    </section>
  );
}
