import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const policies = [
  {
    icon: assets.exchange_icon,
    title: 'Easy Exchange Policy',
    subtitle: 'Hassle-Free Swaps',
    description:
      'We offer a seamless exchange process for any size, fit, or defect issues—ensuring convenience with every purchase.',
    bg: 'bg-gradient-to-br from-yellow-100 to-yellow-50',
  },
  {
    icon: assets.quality_icon,
    title: '7 Days Return Policy',
    subtitle: 'No Questions Asked',
    description:
      'Didn’t like the product? Return it within 7 days, and we’ll handle the rest. Your satisfaction is our priority.',
    bg: 'bg-gradient-to-br from-pink-100 to-pink-50',
  },
  {
    icon: assets.support_img,
    title: '24/7 Customer Support',
    subtitle: 'We’re Here Always',
    description:
      'Our friendly team is always ready to assist you—anytime, anywhere. Reach us through chat, call, or email.',
    bg: 'bg-gradient-to-br from-green-100 to-green-50',
  },
  {
    icon: assets.quality_icon,
    title: 'Authentic Artisan Products',
    subtitle: 'Crafted with Love',
    description:
      'All products are handmade and verified by Sahaj’s quality team—ensuring you get genuine, heartfelt creations.',
    bg: 'bg-gradient-to-br from-indigo-100 to-indigo-50',
  },
];

const OurPolicies = () => {
  return (
    <section className="px-6 py-20 bg-[#fcf9f4] font-sans">
      <h2 className="text-4xl font-bold text-center text-[#222] mb-4">Our Policies</h2>
      <p className="text-center text-gray-500 max-w-xl mx-auto mb-14">
        We're committed to creating a safe, reliable, and joyful experience for our customers and artisans alike. Explore our
        transparent, customer-first policies.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {policies.map((policy, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 ${policy.bg} hover:scale-[1.03]`}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-full shadow-inner ring-2 ring-white">
                <img src={policy.icon} alt={policy.title} className="w-10 h-10 object-contain" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{policy.title}</h3>
            <p className="text-sm text-orange-500 font-medium mb-3">{policy.subtitle}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{policy.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPolicies;
