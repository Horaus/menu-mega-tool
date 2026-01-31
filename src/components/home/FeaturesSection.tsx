import { motion } from "framer-motion";
import { Upload, Eye, FolderOpen, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Upload,
      title: t("features.upload.title"),
      description: t("features.upload.desc"),
    },
    {
      icon: Eye,
      title: t("features.preview.title"),
      description: t("features.preview.desc"),
    },
    {
      icon: FolderOpen,
      title: t("features.drive.title"),
      description: t("features.drive.desc"),
    },
    {
      icon: Zap,
      title: t("features.workflow.title"),
      description: t("features.workflow.desc"),
    },
  ];

  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-2xl card-shadow hover:card-shadow-hover transition-shadow duration-300"
            >
              <feature.icon className="h-8 w-8 text-foreground mb-4" strokeWidth={1.5} />
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
