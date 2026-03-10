import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Mail, MessageCircle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const Support = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t("supportPage.faq.q1"),
      answer: t("supportPage.faq.a1"),
    },
    {
      question: t("supportPage.faq.q2"),
      answer: t("supportPage.faq.a2"),
    },
    {
      question: t("supportPage.faq.q3"),
      answer: t("supportPage.faq.a3"),
    },
    {
      question: t("supportPage.faq.q4"),
      answer: t("supportPage.faq.a4"),
    },
    {
      question: t("supportPage.faq.q5"),
      answer: t("supportPage.faq.a5"),
    },
    {
      question: t("supportPage.faq.q6"),
      answer: t("supportPage.faq.a6"),
    },
  ];

  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-foreground mb-4">{t("supportPage.title")}</h1>
            <p className="text-muted-foreground mb-12">
              {t("supportPage.subtitle")}
            </p>

            {/* Contact Section */}
            <section id="contact" className="mb-16">
              <h2 className="text-2xl font-semibold text-foreground mb-6">{t("supportPage.contact.title")}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-2xl p-6 card-shadow">
                  <Mail className="h-8 w-8 text-foreground mb-4" strokeWidth={1.5} />
                  <h3 className="font-semibold text-foreground mb-2">{t("supportPage.email.title")}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {t("supportPage.email.desc")}
                  </p>
                  <a
                    href="mailto:horaus.minh@gmail.com"
                    className="text-foreground font-medium underline"
                  >
                    horaus.minh@gmail.com
                  </a>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 card-shadow">
                  <MessageCircle className="h-8 w-8 text-foreground mb-4" strokeWidth={1.5} />
                  <h3 className="font-semibold text-foreground mb-2">{t("supportPage.report.title")}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {t("supportPage.report.desc")}
                  </p>
                  <a
                    href="mailto:horaus.minh@gmail.com?subject=Bug Report"
                    className="text-foreground font-medium underline"
                  >
                    {t("supportPage.report.link")}
                  </a>
                </div>
              </div>
            </section>

            {/* How to Get Help */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-foreground mb-6">{t("supportPage.howTo.title")}</h2>
              <div className="bg-secondary/50 rounded-2xl p-6">
                <ol className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-semibold text-foreground">{t("supportPage.howTo.step1.title")}</h4>
                      <p className="text-muted-foreground text-sm">{t("supportPage.howTo.step1.desc")}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-semibold text-foreground">{t("supportPage.howTo.step2.title")}</h4>
                      <p className="text-muted-foreground text-sm">{t("supportPage.howTo.step2.desc")}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-semibold text-foreground">{t("supportPage.howTo.step3.title")}</h4>
                      <p className="text-muted-foreground text-sm">{t("supportPage.howTo.step3.desc")}</p>
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="h-6 w-6 text-foreground" strokeWidth={1.5} />
                <h2 className="text-2xl font-semibold text-foreground">{t("supportPage.faq.title")}</h2>
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
