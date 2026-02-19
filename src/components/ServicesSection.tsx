import { motion } from "framer-motion";
import {
  Shield,
  CloudUpload,
  Monitor,
  Printer,
  Wifi,
  Phone,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Infraestrutura de T.I",
    desc: "Projeto, implantação e gestão completa da infraestrutura de tecnologia do seu cartório.",
  },
  {
    icon: CloudUpload,
    title: "Backup em Cloud",
    desc: "Soluções de backup em nuvem para garantir a segurança e recuperação dos dados do seu cartório.",
  },
  {
    icon: Printer,
    title: "Locação de Equipamentos",
    desc: "Locação de impressoras, estações de trabalho e servidores físicos com suporte incluso.",
  },
  {
    icon: Monitor,
    title: "Suporte Especializado",
    desc: "Suporte técnico especializado nos sistemas GECON, Sele e outros sistemas voltados para cartórios.",
  },
  {
    icon: Phone,
    title: "Telefonia",
    desc: "Soluções completas de telefonia corporativa para otimizar a comunicação do seu cartório.",
  },
  {
    icon: Wifi,
    title: "Rede Wi-Fi",
    desc: "Projeto e implantação de redes Wi-Fi corporativas com segurança e alta performance.",
  },
];

const ServicesSection = () => {
  return (
    <section id="solucoes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-secondary mb-2 block">
            Soluções
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            O que oferecemos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-8 hover:glow-teal transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
