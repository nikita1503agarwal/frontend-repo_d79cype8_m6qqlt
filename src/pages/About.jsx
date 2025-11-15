import Section from '../Section'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-white to-white" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">We are Web Technality</h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">Design‑driven engineers crafting premium digital products with motion at the core.</p>
          </div>
        </div>
      </div>

      <Section eyebrow="Principles" title="How we build" subtitle="A few non‑negotiables we bring to every engagement.">
        <div className="grid md:grid-cols-3 gap-6">
          {["Performance first","Motion with purpose","Maintainable systems"].map((t,i)=>(
            <motion.div key={t} initial={{opacity:0, y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}
             className="rounded-2xl border border-slate-200 p-6 bg-white/60">
              <h3 className="text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-slate-600">Carefully engineered experiences that scale and convert.</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  )
}
