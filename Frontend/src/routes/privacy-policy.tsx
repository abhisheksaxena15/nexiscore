import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Nexiscore" },
      { name: "description", content: "Read how Nexiscore collects, uses, and protects your personal information." },
      { property: "og:title", content: "Privacy Policy — Nexiscore" },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="border-b border-ink/10 bg-ink text-bone">
        <div className="mx-auto max-w-[1400px] px-4 py-14 lg:px-8">
          <div className="text-[11px] font-mono uppercase tracking-[0.4em] text-molten">
            Legal
          </div>
          <h1 className="mt-2 text-display text-5xl lg:text-7xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-bone/60">
            Last updated: August 13, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-[900px] px-4 py-12 lg:px-8">
        <div className="prose-policy space-y-10 text-sm leading-relaxed text-foreground/85">

          {/* 1. Introduction */}
          <div>
            <h2 className="text-display text-2xl mb-4">1. Introduction</h2>
            <p>
              At Nexiscore, we are committed to protecting your privacy. This Privacy Policy
              explains what information we collect, how we use it, and the choices you have
              regarding your personal data when you visit or make a purchase from our Website.
            </p>
            <p className="mt-3">
              By using our Website, you consent to the collection and use of your information
              as described in this Privacy Policy. If you do not agree with this policy, please
              do not use our Website.
            </p>
          </div>

          {/* 2. Information We Collect */}
          <div>
            <h2 className="text-display text-2xl mb-4">2. Information We Collect</h2>
            <p>
              We collect the following types of information when you interact with our Website:
            </p>

            <h3 className="text-display text-lg mt-6 mb-2">2.1 Personal Information</h3>
            <p>When you create an account, place an order, or contact us, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Name</strong> — your first and last name as provided during registration or checkout.</li>
              <li><strong>Email address</strong> — used for account management, order confirmations, and communications.</li>
              <li><strong>Phone number</strong> — used for order-related communications and delivery coordination.</li>
              <li><strong>Billing and shipping address</strong> — required to fulfil and deliver your orders.</li>
              <li><strong>Account information</strong> — including your login credentials (password is stored in encrypted form; we do not have access to your plaintext password).</li>
            </ul>

            <h3 className="text-display text-lg mt-6 mb-2">2.2 Order Information</h3>
            <p>
              When you place an order, we collect information related to the transaction, including
              the products ordered, order total, order date, and delivery status.
            </p>

            <h3 className="text-display text-lg mt-6 mb-2">2.3 Payment Information</h3>
            <p>
              Payment processing on our Website is handled by third-party payment gateways. We
              do <strong>not</strong> store your credit card numbers, debit card numbers, CVV,
              UPI PINs, net banking credentials, or any other sensitive payment credentials on
              our servers. When you make a payment, the information is transmitted directly to
              the payment gateway for processing.
            </p>
            <p className="mt-3">
              We may receive limited payment confirmation details from the payment provider,
              such as the last four digits of a card number, transaction ID, or payment status,
              solely for order verification and record-keeping purposes.
            </p>

            <h3 className="text-display text-lg mt-6 mb-2">2.4 Device and Browser Information</h3>
            <p>
              When you visit our Website, we may automatically collect certain technical
              information, including your IP address, browser type and version, operating system,
              device type, screen resolution, referring URL, and pages visited. This information
              is collected through standard web technologies and is used to improve our Website's
              performance and user experience.
            </p>

            <h3 className="text-display text-lg mt-6 mb-2">2.5 Cookies and Similar Technologies</h3>
            <p>
              We use cookies and similar technologies (such as local storage) to remember your
              preferences, maintain your session, and understand how you interact with our
              Website. For more details, see Section 6 below.
            </p>
          </div>

          {/* 3. How We Use Information */}
          <div>
            <h2 className="text-display text-2xl mb-4">3. How We Use Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>To process, fulfil, and deliver your orders.</li>
              <li>To create and manage your account.</li>
              <li>To communicate with you about your orders, including confirmations, shipping updates, and delivery notifications.</li>
              <li>To respond to your enquiries and provide customer support.</li>
              <li>To improve our Website, products, and services.</li>
              <li>To detect, prevent, and address fraud, security issues, or technical problems.</li>
              <li>To comply with applicable laws and legal obligations.</li>
              <li>To send you promotional communications if you have opted in to receive them (see Section 13).</li>
            </ul>
          </div>

          {/* 4. Order and Payment Processing */}
          <div>
            <h2 className="text-display text-2xl mb-4">4. Order and Payment Processing</h2>
            <p>
              When you place an order, your personal and order information is used to process the
              transaction, arrange shipment, and update you on the delivery status. Your billing
              and shipping address are shared with our logistics and courier partners solely for
              the purpose of delivering your order.
            </p>
          </div>

          {/* 5. Payment Gateway / Third-Party Payment Providers */}
          <div>
            <h2 className="text-display text-2xl mb-4">5. Payment Gateway / Third-Party Payment Providers</h2>
            <p>
              Payments made on our Website are processed through third-party payment gateways.
              These providers have their own privacy policies governing their use of your
              information. We recommend reviewing their respective privacy policies before
              providing your payment information.
            </p>
            <p className="mt-3">
              We do not have access to, nor do we store, your full payment credentials. The payment
              gateway is responsible for the secure processing and encryption of your financial data
              in compliance with applicable standards such as PCI-DSS.
            </p>
          </div>

          {/* 6. Cookies and Similar Technologies */}
          <div>
            <h2 className="text-display text-2xl mb-4">6. Cookies and Similar Technologies</h2>
            <p>Our Website uses the following types of cookies:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Essential Cookies</strong> — required for the Website to function properly, such as maintaining your shopping cart and session.</li>
              <li><strong>Functional Cookies</strong> — help remember your preferences and settings to improve your experience.</li>
              <li><strong>Analytics Cookies</strong> — help us understand how visitors interact with our Website so we can improve it.</li>
            </ul>
            <p className="mt-3">
              Most web browsers allow you to control cookies through their settings. However,
              disabling essential cookies may affect the functionality of the Website.
            </p>
          </div>

          {/* 7. Analytics */}
          <div>
            <h2 className="text-display text-2xl mb-4">7. Analytics</h2>
            <p>
              We may use third-party analytics tools to help us measure traffic and usage patterns
              on our Website. These tools collect information anonymously and report website trends
              without identifying individual visitors. The data is used to improve our Website's
              performance, content, and user experience.
            </p>
          </div>

          {/* 8. Sharing of Information */}
          <div>
            <h2 className="text-display text-2xl mb-4">8. Sharing of Information</h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties. We may
              share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Service Providers:</strong> We share information with trusted third parties who assist us in operating our Website, processing payments, delivering orders, and providing customer support. These providers are contractually obligated to protect your information.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</li>
              <li><strong>Protection of Rights:</strong> We may disclose information to protect our rights, safety, or property, or that of our users or others.</li>
            </ul>
          </div>

          {/* 9. Service Providers */}
          <div>
            <h2 className="text-display text-2xl mb-4">9. Service Providers</h2>
            <p>
              We engage third-party service providers to perform functions on our behalf,
              including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Payment processing</li>
              <li>Order fulfilment and shipping</li>
              <li>Email delivery and communication services</li>
              <li>Website hosting and infrastructure</li>
              <li>Analytics and performance monitoring</li>
            </ul>
            <p className="mt-3">
              These service providers have access only to the personal information necessary
              to perform their functions and are obligated not to use it for other purposes.
            </p>
          </div>

          {/* 10. Data Security */}
          <div>
            <h2 className="text-display text-2xl mb-4">10. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical security measures
              to protect your personal information against unauthorized access, alteration,
              disclosure, or destruction. These measures include encrypted data transmission
              (SSL/TLS), secure server infrastructure, and access controls.
            </p>
            <p className="mt-3">
              However, no method of transmission over the internet or electronic storage is
              completely secure. While we strive to protect your personal information, we cannot
              guarantee its absolute security.
            </p>
          </div>

          {/* 11. Data Retention */}
          <div>
            <h2 className="text-display text-2xl mb-4">11. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfil the purposes
              for which it was collected, including to satisfy legal, accounting, or reporting
              requirements. Order records are retained as required by applicable tax and
              accounting regulations.
            </p>
            <p className="mt-3">
              If you request deletion of your account, we will delete or anonymize your personal
              information within a reasonable timeframe, except where retention is required by law.
            </p>
          </div>

          {/* 12. User Rights */}
          <div>
            <h2 className="text-display text-2xl mb-4">12. User Rights</h2>
            <p>Subject to applicable law, you have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Access:</strong> You may request a copy of the personal information we hold about you.</li>
              <li><strong>Correction:</strong> You may request correction of any inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> You may request deletion of your personal information, subject to any legal obligations we may have to retain it.</li>
              <li><strong>Opt-out:</strong> You may opt out of receiving promotional communications at any time (see Section 13).</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us through our{" "}
              <Link to="/contact" className="text-molten hover:underline">
                Contact Us
              </Link>{" "}
              page.
            </p>
          </div>

          {/* 13. Marketing Communications */}
          <div>
            <h2 className="text-display text-2xl mb-4">13. Marketing Communications</h2>
            <p>
              With your consent, we may send you promotional emails, SMS messages, or other
              communications about new products, offers, and updates. You may opt out at any time
              by using the unsubscribe link provided in the communication or by contacting us
              directly.
            </p>
            <p className="mt-3">
              Please note that even if you opt out of marketing communications, we may still
              send you transactional communications related to your orders, account, and
              important service updates.
            </p>
          </div>

          {/* 14. Children's Privacy */}
          <div>
            <h2 className="text-display text-2xl mb-4">14. Children's Privacy</h2>
            <p>
              Our Website is not intended for individuals under the age of 18. We do not
              knowingly collect personal information from children. If we become aware that
              we have collected personal information from a child under 18, we will take
              steps to delete such information promptly.
            </p>
          </div>

          {/* 15. Third-Party Links */}
          <div>
            <h2 className="text-display text-2xl mb-4">15. Third-Party Links</h2>
            <p>
              Our Website may contain links to third-party websites. We are not responsible
              for the privacy practices or content of those websites. We encourage you to
              review the privacy policies of any third-party websites you visit.
            </p>
          </div>

          {/* 16. Changes to Privacy Policy */}
          <div>
            <h2 className="text-display text-2xl mb-4">16. Changes to Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted
              on this page with an updated "Last Updated" date. We encourage you to review this
              policy periodically to stay informed about how we protect your information.
            </p>
          </div>

          {/* 17. Contact Information */}
          <div>
            <h2 className="text-display text-2xl mb-4">17. Contact Information</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy
              or our data practices, please reach out to us through our{" "}
              <Link to="/contact" className="text-molten hover:underline">
                Contact Us
              </Link>{" "}
              page.
            </p>
          </div>

        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 border-t border-ink/10 pt-8 flex flex-wrap gap-4 text-xs font-mono uppercase tracking-widest">
          <Link to="/terms-and-conditions" className="hover:text-molten">Terms &amp; Conditions</Link>
          <span className="text-ink/20">·</span>
          <Link to="/refund-policy" className="hover:text-molten">Refund &amp; Cancellation</Link>
          <span className="text-ink/20">·</span>
          <Link to="/shipping-policy" className="hover:text-molten">Shipping Policy</Link>
          <span className="text-ink/20">·</span>
          <Link to="/contact" className="hover:text-molten">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
