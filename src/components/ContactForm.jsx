import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { Mail, Clock, MapPin, Phone, Send, Linkedin, Github } from "lucide-react";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const form = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      await emailjs.sendForm(
        "service_ihmet6a",
        "template_rgbjc2f",
        form.current,
        {
          publicKey: "ut_bCbFlGIerqe8Ws",
        }
      );
      setMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({ fullName: "", email: "", subject: "", message: "" });
      if (form.current) form.current.reset();
    } catch (error) {
      console.error("FAILED...", error);
      setMessage("Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    
        

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl  h-full" style={{ backgroundColor: "var(--surface)" }}>
            <h4 className="text-2xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
              Send me a message
            </h4>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block mb-2 font-medium" style={{ color: "var(--foreground)" }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "var(--input)",
                    color: "var(--foreground)",
                    border: "1px solid var(--border)",
                  }}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium" style={{ color: "var(--foreground)" }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "var(--input)",
                    color: "var(--foreground)",
                    border: "1px solid var(--border)",
                  }}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium" style={{ color: "var(--foreground)" }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "var(--input)",
                    color: "var(--foreground)",
                    border: "1px solid var(--border)",
                  }}
                />
              </div>
              <div>
                <label className="block mb-2 font-medium" style={{ color: "var(--foreground)" }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project, timeline, and budget..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "var(--input)",
                    color: "var(--foreground)",
                    border: "1px solid var(--border)",
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                aria-busy={isLoading}
                className="w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 disabled:opacity-60"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                <Send className="w-5 h-5" />
                <span>{isLoading ? "Sending..." : "Send Message"}</span>
              </button>
              {message && (
                <p className="mt-2 text-center text-sm" style={{ color: "var(--muted-foreground)" }}>{message}</p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            {/* Contact Details Box */}
            <div className="p-8 rounded-2xl flex-1" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
              <h4 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                Get in Touch
              </h4>

              <div className="space-y-2">
                {[
                  {
                    title: "Location",
                    info: "Islamabad, Pakistan",
                    subInfo: "Available for Remote Work",
                    Icon: MapPin,
                  },
                  {
                    title: "Phone",
                    info: "+92-3425221720",
                    subInfo: "Mon to Fri 9am to 6pm",
                    Icon: Phone,
                  },
                  {
                    title: "Email",
                    info: "rehmanattock30@gmail.com",
                    subInfo: "Send me your query anytime!",
                    Icon: Mail,
                  },
                  {
                    title: "Response Time",
                    info: "Within 24 Hours",
                    subInfo: "Quick & Professional Response",
                    Icon: Clock,
                  },
                ].map((contact, index) => (
                  <div key={index} className="flex items-start gap-4 pb-2 " style={{ borderColor: "var(--border)" }}>
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--primary)" }}>
                      <contact.Icon className="w-6 h-6" style={{ color: "var(--primary-foreground)" }} />
                    </div>
                    <div>
                      <h5 className="font-semibold" style={{ color: "var(--foreground)" }}>
                        {contact.title}
                      </h5>
                      <p className="text-md" style={{ color: "var(--primary)" }}>
                        {contact.info}
                      </p>
                      <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                        {contact.subInfo}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="p-3 rounded-2xl text-center" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
                  <h5 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                    Connect With Me
                  </h5>
                  <p className="mb-6 text-sm" style={{ color: "var(--muted-foreground)" }}>
                    Follow me on social media for updates and insights
                  </p>
                  <div className="flex  justify-center gap-2">
                    {[
                      { name: "LinkedIn", Icon: Linkedin, href: "https://www.linkedin.com/in/rehmankhan301b/" },
                      { name: "GitHub", Icon: Github, href: "https://github.com/ImRehmankhan" },
                      { name: "Facebook", Icon: null, href: "https://web.facebook.com/rehman.khan.246606" },
                    ].map((social) => (
                      <a key={social.name} href={social.href} className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ backgroundColor: "var(--primary)" }} title={social.name} aria-label={social.name} target="_blank" rel="noopener noreferrer">
                        {social.Icon ? (
                          <social.Icon className="w-4 h-4" style={{ color: "var(--primary-foreground)" }} />
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary-foreground)" }}>
                            <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z" />
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mt-8 w-full">
                  <div className="bg-[var(--background)] p-4 rounded-lg w-full" style={{ border: "1px solid var(--border)" }}>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-md flex items-center justify-center" style={{ backgroundColor: "var(--primary)" }}>
                          <Phone className="w-5 h-5" style={{ color: "var(--primary-foreground)" }} />
                        </div>
                      </div>

                      <div className="flex-1 text-left">
                        <h2 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
                          Prefer to call?
                        </h2>
                        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                          Available Mon–Fri • Quick response
                        </p>
                      </div>

                      <a href="tel:+923425221720" aria-label="Call Now" className="mt-3 sm:mt-0 sm:ml-4 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md font-semibold w-full sm:w-auto" style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}>
                        <Phone className="w-4 h-4" />
                        <span>Call Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Box */}
          </div>
        </div>
      
  );
};

export default ContactForm;
