import { useState } from "react";
import climateImage from "../assets/climate.png";
import waterImage from "../assets/water.png";
import biodiversityImage from "../assets/bio.png";
import water from "../assets/water-logo.svg";
import climate from "../assets/climate-logo.svg";
import biodiversity from "../assets/bio-logo.svg";
import climate2 from "../assets/climate2.svg";
import water2 from "../assets/water2.svg";
import biodiversity2 from "../assets/bio2.svg";

export const Perks = () => {
  const panels = [
    {
      title: "CLIMATE",
      icon: climate,
      hoverIcon: climate2,
      image: climateImage,
      description:
        "In cities, trees can reduce ambient temperatures by up to 8° Celsius. With more than 50% of the world’s population living in cities, pollution is becoming a real threat.",
    },
    {
      title: "WATER",
      icon: water,
      hoverIcon: water2,
      image: waterImage,
      description:
        "A mature evergreen tree can intercept more than 15,000 litres of water every year. Trees help in eradicating floods and increase the strength of roots.",
    },
    {
      title: "BIODIVERSITY",
      icon: biodiversity,
      hoverIcon: biodiversity2,
      image: biodiversityImage,
      description:
        "A single tree is a habitat for many animals, birds, and organisms. When animals that live in trees lose their habitat, they cannot migrate or relocate and tend to become extinct.",
    },
  ];

  return (
    <div className="pb-24 md:pb-44">
      <div className="text-center font-jostSemiBold text-2xl md:text-4xl m-[40px] md:m-20">
        <h1>Perks of planting Trees</h1>
      </div>
      <div className="relative flex flex-wrap gap-10 cs:gap-4 justify-evenly mx-[24px]">
        {panels.map((panel, index) => (
          <div key={index} className="group relative">
            <div
              className="w-52 h-64 mm:w-72 mm:h-80 cs:w-80 cs:h-96 lgg:w-[354px] lgg:h-[448px] rounded-[70px] mm:rounded-[90px] overflow-hidden shadow-lg bg-cover bg-center group-hover:hidden"
              style={{ backgroundImage: `url(${panel.image})` }}
            >
              <div className="flex flex-col my-20 items-center justify-center">
                <div>
                  <img
                    src={panel.icon}
                    alt={`${panel.title} Icon`}
                    className="w-12 h-12 mm:w-24 mm:h-24"
                  />
                </div>
                <div className="my-2">
                  <span className="font-jostBold text-xl mm:text-2xl text-white">
                    {panel.title}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-52 h-64 mm:w-72 mm:h-80 cs:w-80 cs:h-96 lgg:w-[354px] lgg:h-[448px] rounded-[70px] mm:rounded-[90px] bg-custom-green1 overflow-hidden shadow-lg hidden group-hover:block">
              <div className="flex flex-col my-[12px] mm:my-10 items-center justify-center">
                <div className="bg-customGreen1">
                  <img
                    src={panel.hoverIcon}
                    alt={`${panel.title} Icon`}
                    className="w-12 h-12 cs:w-24 cs:h-24"
                  />
                </div>
                <div className="my-2">
                  <span className="font-jostBold text-xl cs:text-2xl text-white">
                    {panel.title}
                  </span>
                </div>
                <div className="flex items-center justify-center h-full mt-[4px] mx-[12px] mm:mt-4 mm:mx-6">
                  <span className="text-center text-white font-jostRegular text-sm mm:text-base cs:text-lg lgg:text-2xl">
                    {panel.description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
