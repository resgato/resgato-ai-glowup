import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHelmet from '@/components/PageHelmet';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHelmet
        title="Terms of Service | Resgato Digital Marketing Agency"
        description="Read Resgato's terms of service to understand the legal agreement between you and our digital marketing agency."
        canonicalUrl="/terms-of-service"
      />
      <Navbar />
      <main className="flex-grow">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="mb-8 text-4xl font-bold text-gray-900">
              Terms of Service
            </h1>
            <p className="mb-6 text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                1. Agreement to Terms
              </h2>
              <p className="mb-4 text-gray-700">
                By accessing and using Resgato's website and services, you
                accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                2. Description of Service
              </h2>
              <p className="mb-4 text-gray-700">
                Resgato provides digital marketing services including but not
                limited to:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>Search Engine Optimization (SEO)</li>
                <li>Pay-Per-Click (PPC) Advertising</li>
                <li>Social Media Marketing</li>
                <li>Email Marketing</li>
                <li>Content Strategy</li>
                <li>Website Development</li>
                <li>AI Marketing Services</li>
                <li>Strategic Consulting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                3. User Accounts
              </h2>
              <p className="mb-4 text-gray-700">
                When you create an account with us, you must provide accurate,
                complete, and current information. You are responsible for
                safeguarding your account credentials and for all activities
                that occur under your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                4. Payment Terms
              </h2>
              <p className="mb-4 text-gray-700">
                Payment terms are as follows:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>
                  All fees are due upon receipt of invoice unless otherwise
                  agreed in writing
                </li>
                <li>Late payments may result in service suspension</li>
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>
                  Prices are subject to change with 30 days written notice
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                5. Service Level Agreement
              </h2>
              <p className="mb-4 text-gray-700">
                While we strive to provide excellent service, we do not
                guarantee specific results. Digital marketing outcomes depend on
                various factors including market conditions, competition, and
                client cooperation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                6. Client Responsibilities
              </h2>
              <p className="mb-4 text-gray-700">Clients agree to:</p>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>Provide accurate and timely information</li>
                <li>
                  Review and approve materials within reasonable timeframes
                </li>
                <li>Maintain appropriate website and social media accounts</li>
                <li>Comply with applicable laws and regulations</li>
                <li>Provide access to necessary accounts and platforms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                7. Intellectual Property
              </h2>
              <p className="mb-4 text-gray-700">
                Resgato retains ownership of all proprietary materials,
                methodologies, and tools developed or used in providing
                services. Client content and materials remain the property of
                the client.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                8. Confidentiality
              </h2>
              <p className="mb-4 text-gray-700">
                Both parties agree to maintain the confidentiality of
                proprietary information shared during the course of our business
                relationship, except as required by law or with written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                9. Limitation of Liability
              </h2>
              <p className="mb-4 text-gray-700">
                Resgato's liability is limited to the amount paid for services
                in the 12 months preceding the claim. We are not liable for
                indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                10. Indemnification
              </h2>
              <p className="mb-4 text-gray-700">
                You agree to indemnify and hold harmless Resgato from any claims
                arising from your use of our services or violation of these
                terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                11. Termination
              </h2>
              <p className="mb-4 text-gray-700">
                Either party may terminate services with 30 days written notice.
                Upon termination, all outstanding fees become immediately due
                and payable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                12. Dispute Resolution
              </h2>
              <p className="mb-4 text-gray-700">
                Any disputes arising from these terms will be resolved through
                binding arbitration in Salt Lake City, Utah, in accordance with
                the rules of the American Arbitration Association.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                13. Governing Law
              </h2>
              <p className="mb-4 text-gray-700">
                These terms are governed by the laws of the State of Utah,
                United States, without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                14. Changes to Terms
              </h2>
              <p className="mb-4 text-gray-700">
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting. Your continued use
                of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                15. Contact Information
              </h2>
              <p className="mb-4 text-gray-700">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="rounded-lg bg-gray-100 p-4">
                <p className="mb-2 text-gray-700">
                  <strong>Resgato</strong>
                </p>
                <p className="mb-2 text-gray-700">
                  Email:{' '}
                  <a
                    href="mailto:legal@resgato.com"
                    className="text-resgato-purple hover:underline"
                  >
                    legal@resgato.com
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

export default TermsOfService;
