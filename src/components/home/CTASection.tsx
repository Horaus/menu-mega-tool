import { motion } from "framer-motion";
import heroImage from "@/assets/hero-workspace.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl md:rounded-3xl overflow-hidden"
        >
          <img
            src={heroImage}
            alt="Get Menu Mega Tool"
            className="w-full h-[280px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70 flex items-center justify-center">
            <div className="text-center px-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-2 md:mb-4">
                {t("cta.title")}
              </h2>
              <p className="text-sm md:text-base text-primary-foreground/80 mb-6 md:mb-8">
                {t("cta.subtitle")}
              </p>
              {/* CTA button hidden until Google Workspace link is ready */}
              {/* <motion.a
                href="https://workspace.google.com/marketplace"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-card text-foreground px-6 py-3 md:px-8 md:py-4 rounded-full font-medium text-sm md:text-base hover:opacity-90 transition-opacity"
              >
                {t("cta.button")}
              </motion.a> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
