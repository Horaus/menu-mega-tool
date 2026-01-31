import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Terms = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-foreground mb-8">{t("termsPage.title")}</h1>
            <p className="text-muted-foreground mb-8">
              {t("termsPage.lastUpdated")} {new Date().toLocaleDateString(language === "vi" ? "vi-VN" : "en-US", { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">{t("termsPage.acceptance.title")}</h2>
                <p className="text-muted-foreground">
                  {t("termsPage.acceptance.p1")}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">{t("termsPage.description.title")}</h2>
                <p className="text-muted-foreground">
                  {t("termsPage.description.p1")}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">{t("termsPage.acceptable.title")}</h2>
                <p className="text-muted-foreground mb-4">
                  {t("termsPage.acceptable.intro")}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>{t("termsPage.acceptable.item1")}</li>
                  <li>{t("termsPage.acceptable.item2")}</li>
                  <li>{t("termsPage.acceptable.item3")}</li>
                  <li>{t("termsPage.acceptable.item4")}</li>
                  <li>{t("termsPage.acceptable.item5")}</li>
                  <li>{t("termsPage.acceptable.item6")}</li>
                  <li>{t("termsPage.acceptable.item7")}</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">{t("termsPage.responsibilities.title")}</h2>
                <p className="text-muted-foreground mb-4">
                  {t("termsPage.responsibilities.intro")}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>{t("termsPage.responsibilities.item1")}</li>
                  <li>{t("termsPage.responsibilities.item2")}</li>
                  <li>{t("termsPage.responsibilities.item3")}</li>
                  <li>{t("termsPage.responsibilities.item4")}</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">{t("termsPage.ip.title")}</h2>
                <p className="text-muted-foreground">
                  {t("termsPage.ip.p1")}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">{t("termsPage.warranty.title")}</h2>
                <p className="text-muted-foreground mb-4">
                  {t("termsPage.warranty.intro")}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>{t("termsPage.warranty.item1")}</li>
                  <li>{t("termsPage.warranty.item2")}</li>
                  <li>{t("termsPage.warranty.item3")}</li>
                  <li>{t("termsPage.warranty.item4")}</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  {t("termsPage.warranty.outro")}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">{t("termsPage.liability.title")}</h2>
                <p className="text-muted-foreground">
                  {t("termsPage.liability.p1")}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">{t("termsPage.termination.title")}</h2>
                <p className="text-muted-foreground mb-4">
                  {t("termsPage.termination.intro")}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>{t("termsPage.termination.item1")}</li>
                  <li>{t("termsPage.termination.item2")}</li>
                  <li>{t("termsPage.termination.item3")}</li>
                  <li>{t("termsPage.termination.item4")}</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  {t("termsPage.termination.outro")}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">{t("termsPage.changes.title")}</h2>
                <p className="text-muted-foreground">
                  {t("termsPage.changes.p1")}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">{t("termsPage.law.title")}</h2>
                <p className="text-muted-foreground">
                  {t("termsPage.law.p1")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">{t("termsPage.contact.title")}</h2>
                <p className="text-muted-foreground">
                  {t("termsPage.contact.p1")}{" "}
                  <a href="mailto:support@menumegatool.com" className="text-foreground underline">
                    support@menumegatool.com
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
