// @ts-nocheck
import { motion } from 'framer-motion'
import { STATS } from '@/lib/site/constants'

export default function Results() {
  return (
    <section id="metricas" className="py-28 relative" aria-labelledby="results-title">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-[#3B82F6] text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
          Resultados
        </span>
        <h2 id="results-title" className="font-display text-5xl sm:text-6xl text-white mb-6">
          Resultados mensuráveis para o seu negócio
        </h2>
        <p className="text-[#A0A0B0] text-lg max-w-2xl mx-auto mb-10">
          Espaços preparados para gráficos, métricas e indicadores — substitua pelos dados reais quando prontos.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="text-3xl font-display text-white">
                {s.value}
                <span className="text-[#A0A0B0] text-sm"> {s.suffix}</span>
              </div>
              <div className="text-sm text-[#A0A0B0] mt-2">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="h-64 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.02)] flex items-center justify-center">
            <span className="text-[#A0A0B0]">Placeholder: Gráfico de crescimento</span>
          </div>
          <div className="h-64 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.02)] flex items-center justify-center">
            <span className="text-[#A0A0B0]">Placeholder: Indicadores e tendências</span>
          </div>
        </div>
      </div>
    </section>
  )
}
