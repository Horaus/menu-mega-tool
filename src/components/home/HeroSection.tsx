import { motion } from "framer-motion";
import heroImage from "@/assets/hero-workspace.jpg";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Menu Mega Tool
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10">
            Google Sheets™ file uploads, previews, and Drive™ sync.
          </p>
          <motion.a
            href="https://workspace.google.com/marketplace"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg hover:opacity-90 transition-opacity"
          >
            Start Now
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden card-shadow">
            <img
              src={heroImage}
              alt="Menu Mega Tool in action with Google Sheets"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
