const navSections = [
  {
    label: 'Overview',
    items: [
      { icon: '◈', label: 'Dashboard',    id: 'dashboard',    badge: null },
      { icon: '◉', label: 'Analytics',    id: 'analytics',    badge: null },
      { icon: '◎', label: 'Reports',      id: 'reports',      badge: null },
    ],
  },
  {
    label: 'Management',
    items: [
      { icon: '⊕', label: 'Users',        id: 'users',        badge: { count: '12', color: 'red' } },
      { icon: '◻', label: 'Projects',     id: 'projects',     badge: null },
      { icon: '⊞', label: 'Campaigns',    id: 'campaigns',    badge: { count: '3',  color: 'green' } },
      { icon: '◫', label: 'Billing',      id: 'billing',      badge: null },
    ],
  },
  {
    label: 'System',
    items: [
      { icon: '◐', label: 'Integrations', id: 'integrations', badge: null },
      { icon: '⊙', label: 'Settings',     id: 'settings',     badge: null },
    ],
  },
]

export default function Sidebar({ active, setActive }) {
  return (
    <aside className="bg-[#0F1419] border-r border-white/[0.06] flex flex-col min-h-screen w-[220px] shrink-0">
      <div className="px-5 pt-6 pb-7 flex items-center gap-2.5">
        <div className="w-7 h-7 bg-[#00D4FF] flex items-center justify-center font-mono text-[0.7rem] font-bold text-[#080C10]">P</div>
        <span className="font-mono text-[0.95rem] font-bold tracking-wide">Pul<span className="text-[#00D4FF]">sar</span></span>
      </div>
      <nav className="flex-1 px-3 overflow-y-auto">
        {navSections.map((section) => (
          <div key={section.label} className="mb-4">
            <span className="block text-[0.65rem] tracking-[0.2em] uppercase text-[#6B7A8D] px-2 py-1 mb-1 font-jakarta">{section.label}</span>
            {section.items.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md mb-0.5 text-[0.85rem] font-jakarta cursor-pointer border-none transition-all duration-200 ${
                  active === item.id
                    ? 'bg-[#00D4FF]/[0.08] text-[#00D4FF]'
                    : 'bg-transparent text-[#6B7A8D] hover:bg-white/[0.04] hover:text-[#E8EDF2]'
                }`}
              >
                <span className="text-base w-4 text-center leading-none">{item.icon}</span>
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className={`text-[0.62rem] font-bold font-mono px-1.5 py-0.5 rounded-full ${item.badge.color === 'red' ? 'bg-[#FF4757] text-white' : 'bg-[#00E5A0]/15 text-[#00E5A0]'}`}>
                    {item.badge.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        ))}
      </nav>
      <div className="border-t border-white/[0.06] p-3">
        <button className="w-full flex items-center gap-3 p-2.5 rounded-md hover:bg-white/[0.04] transition-colors cursor-pointer border-none bg-transparent">
          <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="User" className="w-8 h-8 rounded-full object-cover" />
          <div className="flex-1 text-left">
            <span className="block text-[0.82rem] font-semibold text-[#E8EDF2] font-jakarta leading-tight">Ahmed Hassan</span>
            <span className="block text-[0.72rem] text-[#6B7A8D] font-jakarta">Admin · Pro</span>
          </div>
          <span className="w-2 h-2 rounded-full bg-[#00E5A0] animate-pulseDot shrink-0" />
        </button>
      </div>
    </aside>
  )
}
