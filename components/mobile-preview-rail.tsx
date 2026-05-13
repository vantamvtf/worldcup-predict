import Image from "next/image";
import { ReactNode } from "react";

const WC26_MOBILE_HERO_SRC = "/images/wc26/hero-mobile-bg.svg?v=2";
const WC26_CHALLENGE_BANNER_SRC = "/images/wc26/challenge-brazil-banner.svg?v=2";

function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[34px] border border-[#cdbda0] bg-[#f6ecda] p-[7px] shadow-[0_18px_36px_rgba(56,41,15,0.22)] ${className}`}>
      <div className="overflow-hidden rounded-[28px] border border-[#f0dfbc] bg-[#fff8ea]">{children}</div>
    </div>
  );
}

export function MobilePreviewRail() {
  return (
    <aside className="sticky top-[92px] hidden xl:block">
      <div className="relative mx-auto h-[690px] w-[328px]">
        <PhoneFrame className="absolute left-0 top-0 w-[206px]">
          <div className="h-[658px] p-3">
            <div className="mb-2 flex items-center justify-between text-[#3d4f43]">
              <span className="text-xs">≡</span>
              <span className="text-[11px] font-black tracking-[0.18em] text-[#20362a]">WC26</span>
              <span className="text-xs">◦</span>
            </div>
            <div className="overflow-hidden rounded-xl border border-[#d5c4a4]">
              <div className="relative h-[128px]">
                <Image src={WC26_MOBILE_HERO_SRC} alt="Mobile hero preview" fill className="object-cover" unoptimized />
              </div>
              <div className="space-y-2 bg-white p-2.5">
                <div className="rounded-lg border border-[#eadfc8] bg-[#fffbf2] p-2 text-[10px]">
                  <p className="font-bold text-[#1f3228]">Trận đấu sắp tới</p>
                  <p className="mt-1 text-[#758476]">Mexico vs Nam Phi</p>
                </div>
                <div className="rounded-lg border border-[#eadfc8] bg-[#fffbf2] p-2 text-[10px]">
                  <p className="font-bold text-[#1f3228]">Dự đoán của tôi</p>
                  <p className="mt-1 text-[#758476]">Điểm hiện tại: 186</p>
                </div>
                <div className="rounded-lg border border-[#eadfc8] bg-[#fffbf2] p-2 text-[10px]">
                  <p className="font-bold text-[#1f3228]">Bảng xếp hạng</p>
                  <p className="mt-1 text-[#758476]">Top 12%</p>
                </div>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-5 rounded-xl border border-[#e4d4b7] bg-white px-1 py-1 text-center text-[9px] text-[#8b9a8d]">
              <span className="rounded-md bg-[#fff4dd] py-1 text-[#9f6d0f]">Trang chủ</span>
              <span className="py-1">Lịch đấu</span>
              <span className="py-1">Dự đoán</span>
              <span className="py-1">BXH</span>
              <span className="py-1">Profile</span>
            </div>
          </div>
        </PhoneFrame>

        <PhoneFrame className="absolute right-0 top-[86px] w-[188px]">
          <div className="h-[602px] p-3">
            <div className="mb-2 flex items-center justify-center text-[11px] font-bold text-[#2b3f33]">Dự đoán</div>
            <div className="relative mb-2 h-[96px] overflow-hidden rounded-xl border border-[#d7c6a5]">
              <Image src={WC26_CHALLENGE_BANNER_SRC} alt="Challenge preview" fill className="object-cover" unoptimized />
            </div>
            <div className="space-y-2">
              {["Mexico vs Nam Phi", "Canada vs Bờ Biển", "Mỹ vs Paraguay"].map((item) => (
                <div key={item} className="rounded-lg border border-[#eadfc8] bg-white px-2 py-2 text-[10px] text-[#637368]">
                  <p className="font-semibold text-[#203529]">{item}</p>
                  <button className="mt-1.5 w-full rounded-md border border-[#d6c7a8] bg-[#fff6e2] py-1 font-semibold text-[#9e6a0a]">
                    Dự đoán
                  </button>
                </div>
              ))}
            </div>
          </div>
        </PhoneFrame>
      </div>
    </aside>
  );
}
