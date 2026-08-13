import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund & Cancellation Policy — Nexiscore" },
      { name: "description", content: "Learn about Nexiscore's refund, return, and order cancellation policies." },
      { property: "og:title", content: "Refund & Cancellation Policy — Nexiscore" },
    ],
  }),
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="border-b border-ink/10 bg-ink text-bone">
        <div className="mx-auto max-w-[1400px] px-4 py-14 lg:px-8">
          <div className="text-[11px] font-mono uppercase tracking-[0.4em] text-molten">
            Policy
          </div>
          <h1 className="mt-2 text-display text-5xl lg:text-7xl">Refund &amp; Cancellation</h1>
          <p className="mt-4 text-sm text-bone/60">
            Last updated: August 13, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-[900px] px-4 py-12 lg:px-8">
        <div className="prose-policy space-y-10 text-sm leading-relaxed text-foreground/85">

          <p>
            At Nexiscore, we strive to ensure that every order meets your expectations. This
            policy outlines the terms and procedures for order cancellations, returns, and refunds.
            Please read it carefully before placing an order.
          </p>

          {/* Order Cancellation */}
          <div>
            <h2 className="text-display text-3xl mb-6">Order Cancellation</h2>

            <h3 className="text-display text-lg mb-2">Cancellation Before Dispatch</h3>
            <p>
              You may cancel your order at any time before it has been dispatched. To request
              a cancellation, please contact us through the{" "}
              <Link to="/contact" className="text-molten hover:underline">
                Contact Us
              </Link>{" "}
              page or your account dashboard as soon as possible. If the order has not yet been
              processed for shipping, we will cancel it and initiate a full refund.
            </p>

            <h3 className="text-display text-lg mt-6 mb-2">Cancellation After Dispatch</h3>
            <p>
              Once an order has been dispatched and a tracking number has been generated,
              cancellation may not be possible. In this case, you may refuse delivery or initiate
              a return after receiving the product, subject to the return conditions described below.
            </p>

            <h3 className="text-display text-lg mt-6 mb-2">Cancellation for Unavailable Products</h3>
            <p>
              In rare cases, a product may become unavailable after your order has been placed
              due to inventory discrepancies or unforeseen circumstances. If this occurs, we will
              notify you promptly, cancel the affected item(s), and issue a full refund for the
              cancelled item(s). Any remaining items in your order will be fulfilled as normal.
            </p>
          </div>

          {/* Returns */}
          <div>
            <h2 className="text-display text-3xl mb-6">Returns</h2>

            <h3 className="text-display text-lg mb-2">Eligible Products</h3>
            <p>
              Products may be returned within <strong>7 days</strong> of delivery, provided they
              meet the conditions listed below. The return window begins on the date the product
              is delivered to you as confirmed by the courier tracking information.
            </p>

            <h3 className="text-display text-lg mt-6 mb-2">Return Conditions</h3>
            <p>To be eligible for a return, the product must be:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Unused, unworn, and unwashed.</li>
              <li>In its original condition with all tags, labels, and packaging intact.</li>
              <li>Free of any alterations, damage, stains, or signs of use caused after delivery.</li>
            </ul>

            <h3 className="text-display text-lg mt-6 mb-2">Non-Returnable Products</h3>
            <p>The following items are generally not eligible for return:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Products purchased during clearance or final sale promotions (unless explicitly stated otherwise).</li>
              <li>Gift cards and vouchers.</li>
              <li>Products that have been used, washed, altered, or damaged after delivery.</li>
              <li>Intimate wear or products that cannot be returned for hygiene reasons.</li>
            </ul>

            <h3 className="text-display text-lg mt-6 mb-2">How to Initiate a Return</h3>
            <p>To initiate a return:</p>
            <ol className="list-decimal pl-6 space-y-2 mt-3">
              <li>
                Contact us through the{" "}
                <Link to="/contact" className="text-molten hover:underline">
                  Contact Us
                </Link>{" "}
                page with your order ID and reason for the return.
              </li>
              <li>Our team will review your request and, if approved, provide you with return instructions.</li>
              <li>Pack the product securely in its original packaging and ship it back as directed.</li>
            </ol>

            <h3 className="text-display text-lg mt-6 mb-2">Inspection and Approval</h3>
            <p>
              Once we receive the returned product, our team will inspect it to verify that it
              meets the return conditions. If the product passes inspection, the return will be
              approved and a refund will be initiated. If the product does not meet the return
              conditions, we may decline the return and ship the product back to you at your
              expense.
            </p>
          </div>

          {/* Refunds */}
          <div>
            <h2 className="text-display text-3xl mb-6">Refunds</h2>

            <h3 className="text-display text-lg mb-2">Refund Initiation</h3>
            <p>
              Refunds are initiated after the return has been received and approved, or after
              a cancellation has been confirmed. You will receive an email notification when
              your refund has been processed.
            </p>

            <h3 className="text-display text-lg mt-6 mb-2">Processing Timeline</h3>
            <p>
              Refunds are typically processed within <strong>5–10 business days</strong> from
              the date of approval. The time it takes for the refund to appear in your account
              may vary depending on your bank or payment provider. Please allow additional time
              for your financial institution to process the credit.
            </p>

            <h3 className="text-display text-lg mt-6 mb-2">Refund Method</h3>
            <p>
              Refunds will be credited to the original payment method used at the time of
              purchase. If the original payment method is no longer available, we will work
              with you to process the refund through an alternative method.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>UPI / Wallet payments:</strong> Refund credited to the same UPI ID or wallet.</li>
              <li><strong>Credit / Debit Card:</strong> Refund credited to the card used for the transaction.</li>
              <li><strong>Net Banking:</strong> Refund credited to the originating bank account.</li>
              <li><strong>Cash on Delivery (COD):</strong> Refund processed via bank transfer. You may be asked to provide your bank account details.</li>
            </ul>

            <h3 className="text-display text-lg mt-6 mb-2">Failed or Unsuccessful Transactions</h3>
            <p>
              If your payment was debited but the order was not confirmed (for example, due to
              a technical issue), the amount will typically be auto-refunded by your payment
              provider within 5–7 business days. If you do not receive the refund within this
              period, please contact us with your transaction details.
            </p>

            <h3 className="text-display text-lg mt-6 mb-2">Partial Refunds</h3>
            <p>
              Partial refunds may be issued in cases where only some items in a multi-item order
              are returned or cancelled. The refund amount will correspond to the price of the
              specific item(s) being returned or cancelled.
            </p>
          </div>

          {/* Damaged / Incorrect Products */}
          <div>
            <h2 className="text-display text-3xl mb-6">Damaged or Incorrect Products</h2>

            <p>
              If you receive a product that is damaged, defective, or different from what you
              ordered, please contact us as soon as possible — ideally within <strong>48 hours</strong> of
              delivery. To help us resolve the issue quickly:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Take clear photographs of the product showing the damage, defect, or discrepancy.</li>
              <li>Take a photograph of the shipping label on the package.</li>
              <li>Contact us through the{" "}
                <Link to="/contact" className="text-molten hover:underline">
                  Contact Us
                </Link>{" "}
                page with your order ID and the photographs.</li>
            </ul>
            <p className="mt-3">
              Our team will review your claim and, if approved, arrange for a replacement or
              a full refund at no additional cost to you. You may be asked to return the damaged
              or incorrect product.
            </p>

            <h3 className="text-display text-lg mt-6 mb-2">Missing Products</h3>
            <p>
              If a product is missing from your order (for example, in a multi-item shipment),
              please contact us within 48 hours of delivery with your order ID and details of
              the missing item(s). We will investigate and, if confirmed, either ship the missing
              item(s) or issue a refund.
            </p>

            <h3 className="text-display text-lg mt-6 mb-2">Product Differs from Listing</h3>
            <p>
              If the product you receive differs materially from the description or images on
              the Website (for example, a significantly different colour, size, or design), you
              may return it within the standard return window for a full refund or replacement.
              Please note that minor variations in colour due to screen differences are not
              considered material discrepancies.
            </p>
          </div>

          {/* General Notes */}
          <div>
            <h2 className="text-display text-2xl mb-4">General Notes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Shipping charges for returning a product may be borne by the customer unless the return is due to a damaged, defective, or incorrect product.</li>
              <li>We reserve the right to modify this policy at any time. Changes will be posted on this page with an updated date.</li>
              <li>This policy applies only to products purchased directly through the Nexiscore website.</li>
            </ul>
          </div>

        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 border-t border-ink/10 pt-8 flex flex-wrap gap-4 text-xs font-mono uppercase tracking-widest">
          <Link to="/terms-and-conditions" className="hover:text-molten">Terms &amp; Conditions</Link>
          <span className="text-ink/20">·</span>
          <Link to="/privacy-policy" className="hover:text-molten">Privacy Policy</Link>
          <span className="text-ink/20">·</span>
          <Link to="/shipping-policy" className="hover:text-molten">Shipping Policy</Link>
          <span className="text-ink/20">·</span>
          <Link to="/contact" className="hover:text-molten">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
