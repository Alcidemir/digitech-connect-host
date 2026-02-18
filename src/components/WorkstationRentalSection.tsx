import { motion } from "framer-motion";
import { Check, Monitor, Zap } from "lucide-react";

const plans = [
  {
    name: "Estação 1 Monitor",
    desc: "Ideal para tarefas do dia a dia",
    price: "A partir de R$ 130",
    period: "/mês",
    features: [
      "1 Monitor plano",
      "Desktop completo",
      "Teclado e mouse",
      "Suporte técnico incluso",
      "Manutenção preventiva",
    ],
    highlighted: false,
  },
  {
    name: "Estação 2 Monitores",
    desc: "Mais produtividade para seu cartório",
    price: "Sob consulta",
    period: "/mês",
    features: [
      "2 Monitores planos",
      "Desktop completo",
      "Teclado e mouse",
      "Suporte técnico incluso",
      "Manutenção preventiva",
      "Maior produtividade",
    ],
    highlighted: true,
  },
];

const WorkstationRentalSection = () => {
  return (
    <section id="estacoes" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-secondary mb-2 block">
            Estações de Trabalho
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Locação de Estações de Trabalho
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Estações completas com monitores planos para cartórios em todo o Mato Grosso do Sul. Sem investimento inicial, com suporte incluso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
                  : "bg-muted/30 border-border hover:border-secondary/30"
              }`}
            >
              {plan.highlighted && (
                <div className="flex items-center gap-1 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
                  <Zap size={14} />
                  Recomendado
                </div>
              )}
              <div className="flex items-center gap-3 mb-2">
                <Monitor className="text-secondary" size={20} />
                <h3 className="text-xl font-heading font-bold text-foreground">
                  {plan.name}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm mb-5">
                {plan.desc}
              </p>
              <div className="mb-6">
                <span className="text-2xl font-heading font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
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
                    : "border border-border text-foreground hover:bg-muted"
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

export default WorkstationRentalSection;
