import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Overview", path: "/" },
      { name: "Features", path: "/#features" },
    ],
    legal: [
      { name: "Terms", path: "/terms" },
      { name: "Privacy", path: "/privacy" },
    ],
    support: [
      { name: "Get Help", path: "/support" },
      { name: "FAQ", path: "/support#faq" },
      { name: "Contact", path: "/support#contact" },
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
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
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
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
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
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
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
            Google Sheets™ and Google Drive™ are trademarks of Google LLC.
            <br />
            Menu Mega Tool is not affiliated with, endorsed by, or sponsored by Google LLC.
          </p>
          <p className="text-xs text-muted-foreground text-center mt-4">
            © {new Date().getFullYear()} Menu Mega Tool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
