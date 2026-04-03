export default function WelcomeBanner({ onDismiss }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0F1419] border border-white/[0.1] rounded-2xl p-8 shadow-2xl animate-bannerIn">

        {/* Gradient accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-[#00D4FF] via-[#A855F7] to-[#00E5A0]" />

        {/* Logo + badge */}
        <div className="flex items-center gap-2.5 mb-6">
          <span className="font-mono text-[1.2rem] font-bold tracking-tight">
            Pul<span className="text-[#00D4FF]">sar</span>
          </span>
          <span className="text-[0.65rem] font-jakarta font-semibold bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/20 rounded-full px-2.5 py-0.5 uppercase tracking-widest">
            Portfolio Demo
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-jakarta font-semibold text-[1.1rem] text-[#E8EDF2] mb-3 leading-snug">
          Welcome — a quick note before you explore
        </h2>

        {/* Body */}
        <p className="font-jakarta text-[0.875rem] text-[#8899AB] leading-relaxed mb-4">
          This is a{' '}
          <span className="text-[#E8EDF2] font-medium">front-end portfolio project</span>{' '}
          created to showcase UI/UX design and development skills — including interactive data
          visualisation, responsive layouts, and modern React architecture.
        </p>
        <p className="font-jakarta text-[0.875rem] text-[#8899AB] leading-relaxed mb-7">
          All metrics, users, and activity shown here are entirely{' '}
          <span className="text-[#E8EDF2] font-medium">simulated</span>. This is not a live
          product — no real business, transactions, or accounts exist behind this interface.
        </p>

        {/* Divider */}
        <div className="border-t border-white/[0.06] mb-6" />

        {/* Footer CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://linktr.ee/YoussefAbotaleb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 rounded-lg text-center text-[0.85rem] font-jakarta font-semibold bg-[#00D4FF] text-[#080C10] hover:bg-[#00BFEA] transition-colors duration-150"
          >
            View My Portfolio →
          </a>
          <button
            onClick={onDismiss}
            className="flex-1 py-2.5 rounded-lg border border-white/[0.1] text-[0.85rem] font-jakarta text-[#8899AB] hover:text-[#E8EDF2] hover:border-white/[0.2] transition-colors duration-150 cursor-pointer bg-transparent"
          >
            Enter Dashboard
          </button>
        </div>

      </div>
    </div>
  )
}
