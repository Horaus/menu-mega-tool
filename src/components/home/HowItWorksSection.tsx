import { motion } from "framer-motion";
import heroImage from "@/assets/hero-workspace.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorksSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden card-shadow"
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
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("howItWorks.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("howItWorks.desc")}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t("howItWorks.step1.title")}</h4>
                  <p className="text-muted-foreground text-sm">{t("howItWorks.step1.desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t("howItWorks.step2.title")}</h4>
                  <p className="text-muted-foreground text-sm">{t("howItWorks.step2.desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t("howItWorks.step3.title")}</h4>
                  <p className="text-muted-foreground text-sm">{t("howItWorks.step3.desc")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
