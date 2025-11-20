export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">About the Team</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              The Horus University ICPC Team brings together students who love algorithms, data structures, and competitive programming. We prepare through regular practice sessions, internal contests, and participation in regional competitions.
            </p>
            <p className="mt-3 text-slate-600">
              Our mission is to build a long-lasting culture of problem solving at our university and help members grow into strong software engineers and researchers.
            </p>
          </div>

          <ul className="space-y-4">
            {[
              {
                title: 'Weekly Practice',
                desc: 'Hands-on sessions covering classic topics: graphs, DP, greedy, math, and more.'
              },
              {
                title: 'Mentorship',
                desc: 'Peer-led guidance for newcomers and targeted training for advanced topics.'
              },
              {
                title: 'Team Spirit',
                desc: 'We value collaboration, clarity, and respect — inside and outside contests.'
              },
            ].map((f) => (
              <li key={f.title} className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                <p className="font-semibold text-slate-900">{f.title}</p>
                <p className="text-slate-600 text-sm mt-1">{f.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
