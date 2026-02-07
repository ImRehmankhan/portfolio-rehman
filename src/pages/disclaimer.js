import Head from "next/head";
import Link from "next/link";

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Legal Disclaimer — Softoria | Muhammad Rehman Portfolio</title>
        <meta 
          name="description" 
          content="Disclaimer for Softoria website. Information about accuracy, warranties, and liability regarding content and services provided by Muhammad Rehman." 
        />
        <link rel="canonical" href="https://www.softoria.tech/disclaimer" />
      </Head>

      <main className="section min-h-screen">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
            Disclaimer
          </h1>

          <p style={{ color: "var(--muted-foreground)" }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mt-6 prose max-w-none space-y-6" style={{ color: "var(--muted-foreground)" }}>
            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                General Information
              </h2>
              <p>
                The information provided by Softoria (Muhammad Rehman) on this website is for general informational 
                purposes only. All information on the site is provided in good faith; however, we make no representation 
                or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, 
                availability, or completeness of any information on the site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                Professional Disclaimer
              </h2>
              <p>
                The content on this website is provided for general information purposes and should not be considered 
                professional advice. While I strive to provide accurate and up-to-date information about web development, 
                mobile development, and related technologies, technology is constantly evolving. Before making any decisions 
                based on information provided on this site, you should consult with qualified professionals.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                External Links Disclaimer
              </h2>
              <p>
                This website may contain links to external websites that are not provided or maintained by Softoria. 
                Please note that I do not guarantee the accuracy, relevance, timeliness, or completeness of any information 
                on these external websites. The inclusion of any links does not necessarily imply a recommendation or 
                endorsement of the views expressed within them.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                No Warranties
              </h2>
              <p>
                Under no circumstances shall Softoria or Muhammad Rehman be liable for any loss or damage including, 
                without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising 
                from loss of data or profits arising out of, or in connection with, the use of this website.
              </p>
              <p className="mt-3">
                The services, information, and materials on this website are provided "as is" without any warranties of 
                any kind, either express or implied. This includes, but is not limited to, warranties of merchantability, 
                fitness for a particular purpose, or non-infringement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                Technical Accuracy
              </h2>
              <p>
                While every effort is made to keep the information on this website accurate and up to date, the field of 
                web and mobile development is constantly evolving. Technologies, frameworks, best practices, and industry 
                standards change regularly. Information that was accurate at the time of writing may become outdated. 
                I recommend verifying critical information from multiple sources before making important decisions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                Service Disclaimer
              </h2>
              <p>
                Project timelines, deliverables, and pricing mentioned on this website are general estimates and may vary 
                based on specific project requirements, scope, and complexity. Final terms will be agreed upon through 
                direct communication and formal agreements. For detailed information about my services, please visit the <Link href="/services" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>services page</Link>. Services are subject to availability, and specific requirements 
                will be discussed during the consultation phase via our <Link href="/contact" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>contact form</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                Portfolio and Projects
              </h2>
              <p>
                Project examples shown in the portfolio section represent work completed at specific points in time. 
                Technologies, approaches, and requirements may differ for new projects. Past project success does not 
                guarantee similar results for future projects as each project has unique requirements and challenges.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by applicable law, Softoria and Muhammad Rehman shall not be liable for 
                any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
                whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses 
                resulting from:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your use or inability to use the website</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>Any interruption or cessation of transmission to or from the website</li>
                <li>Any bugs, viruses, or other harmful code that may be transmitted through the website</li>
                <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the website</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                Blog and Articles Disclaimer
              </h2>
              <p>
                Blog posts, tutorials, and articles published on this website represent personal opinions and experiences. 
                While I strive for accuracy, the information is provided for educational and informational purposes only. 
                Readers should independently verify any information before implementing solutions in production environments. 
                Code examples are provided as demonstrations and may require modification for specific use cases.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                Updates and Changes
              </h2>
              <p>
                I reserve the right to modify, update, or remove any content on this website at any time without prior 
                notice. The disclaimer may also be updated periodically to reflect changes in practices or legal requirements. 
                Continued use of the website after any such changes constitutes acceptance of the updated disclaimer.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                Fair Use Disclaimer
              </h2>
              <p>
                This website may contain copyrighted material, the use of which has not always been specifically authorized 
                by the copyright owner. Such material is made available for educational purposes, to advance understanding 
                of technical subjects. This constitutes fair use under relevant copyright laws. If you wish to use copyrighted 
                material from this site for purposes that go beyond fair use, you must obtain permission from the copyright owner.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                Testimonials Disclaimer
              </h2>
              <p>
                Testimonials and reviews on this website represent individual experiences and opinions. Results may vary 
                based on individual circumstances, project requirements, and other factors. Testimonials are not intended 
                as guarantees of specific results for future clients.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                Contact Information Disclaimer
              </h2>
              <p>
                Contact information provided on this website is for legitimate business inquiries only. Any use of this 
                information for unsolicited advertising, spam, or other unauthorized purposes is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                Consent
              </h2>
              <p>
                By using this website, you hereby consent to this disclaimer and agree to its terms. If you do not agree 
                with any part of this disclaimer, please do not use this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                Contact Us
              </h2>
              <p>
                If you have any questions or concerns about this disclaimer, please contact us at{" "}
                <a 
                  href="mailto:rehmanattock30@gmail.com"
                  className="font-semibold hover:underline"
                  style={{ color: "var(--primary)" }}
                >
                  rehmanattock30@gmail.com
                </a> or visit our <Link href="/contact" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>contact page</Link>. You may also review our <Link href="/terms" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>Terms & Conditions</Link> and <Link href="/privacy-policy" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>Privacy Policy</Link>.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
