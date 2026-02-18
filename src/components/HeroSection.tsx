import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-hero-dark-foreground mb-6 leading-tight"
        >
          Tecnologia que{" "}
          <span className="text-gradient">impulsiona</span>
          <br />
          o seu negócio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-hero-dark-foreground/70 max-w-2xl mx-auto mb-10"
        >
          Consultoria em T.I, infraestrutura, cloud e soluções completas para
          empresas que querem crescer com segurança e performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#solucoes"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:brightness-110 transition text-base"
          >
            Nossas Soluções
            <ArrowRight size={18} />
          </a>
          <a
            href="#servidores"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-hero-dark-foreground/20 text-hero-dark-foreground font-semibold hover:bg-hero-dark-foreground/5 transition text-base"
          >
            Aluguel de Servidores
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
