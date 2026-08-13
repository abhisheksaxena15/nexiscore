import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 bg-ink text-bone">
      <div className="mx-auto max-w-[1400px] px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="text-display text-4xl tracking-[0.15em] hover:text-molten">
              Nexiscore
            </Link>
            <p className="mt-4 max-w-sm text-sm text-bone/70">
              Heavyweight tees, boxy shirts and racer tanks — cut and stitched in
              Mumbai, shipped everywhere.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center border border-bone/20 hover:border-molten hover:text-molten">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-molten">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm text-bone/70">
              <li><Link to="/collections/$handle" params={{ handle: "shop-all" }} className="hover:text-bone">New Arrivals</Link></li>
              <li><Link to="/collections/$handle" params={{ handle: "tees" }} className="hover:text-bone">Tees</Link></li>
              <li><Link to="/collections/$handle" params={{ handle: "shirts" }} className="hover:text-bone">Shirts</Link></li>
              <li><Link to="/collections/$handle" params={{ handle: "tanks" }} className="hover:text-bone">Tanks</Link></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-molten">Support</h4>
            <ul className="mt-4 space-y-2 text-sm text-bone/70">
              <li><Link to="/contact" className="hover:text-bone">Contact Us</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-bone">Shipping &amp; Delivery</Link></li>
              <li><Link to="/refund-policy" className="hover:text-bone">Refund &amp; Cancellation</Link></li>
              <li><Link to="/account" className="hover:text-bone">My Account</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-molten">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-bone/70">
              <li><Link to="/terms-and-conditions" className="hover:text-bone">Terms &amp; Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-bone">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-bone/10 pt-6 text-xs text-bone/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Nexiscore. All rights reserved.</p>
          <p className="font-mono uppercase tracking-widest">India · INR ₹</p>
        </div>
      </div>
    </footer>
  );
}
