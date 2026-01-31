import { motion } from "framer-motion";
import { Shield, Lock, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DataPrivacySection = () => {
  const { t } = useLanguage();

  const privacyPoints = [
    {
      icon: Shield,
      title: t("privacy.yours.title"),
      description: t("privacy.yours.desc"),
    },
    {
      icon: Lock,
      title: t("privacy.noSell.title"),
      description: t("privacy.noSell.desc"),
    },
    {
      icon: Eye,
      title: t("privacy.minimal.title"),
      description: t("privacy.minimal.desc"),
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("privacy.title")}
          </h2>
          <p className="text-muted-foreground">
            {t("privacy.desc")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {privacyPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl card-shadow text-center"
            >
              <point.icon className="h-10 w-10 text-foreground mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-semibold text-foreground text-lg mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataPrivacySection;
