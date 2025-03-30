import { useState } from "react";
import Insurance from "../../../assets/isurance.png";
import Access from "../../../assets/access.png";
import Insurantransport from "../../../assets/Insurantransport.png";
import Insurance2 from "../../../assets/insurance2.png";
import Chair from "../../../assets/chair.png";
import LargeDiningTable from "../../../assets/large-dining-table.png";
import SmallDiningTable from "../../../assets/small-dining-table.png"; 
import Box from "../../../assets/box.png"; 

const galleryData = [
  {
    category: "Living Room",
    image: Insurance,
    title: "Living Room Setup",
  },
  {
    category: "Living Room",
    image: Chair,
    title: "Modern Chair",
  },
  {
    category: "Living Room",
    image: LargeDiningTable,
    title: "Large Dining Table",
  },
  {
    category: "Living Room",
    image: SmallDiningTable,
    title: "Small Dining Table",
  },
  {
    category: "Room",
    image: Access,
    title: "Cozy Room Design",
  },
  {
    category: "Kitchens",
    image: Insurantransport,
    title: "Modern Kitchen Look",
  },
  {
    category: "Other",
    image: Insurance2,
    title: "Storage and More",
  },
];

const categories = ["Living Room", "Room", "Kitchens", "Other"];

const SpaceCalculator = () => {
  const [selectedCategory, setSelectedCategory] = useState("Living Room");

  const filteredGallery = galleryData.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div>
      {/* Title Section */}
      <div className="bg-[#F8F8F8] py-10">
        <h2 className="font-bold text-[25px] lg:text-[40px] leading-[36px] text-[#231ADF] text-center">
          space calculator
        </h2>
        <p className="font-bold text-[25px] lg:text-[40px] leading-[36px] text-[#0C094E] text-center pt-5">
          Which box fits?
        </p>
      </div>

      {/* Gradient Background Section */}
      <div className="bg-gradient-to-r from-[rgba(162,198,223,1)] to-[rgba(239,245,247,1)] p-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border font-semibold transition ${
                  selectedCategory === category
                    ? "bg-[#231ADF] text-white"
                    : "bg-white text-[#231ADF]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGallery.map((item, index) => (
              <div
                key={index}
                className="p-4 flex flex-col items-center justify-center transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[100px] h-[100px] object-cover rounded-full bg-white"
                />
                <p className="mt-2 text-center font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center lg:flex-row max-w-7xl mx-auto pt-10 gap-14">
          <div>
            <img src={Box} alt="Box" />
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <img
              src={Chair}
              className="w-[100px] h-[100px] object-cover rounded-full bg-white"
              alt="Chair"
            />
            <h3 className="font-bold text-[32px] text-[#0C094E] mt-4">
              STOCK NOW
            </h3>
            <p className="font-semibold text-[#0C094E] mt-2">
              Let's get started! Select the items you want to store.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceCalculator;
