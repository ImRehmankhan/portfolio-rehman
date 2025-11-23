import Link from "next/link";
import { Linkedin, Github, Download, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Portfolio", path: "/portfolio" },
      { name: "Contact", path: "/contact" },
      { name: "Blog", path: "/blog" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms", path: "/terms" },
      { name: "Disclaimer", path: "/disclaimer" },
    ],
    services: [
      { name: "Full Stack Development", path: "/services#fullstack" },
      { name: "React Native Apps", path: "/services#mobile" },
      { name: "Frontend Development", path: "/services#frontend" },
      { name: "Backend APIs", path: "/services#backend" },
      { name: "UI/UX Implementation", path: "/services#uiux" },
    ],
    social: [
      { name: "LinkedIn", Icon: Linkedin, href: "https://www.linkedin.com/in/rehmankhan301b/" },
      { name: "GitHub", Icon: Github, href: "https://github.com/ImRehmankhan" },
      { name: "Facebook", Icon: null, href: "https://web.facebook.com/rehman.khan.246606" },
    ],
  };
  return (
    <footer
      className="pt-12 px-4 pb-4 border-t"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <img src="https://res.cloudinary.com/dzc11dpii/image/upload/v1763179527/site-logo_cmmgdi.png" alt="Logo" width="120" />
            </Link>

            <p className="text-md leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              Passionate React.js / Next.js & React Native developer creating exceptional digital experiences. Let's build something amazing together.
            </p>
            <div className="mt-4 flex justify-start gap-4">
              {footerLinks.social.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ backgroundColor: "var(--primary)" }} title={social.name} aria-label={social.name}>
                  {social.Icon ? (
                    <social.Icon className="w-4 h-4" style={{ color: "var(--primary-foreground)" }} />
                  ) : (
                    /* Inline Facebook SVG when Icon not available */
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary-foreground)" }}>
                      <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-2xl" style={{ color: "var(--foreground)" }}>
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-md transition-all text-[var(--muted-foreground)] hover:translate-x-1 transition-transform hover:text-[var(--primary)] duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-2xl" style={{ color: "var(--foreground)" }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.path} className="">
                  <Link href={link.path} className=" text-md transition-all text-[var(--muted-foreground)] hover:translate-x-1 transition-transform hover:text-[var(--primary)] duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-bold mb-4 text-2xl" style={{ color: "var(--foreground)" }}>
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm" style={{ color: "var(--muted-foreground)" }}>
              <li className="flex items-start gap-2">
                <span className="p-2 rounded-md flex-shrink-0 bg-gradient">
                  <MapPin className="w-4 h-4" style={{ color: "var(--primary-foreground)" }} />
                </span>

                <span>Islamabad, Pakistan</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="p-2 rounded-md flex-shrink-0 bg-gradient">
                  <Phone className="w-4 h-4" style={{ color: "var(--primary-foreground)" }} />
                </span>
                <span>+92-3425221720</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="p-2 rounded-md flex-shrink-0 bg-gradient">
                  <Mail className="w-4 h-4" style={{ color: "var(--primary-foreground)" }} />
                </span>
                <span className="break-all">rehmanattock30@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-4 p-8 rounded-2xl flex flex-col items-center text-center" style={{ backgroundColor: "var(--background)", border: "1px solid var(--border)" }}>
          <h4 className="text-3xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
            Ready to Start Your Project?
          </h4>
          <p className="mb-6 max-w-2xl" style={{ color: "var(--muted-foreground)" }}>
            Let's discuss your ideas and create something amazing together.
            <br /> I'm always excited to work on new challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
            <Link href="/contact" className="btn-primary w-full sm:w-auto justify-center" aria-label="Start a Project" style={{ padding: "0.75rem 1.25rem", borderRadius: "0.75rem", fontWeight: 600 }}>
              <Mail className="w-4 h-4" />
              <span>Let's Talk</span>
            </Link>
            <a href="/Resume_Muhammad_Rehman.pdf" target="_blank" rel="noopener noreferrer" className="footer-cta-secondary inline-flex items-center gap-2 w-full sm:w-auto justify-center" aria-label="Download CV" style={{ padding: "0.75rem 1.25rem", borderRadius: "0.75rem", fontWeight: 600 }}>
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Social Media */}

        {/* Bottom Bar */}
        <div className="mt-12 pt-4 border-t text-center" style={{ borderColor: "var(--border)" }}>
          <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            © {currentYear} Muhammad Rehman. All rights reserved. | Made with ❤️ by Muhammad Rehman
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer-link:hover {
          color: var(--primary);
          transform: translateX(4px);
        }

        .social-icon:hover {
          background-color: var(--primary) !important;
          color: var(--primary-foreground) !important;
        }
        .footer-cta-primary {
          background-color: var(--primary);
          color: var(--primary-foreground);
          border: 1px solid transparent;
          transition: transform 160ms ease, filter 160ms ease;
        }
        .footer-cta-primary:hover {
          transform: translateY(-3px);
          filter: brightness(0.95);
        }
        .footer-cta-secondary {
          background-color: transparent;
          color: var(--foreground);
          border: 1px solid var(--border);
          transition: transform 160ms ease, background-color 160ms ease;
        }
        .footer-cta-secondary:hover {
          transform: translateY(-3px);
          background-color: var(--surface);
        }
      `}</style>
    </footer>
  );
}
