import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const artisans = [
  {
    name: "Asha Devi",
    region: "Rajasthan",
    image: assets.artisan1,
    description: "Preserving Rajasthan’s rich legacy through traditional hand block prints with passion and precision.",
  },
  {
    name: "Ravi Kumar",
    region: "Uttar Pradesh",
    image: assets.artisan2,
    description: "Breathing life into terracotta with timeless designs rooted in centuries of heritage.",
  },
  {
    name: "Meena Bai",
    region: "Gujarat",
    image: assets.artisan3,
    description: "Mastering the vibrant art of Bandhani to celebrate Gujarat's colorful culture.",
  },
  {
    name: "Suresh Das",
    region: "Odisha",
    image: assets.artisan4,
    description: "Telling mythological tales through intricate strokes of Pattachitra artistry.",
  },
  {
    name: "Lalita Joshi",
    region: "Maharashtra",
    image: assets.artisan5,
    description: "Crafting tribal stories on canvas with the soul of Warli painting.",
  },
  {
    name: "Kiran Reddy",
    region: "Andhra Pradesh",
    image: assets.artisan6,
    description: "Creating magic with Kalamkari art that speaks volumes through natural colors.",
  },
  {
    name: "Naseem Khan",
    region: "Kashmir",
    image: assets.artisan7,
    description: "Shaping delicate beauty with intricate papier-mâché from the valleys of Kashmir.",
  },
  {
    name: "Pooja Sharma",
    region: "Punjab",
    image: assets.artisan8,
    description: "Weaving colorful tales of tradition through each stitch of Phulkari embroidery.",
  },
  {
    name: "Mohammed Faiz",
    region: "Delhi",
    image: assets.artisan9,
    description: "Elegance meets tradition in his Zardozi embroidery, fit for royalty.",
  },
  {
    name: "Rukmini Nair",
    region: "Kerala",
    image: assets.artisan10,
    description: "Spinning sustainability into style with beautiful coir creations.",
  },
  {
    name: "Tashi Doma",
    region: "Ladakh",
    image: assets.artisan11,
    description: "Weaving warmth and culture into every thread of her woolen crafts.",
  },
  {
    name: "Vimla Devi",
    region: "Bihar",
    image: assets.artisan12,
    description: "Bringing folklore to life with the intricate beauty of Madhubani painting.",
  },
  {
    name: "Ganesh Patil",
    region: "Goa",
    image: assets.artisan13,
    description: "Transforming coastal treasures into delicate shell art pieces.",
  },
  {
    name: "Anjali Yadav",
    region: "Jharkhand",
    image: assets.artisan14,
    description: "Keeping the ancient Dokra metal craft alive with her bold expressions.",
  },
  {
    name: "Farzana Sheikh",
    region: "Hyderabad",
    image: assets.artisan15,
    description: "Carving history into metal with intricate Bidriware patterns.",
  },
  {
    name: "Ramesh Chauhan",
    region: "Himachal Pradesh",
    image: assets.artisan16,
    description: "Crafting wooden marvels inspired by Himachal’s forests and folklore.",
  },
  {
    name: "Deepa Nair",
    region: "Tamil Nadu",
    image: assets.artisan17,
    description: "Channeling divine grace into detailed bronze sculptures.",
  },
  {
    name: "Iqbal Hussain",
    region: "Assam",
    image: assets.artisan18,
    description: "Weaving dreams in the luxurious threads of Assam’s golden silk.",
  },
  {
    name: "Lakshmi Devi",
    region: "Karnataka",
    image: assets.artisan19,
    description: "Blending playfulness with tradition through vibrant Channapatna toys.",
  },
  {
    name: "Hari Das",
    region: "West Bengal",
    image: assets.artisan20,
    description: "Moulding earth into expressions of rural Bengal through pottery.",
  },
  {
    name: "Rekha Mehra",
    region: "Madhya Pradesh",
    image: assets.artisan21,
    description: "Breathing life into Maheshwari sarees with elegant handwoven patterns.",
  },
  {
    name: "Tapan Roy",
    region: "Tripura",
    image: assets.artisan22,
    description: "Telling tribal tales through vibrant bamboo and cane crafts.",
  },
  {
    name: "Bhavna Patel",
    region: "Chhattisgarh",
    image: assets.artisan23,
    description: "Celebrating tribal heritage through hand-crafted bell metal sculptures.",
  },
  {
    name: "Jatin Thakur",
    region: "Sikkim",
    image: assets.artisan24,
    description: "Preserving Buddhist heritage through beautiful Thangka paintings.",
  }
];

const ArtisanCard = ({ name, region, image, description }) => (
  <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
    <img
      src={image}
      alt={name}
      className="w-full h-52 object-cover rounded-xl mb-4 border border-gray-100"
    />
    <h3 className="text-xl font-semibold text-teal-700">{name}</h3>
    <p className="text-sm text-gray-500 italic mb-2">{region}</p>
    <p className="text-sm text-gray-700">{description}</p>
  </div>
);

const Artisans = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-teal-50 py-14 px-6 sm:px-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-teal-600 mb-12">
        Meet Our Master Artisans
      </h1>

      {}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-orange-500 mb-6">🌟 Featured Artisans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {artisans.slice(0, 12).map((artisan, idx) => (
            <ArtisanCard key={idx} {...artisan} />
          ))}
        </div>
      </section>

      {}
      <section>
        <h2 className="text-3xl font-bold text-teal-600 mb-6">🌱 Emerging Artisans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {artisans.slice(12).map((artisan, idx) => (
            <ArtisanCard key={idx + 12} {...artisan} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Artisans;
