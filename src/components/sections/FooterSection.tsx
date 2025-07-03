import { Button } from '../ui/button';
import { Input } from '../ui/input';

// Data for important links
const importantLinks = [
  { label: 'The Journey', href: 'https://redgirraffe.com/in/app/thejourney' },
  {
    label: 'Board of Advisors',
    href: 'https://redgirraffe.com/in/app/boardofadvisors',
  },
  {
    label: 'Founding Team',
    href: 'https://redgirraffe.com/in/app/foundingteam',
  },
  {
    label: 'INDIA - S A & I Team',
    href: 'https://redgirraffe.com/in/app/strategyadvisoryteam',
  },
  {
    label: 'Media Relations',
    href: 'https://redgirraffe.com/in/app/mediarelations',
  },
  { label: 'Higher Purpose', href: 'https://redgirraffe.com/in/app/purpose' },
  { label: 'Our Values', href: 'https://redgirraffe.com/in/app/values' },
  { label: 'RentPay™', href: 'https://redgirraffe.com/in/app/rentpay-details' },
  { label: 'About Us', href: 'https://redgirraffe.com/in/app/aboutus' },
  { label: 'Reviews', href: '#' },
  { label: 'FAQs', href: 'https://redgirraffe.com/in/app/faqs' },
  { label: 'Blog', href: 'https://redgirraffe.com/blog/' },
  {
    label: 'Press Releases',
    href: 'https://redgirraffe.com/blog/media-corner/',
  },
];

// Data for policies & compliance
const policiesLinks = [
  {
    label: 'Fixed Deposit',
    href: 'https://redgirraffe.com/in/app/fixed-deposit',
  },
  { label: 'Refer & Earn', href: 'https://redgirraffe.com/in/app/referrals' },
  {
    label: 'Privacy Policy',
    href: 'https://redgirraffe.com/in/app/privacypolicy',
  },
  {
    label: 'Refund/Cancellation Policy',
    href: 'https://redgirraffe.com/in/app/refund',
  },
  {
    label: 'Terms & Conditions',
    href: 'https://redgirraffe.com/in/app/terms-and-conditions',
  },
  {
    label: 'Anti corruption & Bribery Policy',
    href: 'https://redgirraffe.com/in/app/anti-corruption-bribery',
  },
  {
    label: 'Code of Business Conduct & Ethics',
    href: 'https://redgirraffe.com/in/app/code-business-conduct-ethics',
  },
  {
    label: 'Anti-Fraud Policy Investigation',
    href: 'https://redgirraffe.com/in/app/anti-fraud-policy-investigation',
  },
  {
    label: 'Anti-Money Laundering Policy',
    href: 'https://redgirraffe.com/in/app/anti-money-laundering-policy',
  },
  {
    label: 'Sanctions Compliance Statement',
    href: 'https://redgirraffe.com/in/app/sanctions-compliance-statement',
  },
  {
    label: 'Grievance Redressal Policy',
    href: 'https://redgirraffe.com/in/app/grievance-redressal-policy',
  },
];

// Data for business services
const businessServices = [
  {
    label: 'List Your Property',
    href: 'https://redgirraffe.com/in/app/list-property',
  },
  {
    label: 'Register as Agent',
    href: 'https://redgirraffe.com/in/app/register-as-agent',
  },
  {
    label: 'Corporate Rental ERP',
    href: 'https://redgirraffe.com/in/app/rentpay-erp',
  },
  { label: 'SME Loans', href: 'https://redgirraffe.com/in/app/sme-loans' },
  {
    label: 'Post Your Requirement',
    href: 'https://redgirraffe.com/in/app/post-requirement',
  },
];

