import React, { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { CLIENT_LOGOS } from '@/lib/site/constants'

export default function Clients() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
  const autoPlayRef = useRef<number | null>(null)

  useEffect(() => {
    if (!emblaApi) return
    let mounted = true
    const autoplay = () => {
      if (!emblaApi || !mounted) return
      emblaApi.scrollNext()
      autoPlayRef.current = window.setTimeout(autoplay, 2500)
    }
    autoplay()
    return () => {
      mounted = false
      if (autoPlayRef.current) window.clearTimeout(autoPlayRef.current)
    }
  }, [emblaApi])

  return (
    <section id="clientes" className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="font-display text-3xl text-white mb-6 text-center">Clientes</h3>

        <div
          className="overflow-hidden"
          onMouseEnter={() => {
            if (autoPlayRef.current) {
              window.clearTimeout(autoPlayRef.current)
              autoPlayRef.current = null
            }
          }}
          onMouseLeave={() => {
            if (emblaApi && autoPlayRef.current == null) {
              const autoplay = () => {
                if (!emblaApi) return
                emblaApi.scrollNext()
                autoPlayRef.current = window.setTimeout(autoplay, 2500)
              }
              autoplay()
            }
          }}
        >
          <div ref={emblaRef} className="flex items-center gap-6">
            {CLIENT_LOGOS.map((logo) => (
              <div key={logo.id} className="flex items-center justify-center p-4">
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
