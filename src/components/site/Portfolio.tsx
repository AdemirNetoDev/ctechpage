// @ts-nocheck
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  {
    client: 'Studio Lumière',
    sector: 'Estética & beleza',
    accent: '#3B82F6',
    metric: '+218%',
    metricLabel: 'engajamento',
    posts: 84,
    headline: 'Reposicionamento visual e rotina de stories diários',
  },
  {
    client: 'NorthFit Academia',
    sector: 'Fitness & saúde',
    accent: '#22D3EE',
    metric: '+47',
    metricLabel: 'leads/mês',
    posts: 62,
    headline: 'Captação local via reels e campanhas sazonais',
  },
  {
    client: 'Casa Mont',
    sector: 'Restaurante',
    accent: '#60A5FA',
    metric: '+312%',
    metricLabel: 'alcance',
    posts: 96,
    headline: 'Cardápio em vídeo e identidade fotográfica recorrente',
  },
  {
    client: 'Clínica Bem-Estar',
    sector: 'Saúde',
    accent: '#3B82F6',
    metric: '+128',
    metricLabel: 'agendamentos',
    posts: 72,
    headline: 'Educação em conteúdo e CTA direto via WhatsApp',
  },
]

function ProjectCard({ p, i }: any) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-white/[0.14] transition-all"
    >
      {/* Preview canvas */}
      <div className="relative aspect-[4/3] overflow-hidden border-b border-white/[0.06]">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${p.accent}40, transparent 55%), radial-gradient(circle at 80% 80%, ${p.accent}25, transparent 50%), #0B0C12`,
          }}
        />
        {/* fake grid pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        {/* Floating UI sample */}
        <div className="absolute inset-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono-tech text-[10px] text-white/40 uppercase tracking-wider">
              Case · 2026
            </span>
            <span
              className="font-mono-tech text-[10px] px-2 py-0.5 rounded-full border"
              style={{ color: p.accent, borderColor: `${p.accent}40`, background: `${p.accent}10` }}
            >
              live
            </span>
          </div>

          <div>
            <div className="flex items-end gap-1 mb-3 h-12">
              {[40, 55, 38, 70, 60, 82, 75, 92].map((h, idx) => (
                <motion.span
                  key={idx}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.04, duration: 0.5 }}
                  className="flex-1 rounded-sm origin-bottom"
                  style={{ height: `${h}%`, background: `${p.accent}90` }}
                />
              ))}
            </div>
            <div className="flex items-baseline gap-2">
              <span
                className="font-display text-3xl tracking-[-0.04em]"
                style={{ color: p.accent }}
              >
                {p.metric}
              </span>
              <span className="font-mono-tech text-[10px] text-white/50 uppercase">
                {p.metricLabel}
              </span>
            </div>
          </div>
        </div>

        {/* hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Meta */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <p className="font-mono-tech text-[10px] text-white/40 uppercase tracking-wider">
            {p.sector}
          </p>
          <ArrowUpRight
            size={14}
            className="text-white/30 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
          />
        </div>
        <h3 className="text-white font-semibold text-base mb-1">{p.client}</h3>
        <p className="text-white/50 text-sm leading-relaxed mb-4">{p.headline}</p>
        <div className="flex items-center gap-4 pt-4 border-t border-white/[0.05] font-mono-tech text-[11px]">
          <span className="text-white/40">
            <span className="text-white/80">{p.posts}</span> entregas
          </span>
          <span className="text-white/40">·</span>
          <span className="text-white/40">
            <span className="text-white/80">12</span> meses
          </span>
        </div>
      </div>
    </motion.article>
  )
}

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-28 sm:py-36 overflow-hidden"
      aria-label="Portfólio de projetos"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#3B82F6] opacity-[0.05] blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] mb-5">
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#60A5FA]">
                Portfólio
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl gradient-text tracking-[-0.04em] leading-[1.05]">
              Marcas que cresceram{' '}
              <span className="font-italic-serif text-[#60A5FA]">com a gente</span>.
            </h2>
          </div>
          <p className="text-white/55 text-sm max-w-sm">
            Recortes reais de operação contínua — métricas anonimizadas a pedido dos clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={i} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
