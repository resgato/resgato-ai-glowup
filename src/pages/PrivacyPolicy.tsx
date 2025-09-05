import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHelmet from '@/components/PageHelmet';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHelmet
        title="Privacy Policy | Resgato Digital Marketing Agency"
        description="Learn how Resgato collects, uses, and protects your personal information. Our privacy policy explains your rights and our data practices."
        canonicalUrl="/privacy-policy"
      />
      <Navbar />
      <main className="flex-grow">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="mb-8 text-4xl font-bold text-gray-900">
              Privacy Policy
            </h1>
            <p className="mb-6 text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                1. Introduction
              </h2>
              <p className="mb-4 text-gray-700">
                Resgato ("we," "our," or "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website, use our services, or interact with us.
              </p>
              <p className="mb-4 text-gray-700">
                By using our services, you agree to the collection and use of
                information in accordance with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                2. Information We Collect
              </h2>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                2.1 Personal Information
              </h3>
              <p className="mb-4 text-gray-700">
                We may collect the following personal information:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>Name and contact information (email, phone, address)</li>
                <li>Company information and job title</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
                <li>Service inquiries and support requests</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                2.2 Automatically Collected Information
              </h3>
              <p className="mb-4 text-gray-700">
                When you visit our website, we automatically collect:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                3. How We Use Your Information
              </h2>
              <p className="mb-4 text-gray-700">
                We use your information for the following purposes:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>Provide and improve our digital marketing services</li>
                <li>Communicate with you about services and updates</li>
                <li>Process payments and manage billing</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and security threats</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                4. Information Sharing and Disclosure
              </h2>
              <p className="mb-4 text-gray-700">
                We do not sell, trade, or rent your personal information. We may
                share your information in the following circumstances:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>
                  <strong>Service Providers:</strong> With trusted third-party
                  vendors who assist in operating our business
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a
                  merger, acquisition, or sale of assets
                </li>
                <li>
                  <strong>Consent:</strong> With your explicit consent
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                5. Data Security
              </h2>
              <p className="mb-4 text-gray-700">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                6. Your Rights and Choices
              </h2>
              <p className="mb-4 text-gray-700">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>
                  <strong>Access:</strong> Request a copy of your personal
                  information
                </li>
                <li>
                  <strong>Correction:</strong> Update or correct inaccurate
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information
                </li>
                <li>
                  <strong>Portability:</strong> Receive your data in a portable
                  format
                </li>
                <li>
                  <strong>Objection:</strong> Object to certain processing
                  activities
                </li>
                <li>
                  <strong>Withdrawal:</strong> Withdraw consent for marketing
                  communications
                </li>
              </ul>
              <p className="mb-4 text-gray-700">
                To exercise these rights, contact us at{' '}
                <a
                  href="mailto:privacy@resgato.com"
                  className="text-resgato-purple hover:underline"
                >
                  privacy@resgato.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="mb-4 text-gray-700">
                We use cookies and similar technologies to enhance your
                experience, analyze usage, and provide personalized content. You
                can control cookie settings through your browser preferences.
              </p>
              <p className="mb-4 text-gray-700">
                For more information, see our{' '}
                <a
                  href="/cookie-policy"
                  className="text-resgato-purple hover:underline"
                >
                  Cookie Policy
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                8. International Data Transfers
              </h2>
              <p className="mb-4 text-gray-700">
                Your information may be transferred to and processed in
                countries other than your own. We ensure appropriate safeguards
                are in place to protect your data in accordance with applicable
                laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                9. Children's Privacy
              </h2>
              <p className="mb-4 text-gray-700">
                Our services are not intended for children under 13. We do not
                knowingly collect personal information from children under 13.
                If you believe we have collected such information, please
                contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                10. Changes to This Policy
              </h2>
              <p className="mb-4 text-gray-700">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new policy on
                our website and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                11. Contact Us
              </h2>
              <p className="mb-4 text-gray-700">
                If you have questions about this Privacy Policy or our data
                practices, please contact us:
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

export default PrivacyPolicy;







