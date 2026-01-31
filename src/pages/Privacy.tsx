import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground mb-4">
                  Menu Mega Tool ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we handle your information when you use our 
                  Google Workspace™ add-on.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Menu Mega Tool only accesses user data to provide its core functionality 
                  and complies with Google API Services User Data Policy.</strong>
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">What Data We Access</h2>
                <p className="text-muted-foreground mb-4">
                  To provide our services, Menu Mega Tool accesses the following data:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong className="text-foreground">Google Sheets™ data:</strong> The specific spreadsheet and cells where you choose to attach files.</li>
                  <li><strong className="text-foreground">Google Drive™ files:</strong> Only the files you explicitly select to upload, attach, or preview.</li>
                  <li><strong className="text-foreground">Basic account information:</strong> Your email address to identify your account within the add-on.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Data</h2>
                <p className="text-muted-foreground mb-4">
                  We use the accessed data solely to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Upload files to your Google Drive™ on your behalf</li>
                  <li>Attach file references to cells in Google Sheets™</li>
                  <li>Display previews of attached files within Google Sheets™</li>
                  <li>Enable file management (viewing, replacing, downloading) within the add-on interface</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Storage & Security</h2>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">We do NOT store your data on external servers.</strong> All your files remain 
                  in your Google Drive™, and all spreadsheet data stays in Google Sheets™. Menu Mega Tool 
                  operates entirely within the Google Workspace™ ecosystem.
                </p>
                <p className="text-muted-foreground">
                  We do not maintain our own databases of user files or personal data. Any processing 
                  happens in real-time during your active use of the add-on.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">We do NOT sell, share, or transfer your data to third parties.</strong>
                </p>
                <p className="text-muted-foreground">
                  Your data is accessed only to provide the core functionality of Menu Mega Tool. 
                  We do not share your information with advertisers, data brokers, or any other 
                  external entities.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You can revoke Menu Mega Tool's access to your data at any time by:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Uninstalling the add-on from Google Sheets™</li>
                  <li>Revoking access through your Google Account security settings</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Since we don't store your data externally, revoking access immediately stops 
                  all data processing.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify users of 
                  any material changes by updating the "Last updated" date at the top of this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us at:{" "}
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
