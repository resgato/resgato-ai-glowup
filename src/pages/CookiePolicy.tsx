import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHelmet from '@/components/PageHelmet';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHelmet
        title="Cookie Policy | Resgato Digital Marketing Agency"
        description="Learn about how Resgato uses cookies and tracking technologies to improve your experience on our website."
        canonicalUrl="/cookie-policy"
      />
      <Navbar />
      <main className="flex-grow">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="mb-8 text-4xl font-bold text-gray-900">
              Cookie Policy
            </h1>
            <p className="mb-6 text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                1. What Are Cookies?
              </h2>
              <p className="mb-4 text-gray-700">
                Cookies are small text files that are placed on your device when
                you visit our website. They help us provide you with a better
                experience by remembering your preferences, analyzing how you
                use our site, and personalizing content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                2. How We Use Cookies
              </h2>
              <p className="mb-4 text-gray-700">
                We use cookies for the following purposes:
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                2.1 Essential Cookies
              </h3>
              <p className="mb-4 text-gray-700">
                These cookies are necessary for the website to function
                properly:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>Authentication and security</li>
                <li>Shopping cart functionality</li>
                <li>Form submissions</li>
                <li>Language preferences</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                2.2 Performance Cookies
              </h3>
              <p className="mb-4 text-gray-700">
                These cookies help us understand how visitors interact with our
                website:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>Page load times and performance</li>
                <li>Most visited pages</li>
                <li>Error tracking</li>
                <li>User journey analysis</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                2.3 Functional Cookies
              </h3>
              <p className="mb-4 text-gray-700">
                These cookies enhance your experience by remembering your
                preferences:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>Language and region settings</li>
                <li>Personalized content</li>
                <li>Social media integration</li>
                <li>Third-party service preferences</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                2.4 Marketing Cookies
              </h3>
              <p className="mb-4 text-gray-700">
                These cookies are used for advertising and marketing purposes:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>Targeted advertising</li>
                <li>Social media advertising</li>
                <li>Email marketing optimization</li>
                <li>Conversion tracking</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                3. Third-Party Cookies
              </h2>
              <p className="mb-4 text-gray-700">
                We use third-party services that may set their own cookies:
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                3.1 Analytics Services
              </h3>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>
                  <strong>Google Analytics:</strong> Website traffic and user
                  behavior analysis
                </li>
                <li>
                  <strong>Google Tag Manager:</strong> Marketing tag management
                </li>
                <li>
                  <strong>Hotjar:</strong> User experience and heatmap analysis
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                3.2 Advertising Services
              </h3>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>
                  <strong>Google Ads:</strong> PPC advertising and conversion
                  tracking
                </li>
                <li>
                  <strong>Facebook Pixel:</strong> Social media advertising
                </li>
                <li>
                  <strong>LinkedIn Insight Tag:</strong> Professional network
                  advertising
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                3.3 Social Media
              </h3>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>
                  <strong>Facebook:</strong> Social media integration and
                  sharing
                </li>
                <li>
                  <strong>LinkedIn:</strong> Professional network integration
                </li>
                <li>
                  <strong>Twitter:</strong> Social media sharing and tracking
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                4. Cookie Duration
              </h2>
              <p className="mb-4 text-gray-700">
                Cookies have different lifespans:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>
                  <strong>Session Cookies:</strong> Deleted when you close your
                  browser
                </li>
                <li>
                  <strong>Persistent Cookies:</strong> Remain on your device for
                  a set period
                </li>
                <li>
                  <strong>First-Party Cookies:</strong> Set by our website
                  directly
                </li>
                <li>
                  <strong>Third-Party Cookies:</strong> Set by external services
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                5. Managing Your Cookie Preferences
              </h2>
              <p className="mb-4 text-gray-700">
                You can control cookies in several ways:
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                5.1 Browser Settings
              </h3>
              <p className="mb-4 text-gray-700">Most browsers allow you to:</p>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>Block all cookies</li>
                <li>Block third-party cookies</li>
                <li>Delete existing cookies</li>
                <li>Set cookie preferences</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                5.2 Cookie Consent
              </h3>
              <p className="mb-4 text-gray-700">
                When you first visit our website, you'll see a cookie consent
                banner. You can change your preferences at any time by clicking
                the "Cookie Settings" link in our footer.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                5.3 Opt-Out Links
              </h3>
              <p className="mb-4 text-gray-700">
                You can opt out of specific services:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="text-resgato-purple hover:underline"
                  >
                    Google Analytics Opt-out
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/ads/preferences"
                    className="text-resgato-purple hover:underline"
                  >
                    Facebook Ad Preferences
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/psettings/guest-controls"
                    className="text-resgato-purple hover:underline"
                  >
                    LinkedIn Ad Preferences
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                6. Impact of Disabling Cookies
              </h2>
              <p className="mb-4 text-gray-700">
                If you disable cookies, some features of our website may not
                function properly:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>Personalized content and recommendations</li>
                <li>Saved preferences and settings</li>
                <li>Shopping cart functionality</li>
                <li>Analytics and performance monitoring</li>
                <li>Social media integration</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                7. Updates to This Policy
              </h2>
              <p className="mb-4 text-gray-700">
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or for legal reasons. We will notify
                you of any material changes by posting the updated policy on our
                website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                8. Contact Us
              </h2>
              <p className="mb-4 text-gray-700">
                If you have questions about our use of cookies, please contact
                us:
              </p>
              <div className="rounded-lg bg-gray-100 p-4">
                <p className="mb-2 text-gray-700">
                  <strong>Resgato</strong>
                </p>
                <p className="mb-2 text-gray-700">
                  Email:{' '}
                  <a
                    href="mailto:privacy@resgato.com"
                    className="text-resgato-purple hover:underline"
                  >
                    privacy@resgato.com
                  </a>
                </p>
                <p className="mb-2 text-gray-700">
                  Phone:{' '}
                  <a
                    href="tel:+18017421540"
                    className="text-resgato-purple hover:underline"
                  >
                    (801) 742-1540
                  </a>
                </p>
                <p className="text-gray-700">Address: Salt Lake City, Utah</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;







