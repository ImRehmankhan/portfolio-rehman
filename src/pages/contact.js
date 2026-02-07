import Head from "next/head";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Muhammad Rehman — Full-Stack Developer | Softoria</title>
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
          
          {/* Why Choose Me Section */}
          <div className="max-w-4xl mx-auto mb-12 bg-[var(--surface)] p-8 rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center" style={{ color: "var(--foreground)" }}>
              Why Work With Me?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold" style={{ color: "var(--primary)" }}>✓ 2+ Years of Experience</h3>
                <p className="text-[var(--muted-foreground)]">
                  I've successfully delivered 15+ projects for clients worldwide, specializing in React, Next.js, Node.js, and React Native development. From startups to established businesses, I bring proven expertise to every project.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold" style={{ color: "var(--primary)" }}>✓ Full-Stack Expertise</h3>
                <p className="text-[var(--muted-foreground)]">
                  Whether you need a responsive website, mobile app, or complete web application, I handle both frontend and backend development. This means faster delivery, better integration, and consistent quality throughout your project.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold" style={{ color: "var(--primary)" }}>✓ Modern Technologies</h3>
                <p className="text-[var(--muted-foreground)]">
                  I use cutting-edge technologies like React.js for interactive UIs, Next.js for SEO-optimized websites, Node.js for scalable backends, and React Native for cross-platform mobile apps. Your project will be built with the latest industry standards.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold" style={{ color: "var(--primary)" }}>✓ Clear Communication</h3>
                <p className="text-[var(--muted-foreground)]">
                  I believe in transparent communication throughout the development process. You'll receive regular updates, clear explanations of technical decisions, and honest timelines. I'm available for calls, emails, and video meetings to ensure we're always aligned.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold" style={{ color: "var(--primary)" }}>✓ Performance-Focused</h3>
                <p className="text-[var(--muted-foreground)]">
                  Fast websites rank better on Google and convert more visitors into customers. I optimize every project for speed, achieving 90+ PageSpeed scores. Your users will enjoy smooth, responsive experiences on all devices.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold" style={{ color: "var(--primary)" }}>✓ SEO & Best Practices</h3>
                <p className="text-[var(--muted-foreground)]">
                  Every website I build follows SEO best practices, accessibility standards, and modern web development principles. I write clean, maintainable code that's easy to update and scale as your business grows.
                </p>
              </div>
            </div>
          </div>

          {/* Services Quick Overview */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center" style={{ color: "var(--foreground)" }}>
              What I Can Help You With
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[var(--surface)] p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--primary)" }}>Web Development</h3>
                <p className="text-[var(--muted-foreground)] text-sm">
                  Custom websites, e-commerce platforms, business websites, landing pages, and progressive web apps built with React.js and Next.js.
                </p>
              </div>
              <div className="bg-[var(--surface)] p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--primary)" }}>Mobile Apps</h3>
                <p className="text-[var(--muted-foreground)] text-sm">
                  Cross-platform mobile applications for iOS and Android using React Native. One codebase, native performance on both platforms.
                </p>
              </div>
              <div className="bg-[var(--surface)] p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--primary)" }}>API Development</h3>
                <p className="text-[var(--muted-foreground)] text-sm">
                  RESTful APIs, backend systems, database design, authentication, and third-party integrations using Node.js and Express.js.
                </p>
              </div>
            </div>
            <p className="text-center mt-6 text-[var(--muted-foreground)]">
              Looking for detailed information? Visit my <Link href="/services" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>services page</Link> to see complete service descriptions, technologies, pricing, and process details.
            </p>
          </div>

          <ContactForm />
        </div>
      </main>
    </>
  );
}
