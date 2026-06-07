// @ts-nocheck
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Users, Eye, Sparkles } from 'lucide-react'
import { useCountUp } from '@/hooks/useCountUp'

const METRICS = [
  {
    icon: Users,
    value: 50,
    suffix: '+',
    label: 'Empresas ativas',
    detail: 'Atendidas mensalmente',
  },
  {
    icon: Sparkles,
    value: 2000,
    suffix: '+',
    label: 'Peças entregues',
    detail: 'Posts, reels e stories',
  },
  {
    icon: Eye,
    value: 128,
    suffix: 'k',
    label: 'Alcance médio',
    detail: 'Por cliente / mês',
  },
  {
    icon: TrendingUp,
    value: 42,
    suffix: '%',
    label: 'Crescimento médio',
    detail: 'No 3º mês de operação',
  },
]

function MetricCard({ m, i }: any) {
  const Icon = m.icon
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const v = useCountUp(m.value, 1600 + i * 100, inView)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.035] transition-colors"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="flex items-center justify-between mb-6">
        <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
          <Icon size={16} className="text-[#60A5FA]" aria-hidden="true" />
        </div>
        <span className="font-mono-tech text-[10px] text-white/40 uppercase tracking-wider">
          0{i + 1}
        </span>
      </div>
      <div className="flex items-baseline gap-0.5 mb-2">
        <span className="font-display text-5xl text-white tabular-nums tracking-[-0.04em]">
          {v}
        </span>
        <span className="font-display text-3xl text-[#60A5FA] tracking-[-0.04em]">
          {m.suffix}
        </span>
      </div>
      <p className="text-white font-medium text-sm">{m.label}</p>
      <p className="text-white/40 text-xs mt-1 font-mono-tech">{m.detail}</p>
    </motion.div>
  )
}

export default function Metrics() {
  return (
    <section
      id="metricas"
      className="relative py-28 sm:py-36 overflow-hidden"
      aria-label="Métricas e resultados"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#3B82F6] opacity-[0.07] blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] mb-5">
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#60A5FA]">
              Resultados
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl gradient-text tracking-[-0.04em] leading-[1.05]">
            Números que comprovam{' '}
            <span className="font-italic-serif text-[#60A5FA]">a operação</span>.
          </h2>
          <p className="text-white/60 mt-5 text-base max-w-lg">
            Não trabalhamos no escuro. Cada conta gerida tem métricas, metas e relatórios
            mensais — tratamos social media como um produto de performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {METRICS.map((m, i) => (
            <MetricCard key={i} m={m} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
