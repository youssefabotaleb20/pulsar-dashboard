import { useState } from 'react'
import Sidebar        from './components/Sidebar'
import Topbar         from './components/Topbar'
import MetricCard     from './components/MetricCard'
import RevenueChart   from './components/RevenueChart'
import TrafficDonut   from './components/TrafficDonut'
import CustomerTable  from './components/CustomerTable'
import ActivityFeed   from './components/ActivityFeed'
import UserBarChart   from './components/UserBarChart'
import WelcomeBanner  from './components/WelcomeBanner'

const metrics = [
  { label:'Total Revenue', value:'$48,290', change:'18.2%', isPositive:true,  icon:'$', color:'cyan',   delay:'delay-100' },
  { label:'Active Users',  value:'3,842',   change:'6.4%',  isPositive:true,  icon:'◉', color:'green',  delay:'delay-200' },
  { label:'Churn Rate',    value:'2.4%',    change:'0.3%',  isPositive:false, icon:'↓', color:'red',    delay:'delay-300' },
  { label:'Avg Session',   value:'4m 32s',  change:'12.1%', isPositive:true,  icon:'◷', color:'purple', delay:'delay-400' },
]

export default function App() {
  const [activeNav, setActiveNav] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(true)

  return (
    <div className="flex min-h-screen bg-[#080C10]">
      {showBanner && <WelcomeBanner onDismiss={() => setShowBanner(false)} />}
      <div className={`fixed inset-y-0 left-0 z-40 lg:static lg:block transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <Sidebar active={activeNav} setActive={(id) => { setActiveNav(id); setSidebarOpen(false) }} />
      </div>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/60 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <div className="lg:hidden flex items-center gap-3 bg-[#0F1419] border-b border-white/[0.06] px-4 py-3.5">
          <button onClick={() => setSidebarOpen(true)} className="text-[#E8EDF2] bg-transparent border-none cursor-pointer text-xl">☰</button>
          <span className="font-mono text-[0.95rem] font-bold">Pul<span className="text-[#00D4FF]">sar</span></span>
        </div>
        <Topbar activeNav={activeNav} />
        <main className="flex-1 overflow-y-auto p-5 lg:p-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
            {metrics.map((m) => <MetricCard key={m.label} {...m} />)}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div className="lg:col-span-2"><RevenueChart /></div>
            <TrafficDonut />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <UserBarChart />
            <div className="anim-hidden animate-fadeIn delay-700 bg-[#141C24] border border-white/[0.06] p-5 rounded-lg">
              <h3 className="text-[0.9rem] font-semibold font-jakarta mb-4">Plan Breakdown</h3>
              <div className="flex flex-col gap-4">
                {[
                  { label:'Enterprise', pct:58, color:'#00D4FF', count:'14 accounts', mrr:'$32,760' },
                  { label:'Pro',        pct:30, color:'#A855F7', count:'41 accounts', mrr:'$12,300' },
                  { label:'Starter',    pct:12, color:'#FFB300', count:'87 accounts', mrr:'$3,230'  },
                ].map((p) => (
                  <div key={p.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[0.8rem] font-jakarta text-[#E8EDF2]">{p.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-[0.73rem] text-[#6B7A8D] font-jakarta">{p.count}</span>
                        <span className="text-[0.78rem] font-mono" style={{color:p.color}}>{p.mrr}</span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{width:`${p.pct}%`, background:p.color}} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[0.8rem] text-[#6B7A8D] font-jakarta">Total MRR</span>
                <span className="font-mono text-[1.2rem] font-bold text-[#00E5A0]">$48,290</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <CustomerTable />
            <ActivityFeed />
          </div>
        </main>
      </div>
    </div>
  )
}
