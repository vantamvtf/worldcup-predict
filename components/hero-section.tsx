import Image from "next/image";

const WC26_HERO_DESKTOP_SRC = "/images/wc26/hero-desktop-bg.svg?v=2";
const WC26_HERO_MOBILE_SRC = "/images/wc26/hero-mobile-bg.svg?v=2";

const stats = [
  { value: "104", label: "Trận đấu" },
  { value: "48", label: "Đội tuyển" },
  { value: "Miễn phí", label: "Tham gia" },
  { value: "Realtime", label: "Leaderboard" }
];

export function HeroSection() {
  return (
    <section className="wc-card overflow-hidden bg-[#fefdf9] p-4 sm:p-6 lg:p-7">
      <div className="hidden gap-6 lg:grid lg:grid-cols-[1.05fr_1.2fr_0.65fr] lg:items-center">
        <div className="space-y-5">
          <h1 className="text-[46px] font-black leading-[0.96]">
            <span className="text-wc-textDark">Dự đoán</span>
            <br />
            <span className="text-wc-primaryGold">World Cup 2026</span>
            <br />
            <span className="text-wc-textDark">cùng bạn bè</span>
          </h1>
          <p className="max-w-md text-[15px] leading-6 text-wc-textMuted">
            Chọn tỉ số, so tài cùng bạn bè và leo hạng trên bảng xếp hạng cộng đồng.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="gold-primary min-w-[146px]">Dự đoán ngay</button>
            <button className="white-green-outline min-w-[152px]">Tạo league riêng</button>
          </div>
        </div>

        <div className="relative h-[320px] overflow-hidden rounded-3xl border border-[#e6d9bf] bg-[#f5efe4]">
          <Image
            src={WC26_HERO_DESKTOP_SRC}
            alt="Hero World Cup 2026"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="space-y-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-wc-borderSoft bg-white p-3.5 shadow-sm">
              <div className="flex items-center gap-3.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7efd9]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-wc-goldDark" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M5 12h14M12 5v14" />
                  </svg>
                </span>
                <div>
                  <p className="text-base font-extrabold text-wc-textDark">{item.value}</p>
                  <p className="text-xs font-medium text-wc-textMuted">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4 lg:hidden">
        <div className="rounded-2xl border border-[#e6d9bf] bg-[#f8f2e8] p-4">
          <h1 className="text-[33px] font-black leading-[0.97]">
            <span className="text-wc-textDark">Dự đoán</span>
            <br />
            <span className="text-wc-primaryGold">World Cup 2026</span>
            <br />
            <span className="text-wc-textDark">cùng bạn bè</span>
          </h1>
          <p className="mt-3 text-sm text-wc-textMuted">
            Chọn tỉ số, so tài cùng bạn bè và leo hạng trên bảng xếp hạng cộng đồng.
          </p>
          <div className="relative mt-4 h-[182px] overflow-hidden rounded-2xl border border-[#dfd0b2] bg-[#f3ead8]">
            <Image
              src={WC26_HERO_MOBILE_SRC}
              alt="Hero mobile World Cup 2026"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
          <div className="mt-4 flex flex-col gap-2.5">
            <button className="gold-primary w-full">Dự đoán ngay</button>
            <button className="white-green-outline w-full">Tạo league riêng</button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {stats.map((item) => (
            <div key={item.label} className="rounded-xl border border-wc-borderSoft bg-white p-2 text-center">
              <p className="text-sm font-extrabold text-wc-textDark">{item.value}</p>
              <p className="text-[11px] text-wc-textMuted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
