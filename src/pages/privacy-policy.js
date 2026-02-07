import Head from "next/head";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Softoria | Muhammad Rehman Portfolio</title>
        <meta name="description" content="Privacy Policy for Softoria (Muhammad Rehman). Learn how we collect, use and protect your information." />
        <link rel="canonical" href="https://www.softoria.tech/privacy-policy" />
      </Head>

      <main className="section min-h-screen">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
            Privacy Policy
          </h1>

          <p style={{ color: "var(--muted-foreground)" }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mt-6 prose max-w-none" style={{ color: "var(--muted-foreground)" }}>
            <p>
              This Privacy Policy describes how Softoria ("we", "us", or "our") collects, uses, and discloses
              your personal information when you use our website <a href="https://www.softoria.tech">https://www.softoria.tech</a>.
            </p>

            <h3>Information We Collect</h3>
            <p>
              We may collect personal information you provide directly to us, such as name, email address, phone
              number, and any message content you send through our contact form. We may also collect non-personal
              information such as browser type, IP address, and pages visited for analytics and performance purposes.
            </p>

            <h3>How We Use Your Information</h3>
            <p>
              We use the information to respond to inquiries, provide services, improve the website, and for
              communication related to your project. We may also use aggregate or anonymized data for analytics.
            </p>

            <h3>Third-Party Services</h3>
            <p>
              We may use third-party providers (e.g., EmailJS, analytics providers) that may have access to your
              data to perform services on our behalf. These providers are contractually restricted from using your
              data for other purposes.
            </p>

            <h3>Cookies and Tracking</h3>
            <p>
              We may use cookies and similar technologies to collect information about site usage. You can control
              cookie preferences through your browser settings.
            </p>

            <h3>Contact</h3>
            <p>
              If you have questions about this Privacy Policy, contact us at <a href="mailto:rehmanattock30@gmail.com">rehmanattock30@gmail.com</a> or visit our <Link href="/contact" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>contact page</Link>. You may also want to review our <Link href="/terms" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>Terms & Conditions</Link> and <Link href="/disclaimer" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>Disclaimer</Link>.
            </p>

            <p>
              By using this site, you agree to the terms of this Privacy Policy.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
