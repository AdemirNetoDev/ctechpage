// @ts-nocheck
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Image, Smartphone, TrendingUp, Check } from 'lucide-react'
import { SERVICES } from '@/lib/site/constants'

const ICONS = {
  image: Image,
  smartphone: Smartphone,
  'trending-up': TrendingUp,
}

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = ICONS[service.icon]

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative glass-card rounded-3xl p-8 hover:border-[rgba(59,130,246,0.35)] transition-all duration-400 hover:-translate-y-1"
      aria-label={`Serviço: ${service.title}`}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[rgba(59,130,246,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" aria-hidden="true" />

      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] flex items-center justify-center mb-6 group-hover:bg-[rgba(59,130,246,0.15)] transition-colors duration-300">
        <Icon size={24} className="text-[#3B82F6]" aria-hidden="true" />
      </div>

      {/* Content */}
      <p className="font-italic-serif text-[#22D3EE] text-sm mb-1">{service.subtitle}</p>
      <h3 className="font-display text-3xl text-white mb-4">{service.title.toUpperCase()}</h3>
      <p className="text-[#A0A0B0] text-sm leading-relaxed mb-6">{service.description}</p>

      {/* Items */}
      <ul className="space-y-2" role="list">
        {service.items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-[#A0A0B0]">
            <div className="w-5 h-5 rounded-full bg-[rgba(59,130,246,0.1)] flex items-center justify-center shrink-0" aria-hidden="true">
              <Check size={11} className="text-[#3B82F6]" />
            </div>
            {item}
          </li>
        ))}
      </ul>

      {/* Number watermark */}
      <div className="absolute bottom-6 right-8 font-display text-6xl text-[rgba(59,130,246,0.05)] select-none" aria-hidden="true">
        0{service.id}
      </div>
    </motion.article>
  )
}

export default function Services() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="servicos" className="py-28 relative" aria-labelledby="services-title">
      {/* Background accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(59,130,246,0.2)] to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#3B82F6] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            O que fazemos
          </span>
          <h2 id="services-title" className="font-display text-5xl sm:text-6xl text-white mb-4">
            O QUE A CONDÉ TECH{' '}
            <span className="font-italic-serif text-[#3B82F6] font-normal text-4xl sm:text-5xl">
              faz pela sua empresa
            </span>
          </h2>
          <p className="text-[#A0A0B0] text-lg max-w-xl mx-auto">
            Planos personalizados. Conteúdo profissional. Resultado de verdade.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-[#A0A0B0] text-sm mt-10"
        >
          Todos os planos incluem{' '}
          <span className="text-white font-medium">atendimento direto via WhatsApp</span> e{' '}
          <span className="text-white font-medium">aprovação prévia de todo conteúdo.</span>
        </motion.p>
      </div>
    </section>
  )
}
