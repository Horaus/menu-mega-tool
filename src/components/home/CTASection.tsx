import { motion } from "framer-motion";
import heroImage from "@/assets/hero-workspace.jpg";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <img
            src={heroImage}
            alt="Get Menu Mega Tool"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Try Menu Mega Tool.
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Upload your first file.
              </p>
              <motion.a
                href="https://workspace.google.com/marketplace"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-card text-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Get now
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
