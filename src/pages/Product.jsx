import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const categoryDetails = {
  "Handmade Clothing": {
    description:
      "Handwoven by skilled artisans, each piece of clothing represents a blend of tradition and elegance, tailored for your comfort and style.",
    reviews: [
      { name: "Aarav M.", rating: 5, comment: "Absolutely love the fabric and detailing. Feels unique and special." },
      { name: "Neha S.", rating: 4, comment: "Soft and comfy, and the craftsmanship is impressive." },
    ],
  },
  Jewelry: {
    description:
      "Our handmade jewelry is crafted with care and precision using traditional techniques passed down for generations.",
    reviews: [
      { name: "Ritika K.", rating: 5, comment: "Feels like a royal touch to every outfit. Highly recommended!" },
      { name: "Ananya R.", rating: 4, comment: "Stunning designs, especially the earrings. Worth every penny." },
    ],
  },
  "Home Decor": {
    description:
      "Elevate your space with artistic home décor rooted in heritage and culture. Each piece adds character and warmth to your home.",
    reviews: [
      { name: "Varun G.", rating: 5, comment: "Gorgeous and earthy decor. It’s an aesthetic delight." },
      { name: "Priya D.", rating: 4, comment: "Loved the handmade vibe. Makes my living room pop!" },
    ],
  },
  Pottery: {
    description:
      "Hand-thrown pottery made with natural clay and soulful technique—perfect for your earthy, mindful living space.",
    reviews: [
      { name: "Soham T.", rating: 5, comment: "Perfect glaze and shape. Looks lovely on my dining table." },
      { name: "Isha J.", rating: 4, comment: "Delicate and elegant, great for gifting too!" },
    ],
  },
  Handwoven: {
    description:
      "Handwoven textiles reflect generations of craftsmanship, using traditional looms to produce fabric rich in heritage and comfort.",
    reviews: [],
  },
  Embroidery: {
    description:
      "Each embroidered piece is a canvas of intricate threadwork, handcrafted with passion by skilled artisans.",
    reviews: [],
  },
  Terracotta: {
    description:
      "Terracotta pieces are molded by hand using age-old techniques, bringing warmth and rustic elegance to your space.",
    reviews: [],
  },
  Beadwork: {
    description:
      "Delicate and detailed, our beadwork is handcrafted using traditional patterns passed down through generations.",
    reviews: [],
  },
  "Block Printing": {
    description:
      "Block printed by hand using carved wooden blocks, each fabric is a testament to centuries-old printing traditions.",
    reviews: [],
  },
  "Bamboo Craft": {
    description:
      "Eco-friendly and artistic, our bamboo crafts are skillfully woven by rural artisans into practical and decorative pieces.",
    reviews: [],
  },
  "Stone Carving": {
    description:
      "Stone carvings shaped with precision and patience, celebrating ancient sculptural art in a modern setting.",
    reviews: [],
  },
  Woodwork: {
    description:
      "Every piece of woodwork is carved, shaped, and polished by hand, blending function with traditional artistry.",
    reviews: [],
  },
};

