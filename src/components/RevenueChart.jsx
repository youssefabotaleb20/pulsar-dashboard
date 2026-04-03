import { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, PointElement, LineElement,
  Filler, Tooltip, Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const datasets = {
  Revenue: {
    label: 'Revenue ($)',
    data: [22000, 26000, 24500, 31000, 28000, 35000, 38000, 44000, 48290],
    borderColor: '#00D4FF',
    backgroundColor: 'rgba(0,212,255,0.06)',
  },
  Sessions: {
    label: 'Sessions',
    data: [4200, 5100, 4800, 6200, 5700, 7100, 7800, 8900, 9400],
    borderColor: '#A855F7',
    backgroundColor: 'rgba(168,85,247,0.06)',
  },
  Signups: {
    label: 'Signups',
    data: [180, 210, 195, 240, 220, 280, 310, 350, 390],
    borderColor: '#00E5A0',
    backgroundColor: 'rgba(0,229,160,0.06)',
  },
}

const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar']

const chartOptions = {
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
      padding: 10,
    },
  },
  scales: {
    x: {
      grid: { color: 'rgba(255,255,255,0.04)' },
      ticks: { color: '#6B7A8D', font: { size: 11, family: 'Plus Jakarta Sans' } },
    },
    y: {
      grid: { color: 'rgba(255,255,255,0.04)' },
      ticks: { color: '#6B7A8D', font: { size: 11, family: 'Plus Jakarta Sans' } },
    },
  },
  elements: {
    line:  { tension: 0.4, borderWidth: 2, fill: true },
    point: { radius: 3, hoverRadius: 5 },
  },
}

export default function RevenueChart() {
  const [activeTab, setActiveTab] = useState('Revenue')

  const data = {
    labels: months,
    datasets: [{ ...datasets[activeTab] }],
  }

  return (
    <div className="anim-hidden animate-fadeIn delay-500 bg-[#141C24] border border-white/[0.06] p-5 rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[0.9rem] font-semibold font-jakarta">Performance Trend</h3>
        <div className="flex gap-1.5">
          {Object.keys(datasets).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 text-[0.75rem] font-jakarta rounded border cursor-pointer transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-[#00D4FF]/10 border-[#00D4FF]/30 text-[#00D4FF]'
                  : 'bg-transparent border-white/[0.06] text-[#6B7A8D] hover:border-white/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div style={{ height: '220px' }}>
        <Line data={data} options={chartOptions} />
      </div>
    </div>
  )
}
