import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import useStore from "../store";

export const Vhome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const Ref = useStore((state) => state.Ref);
  const handle = () => {
    if (Ref) {
      Ref.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-green-bg min-h-screen flex flex-col items-center text-white">
      <header className="w-full py-[8px] xl:py-6 flex items-center justify-between bg-green-bg">
        <h1 className="pl-[2rem] cs:pl-[5rem] xl:pl-[6.81rem] py-[1rem] pr-[4rem] text-[3rem] xl:text-[3rem] font-jostSemiBold font-medium">
          Vriksh
        </h1>
        <div className="relative flex items-center">
          <button
            onClick={toggleMenu}
            className="text-2xl md:text-3xl text-white mr-10 focus:outline-none lg:hidden"
          >
            <FaBars />
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } xl:flex lg:flex flex-col lg:flex-row items-center lg:bg-transparent bg-white xl:bg-white lg:bg-white lg:space-x-8 w-[10rem] md:w-[14rem] xl:h-[3.5rem]  lg:h-[3.2rem] mt-1 md:mt-0 lg:w-auto absolute lg:relative top-full right-[1rem] lg:top-0 lg:left-0 xl:rounded-l-[2rem] lg:rounded-l-[2rem] lg:rounded-none rounded-lg lg:shadow-none shadow-lg z-10 lg:py-0 py-3`}
          >
            <nav className="flex flex-col lg:flex-row items-center  lg:mr-[4rem] md:mr-[3rem] lg:space-x-8 w-full lg:w-auto text-green-bg2 rounded-lg lg:rounded-none">
              <a
                href="#home"
                className="text-xl py-1 lg:ml-[5rem]  xl:ml-[8.25rem] font-jostRegular  hover:text-green-bg"
              >
                Home
              </a>
              <a
                href="#projects"
                className="text-xl py-1 lg:pl-[8rem] lg:pr-[5rem] xl:pr-[8rem] xl:pl-[10rem] font-jostRegular hover:text-green-bg"
              >
                Projects
              </a>
              <a
                href="#about"
                className="text-xl py-1 lg:pr-[5rem] xl:pr-[8rem] font-jostRegular hover:text-green-bg"
              >
                About
              </a>
              <button
                onClick={handle}
                className="bg-green-bg text-white w-[12rem] xl:w-[12rem] lg:w-[12rem]  xl:px-[0rem] xl:py-[0.3rem] rounded-[1rem] xl:text-xl text-lg text-center font-semibold font-jostSemiBold xl:mr-[4rem] lg:ml-5 mt-1 lg:p-[0.2rem] lg:mt-0"
              >
                Plant Now
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center mt-[5rem] md:mt-[7rem] sm:mt-[7rem] lg:mt-[6rem] text-center px-3 py-16">
        <h2 className="text-4xl md:text-[4rem] font-[Gilroy-Bold] mb-6 leading-tight">
          The future cant wait, Plant a Vriksh today
        </h2>
        <p className="text-[1.5rem] font-jostRegular px-[1rem] xl:px-[9.7rem] mb-8">
          Trees absorb carbon dioxide, which is a greenhouse gas that
          contributes to climate change and releases oxygen which we need to
          live.
        </p>
        <div className="space-x-0 mb-[6rem] lg:mb-[6rem] md:mb-[4rem] flex flex-col md:flex-row items-center md:space-x-10 space-y-4 md:space-y-0">
          <button
            onClick={handle}
            className="bg-white text-green-bg mb-1 w-[14.25rem] font-jostSemiBold font-semibold text-[1.5rem] md:text-[2rem] px-6 py-[0.7rem] rounded-[1rem] hover:bg-gray-200"
          >
            Plant Now
          </button>
          <button className="bg-white text-green-bg w-[14.25rem] font-jostSemiBold font-semibold text-[1.5rem] md:text-[2rem] px-6 py-[0.7rem] rounded-[1rem] hover:bg-gray-200">
            Login
          </button>
        </div>
      </main>
    </div>
  );
};
