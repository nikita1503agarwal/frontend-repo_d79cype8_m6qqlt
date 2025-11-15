import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import Section from '../Section'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="relative h-[80vh] w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white pointer-events-none" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl">
              <p className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-500/30">Introducing Web Technality</p>
              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">We craft world‑class apps and websites</h1>
              <p className="mt-4 text-slate-700">Premium design, production engineering, and motion-first experiences that make clients stop and stare.</p>
              <div className="mt-8 flex items-center gap-4">
                <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-fuchsia-500/20">Start a project</a>
                <a href="#work" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">See our work</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Section id="highlights" eyebrow="Capabilities" title="Full‑stack, end‑to‑end" subtitle="From strategy to ship, we cover the complete lifecycle.">
        <div className="grid md:grid-cols-3 gap-6">
          {["Design Systems","App Development","Web Engineering"].map((t,i)=> (
            <motion.div key={t} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true }} transition={{ delay: i*0.05 }}
              className="rounded-2xl border border-slate-200 p-6 bg-white/60 backdrop-blur">
              <div className="h-32 rounded-xl bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 border border-indigo-500/20" />
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-slate-600">Elevated, scalable, and animated to perfection.</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="cta" eyebrow="Let’s build" title="Have a brief? We’ll turn it into a product." subtitle="Transparent pricing, weekly demos, and enterprise‑grade quality.">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white px-6 py-4 text-sm font-semibold shadow-lg shadow-fuchsia-500/20">Book a discovery call</a>
          <span className="text-slate-600 text-sm">Avg. kick‑off in 3 business days</span>
        </div>
      </Section>
    </div>
  )
}
