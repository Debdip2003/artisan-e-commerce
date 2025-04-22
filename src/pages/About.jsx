import React from "react";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";
import { assets } from "../assets/frontend_assets/assets";

const values = [
  {
    title: "AI-Driven Quality Assurance",
    desc: "We implement AI tools to monitor, suggest improvements, and maintain top-tier product quality—ensuring customers receive the best from every artisan.",
  },
  {
    title: "Seamless Access & Support",
    desc: "Sahaj provides artisans with an intuitive platform to manage their products, track trends, and connect with customers in real-time, breaking all geographic barriers.",
  },
  {
    title: "Empathy-Driven Innovation",
    desc: "Beyond technology, we are guided by empathy and sustainability. Our efforts are rooted in empowering marginalized communities and promoting ethical production.",
  },
];

const leaders = [
  {
    name: "Ayush Saha Roy",
    role: "Leader & Co-Founder",
    image: assets.cto_img,
    desc: "Ayush architects Sahaj's AI-driven backbone. His expertise ensures our tools are not only intelligent but also accessible to every artisan.",
  },
  {
    name: "Soumalya Baksi",
    role: "Member & Co-Founder",
    image: assets.ceo_img,
    desc: "Soumalya leads Sahaj with a vision to merge tradition and technology. His leadership drives innovation while staying rooted in empathy and sustainability.",
  },
  {
    name: "Sulagna Dutta",
    role: "Supporting Member",
    image: assets.cpo_img,
    desc: "Sulagna ensures every product at Sahaj reflects craftsmanship and innovation. She transforms ideas into experiences that empower our users.",
  },
  {
    name: "Debdip Bhattacharya",
    role: "Supporting Member",
    image: assets.artisan_head_img,
    desc: "Debdip works closely with artisans across regions, ensuring their voices are heard and needs addressed with compassion and care.",
  },
];

const About = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-20 text-center">
        <Title text1={"ABOUT"} text2={"US"} />
        <div className="mt-10 flex flex-col md:flex-row items-center gap-10">
          <img
            src={assets.hero_img}
            alt="Sahaj Artisans"
            className="rounded-xl w-full md:max-w-[500px] shadow-xl hover:scale-105 transition-transform duration-300"
          />
          <div className="text-left space-y-6 max-w-xl">
            <p className="text-lg">
              <strong className="text-2xl text-orange-500">
                Sahaj – AI for Artisans
              </strong>{" "}
              is an innovative initiative aimed at uplifting local artisans by
              blending traditional craftsmanship with modern technology. We
              bridge the gap between rural creativity and urban demand through
              AI-powered tools and insights.
            </p>
            <p>
              Our platform empowers artisans to showcase their work to a broader
              audience, increase their income, and preserve cultural
              heritage—all while enhancing product quality and customer
              satisfaction.
            </p>
            <div>
              <h3 className="text-xl font-semibold text-indigo-700">
                Our Mission
              </h3>
              <p>
                To support and scale India’s rich artisan ecosystem by
                leveraging the power of Artificial Intelligence. We aim to
                promote sustainable, inclusive growth by digitally enabling
                small artisans and making handmade excellence accessible to
                everyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="mt-20 bg-gradient-to-b from-white via-orange-50 to-yellow-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Title text1={"WHY"} text2={"CHOOSE US"} />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {values.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-300 hover:shadow-lg transition duration-300"
              >
                <h4 className="text-xl font-bold mb-4 text-indigo-700">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {}
      <div className="mt-20 bg-indigo-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Title text1={"MEET OUR"} text2={"LEADERS"} />
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-indigo-300 mb-4"
                />
                <h4 className="text-lg font-bold text-gray-900">
                  {leader.name}
                </h4>
                <p className="text-sm text-orange-500 font-medium mb-2">
                  {leader.role}
                </p>
                <p className="text-gray-600 text-sm">{leader.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
