import { Trophy, Medal, Award } from 'lucide-react'

export default function Achievements() {
  const items = [
    { icon: Trophy, title: 'Regional Finalists', desc: 'Advanced to the regional ICPC finals 2023' },
    { icon: Medal, title: 'Top 10 Local Contest', desc: 'Placed 7th in University League 2024' },
    { icon: Award, title: 'Best Newcomers', desc: 'Recognized for growth and consistency' },
  ]

  return (
    <section id="achievements" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900">Achievements</h2>
        <p className="mt-2 text-slate-600">Highlights from our competitions and milestones.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <p className="mt-4 font-semibold text-slate-900">{title}</p>
              <p className="text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
