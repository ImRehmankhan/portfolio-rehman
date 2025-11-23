import Head from "next/head";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — Softoria</title>
        <meta name="description" content="Get in touch with Muhammad Rehman — Full stack developer available for freelance and contract work. Send a message or call to discuss your project." />
        <link rel="canonical" href="https://www.softoria.tech/contact" />
      </Head>

      <main className="section min-h-screen">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-10">
            <p className="badge badge--primary text-sm font-semibold mb-2 uppercase tracking-wider text-[var(--primary-foreground)]">Contact</p>
            <h1 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--foreground)" }}>
              Let's talk about your project
            </h1>
            <p className="mt-3 text-md text-[var(--muted-foreground)]">
              Reach out via the form, email or phone. I'm available for freelance, contract, and remote opportunities.<br/> Before contacting, you might want to explore my <Link href="/services" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>services</Link>, view my <Link href="/portfolio" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>portfolio</Link>, read <Link href="/about" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>about me</Link>, or check out my <Link href="/blog" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>blog articles</Link>.
            </p>
          </header>

          <ContactForm />
        </div>
      </main>
    </>
  );
}
