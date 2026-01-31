import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Mail, MessageCircle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I install Menu Mega Tool?",
    answer: "You can install Menu Mega Tool from the Google Workspace™ Marketplace. Simply search for 'Menu Mega Tool' in the marketplace, click 'Install,' and follow the authorization prompts. Once installed, you can access it from the 'Extensions' menu in Google Sheets™.",
  },
  {
    question: "What file types can I upload and preview?",
    answer: "Menu Mega Tool supports a wide variety of file types including images (JPG, PNG, GIF, WebP), documents (PDF, DOC, DOCX), spreadsheets, presentations, and more. Preview functionality is available for most common file formats. All files are stored in your Google Drive™.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, your data remains completely secure. Menu Mega Tool does not store any of your files or data on external servers. All files stay in your Google Drive™, and all spreadsheet data remains in Google Sheets™. We only access the specific files and cells you choose to work with.",
  },
  {
    question: "Can I use Menu Mega Tool with shared spreadsheets?",
    answer: "Yes, Menu Mega Tool works with shared spreadsheets. Each collaborator who wants to use the add-on features will need to install it individually. File access permissions follow your existing Google Drive™ sharing settings.",
  },
  {
    question: "How do I uninstall Menu Mega Tool?",
    answer: "To uninstall, go to Google Sheets™, click on 'Extensions' > 'Add-ons' > 'Manage add-ons,' find Menu Mega Tool, click the three-dot menu, and select 'Uninstall.' You can also revoke access from your Google Account security settings.",
  },
  {
    question: "Is there a limit to how many files I can attach?",
    answer: "Menu Mega Tool does not impose limits on file attachments. However, your Google Drive™ storage quota applies to all uploaded files. Each file is stored in your Drive™, so ensure you have sufficient storage space available.",
  },
];

const Support = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-foreground mb-4">Support</h1>
            <p className="text-muted-foreground mb-12">
              Need help with Menu Mega Tool? We're here to assist you.
            </p>

            {/* Contact Section */}
            <section id="contact" className="mb-16">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Contact Us</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-2xl p-6 card-shadow">
                  <Mail className="h-8 w-8 text-foreground mb-4" strokeWidth={1.5} />
                  <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Send us an email and we'll respond within 24-48 hours.
                  </p>
                  <a
                    href="mailto:support@menumegatool.com"
                    className="text-foreground font-medium underline"
                  >
                    support@menumegatool.com
                  </a>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 card-shadow">
                  <MessageCircle className="h-8 w-8 text-foreground mb-4" strokeWidth={1.5} />
                  <h3 className="font-semibold text-foreground mb-2">Report an Issue</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Found a bug or experiencing technical issues? Let us know.
                  </p>
                  <a
                    href="mailto:support@menumegatool.com?subject=Bug Report"
                    className="text-foreground font-medium underline"
                  >
                    Report a bug
                  </a>
                </div>
              </div>
            </section>

            {/* How to Get Help */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-foreground mb-6">How to Get Help</h2>
              <div className="bg-secondary/50 rounded-2xl p-6">
                <ol className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Check the FAQ</h4>
                      <p className="text-muted-foreground text-sm">Many common questions are answered in our FAQ section below.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Describe your issue clearly</h4>
                      <p className="text-muted-foreground text-sm">Include details like what you were trying to do, any error messages, and your browser/device.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Contact us via email</h4>
                      <p className="text-muted-foreground text-sm">Send your question or issue to support@menumegatool.com and we'll help you promptly.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="h-6 w-6 text-foreground" strokeWidth={1.5} />
                <h2 className="text-2xl font-semibold text-foreground">Frequently Asked Questions</h2>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Support;
