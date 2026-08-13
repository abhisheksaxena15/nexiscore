import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Nexiscore" },
      { name: "description", content: "Get in touch with the Nexiscore support team for order queries, returns, and general enquiries." },
      { property: "og:title", content: "Contact Us — Nexiscore" },
    ],
  }),
  component: ContactPage,
});

/*──────────────────────────────────────────────────────────────
  CONFIGURATION — Replace these placeholders with real values
──────────────────────────────────────────────────────────────*/
const CONTACT_CONFIG = {
  email: "support@nexiscore.com",           // ← Replace with actual support email
  phone: "+91-XXXXXXXXXX",                  // ← Replace with actual phone number
  address: "Mumbai, Maharashtra, India",    // ← Replace with actual business address
  workingHours: "Mon – Sat, 10:00 AM – 7:00 PM IST",
};

type FormState = "idle" | "submitting" | "success" | "error";

function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderId: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(): boolean {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.phone.trim() && !/^[+]?[\d\s-]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validate()) return;

    setFormState("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormState("success");
      setFormData({ name: "", email: "", phone: "", orderId: "", subject: "", message: "" });
    }, 1500);
  }

  return (
    <div>
      {/* Page Header */}
      <section className="border-b border-ink/10 bg-ink text-bone">
        <div className="mx-auto max-w-[1400px] px-4 py-14 lg:px-8">
          <div className="text-[11px] font-mono uppercase tracking-[0.4em] text-molten">
            Support
          </div>
          <h1 className="mt-2 text-display text-5xl lg:text-7xl">Contact Us</h1>
          <p className="mt-4 max-w-xl text-sm text-bone/60">
            Have a question about your order, need help with a return, or just want to say hello?
            We're here to help.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">

          {/* Contact Information */}
          <div>
            <h2 className="text-display text-2xl mb-6">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-ink/10">
                  <Mail className="h-4 w-4 text-molten" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</div>
                  <a href={`mailto:${CONTACT_CONFIG.email}`} className="mt-1 block text-sm hover:text-molten">
                    {CONTACT_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-ink/10">
                  <Phone className="h-4 w-4 text-molten" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Phone</div>
                  <span className="mt-1 block text-sm">
                    {CONTACT_CONFIG.phone}
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-ink/10">
                  <MapPin className="h-4 w-4 text-molten" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Address</div>
                  <span className="mt-1 block text-sm">{CONTACT_CONFIG.address}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 border border-ink/10 bg-ink/[0.02] p-5">
              <div className="text-xs font-mono uppercase tracking-widest text-molten mb-2">Working Hours</div>
              <p className="text-sm">{CONTACT_CONFIG.workingHours}</p>
              <p className="mt-2 text-xs text-muted-foreground">
                We typically respond within 24 hours on business days.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-8">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Quick Links</div>
              <div className="space-y-2 text-sm">
                <Link to="/shipping-policy" className="block hover:text-molten">→ Shipping &amp; Delivery Policy</Link>
                <Link to="/refund-policy" className="block hover:text-molten">→ Refund &amp; Cancellation Policy</Link>
                <Link to="/terms-and-conditions" className="block hover:text-molten">→ Terms &amp; Conditions</Link>
                <Link to="/privacy-policy" className="block hover:text-molten">→ Privacy Policy</Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border border-ink/10 p-6 lg:p-8">
            <h2 className="text-display text-2xl mb-2">Send a Message</h2>
            <p className="text-sm text-muted-foreground mb-8">
              Fill out the form below and our support team will get back to you as soon as possible.
            </p>

            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle className="h-12 w-12 text-molten mb-4" />
                <h3 className="text-display text-2xl">Message Sent</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                  Thank you for reaching out. Our team will review your message and respond
                  within 24 hours on business days.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-6 bg-ink px-6 py-3 text-xs font-bold uppercase tracking-widest text-bone hover:bg-molten"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1.5">
                    Full Name <span className="text-molten">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-ink ${errors.name ? "border-destructive" : "border-ink/15"}`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1.5">
                    Email Address <span className="text-molten">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-ink ${errors.email ? "border-destructive" : "border-ink/15"}`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-destructive flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXX"
                    className={`w-full border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-ink ${errors.phone ? "border-destructive" : "border-ink/15"}`}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-destructive flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.phone}</p>}
                </div>

                {/* Order ID */}
                <div>
                  <label htmlFor="contact-orderId" className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1.5">
                    Order ID <span className="text-muted-foreground/50">(optional)</span>
                  </label>
                  <input
                    id="contact-orderId"
                    name="orderId"
                    type="text"
                    value={formData.orderId}
                    onChange={handleChange}
                    placeholder="e.g. NXS-12345"
                    className="w-full border border-ink/15 bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-ink"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1.5">
                    Subject <span className="text-molten">*</span>
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-ink ${errors.subject ? "border-destructive" : "border-ink/15"} ${!formData.subject ? "text-muted-foreground/50" : ""}`}
                  >
                    <option value="">Select a subject</option>
                    <option value="Order Query">Order Query</option>
                    <option value="Shipping & Delivery">Shipping &amp; Delivery</option>
                    <option value="Return & Refund">Return &amp; Refund</option>
                    <option value="Product Information">Product Information</option>
                    <option value="Payment Issue">Payment Issue</option>
                    <option value="Account Help">Account Help</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && <p className="mt-1 text-xs text-destructive flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1.5">
                    Message <span className="text-molten">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className={`w-full border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-ink resize-none ${errors.message ? "border-destructive" : "border-ink/15"}`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="flex w-full items-center justify-center gap-2 bg-ink px-6 py-4 text-xs font-bold uppercase tracking-widest text-bone hover:bg-molten disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {formState === "submitting" ? (
                    <>
                      <span className="h-4 w-4 animate-spin border-2 border-bone border-t-transparent rounded-full" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
