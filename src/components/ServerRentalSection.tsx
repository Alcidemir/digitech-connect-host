import { motion } from "framer-motion";
import { Check, Server, Zap } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    desc: "Para cartórios de menor porte",
    price: "Sob consulta",
    features: [
      "Processador Intel Pentium",
      "4 GB RAM",
      "HD SATA 500 GB",
      "Windows ou Linux",
      "Suporte por e-mail",
      "Uptime 99.5%",
    ],
    highlighted: false,
  },
  {
    name: "Profissional",
    desc: "Para cartórios com alta demanda",
    price: "Sob consulta",
    features: [
      "Processador Intel Xeon",
      "8 GB RAM",
      "SSD 480 GB",
      "Windows Server ou Linux",
      "Suporte prioritário",
      "Backup diário",
      "Uptime 99.9%",
    ],
    highlighted: true,
  },
  {
    name: "Avançado",
    desc: "Para cartórios com múltiplas unidades",
    price: "Sob consulta",
    features: [
      "Processador Intel Xeon (multi-core)",
      "16+ GB RAM",
      "SSD 960 GB + HD SATA backup",
      "Windows Server ou Linux",
      "Suporte 24/7",
      "Backup em tempo real",
      "IP dedicado",
      "Uptime 99.99%",
    ],
    highlighted: false,
  },
];

const ServerRentalSection = () => {
  return (
    <section id="servidores" className="py-24 bg-hero-dark relative overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-glow/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-secondary mb-2 block">
            Servidores
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-hero-dark-foreground">
            Locação de Servidores Físicos
          </h2>
          <p className="text-hero-dark-foreground/60 mt-4 max-w-xl mx-auto">
            Servidores físicos dedicados para cartórios em todo o Mato Grosso do Sul. Hardware robusto com processadores Intel Xeon e Pentium, armazenamento SSD e SATA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`rounded-xl p-8 border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-secondary/10 border-secondary/40 glow-teal scale-[1.02]"
                  : "bg-hero-dark-foreground/5 border-hero-dark-foreground/10 hover:border-secondary/30"
              }`}
            >
              {plan.highlighted && (
                <div className="flex items-center gap-1 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
                  <Zap size={14} />
                  Mais popular
                </div>
              )}
              <div className="flex items-center gap-3 mb-2">
                <Server className="text-secondary" size={20} />
                <h3 className="text-xl font-heading font-bold text-hero-dark-foreground">
                  {plan.name}
                </h3>
              </div>
              <p className="text-hero-dark-foreground/50 text-sm mb-5">
                {plan.desc}
              </p>
              <div className="text-2xl font-heading font-bold text-hero-dark-foreground mb-6">
                {plan.price}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-hero-dark-foreground/70"
                  >
                    <Check size={16} className="text-secondary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contato"
                className={`block text-center py-3 rounded-lg font-semibold text-sm transition ${
                  plan.highlighted
                    ? "bg-secondary text-secondary-foreground hover:brightness-110"
                    : "border border-hero-dark-foreground/20 text-hero-dark-foreground hover:bg-hero-dark-foreground/5"
                }`}
              >
                Solicitar Proposta
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerRentalSection;
