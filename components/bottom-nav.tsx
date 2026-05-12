import Link from "next/link";

const navItems = [
  {
    label: "Trang chủ",
    href: "/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4.7a1 1 0 0 1-1-1v-4.4h-2.6V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
      </svg>
    )
  },
  {
    label: "Lịch đấu",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M8 3v3M16 3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
      </svg>
    )
  },
  {
    label: "Dự đoán",
    href: "/du-doan/m1",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M12 3 5 8v8l7 5 7-5V8z" />
        <path d="M9 12h6M12 9v6" />
      </svg>
    )
  },
  {
    label: "Bảng xếp hạng",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M4 20h16M7 20v-6m5 6V9m5 11v-9" />
      </svg>
    )
  },
  {
    label: "Profile",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M20 20a8 8 0 1 0-16 0M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      </svg>
    )
  }
];

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-wc-borderSoft bg-white/95 p-2 backdrop-blur md:hidden">
      <ul className="mx-auto flex max-w-xl items-center justify-between">
        {navItems.map((item, index) => (
          <li key={item.label} className="flex-1">
            <Link
              href={item.href}
              className={`flex flex-col items-center gap-1 rounded-xl py-1 text-[11px] transition ${
                index === 0
                  ? "bg-[#fff6de] font-semibold text-wc-goldDark"
                  : "text-[#6f7f72] hover:bg-wc-softGreen hover:text-wc-green"
              }`}
            >
              <span className="leading-none">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
