
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        <div>
          <h2 className="section-title">About Resgato</h2>
          <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
            Resgato is a leading digital marketing agency with over 13 years of experience helping businesses achieve meaningful growth through data-driven strategies. We specialize in SEO, PPC, email marketing, and strategic consulting services customized to meet your unique business objectives.
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
            Our team of seasoned digital marketing experts works closely with each client to develop tailored solutions that generate leads, increase conversions, and maximize return on investment. With millions of ad impressions managed and thousands of leads generated for our clients, we have a proven track record of delivering exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-resgato-purple hover:bg-resgato-deep-purple text-white">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          <div className="space-y-3 md:space-y-6">
            <div className="bg-resgato-light-purple rounded-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Our Mission</h3>
              <p className="text-sm md:text-base text-gray-700">
                To empower businesses with effective digital marketing strategies that drive measurable results, increase online visibility, and create sustainable growth opportunities.
              </p>
            </div>
            <div className="bg-resgato-light-purple rounded-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Our Vision</h3>
              <p className="text-sm md:text-base text-gray-700">
                To be the most trusted digital marketing partner for businesses seeking exceptional ROI and long-term success in an increasingly competitive online landscape.
              </p>
            </div>
          </div>
          <div className="space-y-3 md:space-y-6 mt-3 sm:mt-6 md:mt-12">
            <div className="bg-resgato-light-purple rounded-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Our Values</h3>
              <ul className="text-sm md:text-base text-gray-700 list-disc list-inside space-y-1 md:space-y-2">
                <li>Results-Driven</li>
                <li>Transparency</li>
                <li>Innovation</li>
                <li>Partnership</li>
              </ul>
            </div>
            <div className="bg-resgato-light-purple rounded-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Our Approach</h3>
              <p className="text-sm md:text-base text-gray-700">
                Data-driven, customized strategies with clear metrics and regular reporting to maximize your marketing ROI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
