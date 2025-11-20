export default function Practice() {
  const topics = [
    { name: 'Data Structures', desc: 'Stacks, queues, trees, segment trees, DSU' },
    { name: 'Dynamic Programming', desc: 'Knapsack, LIS, digit DP, DP on trees' },
    { name: 'Graphs', desc: 'BFS/DFS, shortest paths, MST, flows' },
    { name: 'Math', desc: 'Number theory, combinatorics, geometry basics' },
    { name: 'Greedy', desc: 'Classic techniques and proofs of correctness' },
    { name: 'Strings', desc: 'KMP, Z, suffix array, rolling hash' },
  ]

  return (
    <section id="practice" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-slate-900">Practice Roadmap</h2>
            <p className="mt-4 text-slate-600">A structured path to improve step by step. We rotate through topics and build up from fundamentals to advanced problems.</p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {topics.map((t) => (
              <div key={t.name} className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-slate-600 text-sm mt-1">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
