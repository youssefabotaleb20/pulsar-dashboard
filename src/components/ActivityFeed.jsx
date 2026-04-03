const activities = [
  { avatar: 'https://randomuser.me/api/portraits/women/12.jpg', name: 'Sara K.',  action: 'upgraded to Enterprise plan',   time: '2 min ago',  delay: 'delay-800'  },
  { avatar: 'https://randomuser.me/api/portraits/men/33.jpg',   name: 'Omar R.',  action: 'created a new campaign',         time: '14 min ago', delay: 'delay-900'  },
  { avatar: 'https://randomuser.me/api/portraits/women/55.jpg', name: 'Nour A.',  action: 'exported the monthly report',    time: '1 hr ago',   delay: 'delay-1000' },
  { avatar: 'https://randomuser.me/api/portraits/men/71.jpg',   name: 'Ali M.',   action: 'added 3 new team members',       time: '3 hr ago',   delay: 'delay-1100' },
  { avatar: 'https://randomuser.me/api/portraits/women/82.jpg', name: 'Hana S.',  action: 'connected Google Analytics',     time: 'Yesterday',  delay: 'delay-1200' },
]

export default function ActivityFeed() {
  return (
    <div className="anim-hidden animate-fadeIn delay-800 bg-[#141C24] border border-white/[0.06] p-5 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[0.9rem] font-semibold font-jakarta">Recent Activity</h3>
        <button className="text-[0.75rem] text-[#00D4FF] font-jakarta bg-transparent border-none cursor-pointer hover:underline">
          View all
        </button>
      </div>

      <div className="flex flex-col">
        {activities.map((a, i) => (
          <div
            key={i}
            className={`anim-hidden animate-slideIn ${a.delay} flex items-start gap-3 py-3 border-b border-white/[0.04] last:border-0`}
          >
            <img
              src={a.avatar}
              alt={a.name}
              className="w-8 h-8 rounded-full object-cover shrink-0 mt-0.5"
            />
            <div className="flex-1 min-w-0">
              <p className="text-[0.8rem] text-[#E8EDF2] font-jakarta leading-snug">
                <span className="text-[#00D4FF] font-medium">{a.name}</span>
                {' '}{a.action}
              </p>
              <p className="text-[0.7rem] text-[#6B7A8D] font-mono mt-0.5">{a.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
