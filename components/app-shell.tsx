import { ReactNode } from "react";
import { BottomNav } from "@/components/bottom-nav";
import Link from "next/link";

interface AppShellProps {
  children: ReactNode;
}

const navItems = [
  { label: "Lịch đấu", href: "#" },
  { label: "Dự đoán", href: "/du-doan/m1" },
  { label: "Leaderboard", href: "#" },
  { label: "League của tôi", href: "#" },
  { label: "Hướng dẫn", href: "#" }
];

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-wc-bgWarm text-wc-textDark">
      <header className="sticky top-0 z-30 bg-[#fbfaf6]/90 py-3 backdrop-blur">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="hidden h-16 items-center justify-between rounded-2xl border border-wc-borderSoft bg-white px-5 shadow-nav md:flex">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-wc-borderSoft bg-[#f9f3e8] text-lg">
                🏆
              </div>
              <span className="text-sm font-bold tracking-wide sm:text-base">WC26 League</span>
            </Link>

            <nav className="hidden items-center gap-4 md:flex lg:gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-[#1d2e25] transition-colors hover:text-wc-primaryGold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                aria-label="Thông báo"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-wc-borderSoft text-[#31463b] transition hover:bg-wc-softGreen"
              >
                🔔
              </button>
              <button className="gold-primary">Đăng nhập</button>
            </div>
          </div>

          <div className="flex h-14 items-center justify-between rounded-2xl border border-wc-borderSoft bg-white px-4 shadow-nav md:hidden">
            <button
              aria-label="Mở menu"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-wc-borderSoft"
            >
              ☰
            </button>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.35em] text-wc-primaryGold">WC26</span>
              <span className="text-[10px] font-semibold tracking-widest text-[#768171]">League</span>
            </Link>
            <button
              aria-label="Thông báo"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-wc-borderSoft"
            >
              🔔
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 pb-24 pt-2 sm:px-6 lg:px-8 lg:pb-10">{children}</main>
      <BottomNav />
    </div>
  );
}
