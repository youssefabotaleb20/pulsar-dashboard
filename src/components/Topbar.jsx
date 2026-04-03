import { useState } from 'react'

export default function Topbar({ activeNav }) {
  const [range, setRange] = useState('Last 30 days')
  const [showNotif, setShowNotif] = useState(false)
  const title = activeNav.charAt(0).toUpperCase() + activeNav.slice(1)

  return (
    <div className="bg-[#0F1419] border-b border-white/[0.06] px-6 py-3.5 flex items-center justify-between sticky top-0 z-30">
      <div>
        <h1 className="text-[1.05rem] font-semibold font-jakarta tracking-tight">{title} Overview</h1>
        <p className="text-[0.72rem] text-[#6B7A8D] font-jakarta mt-0.5">
          {new Date().toLocaleDateString('en-GB', { weekday:'long', year:'numeric', month:'long', day:'numeric' })}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <select value={range} onChange={(e) => setRange(e.target.value)}
          className="bg-[#141C24] border border-white/[0.06] text-[#6B7A8D] text-[0.8rem] px-3 py-2 rounded font-jakarta outline-none cursor-pointer">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
          <option>This year</option>
        </select>
        <div className="relative">
          <button onClick={() => setShowNotif(!showNotif)}
            className="relative w-8 h-8 bg-white/[0.04] border border-white/[0.06] rounded flex items-center justify-center text-sm cursor-pointer hover:bg-white/[0.08] transition-colors">
            🔔
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#FF4757] animate-pulseDot" />
          </button>
          {showNotif && (
            <div className="absolute right-0 top-10 w-72 bg-[#141C24] border border-white/[0.08] rounded-lg shadow-xl z-50 overflow-hidden">
              <div className="px-4 py-3 border-b border-white/[0.06]">
                <span className="text-[0.82rem] font-semibold font-jakarta">Notifications</span>
              </div>
              {[
                { icon:'🟢', text:'Nova Labs upgraded to Enterprise', time:'2 min ago' },
                { icon:'🔴', text:'DevCo Inc subscription cancelled', time:'1 hr ago' },
                { icon:'🔵', text:'New campaign launched successfully', time:'3 hr ago' },
              ].map((n,i) => (
                <div key={i} className="px-4 py-3 hover:bg-white/[0.04] border-b border-white/[0.04] last:border-0">
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm mt-0.5">{n.icon}</span>
                    <div>
                      <p className="text-[0.8rem] text-[#E8EDF2] font-jakarta leading-snug">{n.text}</p>
                      <p className="text-[0.7rem] text-[#6B7A8D] font-mono mt-0.5">{n.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <button className="bg-[#00D4FF] text-[#080C10] text-[0.8rem] font-semibold font-jakarta px-4 py-2 rounded border-none cursor-pointer hover:bg-[#00BFEE] transition-colors">
          + New Report
        </button>
      </div>
    </div>
  )
}
