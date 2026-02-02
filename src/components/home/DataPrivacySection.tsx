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
    <section className="py-12 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            {t("privacy.title")}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground px-2">
            {t("privacy.desc")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {privacyPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-5 md:p-8 rounded-xl md:rounded-2xl card-shadow text-center"
            >
              <point.icon className="h-8 w-8 md:h-10 md:w-10 text-foreground mx-auto mb-3 md:mb-4" strokeWidth={1.5} />
              <h3 className="font-semibold text-foreground text-base md:text-lg mb-1 md:mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataPrivacySection;
