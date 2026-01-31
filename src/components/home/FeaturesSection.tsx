import { motion } from "framer-motion";
import { Upload, Eye, FolderOpen, Zap } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Instant upload",
    description: "Upload files directly from your computer to Google Drive™ and attach them to any cell in Google Sheets™.",
  },
  {
    icon: Eye,
    title: "Sheets preview",
    description: "Preview attached files without leaving Google Sheets™. View images, PDFs, and documents inline.",
  },
  {
    icon: FolderOpen,
    title: "Drive managed",
    description: "All your files stay organized in your Google Drive™. No external storage, no data transfers.",
  },
  {
    icon: Zap,
    title: "Easy workflow",
    description: "Simple, intuitive interface that integrates seamlessly with your existing Google Workspace™ workflow.",
  },
];

const FeaturesSection = () => {
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