const artisanDetails = {
  artisan1: { name: "Suman Devi", region: "Rajasthan", description: "Suman specializes in traditional block printing using natural dyes. Her work reflects the vibrant culture of rural Rajasthan." },
  artisan2: { name: "Rahul Meena", region: "Madhya Pradesh", description: "Rahul handcrafts terracotta pottery, shaping each piece with precision inspired by local folklore." },
  artisan3: { name: "Ayesha Khan", region: "Uttar Pradesh", description: "Ayesha’s embroidery blends Mughal floral motifs with modern design, rooted in generations of artistry." },
  artisan4: { name: "Tashi Norbu", region: "Ladakh", description: "Tashi works with wool to create traditional handwoven pieces that capture the spirit of the Himalayas." },
  artisan5: { name: "Kamala Bai", region: "Andhra Pradesh", description: "Kamala weaves intricate bamboo crafts, turning sustainable materials into elegant home decor." },
  artisan6: { name: "Devendra Das", region: "Odisha", description: "Devendra is known for his stone carving skills, turning raw granite into sculptures inspired by temple art." },
  artisan7: { name: "Fatima Begum", region: "Kashmir", description: "Fatima embroiders shawls with delicate needlework, preserving the legacy of Kashmiri craft." },
  artisan8: { name: "Manoj Kumar", region: "Himachal Pradesh", description: "Manoj carves intricate wooden patterns using techniques passed through his family for decades." },
  artisan9: { name: "Lalita Joshi", region: "Gujarat", description: "Lalita uses mirror and beadwork to bring vibrant patterns to life, celebrating Gujarati traditions." },
  artisan10: { name: "Anil Thapa", region: "Sikkim", description: "Anil crafts eco-friendly bamboo lamps and baskets, deeply inspired by mountain life." },
  artisan11: { name: "Pooja Rani", region: "Punjab", description: "Pooja blends bold colors and fine threadwork in her embroidery, capturing Punjabi festivity." },
  artisan12: { name: "Naveen Patil", region: "Karnataka", description: "Naveen specializes in block printing with traditional plant-based inks and hand-carved wood stamps." },
  artisan13: { name: "Rekha Sharma", region: "Delhi", description: "Rekha blends contemporary jewelry styles with Mughal techniques, creating timeless statement pieces." },
  artisan14: { name: "Bhavesh Patel", region: "Maharashtra", description: "Bhavesh carves unique wooden toys and homeware with a sustainable approach and playful flair." },
  artisan15: { name: "Sarita Kumari", region: "Bihar", description: "Sarita creates Madhubani-inspired patterns on textiles using brushes and natural colors." },
  artisan16: { name: "Kiran Verma", region: "Chhattisgarh", description: "Kiran molds earthy terracotta sculptures, celebrating tribal traditions in a modern format." },
  artisan17: { name: "Ranjit Singh", region: "Haryana", description: "Ranjit weaves traditional cotton dhurries with minimal tools but maximum skill." },
  artisan18: { name: "Lobsang Dolma", region: "Arunachal Pradesh", description: "Lobsang makes intricate beadwork jewelry inspired by the spiritual colors of her region." },
  artisan19: { name: "Meena Bai", region: "Madhya Pradesh", description: "Meena creates natural-dyed handloom textiles using ancient looms." },
  artisan20: { name: "Sameer Sheikh", region: "West Bengal", description: "Sameer blends jute and cotton to make contemporary textile decor with a rustic feel." },
  artisan21: { name: "Deepa Naik", region: "Goa", description: "Deepa’s jewelry draws on seashells and local elements to create vibrant, coastal charm pieces." },
  artisan22: { name: "Girish Raut", region: "Maharashtra", description: "Girish’s woodwork fuses functionality with cultural motifs inspired by Wari traditions." },
  artisan23: { name: "Ravina Chauhan", region: "Rajasthan", description: "Ravina paints clay pottery with traditional patterns in vibrant natural colors." },
  artisan24: { name: "Imran Qureshi", region: "Uttar Pradesh", description: "Imran’s embroidery reflects Indo-Islamic design, combining color, form, and intricate detail." },
};

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const found = products.find((item) => item._id === productId);
    if (found) {
      setProductData(found);
      setImage(found.image[0]);
    }
  }, [productId, products]);

  if (!productData) return <div className="h-screen" />;

  const categoryInfo = categoryDetails[productData.category] || {
    description: productData.description,
    reviews: [],
  };

  const artisanNumber = (parseInt(productId, 36) % 24) + 1;
  const artisanKey = `artisan${artisanNumber}`;
  const artisanImage = assets[artisanKey];
  const artisanInfo = artisanDetails[artisanKey];

  return (
    <div className="border-t-2 pt-10 px-4 sm:px-8">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2 flex flex-col md:flex-row gap-4">
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto max-h-80 pr-2">
            {productData.image.map((img, idx) => (
              <img
                key={idx}
                src={img}
                className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg cursor-pointer border hover:border-orange-500 transition"
                onClick={() => setImage(img)}
                alt={`Thumb ${idx}`}
              />
            ))}
          </div>
          <img
            src={image}
            className="rounded-xl w-full object-cover shadow-xl border"
            alt="Main Product"
          />
        </div>

        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{productData.name}</h1>
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(4)].map((_, i) => (
              <img src={assets.star_icon} alt="star" key={i} className="w-4 h-4" />
            ))}
            <img src={assets.star_dull_icon} alt="star" className="w-4 h-4" />
            <span className="text-sm text-gray-500 ml-2">(122 reviews)</span>
          </div>
          <h2 className="text-2xl font-semibold text-orange-600">
            ₹{(productData.price * 83.5).toFixed(0)}
          </h2>
          <p className="text-gray-600 leading-relaxed">{categoryInfo.description}</p>

          {Array.isArray(productData.sizes) && productData.sizes.length > 0 && (
            <div>
              <p className="font-medium mb-2">Select Size</p>
              <div className="flex gap-2 flex-wrap">
                {productData.sizes.map((sz, i) => (
                  <button
                    key={i}
                    onClick={() => setSize(sz)}
                    className={`py-2 px-4 border rounded-lg transition-all duration-200 ${
                      size === sz
                        ? "bg-orange-200 border-orange-500 font-semibold"
                        : "hover:bg-orange-100"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => addToCart(productData._id, size)}
            className="mt-6 bg-orange-600 hover:bg-orange-700 text-white py-3 px-8 rounded-xl transition duration-300 shadow-lg"
          >
            Add to Cart
          </button>

          <ul className="mt-6 text-sm text-gray-600 space-y-1">
            <li>✅ 100% Original handcrafted product</li>
            <li>✅ Cash on Delivery available</li>
            <li>✅ Easy returns within 7 days</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">Meet the Artisan</h3>
        <div className="flex items-center gap-6 bg-orange-50 p-4 rounded-lg border">
          <img
            src={artisanImage}
            alt={artisanInfo.name}
            className="w-20 h-20 rounded-full object-cover border"
          />
          <div>
            <p className="font-semibold text-gray-800">{artisanInfo.name}</p>
            <p className="text-sm text-gray-500 italic mb-1">{artisanInfo.region}</p>
            <p className="text-sm text-gray-600">{artisanInfo.description}</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-xl font-bold mb-6">Customer Reviews</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {categoryInfo.reviews.map((review, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border bg-white shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={assets.user_icon}
                  alt="user"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <img key={i} src={assets.star_icon} alt="star" className="w-3.5" />
                    ))}
                    {[...Array(5 - review.rating)].map((_, i) => (
                      <img key={i} src={assets.star_dull_icon} alt="star" className="w-3.5" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  );
};

export default Product;
