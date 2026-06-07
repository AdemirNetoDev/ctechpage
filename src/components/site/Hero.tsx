// @ts-nocheck
import { motion } from 'framer-motion'
import { ArrowRight, Zap, TrendingUp, Activity, BarChart3 } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site/constants'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
      aria-label="Seção principal"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 tech-grid" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[#3B82F6] opacity-[0.18] blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#22D3EE] opacity-[0.08] blur-[120px]" />
        {/* Top hairline */}
        <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-8"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#3B82F6]" />
              </span>
              <span className="font-mono-tech text-[11px] tracking-tight">
                Social Media · Performance · Bom Jesus do Itabapoana
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.04em] mb-6"
            >
              <span className="gradient-text">Presença digital</span>
              <br />
              <span className="gradient-text">com performance de </span>
              <span className="font-italic-serif text-[#60A5FA] text-glow">software</span>
              <span className="gradient-text">.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.35}
              className="text-[#9CA3AF] text-lg leading-relaxed mb-10 max-w-xl"
            >
              Gestão completa de Social Media para empresas que querem crescer com
              consistência. Posts, stories e estratégia baseada em dados — entregue
              como um produto, não como um favor.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.5}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-primary-tech inline-flex items-center justify-center gap-2 text-white font-medium px-5 py-3 rounded-lg text-sm"
                aria-label="Começar agora pelo WhatsApp"
              >
                Começar agora
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#servicos"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-ghost-tech inline-flex items-center justify-center gap-2 text-white/80 hover:text-white font-medium px-5 py-3 rounded-lg text-sm"
              >
                Ver serviços
                <span className="font-mono-tech text-[11px] text-white/40">↗</span>
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.65}
              className="flex items-center gap-6 text-xs text-white/40 font-mono-tech"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" />
                <span>+50 empresas ativas</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6] pulse-dot" />
                <span>2.000+ peças entregues</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE] pulse-dot" />
                <span>98% de satisfação</span>
              </div>
            </motion.div>
          </div>

          {/* Right — Analytics dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            aria-hidden="true"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function DashboardMockup() {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute -inset-10 bg-[#3B82F6] opacity-20 blur-[80px] rounded-full" />

      <div className="relative rounded-2xl overflow-hidden bg-[#0B0C12] border border-white/[0.08] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
        {/* Window chrome */}
        <div className="flex items-center justify-between px-4 h-10 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <span className="font-mono-tech text-[10px] text-white/40">
            condetech.app/dashboard
          </span>
          <span className="font-mono-tech text-[10px] text-white/40">v2.4</span>
        </div>

        <div className="p-5">
          {/* Header row */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-[10px] font-mono-tech text-white/40 uppercase tracking-wider">
                Overview · últimos 30 dias
              </p>
              <p className="text-white font-semibold text-sm mt-0.5">Performance</p>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
              <TrendingUp size={11} className="text-emerald-400" />
              <span className="font-mono-tech text-[11px] text-emerald-400 font-medium">
                +42.8%
              </span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[
              { label: 'Alcance', value: '128k', delta: '+18%', icon: Activity },
              { label: 'Engajam.', value: '6.9k', delta: '+24%', icon: Zap },
              { label: 'Leads', value: '142', delta: '+57%', icon: BarChart3 },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.08 }}
                className="rounded-lg bg-white/[0.02] border border-white/[0.05] p-3"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <s.icon size={11} className="text-[#60A5FA]" />
                  <span className="font-mono-tech text-[9px] text-emerald-400">{s.delta}</span>
                </div>
                <p className="text-white font-semibold text-lg leading-none">{s.value}</p>
                <p className="text-[10px] text-white/40 mt-1 font-mono-tech">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Chart */}
          <div className="rounded-lg bg-white/[0.02] border border-white/[0.05] p-4 mb-3">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] text-white/60 font-medium">Crescimento de seguidores</p>
              <span className="font-mono-tech text-[10px] text-white/40">7d</span>
            </div>
            <ChartLine />
          </div>

          {/* Recent activity */}
          <div className="space-y-1.5">
            {[
              { t: 'Post publicado', d: 'Reels · 12:30', ok: true },
              { t: 'Story agendado', d: 'Promoção · 18:00', ok: true },
            ].map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + i * 0.1 }}
                className="flex items-center justify-between rounded-md bg-white/[0.015] border border-white/[0.04] px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[11px] text-white/80">{a.t}</span>
                </div>
                <span className="font-mono-tech text-[10px] text-white/40">{a.d}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <motion.div
        initial={{ opacity: 0, x: 30, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 1.1, type: 'spring', stiffness: 120 }}
        className="absolute -right-4 sm:-right-8 top-20 glass-card rounded-xl px-3.5 py-2.5 shadow-xl"
      >
        <p className="font-mono-tech text-[9px] text-white/40 uppercase tracking-wider mb-0.5">
          ROI · Q4
        </p>
        <p className="text-white font-semibold text-sm">+312%</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 1.3, type: 'spring', stiffness: 120 }}
        className="absolute -left-4 sm:-left-8 bottom-16 glass-card rounded-xl px-3.5 py-2.5 shadow-xl"
      >
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#3B82F6] pulse-dot" />
          <p className="font-mono-tech text-[10px] text-white/60">Ao vivo</p>
        </div>
        <p className="text-white font-semibold text-xs mt-0.5">3 posts agendados</p>
      </motion.div>
    </div>
  )
}

function ChartLine() {
  const points = [38, 32, 45, 40, 55, 48, 62, 58, 70, 65, 80, 78, 92]
  const max = 100
  const w = 280
  const h = 80
  const step = w / (points.length - 1)
  const path = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${i * step} ${h - (p / max) * h}`)
    .join(' ')
  const area = `${path} L ${w} ${h} L 0 ${h} Z`

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-20" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chart-grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* gridlines */}
      {[0.25, 0.5, 0.75].map((g) => (
        <line
          key={g}
          x1="0"
          x2={w}
          y1={h * g}
          y2={h * g}
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
        />
      ))}
      <motion.path
        d={area}
        fill="url(#chart-grad)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      />
      <motion.path
        d={path}
        fill="none"
        stroke="#60A5FA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, delay: 0.7, ease: 'easeOut' }}
      />
      {/* end dot */}
      <motion.circle
        cx={w}
        cy={h - (points[points.length - 1] / max) * h}
        r="3"
        fill="#60A5FA"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      />
    </svg>
  )
}
