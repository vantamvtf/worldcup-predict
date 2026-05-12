const navItems = [
  { label: "Home", icon: "🏟️" },
  { label: "Matches", icon: "📅" },
  { label: "Predict", icon: "⚽" },
  { label: "Ranking", icon: "🏆" },
  { label: "Profile", icon: "👤" }
];

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0b1830]/95 p-2 backdrop-blur md:hidden">
      <ul className="mx-auto flex max-w-xl items-center justify-between">
        {navItems.map((item) => (
          <li key={item.label} className="flex-1">
            <a
              href="#"
              className="flex flex-col items-center gap-1 rounded-xl py-1 text-[11px] text-wc-soft transition hover:bg-white/5 hover:text-white"
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
