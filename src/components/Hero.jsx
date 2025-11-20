import { ArrowRight, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-slate-100" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-slate-100" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-full px-3 py-1">
              <Shield className="w-3.5 h-3.5" /> Official Programming Team
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Horus University ICPC Team
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We are a group of passionate programmers representing Horus University in the ICPC.
              We practice, compete, and grow together through problem solving and teamwork.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#practice" className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-md shadow hover:bg-slate-800">
                Start Practicing <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#about" className="inline-flex items-center gap-2 border border-slate-300 text-slate-900 px-5 py-3 rounded-md hover:bg-slate-50">
                Learn More
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
              <div className="grid grid-cols-3 gap-3 h-full">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-lg border border-slate-200 bg-gradient-to-br from-white to-slate-50 flex items-center justify-center text-slate-400 text-sm">
                    P{i + 1}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-xs text-slate-500">Practice grid — problems, topics, and contests</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
