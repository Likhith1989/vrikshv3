import React from "react";
import img1 from "../assets/vk0.png";
import img2 from "../assets/vk1.png";
import img3 from "../assets/vk3.png";
import img4 from "../assets/vk4.png";

export const AboutPage = () => {
  return (
    <div
      className="md:w-auto w-auto md:mx-auto mx-auto"
      style={{ backgroundColor: "#f8f4f0" }}
    >
      <div className="cursor-default mt[54px] w-[310px] h-[71px] mx-auto text-center text-[57px] text-[#1E3A2B] font-[Gilroy-Bold] md:pt-[30px] pt-[15px]">
        About Us
      </div>

      <div className="mx-auto mt-[69px] md:flex block w-[90%]">
        <div className="md:w-[630px] w-[auto] my-[20px] mx-auto">
          <img className=" rounded-[20px]" src={img1} alt="image1 not found" />
        </div>
        <div className="md:w-[50%] md:h-[auto] h-full my-auto md:ml-[37px] w-[auto]">
          <h1 className="text-[#1E3A2B] md:text-[42px] text-[38px] mt-[34px] font-[Gilroy-XBold] text-left">
            Community Engagement
          </h1>
          <p className="font-[Gilroy-Light] md:text-[22px] text-[16px] text-left">
            We believe in the power of community-driven initiatives. By
            partnering with local communities, and businesses, we not only plant
            trees but also foster a sense of environmental stewardship. We
            actively involve our community every step of the way.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-[69px] md:flex block w-[90%] justify-between">
        <div className="md:hidden flex md:w-[630px] w-[auto] my-[20px] mx-auto">
          <img className="rounded-[20px]" src={img2} alt="image2 not found" />
        </div>
        <div className="md:w-[50%] md:h-[auto] h-full my-auto md:mr-[37px] w-[auto]">
          <h1 className="text-[#1E3A2B] md:text-[42px] text-[38px] mt-[34px] font-[Gilroy-XBold] text-right">
            Eco-conscious Mission
          </h1>
          <p className="font-[Gilroy-Light] md:text-[22px] text-[16px] text-right">
            Our team consists of dedicated professionals who understand the
            intricate balance of ecosystems. By selecting the right species for
            your location and techniques, we bring expertise to every project,
            guaranteeing the long-term health and vitality of your trees.
          </p>
        </div>
        <div className="md:flex hidden md:w-[630px] w-[auto] my-[20px] mx-auto">
          <img className="rounded-[20px]" src={img2} alt="image2 not found" />
        </div>
      </div>
      <div className="mx-auto mt-[69px] md:flex block w-[90%]">
        <div className="md:w-[630px] w-[auto] my-[20px] mx-auto">
          <img className=" rounded-[20px]" src={img3} alt="image1 not found" />
        </div>
        <div className="md:w-[50%] md:h-[auto] h-full my-auto md:ml-[37px] w-[auto]">
          <h1 className="text-[#1E3A2B] md:text-[42px] text-[38px] mt-[34px] font-[Gilroy-XBold] text-left">
            Expertise and Experience
          </h1>
          <p className="font-[Gilroy-Light] md:text-[22px] text-[16px] text-left">
            Our team consists of dedicated professionals who understand the
            intricate balance of ecosystems. By selecting the right species for
            your location and techniques, we bring expertise to every project,
            guaranteeing the long-term health and vitality of your trees.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-[69px] md:flex block w-[90%] justify-between">
        <div className="md:hidden flex md:w-[630px] w-[auto] my-[20px] mx-auto">
          <img className="rounded-[20px]" src={img4} alt="image2 not found" />
        </div>
        <div className="md:w-[50%] md:h-[auto] h-full my-auto md:mr-[37px] w-[auto]">
          <h1 className="text-[#1E3A2B] md:text-[42px] text-[38px] mt-[34px] font-[Gilroy-XBold] text-right">
            Transparency and Accountability
          </h1>
          <p className="font-[Gilroy-Light] md:text-[22px] text-[16px] text-right">
            At Vriksh, transparency is key. We provide our clients with detailed
            insights into our tree planting processes and ensure accountability
            by regularly monitoring the growth and development of the trees.
          </p>
        </div>
        <div className="md:flex hidden md:w-[630px] w-[auto] my-[20px] mx-auto">
          <img className="rounded-[20px]" src={img4} alt="image2 not found" />
        </div>
      </div>
    </div>
  );
};
