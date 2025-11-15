import Section from '../Section'
import { motion } from 'framer-motion'

const services = {
  app: [
    { t: 'Product Strategy', d: 'Workshops, roadmaps, KPIs' },
    { t: 'iOS & Android', d: 'Native & cross‑platform' },
    { t: 'Prototyping', d: 'Clickable flows in days' },
    { t: 'QA & Release', d: 'Automation & store launch' },
  ],
  web: [
    { t: 'Next.js Sites', d: 'SEO, speed, scale' },
    { t: 'Headless CMS', d: 'Sanity, Contentful, Strapi' },
    { t: 'eCommerce', d: 'Shopify, Medusa, custom' },
    { t: 'Performance', d: 'Web vitals optimization' },
  ]
}

export default function Services(){
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Section eyebrow="Services" title="What we do" subtitle="Premium, full‑service delivery across apps and web.">
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(services).map(([key, list],i)=> (
            <div key={key} className="rounded-2xl border border-slate-200 p-6 bg-white/60">
              <h3 className="text-xl font-bold capitalize">{key} services</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {list.map((s, idx)=> (
                  <motion.div key={s.t} initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                    transition={{delay: idx*0.03}}
                    className="rounded-xl border border-slate-200 p-4 hover:shadow-sm">
                    <div className="font-medium">{s.t}</div>
                    <div className="text-sm text-slate-600">{s.d}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
