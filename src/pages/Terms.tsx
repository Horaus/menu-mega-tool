import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By installing or using Menu Mega Tool ("the Add-on"), you agree to be bound by these 
                  Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Add-on.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground">
                  Menu Mega Tool is a Google Workspace™ add-on that enables users to upload, attach, 
                  preview, and manage files directly within Google Sheets™, utilizing Google Drive™ 
                  for file storage. The Add-on operates entirely within the Google Workspace™ ecosystem.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Acceptable Use</h2>
                <p className="text-muted-foreground mb-4">
                  You agree to use Menu Mega Tool only for lawful purposes and in accordance with these Terms. 
                  You agree NOT to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Use the Add-on for any illegal or unauthorized purpose</li>
                  <li>Attempt to reverse engineer, decompile, or disassemble the Add-on</li>
                  <li>Use the Add-on to store or transmit malicious code or files</li>
                  <li>Interfere with or disrupt the integrity or performance of the Add-on</li>
                  <li>Attempt to gain unauthorized access to any systems or networks</li>
                  <li>Use automated scripts or bots to access or interact with the Add-on</li>
                  <li>Violate Google's Terms of Service or Google Workspace™ policies</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. User Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  You are responsible for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Maintaining the security of your Google Account</li>
                  <li>All activities that occur under your account</li>
                  <li>Ensuring you have the right to upload and share any files through the Add-on</li>
                  <li>Complying with all applicable laws and regulations</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  The Add-on, including its code, design, and functionality, is owned by Menu Mega Tool 
                  and is protected by applicable intellectual property laws. You are granted a limited, 
                  non-exclusive, non-transferable license to use the Add-on in accordance with these Terms.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground mb-4">
                  THE ADD-ON IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
                  EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Implied warranties of merchantability</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Non-infringement</li>
                  <li>Accuracy, reliability, or completeness of content</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We do not warrant that the Add-on will be uninterrupted, error-free, or free of 
                  viruses or other harmful components.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, MENU MEGA TOOL SHALL NOT BE LIABLE FOR ANY 
                  INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF 
                  PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE ADD-ON, 
                  REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE OR WHETHER WE WERE ADVISED OF 
                  THE POSSIBILITY OF SUCH DAMAGES.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Termination</h2>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to terminate or suspend your access to the Add-on immediately, 
                  without prior notice or liability, for any reason, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Breach of these Terms</li>
                  <li>Violation of applicable laws</li>
                  <li>Conduct that we determine to be harmful to other users or the Add-on</li>
                  <li>Abuse of the service or its features</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Upon termination, your right to use the Add-on will immediately cease.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms at any time. Changes will be effective 
                  immediately upon posting. Your continued use of the Add-on after any changes indicates 
                  your acceptance of the modified Terms.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with applicable laws, 
                  without regard to conflicts of law principles. Any disputes arising from these Terms 
                  or your use of the Add-on shall be resolved through good faith negotiation between 
                  the parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms, please contact us at:{" "}
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
