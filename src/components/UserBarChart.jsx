import {
  Chart as ChartJS,
  CategoryScale, LinearScale, BarElement, Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'New Users',
      data: [42, 68, 55, 91, 74, 38, 29],
      backgroundColor: 'rgba(0,212,255,0.7)',
      borderRadius: 4,
      borderSkipped: false,
    },
    {
      label: 'Churned',
      data: [3, 5, 4, 8, 6, 2, 1],
      backgroundColor: 'rgba(255,71,87,0.5)',
      borderRadius: 4,
      borderSkipped: false,
    },
  ],
}

const options = {
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
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: '#6B7A8D', font: { size: 11 } },
    },
    y: {
      grid: { color: 'rgba(255,255,255,0.04)' },
      ticks: { color: '#6B7A8D', font: { size: 11 } },
    },
  },
}

export default function UserBarChart() {
  return (
    <div className="anim-hidden animate-fadeIn delay-600 bg-[#141C24] border border-white/[0.06] p-5 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[0.9rem] font-semibold font-jakarta">Weekly User Activity</h3>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[0.73rem] text-[#6B7A8D] font-jakarta">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#00D4FF]/70 inline-block" /> New
          </span>
          <span className="flex items-center gap-1.5 text-[0.73rem] text-[#6B7A8D] font-jakarta">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#FF4757]/50 inline-block" /> Churned
          </span>
        </div>
      </div>
      <div style={{ height: '180px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}
