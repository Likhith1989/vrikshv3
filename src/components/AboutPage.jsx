import React from "react";
import img1 from "../assets/vk0.jpg";
import img2 from "../assets/vk1.jpg";
import img3 from "../assets/vk3.jpg";
import img4 from "../assets/vk4.jpg";

const AboutSection = ({ title, description, image, reverse }) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : ""
      } mb-8 items-center md:flex-row`}
    >
      <div
        className={`w-full md:w-1/2 mb-6 md:mb-0 ${
          reverse ? "md:ml-4" : "md:mr-4"
        }`}
      >
        <div className="w-full">
          <img
            src={image}
            alt={title}
            className="w-full object-cover rounded-lg shadow-lg"
            style={{ maxHeight: "300px" }}
          />
        </div>
      </div>
      <div
        className={` md:w-1/2 flex items-center ${
          reverse ? "md:mr-4" : "md:ml-4"
        }`}
      >
        <div className=" w-full md:h-auto h-auto flex flex-col justify-center ">
          <h2 className="text-3xl font-jostBold mb-2 text-[#1E3A2B]">
            {title}
          </h2>
          <p className="text-gray-700 text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-4 my-2">
      <h1 className="text-5xl font-jostBold text-left mb-8 text-[#1E3A2B]">
        About Us
      </h1>
      <div className="flex flex-col">
        <AboutSection
          title="Community Engagement"
          description="We believe in the power of community-driven initiatives. By partnering with local communities, and businesses, we not only plant trees but also foster a sense of environmental stewardship. We actively involve our community every step of the way."
          image={img1}
        />
        <AboutSection
          title="Eco-conscious Mission"
          description="At Vriksh, we're driven by a profound commitment to environmental sustainability. Our mission is to create a greener, healthier world for generations to come."
          image={img2}
          reverse
        />
        <AboutSection
          title="Expertise and Experience"
          description="Our team consists of dedicated professionals who understand the intricate balance of ecosystems. By selecting the right species for your location and techniques, we bring expertise to every project, guaranteeing the long-term health and vitality of your trees."
          image={img3}
        />
        <AboutSection
          title="Transparency and Accountability"
          description="At Vriksh, transparency is key. We provide our clients with detailed insights into our tree planting processes and ensure accountability by regularly monitoring the growth and development of the trees."
          image={img4}
          reverse
        />
      </div>
    </div>
  );
};
