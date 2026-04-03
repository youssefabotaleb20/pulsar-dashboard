export default function MetricCard({ label, value, change, isPositive, icon, color, delay }) {
  const colorMap = {
    cyan:   { bg: 'bg-[#00D4FF]/10', text: 'text-[#00D4FF]', val: 'text-[#00D4FF]' },
    green:  { bg: 'bg-[#00E5A0]/10', text: 'text-[#00E5A0]', val: 'text-[#00E5A0]' },
    red:    { bg: 'bg-[#FF4757]/10', text: 'text-[#FF4757]', val: 'text-[#FF4757]' },
    purple: { bg: 'bg-[#A855F7]/10', text: 'text-[#A855F7]', val: 'text-[#A855F7]' },
  }
  const c = colorMap[color] || colorMap.cyan

  return (
    <div className={`anim-hidden animate-fadeIn bg-[#141C24] border border-white/[0.06] p-5 rounded-lg hover:border-white/[0.12] transition-all duration-300 ${delay}`}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-[0.75rem] uppercase tracking-[0.08em] text-[#6B7A8D] font-jakarta">{label}</span>
        <div className={`w-7 h-7 rounded-md flex items-center justify-center text-sm ${c.bg} ${c.text}`}>{icon}</div>
      </div>
      <div className={`font-mono text-[1.8rem] font-bold tracking-tight mb-1 ${c.val}`}>{value}</div>
      <div className="flex items-center gap-1.5 text-[0.78rem] font-jakarta">
        <span className={isPositive ? 'text-[#00E5A0]' : 'text-[#FF4757]'}>
          {isPositive ? '↑' : '↓'} {change}
        </span>
        <span className="text-[#6B7A8D]">vs last month</span>
      </div>
    </div>
  )
}
