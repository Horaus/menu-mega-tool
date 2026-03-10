import { motion } from "framer-motion";
import heroImage from "@/assets/hero-workspace.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="hero-gradient pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-10 px-2">
            {t("hero.subtitle")}
          </p>
          {/* CTA button hidden until Google Workspace link is ready */}
          {/* <motion.a
            href="https://workspace.google.com/marketplace"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 rounded-full font-medium text-base md:text-lg hover:opacity-90 transition-opacity"
          >
            {t("hero.cta")}
          </motion.a> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 md:mt-16 max-w-5xl mx-auto"
        >
          <div className="rounded-xl md:rounded-2xl overflow-hidden card-shadow">
            <img
              src={heroImage}
              alt="Menu Mega Tool™ in action with Google Sheets™"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
