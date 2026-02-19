import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const clients = [
  "Porto Murtinho",
  "Jardim",
  "Guia Lopes da Laguna",
  "Nioaque",
  "Maracaju",
  "Dourados",
  "Três Lagoas",
  "Aparecida do Taboado",
];

const ClientsSection = () => {
  return (
    <section id="clientes" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-secondary mb-2 block">
            Clientes
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Cartórios que confiam na Digitech
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Atendemos cartórios em diversas cidades do Mato Grosso do Sul com excelência e dedicação.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:glow-teal transition-all duration-300"
            >
              <MapPin className="text-secondary" size={24} />
              <span className="text-sm font-medium text-foreground text-center">
                {client} - MS
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
