const customers = [
  { name: 'Acme Corp',    plan: 'Enterprise', mrr: '$2,400', status: 'active' },
  { name: 'Startup XYZ', plan: 'Pro',         mrr: '$890',   status: 'trial'   },
  { name: 'Nova Labs',   plan: 'Enterprise',  mrr: '$3,200', status: 'active'  },
  { name: 'DevCo Inc',   plan: 'Starter',     mrr: '$0',     status: 'churned' },
  { name: 'Bright Media',plan: 'Pro',         mrr: '$1,200', status: 'active'  },
]

const statusStyles = {
  active:  'bg-[#00E5A0]/10 text-[#00E5A0]',
  trial:   'bg-[#00D4FF]/10 text-[#00D4FF]',
  churned: 'bg-[#FF4757]/10 text-[#FF4757]',
}

export default function CustomerTable() {
  return (
    <div className="anim-hidden animate-fadeIn delay-700 bg-[#141C24] border border-white/[0.06] p-5 rounded-lg">
      <h3 className="text-[0.9rem] font-semibold font-jakarta mb-4">Top Customers</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {['Customer', 'Plan', 'MRR', 'Status'].map((h) => (
                <th key={h} className="text-left text-[0.7rem] uppercase tracking-[0.1em] text-[#6B7A8D] font-jakarta pb-3 border-b border-white/[0.06] pr-4 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {customers.map((c, i) => (
              <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                <td className="py-3 pr-4 text-[0.82rem] font-jakarta text-[#E8EDF2] border-b border-white/[0.03] group-last:border-0">
                  {c.name}
                </td>
                <td className="py-3 pr-4 text-[0.82rem] font-jakarta text-[#6B7A8D] border-b border-white/[0.03] group-last:border-0">
                  {c.plan}
                </td>
                <td className={`py-3 pr-4 text-[0.82rem] font-mono border-b border-white/[0.03] group-last:border-0 ${c.status === 'churned' ? 'text-[#FF4757]' : 'text-[#00E5A0]'}`}>
                  {c.mrr}
                </td>
                <td className="py-3 border-b border-white/[0.03] group-last:border-0">
                  <span className={`text-[0.68rem] font-bold font-mono px-2.5 py-1 rounded-full capitalize ${statusStyles[c.status]}`}>
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
