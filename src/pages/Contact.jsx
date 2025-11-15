import Section from '../Section'

export default function Contact(){
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Section id="contact" eyebrow="Contact" title="Let’s talk" subtitle="Tell us about your project and goals.">
        <form className="max-w-2xl grid grid-cols-1 gap-4">
          <input placeholder="Full name" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input placeholder="Email" type="email" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input placeholder="Company" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <textarea placeholder="What are you building?" rows="5" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <button className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-fuchsia-500/20">
            Send inquiry
          </button>
        </form>
      </Section>
    </div>
  )
}
