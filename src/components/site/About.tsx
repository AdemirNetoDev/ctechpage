// @ts-nocheck
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Users, FileImage, Star, Clock } from 'lucide-react'
import { STATS } from '@/lib/site/constants'
import { useCountUp } from '@/hooks/useCountUp'

const STAT_ICONS = [Users, FileImage, Star, Clock]

function StatItem({ stat, index, inView }) {
  const count = useCountUp(stat.value, 1800, inView)
  const Icon = STAT_ICONS[index]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center p-6"
    >
      <div className="w-12 h-12 rounded-2xl bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] flex items-center justify-center mx-auto mb-4">
        <Icon size={20} className="text-[#3B82F6]" aria-hidden="true" />
      </div>
      <div className="font-display text-5xl text-white leading-none mb-1">
        {count}
        <span className="text-[#3B82F6]">{stat.suffix}</span>
      </div>
      <p className="text-[#A0A0B0] text-sm">{stat.label}</p>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' })

  return (
    <section id="sobre" className="py-28 relative" aria-labelledby="about-title">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#3B82F6] opacity-[0.04] blur-[100px] rounded-full" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#3B82F6] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
            Quem somos
          </span>
          <h2 id="about-title" className="font-display text-5xl sm:text-6xl text-white">
            QUEM É A{' '}
            <span className="font-italic-serif text-[#3B82F6] font-normal text-4xl sm:text-5xl">
              Condé Tech
            </span>
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left — visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
            aria-hidden="true"
          >
            {/* Main card */}
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
              {/* Orange corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6] opacity-10 blur-3xl rounded-full" />

              <div className="relative">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#3B82F6] to-[#22D3EE] flex items-center justify-center font-display text-white text-3xl mb-6 glow-blue">
                  CT
                </div>

                <h3 className="font-display text-3xl text-white mb-2">CONDÉ TECH</h3>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={14} className="text-[#3B82F6]" />
                  <span className="text-[#A0A0B0] text-sm">Bom Jesus do Itabapoana, RJ</span>
                </div>

                <div className="border-t border-[rgba(255,255,255,0.06)] pt-4 mt-4">
                  <p className="text-[#A0A0B0] text-sm leading-relaxed">
                    Gestão de Social Media para empresas locais. Atendimento próximo, resultado profissional.
                  </p>
                </div>

                {/* Instagram-like stats */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                  {[
                    { label: 'Posts', value: '2k+' },
                    { label: 'Clientes', value: '50+' },
                    { label: 'Anos', value: '2+' },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="font-display text-2xl text-white">{s.value}</p>
                      <p className="text-[#A0A0B0] text-xs">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#3B82F6] text-white rounded-2xl px-5 py-3 shadow-lg">
              <p className="font-display text-lg leading-none">98%</p>
              <p className="text-xs opacity-90">Satisfação</p>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-[#A0A0B0] text-lg leading-relaxed mb-6">
              A Condé Tech nasceu com um objetivo simples: ajudar os empresários de{' '}
              <span className="text-white font-medium">Bom Jesus do Itabapoana e região</span> a
              terem uma presença digital que realmente funciona.
            </p>
            <p className="text-[#A0A0B0] text-lg leading-relaxed mb-6">
              Somos uma empresa local, de verdade. Conhecemos a rotina do empresário daqui — a
              correria do dia a dia, a dificuldade de encontrar profissionais especializados na
              região, e o quanto é difícil dar conta de tudo sozinho.
            </p>
            <p className="text-[#A0A0B0] text-lg leading-relaxed mb-8">
              Por isso criamos planos sob medida, com{' '}
              <span className="text-white font-medium">atendimento humano e próximo</span>, sem
              burocracia. Nossa missão é simples: sua empresa bem representada nas redes, todos os
              dias, com conteúdo que atrai, engaja e converte.
            </p>

            <div className="flex items-center gap-3 glass-card rounded-2xl px-5 py-4 inline-flex">
              <MapPin size={18} className="text-[#3B82F6] shrink-0" aria-hidden="true" />
              <p className="text-white font-medium text-sm">
                Empresa local.{' '}
                <span className="font-italic-serif text-[#22D3EE]">Resultado profissional.</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[rgba(255,255,255,0.06)] glass-card rounded-3xl overflow-hidden">
          {STATS.map((stat, i) => (
            <StatItem key={i} stat={stat} index={i} inView={statsInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
