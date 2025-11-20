export default function Team() {
  const members = [
    { name: 'Team Lead', role: 'Coach', bio: 'Guides strategy and training', img: 'https://picsum.photos/seed/coach/200' },
    { name: 'Alice', role: 'Contestant', bio: 'Graphs & DP specialist', img: 'https://picsum.photos/seed/alice/200' },
    { name: 'Bob', role: 'Contestant', bio: 'Greedy & Math', img: 'https://picsum.photos/seed/bob/200' },
    { name: 'Carol', role: 'Contestant', bio: 'Strings & Data Structures', img: 'https://picsum.photos/seed/carol/200' },
  ]

  return (
    <section id="team" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900">Meet the Team</h2>
        <p className="mt-2 text-slate-600">A mix of experienced coaches and passionate students.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m) => (
            <div key={m.name} className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
              <img src={m.img} alt={m.name} className="w-full h-40 object-cover rounded-lg" />
              <div className="mt-4">
                <p className="font-semibold text-slate-900">{m.name}</p>
                <p className="text-xs text-slate-500">{m.role}</p>
                <p className="mt-2 text-sm text-slate-600">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
