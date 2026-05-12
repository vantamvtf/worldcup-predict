const navItems = [
  { label: "Trang chủ", icon: "🏠", href: "/" },
  { label: "Lịch đấu", icon: "📅", href: "#" },
  { label: "Dự đoán", icon: "⚽", href: "/du-doan/m1" },
  { label: "Bảng hạng", icon: "🏆", href: "#" },
  { label: "Hồ sơ", icon: "👤", href: "#" }
];

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-wc-borderSoft bg-white/95 p-2 backdrop-blur md:hidden">
      <ul className="mx-auto flex max-w-xl items-center justify-between">
        {navItems.map((item, index) => (
          <li key={item.label} className="flex-1">
            <a
              href={item.href}
              className={`flex flex-col items-center gap-1 rounded-xl py-1 text-[11px] transition ${
                index === 0
                  ? "bg-[#fef4df] font-semibold text-wc-primaryGold"
                  : "text-[#6f7f72] hover:bg-wc-softGreen hover:text-wc-deepGreen"
              }`}
            >
              <span className="text-base leading-none">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
