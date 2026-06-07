// @ts-nocheck
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/site/constants'

function TestimonialCard({ t, isActive }) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className={`glass-card rounded-3xl p-8 relative overflow-hidden transition-all duration-300 ${
        isActive ? 'border-[rgba(59,130,246,0.3)]' : ''
      }`}
      aria-label={`Depoimento de ${t.name}`}
    >
      {/* Quote icon */}
      <Quote
        size={40}
        className="text-[rgba(59,130,246,0.15)] mb-4"
        aria-hidden="true"
      />

      {/* Stars */}
      <div className="flex gap-1 mb-4" aria-label="5 estrelas">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="text-[#22D3EE] fill-[#22D3EE]" aria-hidden="true" />
        ))}
      </div>

      {/* Text */}
      <p className="text-[#A0A0B0] text-base leading-relaxed mb-6 font-italic-serif text-lg">
        "{t.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-[rgba(255,255,255,0.06)] pt-5">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#22D3EE] flex items-center justify-center text-white font-bold text-base shrink-0">
          {t.initial}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{t.name}</p>
          <p className="text-[#3B82F6] text-xs">{t.role}</p>
          <p className="text-[#A0A0B0] text-xs">{t.city}</p>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#3B82F6] opacity-[0.05] blur-2xl rounded-full" aria-hidden="true" />
    </motion.article>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [active, setActive] = useState(1) // center card

  const prev = () => setActive((p) => (p === 0 ? TESTIMONIALS.length - 1 : p - 1))
  const next = () => setActive((p) => (p === TESTIMONIALS.length - 1 ? 0 : p + 1))

  return (
    <section
      id="depoimentos"
      className="py-28 relative overflow-hidden bg-[#13131A]"
      aria-labelledby="testimonials-title"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(59,130,246,0.15)] to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(59,130,246,0.15)] to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#3B82F6] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            Depoimentos
          </span>
          <h2 id="testimonials-title" className="font-display text-5xl sm:text-6xl text-white mb-4">
            O QUE DIZEM{' '}
            <span className="font-italic-serif text-[#3B82F6] font-normal text-4xl sm:text-5xl">
              quem já trabalha
            </span>{' '}
            COM A GENTE
          </h2>
          <p className="text-[#A0A0B0] text-lg">
            Empresas reais. Resultados reais. Aqui perto de você.
          </p>
        </motion.div>

        {/* Desktop: 3 column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <TestimonialCard t={t} isActive={i === 1} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={active}
              t={TESTIMONIALS[active]}
              isActive
            />
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Selecionar depoimento">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Depoimento ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? 'w-6 h-2 bg-[#3B82F6]' : 'w-2 h-2 bg-[rgba(255,255,255,0.2)]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