// Data for office locations
const officeLocations = [
  {
    country: 'United Kingdom',
    company: 'RedGirraffe Inc.',
    address: 'Harben House, Harben Parade, Finchley Road, London, NW3 6LH.',
  },
  {
    country: 'Singapore',
    company: 'RedGirraffe Holdings',
    address: '3 Temasek Avenue, Centennial Tower, #17-01, Singapore 039190.',
  },
  {
    country: 'India',
    company: 'RedGirraffe.com',
    addresses: [
      '904, Galleria Towers, DLF Phase IV, Gurgaon, Haryana - 122002.',
      '507, Tulsiani Chambers, Nariman Point, Mumbai - 400021.',
    ],
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Important Links */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm sm:text-base mb-1">Important Links</h3>
            <p className="text-yellow-500 text-xs sm:text-sm mb-4">
              Quick access to essential pages
            </p>
            <div className="space-y-1 sm:space-y-2">
              {importantLinks.map(({ label, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Policies & Compliance */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
              Policies & Compliance
            </h3>
            <p className="text-yellow-500 text-xs sm:text-sm mb-4">
              Key policies for security and compliance
            </p>
            <div className="space-y-1 sm:space-y-2">
              {policiesLinks.map(({ label, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Business Services */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
              Business Services
            </h3>
            <p className="text-yellow-500 text-xs sm:text-sm mb-4">
              Solutions for businesses & partners
            </p>
            <div className="space-y-1 sm:space-y-2">
              {businessServices.map(({ label, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Our Offices */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm sm:text-base mb-1">Our Offices</h3>
            <p className="text-yellow-500 text-xs sm:text-sm mb-4">Global presence, local impact</p>
            <div className="space-y-4 sm:space-y-6">
              {/* United Kingdom */}
              <div className="space-y-1">
                <h4 className="text-yellow-500 font-medium text-xs sm:text-sm">United Kingdom</h4>
                <p className="text-white text-xs sm:text-sm font-medium">RedGirraffe Inc.</p>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Harben House, Harben Parade, Finchley Road, London, NW3 6LH.
                </p>
              </div>

              {/* Singapore */}
              <div className="space-y-1">
                <h4 className="text-yellow-500 font-medium text-xs sm:text-sm">Singapore</h4>
                <p className="text-white text-xs sm:text-sm font-medium">RedGirraffe Holdings</p>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  3 Temasek Avenue, Centennial Tower, #17-01, Singapore 039190.
                </p>
              </div>

              {/* India */}
              <div className="space-y-1">
                <h4 className="text-yellow-500 font-medium text-xs sm:text-sm">India</h4>
                <p className="text-white text-xs sm:text-sm font-medium">RedGirraffe.com</p>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  904, Galleria Towers, DLF Phase IV, Gurgaon, Haryana - 122002.
                </p>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  507, Tulsiani Chambers, Nariman Point, Mumbai - 400021.
                </p>
              </div>
            </div>
          </div>

          {/* Stay Connected */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm sm:text-base mb-1">Stay Connected</h3>
            <p className="text-yellow-500 text-xs sm:text-sm mb-4">Never miss an update</p>

            {/* Email Input */}
            <div className="mb-6">
              <div className="flex items-center bg-white rounded-full p-1 mb-3 max-w-xs">
                <Input
                  className="flex-1 border-0 bg-transparent text-gray-600 placeholder:text-gray-400 text-xs sm:text-sm px-3 focus:outline-none"
                  placeholder="Enter your email"
                />
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Company Info */}
            <div className="space-y-3">
              <img src="/logo.svg" alt="" />

              <div className="flex flex-wrap items-center gap-1 text-yellow-500 text-xs sm:text-sm">
                <span>Payments</span>
                <span>|</span>
                <span>B2B SaaS</span>
                <span>|</span>
                <span>Real Estate</span>
              </div>

              <div>
                <p className="text-yellow-500 text-xs sm:text-sm mb-1">Write to us at:</p>
                <a
                  href="mailto:connect@redgirraffe.com"
                  className="text-white text-xs sm:text-sm hover:text-yellow-500 transition-colors"
                >
                  connect@redgirraffe.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-4 border-t border-yellow-600">
          <div className="text-center">
            <p className="text-white text-xs sm:text-sm font-medium">
              Copyright © 2025-2026 | RedGirraffe - All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
