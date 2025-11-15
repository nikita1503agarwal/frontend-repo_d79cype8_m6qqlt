import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
}

export default function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`relative w-full py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || subtitle) && (
          <div className="mb-10 md:mb-14">
            {eyebrow && (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={0}
                variants={variants}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 text-indigo-600 ring-1 ring-indigo-500/20 px-3 py-1 text-xs font-medium">
                {eyebrow}
              </motion.div>
            )}
            {title && (
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={1}
                variants={variants}
                className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={2}
                variants={variants}
                className="mt-4 max-w-3xl text-slate-600 text-base md:text-lg">
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={variants}>
          {children}
        </motion.div>
      </div>
    </section>
  )
}
