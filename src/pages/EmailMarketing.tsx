import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import StatsSection from '@/components/StatsSection';
import {
  Mail,
  ArrowRight,
  Users,
  BarChart,
  MessageSquare,
  DollarSign,
  Target,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import PageHelmet from '@/components/PageHelmet';

const EmailMarketing = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHelmet
        title="Utah Email Marketing Services | ROI-Focused Campaigns | Salt Lake City's Email Experts"
        description="Reach potential and current customers with our customized email marketing campaigns that convert and deliver impressive ROI."
        canonicalUrl="/email-marketing"
      />
      <Navbar />
      <main className="flex-grow">
        <h1 className="sr-only">
          Utah Email Marketing Services | Salt Lake City Email Marketing Agency
        </h1>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white via-white to-resgato-light-purple/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <h1 className="text-4xl font-bold md:text-5xl">
                  <span className="bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">
                    Email Marketing
                  </span>{' '}
                  with Resgato
                </h1>
                <p className="max-w-lg text-xl text-gray-700">
                  Reach potential and current customers with our customized
                  email marketing campaigns that convert and deliver impressive
                  ROI.
                </p>
                <Link to="/contact?service=email-marketing">
                  <Button className="bg-resgato-purple text-white hover:bg-resgato-deep-purple">
                    Get Email Strategy Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="animate-fade-in rounded-xl bg-white p-8 shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-resgato-light-purple">
                  <Mail className="h-8 w-8 text-resgato-deep-purple" />
                </div>
                <h2 className="mb-4 text-2xl font-bold">
                  Strategic Email Solutions
                </h2>
                <p className="mb-6 text-gray-600">
                  Our comprehensive email marketing services drive engagement,
                  nurture leads, and boost revenue.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-resgato-purple p-1 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Campaign Strategy & Planning
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-resgato-purple p-1 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      List Segmentation & Management
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-resgato-purple p-1 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700">Automated Email Sequences</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-resgato-purple p-1 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      Performance Analytics & Optimization
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Importance of Email Marketing Section */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                  The Importance of Email Marketing
                </h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    Email marketing isn't just a spam-filled inbox killer. It's
                    an essential ingredient for any digital marketing recipe.
                    Why, you ask? Well, email marketing lets businesses spice
                    things up with their target audience, building a
                    relationship that's both personal and long-lasting.
                  </p>
                  <p>
                    By implementing regular cadence with your prospects and
                    customers, you can build trust. Then if you entertain and
                    delight them, you can take your relationship to the next
                    level and convert.
                  </p>
                  <p>
                    Not only is email marketing cost-effective, but it's a great
                    way to cook up personalized messages that hit the spot.
                    Businesses can easily communicate with their customers,
                    cooking up promotions, serving up news and updates, and
                    sizzling with brand awareness.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/resgato-uploads/06a3fbfe-8265-4f20-934f-543d194bd0c0.png"
                  alt="Email Users Statistics"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* The Recipe Section */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                The Recipe: The Juicy Advantages of Email Marketing
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                One of the tastiest perks of email marketing is the ability to
                measure and track results. Businesses can whip up a storm with
                email marketing software, tracking opens, clicks, and
                conversions to analyze the effectiveness of their campaigns.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card className="border-none shadow-md transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-resgato-light-purple">
                    <DollarSign className="h-7 w-7 text-resgato-deep-purple" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold">Cost-Effective</h3>
                  <p className="text-gray-600">
                    Email marketing offers one of the highest ROIs in digital
                    marketing, with an average return of $40 for every $1 spent.
                    This makes it extremely cost-effective compared to other
                    channels.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-resgato-light-purple">
                    <Target className="h-7 w-7 text-resgato-deep-purple" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold">
                    Personalized & Targeted
                  </h3>
                  <p className="text-gray-600">
                    Segment your audience and send highly personalized content
                    that resonates with specific groups. This targeted approach
                    leads to higher engagement and conversion rates.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-resgato-light-purple">
                    <Zap className="h-7 w-7 text-resgato-deep-purple" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold">Measurable Results</h3>
                  <p className="text-gray-600">
                    Track opens, clicks, conversions, and more in real-time.
                    This data allows for continuous optimization and improvement
                    of your email marketing strategy.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <img
                  src="/resgato-uploads/c69e195b-c2c5-434c-be7b-ac3fb2ce1f7b.png"
                  alt="Daily Email Statistics"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold">
                  Massive Daily Engagement
                </h3>
                <p className="mb-6 text-lg text-gray-700">
                  With 333.2 billion emails sent and received each day in 2022
                  (expected to grow to 376.4 billion by 2025), email remains the
                  dominant form of digital communication worldwide.
                </p>
                <p className="text-lg text-gray-700">
                  This massive reach means your business has the opportunity to
                  connect with customers where they're already spending time
                  every day - their inbox.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Resgato Brings the Flavor Section */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                How Resgato Brings the Flavor
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Here at Resgato, we know that email marketing is the key
                ingredient for businesses of all sizes. Our experts can serve up
                a marketing recipe that's tailored to your business goals and
                target audience.
              </p>
            </div>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <h3 className="mb-6 text-2xl font-bold">
                  Our Email Marketing Process
                </h3>

                <div className="space-y-6">
                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-resgato-purple text-white">
                        1
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-semibold">
                        Audience Segmentation
                      </h4>
                      <p className="text-gray-600">
                        We start by dicing up your target audience, creating a
                        segmented email list to ensure that your messages are
                        reaching the right people at the right time.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-resgato-purple text-white">
                        2
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-semibold">
                        Compelling Content Creation
                      </h4>
                      <p className="text-gray-600">
                        Our team of culinary creatives will cook up some
                        enticing, visually appealing emails that reflect your
                        brand's voice and messaging.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-resgato-purple text-white">
                        3
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-semibold">
                        Automation Setup
                      </h4>
                      <p className="text-gray-600">
                        We'll implement automated sequences that nurture leads,
                        welcome new subscribers, and re-engage inactive
                        customers.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-resgato-purple text-white">
                        4
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-semibold">
                        Performance Monitoring
                      </h4>
                      <p className="text-gray-600">
                        Once your email campaign is launched, we'll keep the
                        oven hot and monitor the results to ensure we've cooked
                        up something delectable with maximum ROI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 grid grid-cols-1 gap-8 lg:order-2">
                <img
                  src="/resgato-uploads/3f29c8f4-0489-47bd-ab86-13ed0a87031b.png"
                  alt="Person reading email on beach"
                  className="w-full rounded-xl shadow-lg"
                />
                <img
                  src="/resgato-uploads/144eee65-8921-416b-9249-38ea50211b6e.png"
                  alt="Email Marketing ROI"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Types of Email Campaigns - Keep this section from the original page */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Email Marketing Solutions
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                We offer a full suite of email marketing services tailored to
                your business goals.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white p-8 shadow-md">
                <div className="mb-6 flex items-center">
                  <Users className="mr-4 h-8 w-8 text-resgato-purple" />
                  <h3 className="text-xl font-bold">
                    Welcome & Onboarding Sequences
                  </h3>
                </div>
                <p className="mb-4 text-gray-600">
                  Make a strong first impression with automated welcome emails
                  that introduce new subscribers to your brand and guide them
                  through their initial experience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-resgato-light-purple p-1 text-resgato-purple">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700">
                      Personalized welcome sequences
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-resgato-light-purple p-1 text-resgato-purple">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700">
                      Product education emails
                    </p>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-md">
                <div className="mb-6 flex items-center">
                  <BarChart className="mr-4 h-8 w-8 text-resgato-purple" />
                  <h3 className="text-xl font-bold">Promotional Campaigns</h3>
                </div>
                <p className="mb-4 text-gray-600">
                  Drive sales and conversions with targeted promotional emails
                  highlighting your products, services, special offers, and
                  limited-time deals.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-resgato-light-purple p-1 text-resgato-purple">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700">
                      Special offer announcements
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-resgato-light-purple p-1 text-resgato-purple">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700">
                      Holiday and seasonal campaigns
                    </p>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-md">
                <div className="mb-6 flex items-center">
                  <MessageSquare className="mr-4 h-8 w-8 text-resgato-purple" />
                  <h3 className="text-xl font-bold">
                    Nurture & Educational Content
                  </h3>
                </div>
                <p className="mb-4 text-gray-600">
                  Build relationships and establish authority through valuable
                  content that educates your audience and positions your brand
                  as an industry leader.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-resgato-light-purple p-1 text-resgato-purple">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700">
                      Industry insights and thought leadership
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-resgato-light-purple p-1 text-resgato-purple">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700">
                      How-to guides and tutorials
                    </p>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-md">
                <div className="mb-6 flex items-center">
                  <Mail className="mr-4 h-8 w-8 text-resgato-purple" />
                  <h3 className="text-xl font-bold">Re-engagement Campaigns</h3>
                </div>
                <p className="mb-4 text-gray-600">
                  Win back inactive subscribers with targeted re-engagement
                  campaigns designed to reignite interest and encourage repeat
                  business.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-resgato-light-purple p-1 text-resgato-purple">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700">
                      Win-back campaigns for inactive subscribers
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 rounded-full bg-resgato-light-purple p-1 text-resgato-purple">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700">
                      Exclusive offers for lapsed customers
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final Course Section */}
        <section className="bg-gradient-to-br from-resgato-deep-purple/90 to-resgato-purple/90 py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Final Course
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-xl">
              Email marketing isn't just a dry salad - it's a succulent dish
              that can win over even the pickiest of eaters. At Resgato, we know
              that a well-executed email marketing strategy is the key
              ingredient for marketing success. So, come feast with us and learn
              more about our email marketing services. We guarantee it'll be
              love at first bite!
            </p>
            <Button className="bg-white text-resgato-deep-purple hover:bg-gray-100">
              Start Your Email Marketing Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default EmailMarketing;
