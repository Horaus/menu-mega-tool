import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = {
    product: [
      { name: t("footer.overview"), path: "/" },
      { name: t("footer.features"), path: "/#features" },
    ],
    legal: [
      { name: t("footer.terms"), path: "/terms" },
      { name: t("footer.privacy"), path: "/privacy" },
    ],
    support: [
      { name: t("footer.getHelp"), path: "/support" },
      { name: t("footer.faq"), path: "/support#faq" },
      { name: t("footer.contact"), path: "/support#contact" },
    ],
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Menu Mega Tool" className="h-8 w-8" />
              <span className="font-semibold text-foreground">Menu Mega Tool</span>
            </Link>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("footer.product")}</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("footer.legal")}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("footer.support")}</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Google Trademark Disclaimer */}
        <div className="border-t border-border pt-8">
          <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto">
            {t("footer.trademark")}
            <br />
            {t("footer.disclaimer")}
          </p>
          <p className="text-xs text-muted-foreground text-center mt-4">
            © {new Date().getFullYear()} Menu Mega Tool. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
