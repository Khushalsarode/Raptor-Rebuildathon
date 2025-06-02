import React from 'react';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-ocean-lightBg dark:bg-ocean-darkBg text-ocean-lightText dark:text-ocean-darkText transition duration-300 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="bg-ocean-lightBg2 dark:bg-ocean-darkBg2 rounded-2xl shadow-lg p-8 sm:p-12">
          <h1 className="text-4xl font-bold text-ocean-lightPrimary dark:text-ocean-darkPrimary mb-6 text-center">
            Support WatchWhale 🐋
          </h1>
          <p className="text-center text-base sm:text-lg mb-10 max-w-3xl mx-auto">
            WatchWhale is on a mission to protect our oceans, promote sustainability, and empower communities with data-driven insights. Your financial support helps us scale impact, fund research, and keep the platform accessible and ad-free.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* One-time Donation */}
            <div className="bg-ocean-lightBg dark:bg-ocean-darkBg2 rounded-xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">🌊 One-Time Donation</h2>
                <p className="text-sm mb-4">Make a quick impact with a one-time contribution to help fund development, ocean cleanups, and awareness programs.</p>
              </div>
              <a
                href="https://yourdonationlink.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto px-5 py-2 text-sm font-semibold rounded-md bg-ocean-lightPrimary hover:bg-ocean-lightSecondary dark:bg-ocean-darkPrimary dark:hover:bg-ocean-darkSecondary text-white text-center"
              >
                Donate Now
              </a>
            </div>

            {/* Monthly Support */}
            <div className="bg-ocean-lightBg dark:bg-ocean-darkBg2 rounded-xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">📆 Monthly Support</h2>
                <p className="text-sm mb-4">Become a sustaining donor and help us plan for long-term initiatives with predictable support each month.</p>
              </div>
              <a
                href="https://patreon.com/watchwhale"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto px-5 py-2 text-sm font-semibold rounded-md bg-ocean-lightPrimary hover:bg-ocean-lightSecondary dark:bg-ocean-darkPrimary dark:hover:bg-ocean-darkSecondary text-white text-center"
              >
                Join on Patreon
              </a>
            </div>

            {/* Corporate Partnerships */}
            <div className="bg-ocean-lightBg dark:bg-ocean-darkBg2 rounded-xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">🏢 Corporate Partnerships</h2>
                <p className="text-sm mb-4">Partner with us for larger impact, joint campaigns, or CSR programs. Let’s build a sustainable future together.</p>
              </div>
              <a
                href="mailto:partners@watchwhale.org"
                className="inline-block mt-auto px-5 py-2 text-sm font-semibold rounded-md bg-ocean-lightPrimary hover:bg-ocean-lightSecondary dark:bg-ocean-darkPrimary dark:hover:bg-ocean-darkSecondary text-white text-center"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold mb-2">🔒 Transparent & Secure</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              All donations go directly toward our mission. We value transparency and publish regular financial updates and progress reports.
            </p>
          </div>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-10">
            Every contribution, big or small, helps us safeguard marine life and empower the next generation of ocean stewards. 🌍💙
          </p>
        </div>
      </div>
    </div>
  );
}
