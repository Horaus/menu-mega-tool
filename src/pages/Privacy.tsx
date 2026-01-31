import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Privacy = () => {
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
            <h1 className="text-4xl font-bold text-foreground mb-8">{t("privacyPage.title")}</h1>
            <p className="text-muted-foreground mb-8">
              {t("privacyPage.lastUpdated")} {new Date().toLocaleDateString(language === "vi" ? "vi-VN" : "en-US", { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacyPage.intro.title")}</h2>
                <p className="text-muted-foreground mb-4">
                  {t("privacyPage.intro.p1")}
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">{t("privacyPage.intro.p2")}</strong>
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacyPage.access.title")}</h2>
                <p className="text-muted-foreground mb-4">
                  {t("privacyPage.access.intro")}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong className="text-foreground">{t("privacyPage.access.sheets")}</strong> {t("privacyPage.access.sheetsDesc")}</li>
                  <li><strong className="text-foreground">{t("privacyPage.access.drive")}</strong> {t("privacyPage.access.driveDesc")}</li>
                  <li><strong className="text-foreground">{t("privacyPage.access.account")}</strong> {t("privacyPage.access.accountDesc")}</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacyPage.use.title")}</h2>
                <p className="text-muted-foreground mb-4">
                  {t("privacyPage.use.intro")}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>{t("privacyPage.use.item1")}</li>
                  <li>{t("privacyPage.use.item2")}</li>
                  <li>{t("privacyPage.use.item3")}</li>
                  <li>{t("privacyPage.use.item4")}</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacyPage.storage.title")}</h2>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">{t("privacyPage.storage.p1")}</strong> {t("privacyPage.storage.p1Cont")}
                </p>
                <p className="text-muted-foreground">
                  {t("privacyPage.storage.p2")}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacyPage.sharing.title")}</h2>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">{t("privacyPage.sharing.p1")}</strong>
                </p>
                <p className="text-muted-foreground">
                  {t("privacyPage.sharing.p2")}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacyPage.rights.title")}</h2>
                <p className="text-muted-foreground mb-4">
                  {t("privacyPage.rights.intro")}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>{t("privacyPage.rights.item1")}</li>
                  <li>{t("privacyPage.rights.item2")}</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  {t("privacyPage.rights.outro")}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacyPage.changes.title")}</h2>
                <p className="text-muted-foreground">
                  {t("privacyPage.changes.p1")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacyPage.contact.title")}</h2>
                <p className="text-muted-foreground">
                  {t("privacyPage.contact.p1")}{" "}
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

export default Privacy;
