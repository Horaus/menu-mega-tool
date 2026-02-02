import { motion } from "framer-motion";
import { MousePointerClick, Upload, Eye } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    { 
      key: "step1", 
      icon: MousePointerClick,
      iconColor: "text-blue-600"
    },
    { 
      key: "step2", 
      icon: Upload,
      iconColor: "text-green-600"
    },
    { 
      key: "step3", 
      icon: Eye,
      iconColor: "text-purple-600"
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden card-shadow order-2 md:order-1"
          >
            <img
              src={heroImage}
              alt="Menu Mega Tool workflow"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
              {t("howItWorks.title")}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
              {t("howItWorks.desc")}
            </p>

            <div className="space-y-4 md:space-y-5">
              {steps.map((step, index) => (
                <motion.div
                  key={step.key}
                  className="flex items-start gap-3 md:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -2, 0],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    >
                      <step.icon className={`w-5 h-5 md:w-6 md:h-6 ${step.iconColor}`} />
                    </motion.div>
                  </motion.div>
                  <div className="pt-1">
                    <h4 className="font-semibold text-foreground text-sm md:text-base">
                      {t(`howItWorks.${step.key}.title`)}
                    </h4>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      {t(`howItWorks.${step.key}.desc`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
