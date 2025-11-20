import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Team from './components/Team'
import Achievements from './components/Achievements'
import Practice from './components/Practice'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Achievements />
        <Practice />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Horus University ICPC. All rights reserved.</p>
          <div className="text-sm text-slate-500">Built for the community of problem solvers.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
