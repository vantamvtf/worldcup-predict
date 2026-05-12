import { ReactNode } from "react";
import { BottomNav } from "@/components/bottom-nav";

interface AppShellProps {
  children: ReactNode;
}

const navItems = ["Lịch đấu", "Dự đoán", "Leaderboard", "League của tôi"];

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-wc-navy text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#081226]/95 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-wc-green to-cyan-400" />
            <span className="text-sm font-bold tracking-wide sm:text-base">WC26 League</span>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-wc-soft transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition hover:border-wc-green hover:text-wc-green sm:text-sm">
            Đăng nhập
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-8 lg:pb-10">{children}</main>
      <BottomNav />
    </div>
  );
}
