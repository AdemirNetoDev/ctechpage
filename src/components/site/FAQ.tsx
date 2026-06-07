// @ts-nocheck
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { FAQS } from '@/lib/site/constants'

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  const itemRef = useRef(null)
  const inView = useInView(itemRef, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`border-b border-[rgba(255,255,255,0.06)] transition-colors duration-200 ${
        open ? 'border-[rgba(59,130,246,0.2)]' : ''
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
        aria-expanded={open}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <span className="font-medium text-white text-base group-hover:text-[#3B82F6] transition-colors duration-200">
          {faq.question}
        </span>
        <div
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            open
              ? 'bg-[#3B82F6] text-white'
              : 'bg-[rgba(255,255,255,0.05)] text-[#A0A0B0] group-hover:bg-[rgba(59,130,246,0.1)] group-hover:text-[#3B82F6]'
          }`}
          aria-hidden="true"
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={`faq-answer-${faq.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
            role="region"
          >
            <p className="text-[#A0A0B0] text-sm leading-relaxed pb-6 pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="faq" className="py-28 relative" aria-labelledby="faq-title">
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-[#3B82F6] opacity-[0.04] blur-[100px] rounded-full" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#3B82F6] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            Dúvidas
          </span>
          <h2 id="faq-title" className="font-display text-5xl sm:text-6xl text-white mb-4">
            PERGUNTAS{' '}
            <span className="font-italic-serif text-[#3B82F6] font-normal text-4xl sm:text-5xl">
              frequentes
            </span>
          </h2>
          <p className="text-[#A0A0B0] text-lg">
            Tira as dúvidas antes de falar com a gente — mas pode perguntar o que quiser no
            WhatsApp também.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="glass-card rounded-3xl px-8 py-2" role="list">
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.id} faq={faq} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[#A0A0B0] text-sm mt-8"
        >
          Não encontrou sua resposta?{' '}
          <a
            href={`https://wa.me/5522999999999?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre os serviços da Condé Tech.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3B82F6] hover:underline"
          >
            Fale direto no WhatsApp
          </a>
        </motion.p>
      </div>
    </section>
  )
}
