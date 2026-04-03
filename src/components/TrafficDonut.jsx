import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip)

const sources = [
  { label: 'Organic', pct: 42, color: '#00D4FF' },
  { label: 'Direct',  pct: 28, color: '#00E5A0' },
  { label: 'Social',  pct: 18, color: '#A855F7' },
  { label: 'Referral',pct: 12, color: '#FFB300' },
]

const data = {
  labels: sources.map((s) => s.label),
  datasets: [{
    data: sources.map((s) => s.pct),
    backgroundColor: sources.map((s) => s.color),
    borderWidth: 0,
    hoverOffset: 4,
  }],
}

const options = {
  cutout: '72%',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: '#141C24',
      borderColor: 'rgba(255,255,255,0.08)',
      borderWidth: 1,
      titleColor: '#E8EDF2',
      bodyColor: '#6B7A8D',
    },
  },
}

export default function TrafficDonut() {
  return (
    <div className="anim-hidden animate-fadeIn delay-600 bg-[#141C24] border border-white/[0.06] p-5 rounded-lg flex flex-col">
      <h3 className="text-[0.9rem] font-semibold font-jakarta mb-4">Traffic Sources</h3>

      {/* Donut */}
      <div className="relative flex-1 flex items-center justify-center" style={{ minHeight: '180px' }}>
        <div style={{ width: '160px', height: '160px' }}>
          <Doughnut data={data} options={options} />
        </div>
        {/* Centre label */}
        <div className="absolute text-center pointer-events-none">
          <span className="font-mono text-xl font-bold text-[#E8EDF2] block">8.4K</span>
          <span className="text-[0.68rem] uppercase tracking-[0.1em] text-[#6B7A8D] font-jakarta">Total</span>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-y-2 gap-x-3 mt-4">
        {sources.map((s) => (
          <div key={s.label} className="flex items-center gap-2 text-[0.75rem] font-jakarta">
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: s.color }} />
            <span className="text-[#E8EDF2]">{s.label}</span>
            <span className="ml-auto font-mono text-[0.72rem] text-[#6B7A8D]">{s.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
