import { ReactNode } from "react";
import { BottomNav } from "@/components/bottom-nav";
import Link from "next/link";
import Image from "next/image";

interface AppShellProps {
  children: ReactNode;
}

const WC26_LOGO_SRC = "/images/wc26/logo-wc26-league.svg?v=2";

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
      <header className="sticky top-0 z-30 bg-wc-bgWarm/90 py-3 backdrop-blur">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="hidden h-[68px] items-center rounded-2xl border border-wc-borderSoft bg-white px-5 shadow-nav md:grid md:grid-cols-[auto_1fr_auto] md:gap-4">
            <Link href="/" className="flex items-center">
              <Image
                src={WC26_LOGO_SRC}
                alt="WC26 League"
                width={152}
                height={38}
                className="h-9 w-auto"
                priority
                unoptimized
              />
            </Link>

            <nav className="mx-auto hidden items-center gap-5 md:flex lg:gap-7">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-semibold text-[#1d2e25] transition-colors hover:text-wc-primaryGold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                aria-label="Thông báo"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-wc-borderSoft bg-white text-[#31463b] transition hover:bg-wc-softGreen"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M15 17h5l-1.4-1.4a2 2 0 0 1-.6-1.4V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5" />
                  <path d="M10 17a2 2 0 0 0 4 0" />
                </svg>
              </button>
              <button className="gold-primary">Đăng nhập</button>
            </div>
          </div>

          <div className="flex h-14 items-center justify-between rounded-2xl border border-wc-borderSoft bg-white px-4 shadow-nav md:hidden">
            <button
              aria-label="Mở menu"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-wc-borderSoft"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
            <Link href="/" className="flex items-center">
              <Image
                src={WC26_LOGO_SRC}
                alt="WC26 League"
                width={126}
                height={30}
                className="h-7 w-auto"
                unoptimized
              />
            </Link>
            <button
              aria-label="Thông báo"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-wc-borderSoft"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M15 17h5l-1.4-1.4a2 2 0 0 1-.6-1.4V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5" />
                <path d="M10 17a2 2 0 0 0 4 0" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 pb-24 pt-2 sm:px-6 lg:px-8 lg:pb-10">{children}</main>
      <BottomNav />
    </div>
  );
}
