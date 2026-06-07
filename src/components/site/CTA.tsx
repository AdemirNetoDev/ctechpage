// @ts-nocheck
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Shield, Clock, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site/constants'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="contato"
      className="py-28 relative overflow-hidden"
      aria-labelledby="cta-title"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#13131A]" aria-hidden="true" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(59,130,246,0.2)] to-transparent" aria-hidden="true" />

      {/* Large glow */}
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="w-[600px] h-[400px] bg-[#3B82F6] opacity-10 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.3)] text-[#3B82F6] text-xs font-semibold px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" aria-hidden="true" />
            Vagas limitadas para novos clientes este mês
          </div>

          <h2 id="cta-title" className="font-display text-6xl sm:text-7xl lg:text-8xl text-white leading-none mb-6">
            PRONTO PARA{' '}
            <br />
            <span className="font-italic-serif font-normal text-[#3B82F6] text-5xl sm:text-6xl lg:text-7xl">
              crescer nas redes?
            </span>
          </h2>

          <p className="text-[#A0A0B0] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Fale agora com a nossa equipe. Sem enrolação, sem compromisso. A gente entende seu
            negócio e te apresenta a melhor solução.
          </p>

          {/* Main CTA */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 bg-[#3B82F6] hover:bg-[#60A5FA] text-white font-semibold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] mb-6"
            aria-label="Falar com a Condé Tech no WhatsApp"
          >
            <WhatsAppIcon />
            Falar com a Condé Tech no WhatsApp
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </motion.a>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            {[
              { icon: Clock, text: 'Resposta em até 24h' },
              { icon: MessageCircle, text: 'Atendimento humanizado' },
              { icon: Shield, text: 'Orçamento gratuito' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-[#A0A0B0] text-sm">
                <Icon size={14} className="text-[#3B82F6]" aria-hidden="true" />
                {text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
