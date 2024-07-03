import tick from "../assets/tick.svg";
import cross from "../assets/cross.svg";
import useStore from "../store";
import { useEffect, useRef } from "react";

export const Subs = () => {
  const setRef = useStore((state) => state.setRef);
  const Ref = useRef(null);
  useEffect(() => {
    setRef(Ref.current);
  }, [Ref]);

  return (
    <>
      <div className="mt-12 mb-28 md:mb-32 md:mt-22" ref={Ref}>
        <div className="text-center md:text-center font-jostSemiBold text-2xl md:text-4xl my-10 md:my-24">
          <h1>Play your part in saving the environment</h1>
        </div>
        <div className="relative flex flex-wrap gap-6 justify-evenly">
          <div className=" bg-custom-orange  rounded-3xl p-[32px] md:p-[48px]">
            <div className="my-[8px] md:my-[12px] mr-12 md:mr-20">
              <h1 className="text-3xl md:text-4xl font-jostSemiBold">Basic</h1>
              <p className="text-xs md:text-sm font-jostRegular">
                For personal donations, one time
              </p>
            </div>
            <div className="flex my-[40px] mr-20">
              <h1 className="text-3xl md:text-4xl font-jostSemiBold">$1</h1>
              <p className="text-xs md:text-sm font-jostRegular ml-[10px] md:ml-[15px] mt-[15px]">
                Per tree , one time payment
              </p>
            </div>
            <div className="flex flex-col items-center">
              <button className="bg-white text-custom-green1 text-2xl md:text-3xl rounded-xl font-poppinsBold py-[4px] px-12 md:px-16">
                Plant Now
              </button>
            </div>
            <div>
              <ul className="mt-6 md:mt-10">
                <li className="flex items-center text-lg md:text-xl font-jostSemiBold">
                  <img
                    src={tick}
                    alt="tick"
                    className="mr-4 w-[15px] h-[10px] md:w-[20] md:h-[15px]"
                  />
                  One time purchase
                </li>
                <li className="flex items-center text-lg md:text-xl font-jostSemiBold mt-2 md:mt-4">
                  <img
                    src={tick}
                    alt="tick"
                    className="mr-4 w-[15px] h-[10px] md:w-[20] md:h-[15px]"
                  />
                  One dollar per tree
                </li>
                <li className="flex items-center text-lg md:text-xl font-jostSemiBold  mt-2 md:mt-4">
                  <img
                    src={cross}
                    alt="cross"
                    className="mr-4 w-[15px] h-[10px] md:w-[20] md:h-[15px]"
                  />
                  doesnt calculate your offset
                </li>
              </ul>
            </div>
          </div>
          <div className=" bg-custom-orange rounded-3xl p-[32px] md:p-[48px]">
            <div className="my-[8px] md:my-[12px]">
              <h1 className="text-3xl md:text-4xl font-jostSemiBold">
                Advanced
              </h1>
              <p className="text-xs md:text-sm font-jostRegular">
                For companies to maintain their carbon footprints
              </p>
            </div>
            <div className="flex my-[40px] mr-[28px]">
              <h1 className="text-3xl md:text-4xl font-jostSemiBold">$5</h1>
              <p className="text-xs md:text-sm font-jostRegular ml-[10px] md:ml-[15px] mt-[15px]">
                Per month + addons ,billed monthly
              </p>
            </div>
            <div className="flex flex-col items-center">
              <button className="bg-custom-green1 text-white text-2xl md:text-3xl rounded-xl font-poppinsBold py-[4px] px-12 md:px-16">
                Plant Now
              </button>
            </div>
            <div>
              <ul className="mt-6 md:mt-10">
                <li className="flex items-center text-lg md:text-xl font-jostSemiBold">
                  <img
                    src={tick}
                    alt="tick"
                    className="mr-4 w-[15px] h-[10px] md:w-[20] md:h-[15px]"
                  />
                  monthly subscribtion
                </li>
                <li className="flex items-center text-lg md:text-xl font-jostSemiBold mt-2 md:mt-4">
                  <img
                    src={tick}
                    alt="tick"
                    className="mr-4 w-[15px] h-[10px] md:w-[20] md:h-[15px]"
                  />
                  starting at 5 dollars
                </li>
                <li className="flex items-center text-lg md:text-xl font-jostSemiBold mt-2 md:mt-4">
                  <img
                    src={tick}
                    alt="tick"
                    className="mr-4 w-[15px] h-[10px] md:w-[20] md:h-[15px]"
                  />
                  calculate your offset
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
