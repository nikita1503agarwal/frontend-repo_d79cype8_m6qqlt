import { useParams } from 'react-router-dom'
import Section from '../Section'

const copy = {
  ios: { title: 'iOS Development', blurb: 'Native Swift and SwiftUI applications engineered for performance and polish.' },
  android: { title: 'Android Development', blurb: 'Modern Android with Kotlin, Jetpack, and robust architecture.' },
  flutter: { title: 'Flutter Apps', blurb: 'Single codebase, pixel‑perfect apps for iOS, Android, and web.' },
  'react-native': { title: 'React Native', blurb: 'Native-feel apps powered by JavaScript and React.' },
  'app-ui': { title: 'App UI/UX', blurb: 'Motion‑first design systems and premium product design.' },
  nextjs: { title: 'Next.js Websites', blurb: 'SEO‑ready, blazing fast web experiences on Next.js.' },
  headless: { title: 'Headless CMS', blurb: 'Sanity, Contentful, and Strapi implementations that scale.' },
  ecommerce: { title: 'eCommerce', blurb: 'Shopify, Medusa, or custom storefronts that convert.' },
  animations: { title: 'Web Animations', blurb: 'Framer Motion and GSAP for rich, performant motion.' },
  landing: { title: 'Landing Pages', blurb: 'High‑impact, high‑converting landing pages.' },
}

export default function ServiceDetail(){
  const { slug } = useParams()
  const data = copy[slug] || { title: 'Service', blurb: 'Premium delivery tailored to your needs.' }
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Section eyebrow="Service" title={data.title} subtitle={data.blurb}>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i)=> (
            <div key={i} className="rounded-2xl border border-slate-200 p-6 bg-white/60">
              <div className="h-28 rounded-xl bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 border border-indigo-500/20" />
              <h3 className="mt-4 font-semibold">Deliverable {i}</h3>
              <p className="mt-1 text-sm text-slate-600">Clear outcomes, timelines, and QA baked in.</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
