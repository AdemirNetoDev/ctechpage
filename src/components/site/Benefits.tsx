// @ts-nocheck
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BENEFITS } from '@/lib/site/constants'

function BenefitItem({ benefit, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group flex gap-6 items-start py-8 border-b border-[rgba(255,255,255,0.05)] last:border-0 hover:border-[rgba(59,130,246,0.2)] transition-colors duration-300"
    >
      {/* Number */}
      <div className="shrink-0">
        <span className="font-display text-5xl text-[rgba(59,130,246,0.2)] group-hover:text-[rgba(59,130,246,0.5)] transition-colors duration-300 leading-none">
          {benefit.number}
        </span>
      </div>

      {/* Content */}
      <div className="pt-1">
        <h3 className="font-display text-2xl text-white mb-2 group-hover:text-[#3B82F6] transition-colors duration-300">
          {benefit.title.toUpperCase()}
        </h3>
        <p className="text-[#A0A0B0] text-sm leading-relaxed">{benefit.description}</p>
      </div>

      {/* Arrow indicator */}
      <div className="shrink-0 pt-2 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 10h12M10 4l6 6-6 6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </motion.div>
  )
}

export default function Benefits() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })
  const rightRef = useRef(null)
  const rightInView = useInView(rightRef, { once: true })

  return (
    <section
      id="beneficios"
      className="py-28 relative overflow-hidden"
      aria-labelledby="benefits-title"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#13131A]" aria-hidden="true" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(59,130,246,0.15)] to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(59,130,246,0.15)] to-transparent" aria-hidden="true" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3B82F6] opacity-[0.04] blur-[100px] rounded-full" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — header */}
          <div>
            <motion.div
              ref={headerRef}
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#3B82F6] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
                Por que contratar
              </span>
              <h2 id="benefits-title" className="font-display text-5xl sm:text-6xl text-white mb-4 leading-none">
                POR QUE GESTÃO{' '}
                <br />
                DE{' '}
                <span className="font-italic-serif text-[#3B82F6] font-normal text-4xl sm:text-5xl">
                  social media?
                </span>
              </h2>
              <p className="text-[#A0A0B0] text-lg leading-relaxed mt-6 max-w-sm">
                Porque postar por obrigação, sem estratégia, não traz cliente nenhum.
              </p>
            </motion.div>

            {/* Visual element */}
            <motion.div
              ref={rightRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={rightInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-12 relative"
              aria-hidden="true"
            >
              <div className="glass-card rounded-3xl p-6 max-w-xs">
                <p className="font-italic-serif text-[#22D3EE] text-2xl leading-snug mb-4">
                  "Desde que contratei, minha empresa aparece todos os dias."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#22D3EE] flex items-center justify-center text-white font-bold text-sm">
                    F
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Fernanda R.</p>
                    <p className="text-[#A0A0B0] text-xs">Salão de beleza</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — benefits list */}
          <div>
            {BENEFITS.map((benefit, i) => (
              <BenefitItem key={benefit.id} benefit={benefit} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
