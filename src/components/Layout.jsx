import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-xl font-bold tracking-wide">
            Centcom Systems
          </Link>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="/#services" className="text-slate-300 transition hover:text-white">
              Services
            </a>
            <a href="/#why-us" className="text-slate-300 transition hover:text-white">
              Why Us
            </a>
            <a href="/#sectors" className="text-slate-300 transition hover:text-white">
              Sectors
            </a>
            <a href="/#faq" className="text-slate-300 transition hover:text-white">
              FAQ
            </a>
            <Link to="/contact-us" className="text-slate-300 transition hover:text-white">
              Contact Us
            </Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="mailto:support@centcom.co.uk"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              support@centcom.co.uk
            </a>
            <a
              href="tel:+442034882534"
              className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20"
            >
              +44 (0) 203 4882 534
            </a>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Centcom Systems</h3>
            <p className="mt-4 leading-7 text-slate-400">
              Managed IT support in Slough, London & across the UK for businesses, schools and
              multi-site organisations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Our Services</h4>
            <ul className="mt-4 space-y-3 text-slate-400">
              <li>
                <a href="/#services" className="hover:text-white">
                  Microsoft Cloud & Modern Workplace
                </a>
              </li>
              <li>
                <Link to="/microsoft-intune-support" className="hover:text-white">
                  Microsoft 365, Azure & Intune
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity-services" className="hover:text-white">
                  Compliance & Security
                </Link>
              </li>
              <li>
                <Link to="/managed-it-support" className="hover:text-white">
                  Remote & Onsite Support
                </Link>
              </li>
              <li>
                <a href="/#services" className="hover:text-white">
                  Cloud Migration & Backup
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-white">
                  Development, Networks & VoIP
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-slate-400">
              <li>
                <a href="/#services" className="hover:text-white">
                  All Services
                </a>
              </li>
              <li>
                <a href="/#sectors" className="hover:text-white">
                  Industries We Support
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-website" className="hover:text-white">
                  Terms of Website
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:text-white">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Office Hours</h4>
            <div className="mt-4 space-y-3 text-slate-400">
              <p>Our main support desk is available:</p>
              <p>Monday-Friday: 08:00 - 17:00</p>
              <p>Saturday: Closed</p>
              <p>Sunday: Closed</p>
              <p className="text-slate-300">24/7 Support Available - please contact us for details</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-slate-500">
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            <span>&copy; 2026 Centcom Systems. All rights reserved.</span>
            <span>
              Website design by{" "}
              <a
                href="https://centcom.co.uk"
                className="text-slate-400 transition hover:text-white"
              >
                Centcom Systems
              </a>
            </span>
            <Link to="/privacy-policy" className="text-slate-400 transition hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-of-website" className="text-slate-400 transition hover:text-white">
              Terms of Website
            </Link>
            <Link to="/cookie-policy" className="text-slate-400 transition hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
