import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-ocean-lightPrimary dark:bg-ocean-darkPrimary text-white dark:text-gray-100 py-12 rounded-t-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + Mission */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Whale Match</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Dedicated to marine animal rehabilitation, education, and research to promote ocean conservation and awareness.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer Navigation">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="hover:underline focus:outline-none focus:ring-2 focus:ring-ocean-lightSecondary rounded">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:underline focus:outline-none focus:ring-2 focus:ring-ocean-lightSecondary rounded">
                Support Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline focus:outline-none focus:ring-2 focus:ring-ocean-lightSecondary rounded">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <ul className="text-sm space-y-3">
            <li>120 Main Street, Buzzards Bay, MA 02532</li>
            <li>
              Email:{' '}
              <a
                href="mailto:rob@whalematch.org"
                className="underline hover:text-ocean-lightSecondary focus:outline-none focus:ring-2 focus:ring-ocean-lightSecondary rounded"
              >
                rob@whalematch.org
              </a>
            </li>
            <li>
              Phone:{' '}
              <a
                href="tel:+15085550123"
                className="underline hover:text-ocean-lightSecondary focus:outline-none focus:ring-2 focus:ring-ocean-lightSecondary rounded"
              >
                (508) 555-0123
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-6">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-ocean-lightSecondary rounded"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12a10 10 0 10-11.63 9.87v-6.99H8v-2.88h2.37V9.7c0-2.34 1.4-3.63 3.54-3.63 1.02 0 2.1.18 2.1.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.45v1.73h2.59l-.41 2.88h-2.18v6.99A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-ocean-lightSecondary rounded"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 5.92c-.77.35-1.6.58-2.47.69a4.27 4.27 0 001.88-2.35 8.34 8.34 0 01-2.68 1.02 4.2 4.2 0 00-7.23 3.83 11.93 11.93 0 01-8.66-4.39 4.2 4.2 0 001.3 5.6 4.14 4.14 0 01-1.9-.52v.05a4.21 4.21 0 003.37 4.13 4.3 4.3 0 01-1.89.07 4.21 4.21 0 003.94 2.93A8.45 8.45 0 014 19.54a11.88 11.88 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.33 8.33 0 0022 5.92z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-ocean-lightSecondary rounded"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm5.75-.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-12 border-t border-white/20 pt-6 select-none">
        © {new Date().getFullYear()} WhaleMatch. All rights reserved.
        <p className="mt-3 text-ocean-lightSecondary dark:text-ocean-darkSecondary font-semibold tracking-wide">
          Visitors: <span className="text-ocean-darkPrimary dark:text-ocean-lightPrimary">6083</span>
        </p>
      </div>
    </footer>
  );
}
