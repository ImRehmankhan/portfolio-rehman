import Head from "next/head";
import Link from "next/link";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms & Conditions — Softoria | Muhammad Rehman Services</title>
        <meta name="description" content="Terms and conditions for using Softoria website and services provided by Muhammad Rehman." />
        <link rel="canonical" href="https://www.softoria.tech/terms" />
      </Head>

      <main className="section min-h-screen">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
            Terms and Conditions
          </h1>

          <p style={{ color: "var(--muted-foreground)" }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mt-6 prose max-w-none" style={{ color: "var(--muted-foreground)" }}>
            <h3>Acceptance</h3>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of
              this agreement.
            </p>

            <h3>Use of Site</h3>
            <p>
              You agree to use the site only for lawful purposes and in a way that does not infringe the rights of,
              restrict or inhibit anyone else's use and enjoyment of the site.
            </p>

            <h3>Intellectual Property</h3>
            <p>
              All content on this site, including text, graphics, logos, and images, is the property of Softoria or
              its content suppliers and protected by intellectual property laws.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              In no event shall Softoria be liable for any direct, indirect, incidental, consequential or punitive
              damages arising out of your access or use of the website.
            </p>

            <h3>Contact</h3>
            <p>
              For questions about these terms, contact <a href="mailto:rehmanattock30@gmail.com">rehmanattock30@gmail.com</a> or visit our <Link href="/contact" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>contact page</Link>. Please also review our <Link href="/privacy-policy" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>Privacy Policy</Link> and <Link href="/disclaimer" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>Disclaimer</Link>.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
