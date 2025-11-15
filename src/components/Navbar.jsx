import { useState } from 'react'
import { Menu, X, ChevronDown, Zap, Globe2, AppWindow } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const menu = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services', href: '/services', mega: true,
    groups: [
      {
        title: 'App Services', icon: AppWindow,
        items: [
          { label: 'iOS Development', desc: 'Native Swift & SwiftUI', href: '/services/ios' },
          { label: 'Android Development', desc: 'Kotlin, Jetpack', href: '/services/android' },
          { label: 'Flutter Apps', desc: 'One codebase, every screen', href: '/services/flutter' },
          { label: 'React Native', desc: 'JS + Native power', href: '/services/react-native' },
          { label: 'App UI/UX', desc: 'Motion-first design systems', href: '/services/app-ui' },
        ]
      },
      {
        title: 'Web Services', icon: Globe2,
        items: [
          { label: 'Next.js Websites', desc: 'Blazing fast, SEO ready', href: '/services/nextjs' },
          { label: 'Headless CMS', desc: 'Sanity/Contentful/Strapi', href: '/services/headless' },
          { label: 'eCommerce', desc: 'Shopify, Medusa, custom', href: '/services/ecommerce' },
          { label: 'Web Animations', desc: 'Framer Motion, GSAP', href: '/services/animations' },
          { label: 'Landing Pages', desc: 'High-converting funnels', href: '/services/landing' },
        ]
      }
    ]
  },
  { label: 'Contact', href: '/contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-8 grid place-content-center rounded bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white">
            <Zap className="size-5" />
          </div>
          <span className="font-extrabold tracking-tight text-slate-900">Web Technality</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {menu.map((m) => (
            <div key={m.label} className="relative">
              {m.mega ? (
                <button onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}
                        className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900">
                  {m.label}
                  <ChevronDown className="size-4" />
                </button>
              ) : (
                <Link to={m.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">{m.label}</Link>
              )}

              {m.mega && (
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}
                      className="absolute left-0 right-0 top-full pt-4">
                      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="rounded-2xl border border-slate-200 bg-white shadow-xl p-6 grid grid-cols-2 gap-8">
                          {m.groups.map((g) => (
                            <div key={g.title}>
                              <div className="flex items-center gap-2 mb-4">
                                <g.icon className="size-5 text-indigo-600" />
                                <h4 className="text-sm font-semibold text-slate-900">{g.title}</h4>
                              </div>
                              <ul className="space-y-2">
                                {g.items.map((it) => (
                                  <li key={it.label}>
                                    <Link to={it.href} className="flex items-start gap-3 rounded-lg p-3 hover:bg-slate-50">
                                      <span className="text-sm font-medium text-slate-900">{it.label}</span>
                                      <span className="text-xs text-slate-500">{it.desc}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>
    </div>
  )
}
