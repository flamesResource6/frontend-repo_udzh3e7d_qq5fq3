import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })

      if (res.ok) {
        setStatus('Thanks! We will get back to you soon.')
        e.target.reset()
      } else {
        setStatus('Something went wrong. Please try again later.')
      }
    } catch (err) {
      setStatus('Network error. Please check your connection.')
    }
  }

  return (
    <section id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Get in touch</h2>
            <p className="mt-4 text-slate-600">Have questions or want to join? Send us a message and we’ll reply by email.</p>
            {status && <p className="mt-4 text-sm text-slate-700">{status}</p>}
          </div>
          <form onSubmit={handleSubmit} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input name="name" required className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" name="email" required className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea name="message" rows="4" required className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
            </div>
            <button className="inline-flex justify-center bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
