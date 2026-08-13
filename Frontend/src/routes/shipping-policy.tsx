import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/shipping-policy")({
  head: () => ({
    meta: [
      { title: "Shipping & Delivery Policy — Nexiscore" },
      { name: "description", content: "Learn about Nexiscore's shipping methods, delivery times, and shipping charges." },
      { property: "og:title", content: "Shipping & Delivery Policy — Nexiscore" },
    ],
  }),
  component: ShippingPolicyPage,
});

function ShippingPolicyPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="border-b border-ink/10 bg-ink text-bone">
        <div className="mx-auto max-w-[1400px] px-4 py-14 lg:px-8">
          <div className="text-[11px] font-mono uppercase tracking-[0.4em] text-molten">
            Policy
          </div>
          <h1 className="mt-2 text-display text-5xl lg:text-7xl">Shipping &amp; Delivery</h1>
          <p className="mt-4 text-sm text-bone/60">
            Last updated: August 13, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-[900px] px-4 py-12 lg:px-8">
        <div className="prose-policy space-y-10 text-sm leading-relaxed text-foreground/85">

          {/* 1. Shipping Overview */}
          <div>
            <h2 className="text-display text-2xl mb-4">1. Shipping Overview</h2>
            <p>
              Nexiscore ships across India. We partner with reliable logistics providers to ensure
              your order reaches you safely and on time. All orders are processed from our
              facility and dispatched within the timeframe specified below.
            </p>
          </div>

          {/* 2. Processing Time */}
          <div>
            <h2 className="text-display text-2xl mb-4">2. Processing Time</h2>
            <p>
              Orders are typically processed and dispatched within <strong>24–48 hours</strong> of
              order placement, excluding Sundays and public holidays. During sale events or
              high-demand periods, processing may take up to <strong>3–4 business days</strong>.
            </p>
            <p className="mt-3">
              Once your order has been dispatched, you will receive a shipping confirmation
              email with a tracking number and a link to track your shipment.
            </p>
          </div>

          {/* 3. Estimated Delivery Time */}
          <div>
            <h2 className="text-display text-2xl mb-4">3. Estimated Delivery Time</h2>
            <p>
              Delivery times vary depending on your location. Below are the estimated delivery
              timelines after dispatch:
            </p>
            <div className="mt-4 border border-ink/10 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink text-bone text-left">
                    <th className="px-4 py-3 font-mono text-xs uppercase tracking-widest">Location</th>
                    <th className="px-4 py-3 font-mono text-xs uppercase tracking-widest">Estimated Delivery</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/10">
                  <tr>
                    <td className="px-4 py-3">Metro Cities (Mumbai, Delhi, Bangalore, etc.)</td>
                    <td className="px-4 py-3">2–4 business days</td>
                  </tr>
                  <tr className="bg-ink/[0.02]">
                    <td className="px-4 py-3">Tier 2 Cities</td>
                    <td className="px-4 py-3">4–6 business days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Tier 3 Cities and Rural Areas</td>
                    <td className="px-4 py-3">6–9 business days</td>
                  </tr>
                  <tr className="bg-ink/[0.02]">
                    <td className="px-4 py-3">Remote / North-East / J&amp;K / Andaman &amp; Nicobar</td>
                    <td className="px-4 py-3">7–12 business days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-muted-foreground text-xs">
              These are estimated timelines and may vary due to factors beyond our control such
              as weather conditions, natural disasters, courier delays, or local disruptions.
            </p>
          </div>

          {/* 4. Shipping Charges */}
          <div>
            <h2 className="text-display text-2xl mb-4">4. Shipping Charges</h2>
            <p>
              We offer <strong>free shipping on orders above ₹999</strong>. For orders below this
              threshold, a flat shipping fee will be applied at checkout. The shipping fee will
              be clearly displayed before you confirm your order.
            </p>
            <p className="mt-3">
              Cash on Delivery (COD) orders may incur an additional handling fee, which will
              be shown during checkout if applicable.
            </p>
          </div>

          {/* 5. Delivery Locations */}
          <div>
            <h2 className="text-display text-2xl mb-4">5. Delivery Locations</h2>
            <p>
              We currently deliver to most serviceable pin codes across India. During checkout,
              you can verify whether delivery is available to your pin code. If your location
              is not serviceable, we will notify you before order confirmation.
            </p>
            <p className="mt-3">
              International shipping is not available at this time.
            </p>
          </div>

          {/* 6. Order Tracking */}
          <div>
            <h2 className="text-display text-2xl mb-4">6. Order Tracking</h2>
            <p>
              Once your order has been dispatched, you will receive a tracking number via email
              and/or SMS. You can use this tracking number on the courier partner's website or
              app to track your shipment in real-time.
            </p>
            <p className="mt-3">
              If you experience any issues with tracking or if the tracking information is not
              updating, please contact us through the{" "}
              <Link to="/contact" className="text-molten hover:underline">
                Contact Us
              </Link>{" "}
              page with your order ID.
            </p>
          </div>

          {/* 7. Delayed Deliveries */}
          <div>
            <h2 className="text-display text-2xl mb-4">7. Delayed Deliveries</h2>
            <p>
              While we make every effort to ensure timely delivery, delays can occasionally
              occur due to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>High-volume sale periods or festive seasons</li>
              <li>Adverse weather conditions or natural disasters</li>
              <li>Courier partner delays or logistics disruptions</li>
              <li>Remote or difficult-to-reach delivery locations</li>
              <li>Incomplete or incorrect address information</li>
            </ul>
            <p className="mt-3">
              If your order is significantly delayed beyond the estimated delivery window,
              please contact us and we will investigate the status with the courier partner.
            </p>
          </div>

          {/* 8. Incorrect Address */}
          <div>
            <h2 className="text-display text-2xl mb-4">8. Incorrect Address</h2>
            <p>
              Please ensure that the shipping address provided during checkout is accurate and
              complete, including the correct pin code, landmark, and phone number. Nexiscore
              is not responsible for delays, non-delivery, or misdelivery caused by incorrect
              or incomplete address information provided by the customer.
            </p>
            <p className="mt-3">
              If you realise there is an error in your shipping address after placing the order,
              please contact us immediately. We may be able to update the address if the order
              has not yet been dispatched.
            </p>
          </div>

          {/* 9. Failed Delivery Attempts */}
          <div>
            <h2 className="text-display text-2xl mb-4">9. Failed Delivery Attempts</h2>
            <p>
              If the courier partner is unable to deliver your order after multiple attempts
              (typically 2–3 attempts), the package may be returned to us. In such cases, we
              will contact you to arrange re-shipment. Additional shipping charges may apply
              for re-shipment.
            </p>
            <p className="mt-3">
              If a COD order is returned to us due to failed delivery, a refund (minus any
              applicable shipping charges) will be initiated if re-shipment is not feasible.
            </p>
          </div>

          {/* 10. Damaged Packages */}
          <div>
            <h2 className="text-display text-2xl mb-4">10. Damaged Packages</h2>
            <p>
              If your package arrives in a visibly damaged or tampered condition, we recommend
              the following:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>If possible, refuse to accept the delivery and have it returned to us.</li>
              <li>If you have already accepted the delivery, take clear photographs of the outer packaging and the product inside.</li>
              <li>
                Contact us within <strong>48 hours</strong> through the{" "}
                <Link to="/contact" className="text-molten hover:underline">
                  Contact Us
                </Link>{" "}
                page with your order ID and photographs.
              </li>
            </ul>
            <p className="mt-3">
              We will review your claim and arrange a replacement or refund as appropriate.
              For more details, refer to our{" "}
              <Link to="/refund-policy" className="text-molten hover:underline">
                Refund &amp; Cancellation Policy
              </Link>.
            </p>
          </div>

          {/* 11. Delivery Exceptions */}
          <div>
            <h2 className="text-display text-2xl mb-4">11. Delivery Exceptions</h2>
            <p>
              Certain situations may affect delivery, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Government-imposed restrictions, curfews, or lockdowns</li>
              <li>Force majeure events (earthquakes, floods, epidemics, etc.)</li>
              <li>Courier service disruptions in specific regions</li>
            </ul>
            <p className="mt-3">
              In such cases, deliveries will be resumed once normal operations are restored.
              We will keep you informed of any significant delays and provide the option to
              cancel your order for a full refund if delivery cannot be completed within a
              reasonable timeframe.
            </p>
          </div>

          {/* 12. Contact Support */}
          <div>
            <h2 className="text-display text-2xl mb-4">12. Contact Support</h2>
            <p>
              For any shipping or delivery-related queries, concerns, or issues, please reach
              out to us through the{" "}
              <Link to="/contact" className="text-molten hover:underline">
                Contact Us
              </Link>{" "}
              page. Our support team will be happy to assist you.
            </p>
          </div>

        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 border-t border-ink/10 pt-8 flex flex-wrap gap-4 text-xs font-mono uppercase tracking-widest">
          <Link to="/terms-and-conditions" className="hover:text-molten">Terms &amp; Conditions</Link>
          <span className="text-ink/20">·</span>
          <Link to="/privacy-policy" className="hover:text-molten">Privacy Policy</Link>
          <span className="text-ink/20">·</span>
          <Link to="/refund-policy" className="hover:text-molten">Refund &amp; Cancellation</Link>
          <span className="text-ink/20">·</span>
          <Link to="/contact" className="hover:text-molten">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
