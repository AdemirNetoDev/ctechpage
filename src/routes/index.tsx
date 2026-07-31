import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Results from "@/components/site/Results";
import Services from "@/components/site/Services";
import Portfolio from "@/components/site/Portfolio";
import Benefits from "@/components/site/Benefits";
import About from "@/components/site/About";
import Testimonials from "@/components/site/Testimonials";
import FAQ from "@/components/site/FAQ";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import Clients from "@/components/site/Clients";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Condé Tech — Gestão de Social Media em Bom Jesus do Itabapoana" },
      {
        name: "description",
        content:
          "Gestão completa de Social Media para empresas da região: posts, stories e estratégia. A Condé Tech cuida das suas redes enquanto você cuida do seu negócio.",
      },
      { property: "og:title", content: "Condé Tech — Social Media" },
      {
        property: "og:description",
        content:
          "Posts, stories e estratégia para empresas de Bom Jesus do Itabapoana e região.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    document.body.classList.add("site-body");
    return () => document.body.classList.remove("site-body");
  }, []);

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#FF5C00] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-[...]
      >
        Ir para o conteúdo principal
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />

        {/* Ordem solicitada: Serviços → Resultados → Portfólio → Sobre → FAQ */}
        <Services />
        <Results />

        <Portfolio />
        <Benefits />
        <About />
        <Testimonials />
        <Clients />

        <FAQ />
        <CTA />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
