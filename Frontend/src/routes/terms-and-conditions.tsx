import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Nexiscore" },
      { name: "description", content: "Read the Terms and Conditions for using the Nexiscore website and purchasing products." },
      { property: "og:title", content: "Terms & Conditions — Nexiscore" },
    ],
  }),
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="border-b border-ink/10 bg-ink text-bone">
        <div className="mx-auto max-w-[1400px] px-4 py-14 lg:px-8">
          <div className="text-[11px] font-mono uppercase tracking-[0.4em] text-molten">
            Legal
          </div>
          <h1 className="mt-2 text-display text-5xl lg:text-7xl">Terms &amp; Conditions</h1>
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
              Welcome to Nexiscore. These Terms and Conditions ("Terms") govern your access to and
              use of the Nexiscore website (the "Website") and the purchase of products offered
              through this Website. By accessing, browsing, or using this Website, you acknowledge
              that you have read, understood, and agree to be bound by these Terms. If you do not
              agree with any part of these Terms, you must not use this Website.
            </p>
            <p className="mt-3">
              Nexiscore reserves the right to update, amend, or modify these Terms at any time
              without prior notice. Your continued use of the Website following any such changes
              constitutes your acceptance of the revised Terms. We encourage you to review this
              page periodically for the latest information.
            </p>
          </div>

          {/* 2. Definitions */}
          <div>
            <h2 className="text-display text-2xl mb-4">2. Definitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>"Company," "we," "us," or "our"</strong> refers to Nexiscore, the entity operating this Website.</li>
              <li><strong>"User," "you," or "your"</strong> refers to any individual or entity that accesses, browses, or uses this Website.</li>
              <li><strong>"Website"</strong> refers to the Nexiscore e-commerce platform accessible at the domain where these Terms are published.</li>
              <li><strong>"Products"</strong> refers to all goods, merchandise, and items offered for sale on this Website.</li>
              <li><strong>"Order"</strong> refers to a request placed by a User to purchase one or more Products through the Website.</li>
              <li><strong>"Account"</strong> refers to the registered user profile created by a User on this Website.</li>
            </ul>
          </div>

          {/* 3. Eligibility */}
          <div>
            <h2 className="text-display text-2xl mb-4">3. Eligibility</h2>
            <p>
              You must be at least 18 years of age to use this Website and make purchases. By using
              this Website, you represent and warrant that you are of legal age to form a binding
              contract and are not barred from using the Website under applicable laws.
            </p>
            <p className="mt-3">
              If you are accessing or using this Website on behalf of a business or other entity,
              you represent that you have the authority to bind such entity to these Terms.
            </p>
          </div>

          {/* 4. Account Registration */}
          <div>
            <h2 className="text-display text-2xl mb-4">4. Account Registration</h2>
            <p>
              To access certain features of the Website, including placing orders and tracking
              shipments, you may be required to create an account. When registering, you agree to
              provide accurate, current, and complete information and to update such information
              promptly to keep it accurate and complete.
            </p>
            <p className="mt-3">
              You are solely responsible for maintaining the confidentiality of your account
              credentials and for all activities that occur under your account. You agree to
              notify us immediately of any unauthorized use of your account. We are not liable
              for any loss or damage arising from your failure to safeguard your account information.
            </p>
          </div>

          {/* 5. User Responsibilities */}
          <div>
            <h2 className="text-display text-2xl mb-4">5. User Responsibilities</h2>
            <p>As a user of this Website, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Use the Website only for lawful purposes and in accordance with these Terms.</li>
              <li>Provide accurate and truthful information when placing orders or creating an account.</li>
              <li>Not use the Website in any manner that could damage, disable, overburden, or impair the Website or interfere with any other party's use of the Website.</li>
              <li>Not attempt to gain unauthorized access to any part of the Website, other accounts, or systems connected to the Website.</li>
              <li>Not use any automated tools, bots, or scripts to access or interact with the Website without our express written permission.</li>
            </ul>
          </div>

          {/* 6. Products and Product Information */}
          <div>
            <h2 className="text-display text-2xl mb-4">6. Products and Product Information</h2>
            <p>
              We make every effort to display product descriptions, images, colours, and
              specifications as accurately as possible. However, we do not warrant that product
              descriptions, images, or other content on this Website are accurate, complete,
              reliable, current, or error-free. Actual colours may vary depending on your
              monitor settings and display capabilities.
            </p>
            <p className="mt-3">
              If a product offered on the Website is not as described, your sole remedy is to
              return it in accordance with our Refund and Cancellation Policy.
            </p>
          </div>

          {/* 7. Pricing and Availability */}
          <div>
            <h2 className="text-display text-2xl mb-4">7. Pricing and Availability</h2>
            <p>
              All prices displayed on the Website are in Indian Rupees (INR) and are inclusive of
              applicable taxes unless stated otherwise. We reserve the right to modify prices at
              any time without prior notice.
            </p>
            <p className="mt-3">
              While we make reasonable efforts to ensure product availability, we do not guarantee
              that all products listed on the Website will be in stock at the time of your order.
              In the event a product becomes unavailable after you have placed an order, we will
              notify you and process a full refund for the unavailable item.
            </p>
            <p className="mt-3">
              In the event of a pricing error (for example, due to a system or typographical
              error), we reserve the right to cancel any orders placed at the incorrect price
              and issue a full refund.
            </p>
          </div>

          {/* 8. Orders and Order Acceptance */}
          <div>
            <h2 className="text-display text-2xl mb-4">8. Orders and Order Acceptance</h2>
            <p>
              Placing an order on the Website constitutes an offer to purchase the selected
              product(s). All orders are subject to acceptance by Nexiscore. We reserve the right
              to accept, decline, or cancel any order for any reason, including but not limited
              to product availability, pricing errors, suspected fraud, or any violation of these
              Terms.
            </p>
            <p className="mt-3">
              An order confirmation email does not constitute acceptance of your order. Acceptance
              occurs when the product is dispatched and a shipment confirmation is sent to you.
            </p>
          </div>

          {/* 9. Payment Terms */}
          <div>
            <h2 className="text-display text-2xl mb-4">9. Payment Terms</h2>
            <p>
              We accept payments through the methods displayed at checkout, which may include UPI,
              credit cards, debit cards, net banking, wallets, and Cash on Delivery (COD) where
              available. All online payments are processed through third-party payment gateways.
              Nexiscore does not store your card numbers, CVV, UPI PINs, or bank account
              credentials.
            </p>
            <p className="mt-3">
              By providing payment information, you represent and warrant that you are authorized
              to use the chosen payment method and that the information you provide is accurate.
              You agree to pay all charges incurred at the prices in effect when the charges are
              incurred.
            </p>
          </div>

          {/* 10. Shipping and Delivery */}
          <div>
            <h2 className="text-display text-2xl mb-4">10. Shipping and Delivery</h2>
            <p>
              We aim to process and dispatch orders within the timeframe stated on the Website.
              Estimated delivery times are provided for reference and are not guaranteed. Actual
              delivery times may vary based on your location, courier availability, and other
              factors beyond our control.
            </p>
            <p className="mt-3">
              Risk of loss and title for products pass to you upon delivery to the shipping
              carrier. For detailed information, please refer to our{" "}
              <Link to="/shipping-policy" className="text-molten hover:underline">
                Shipping &amp; Delivery Policy
              </Link>.
            </p>
          </div>

          {/* 11. Cancellation */}
          <div>
            <h2 className="text-display text-2xl mb-4">11. Cancellation</h2>
            <p>
              You may request cancellation of an order before it has been dispatched. Once an
              order has been shipped, cancellation may not be possible, and you may need to
              initiate a return after delivery. Please refer to our{" "}
              <Link to="/refund-policy" className="text-molten hover:underline">
                Refund &amp; Cancellation Policy
              </Link>{" "}
              for detailed cancellation terms.
            </p>
          </div>

          {/* 12. Returns and Refunds */}
          <div>
            <h2 className="text-display text-2xl mb-4">12. Returns and Refunds</h2>
            <p>
              We want you to be satisfied with your purchase. If you are not entirely happy with
              a product, you may return it in accordance with the conditions described in our{" "}
              <Link to="/refund-policy" className="text-molten hover:underline">
                Refund &amp; Cancellation Policy
              </Link>.
              Refunds, where applicable, will be processed to your original payment method within
              the timeframe specified in that policy.
            </p>
          </div>

          {/* 13. Intellectual Property */}
          <div>
            <h2 className="text-display text-2xl mb-4">13. Intellectual Property</h2>
            <p>
              All content on this Website, including but not limited to text, graphics, logos,
              icons, images, audio clips, digital downloads, data compilations, software, and
              product designs, is the property of Nexiscore or its content suppliers and is
              protected by Indian and international copyright, trademark, and other intellectual
              property laws.
            </p>
            <p className="mt-3">
              You may not reproduce, distribute, modify, create derivative works of, publicly
              display, transmit, or otherwise use any content on this Website for commercial
              purposes without our prior written consent.
            </p>
          </div>

          {/* 14. Prohibited Activities */}
          <div>
            <h2 className="text-display text-2xl mb-4">14. Prohibited Activities</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Use the Website for any unlawful, fraudulent, or harmful purpose.</li>
              <li>Post, upload, or transmit any content that is defamatory, obscene, offensive, or violates the rights of others.</li>
              <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity.</li>
              <li>Engage in price manipulation, fraudulent orders, or abuse of promotional offers.</li>
              <li>Resell products purchased from this Website without our written consent.</li>
              <li>Interfere with or disrupt the operation of the Website or servers connected to the Website.</li>
            </ul>
          </div>

          {/* 15. Limitation of Liability */}
          <div>
            <h2 className="text-display text-2xl mb-4">15. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Nexiscore, its directors,
              employees, agents, and affiliates shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, including but not limited to loss of
              profits, data, use, or goodwill, arising out of or in connection with your use of
              or inability to use the Website or any products purchased through the Website.
            </p>
            <p className="mt-3">
              Our total liability to you for all claims arising from or related to these Terms
              or the Website shall not exceed the amount you paid to us for the specific product
              or transaction giving rise to the claim.
            </p>
          </div>

          {/* 16. Indemnification */}
          <div>
            <h2 className="text-display text-2xl mb-4">16. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Nexiscore, its directors,
              employees, agents, and affiliates from and against any claims, liabilities,
              damages, losses, costs, and expenses (including reasonable attorneys' fees) arising
              out of or in connection with your use of the Website, your violation of these Terms,
              or your violation of any rights of any third party.
            </p>
          </div>

          {/* 17. Third-Party Services */}
          <div>
            <h2 className="text-display text-2xl mb-4">17. Third-Party Services</h2>
            <p>
              This Website may contain links to or integrations with third-party websites,
              services, or payment gateways. These third-party services are not under our control,
              and we are not responsible for their content, privacy policies, or practices. Your
              use of any third-party service is at your own risk and subject to the terms and
              conditions of that third party.
            </p>
          </div>

          {/* 18. Changes to Terms */}
          <div>
            <h2 className="text-display text-2xl mb-4">18. Changes to Terms</h2>
            <p>
              We reserve the right to update or modify these Terms at any time. Changes will be
              effective immediately upon posting to this page with an updated "Last Updated" date.
              Your continued use of the Website after any such changes constitutes your acceptance
              of the revised Terms. We recommend reviewing these Terms periodically.
            </p>
          </div>

          {/* 19. Governing Law and Jurisdiction */}
          <div>
            <h2 className="text-display text-2xl mb-4">19. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India.
              Any disputes arising out of or in connection with these Terms or your use of the
              Website shall be subject to the exclusive jurisdiction of the courts located in
              Mumbai, Maharashtra, India.
            </p>
          </div>

          {/* 20. Contact Information */}
          <div>
            <h2 className="text-display text-2xl mb-4">20. Contact Information</h2>
            <p>
              If you have any questions, concerns, or feedback regarding these Terms, please
              contact us through our{" "}
              <Link to="/contact" className="text-molten hover:underline">
                Contact Us
              </Link>{" "}
              page.
            </p>
          </div>

        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 border-t border-ink/10 pt-8 flex flex-wrap gap-4 text-xs font-mono uppercase tracking-widest">
          <Link to="/privacy-policy" className="hover:text-molten">Privacy Policy</Link>
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
