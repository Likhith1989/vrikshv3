import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <>
      <div className="bg-custom-green1 text-white px-[50px] mm:px-[120px] font-jostSemiBold">
        <h1 className="text-xl mm:text-[25px] md:text-3xl lgg:text-[36px] xl:text-4xl xll:text-5xl pt-[40px]">
          Our Objective
        </h1>
        <div className="flex pt-[20px] pb-[60px] space-x-[10px] mm:space-x-[20px]">
          <h1 className="text-[20px] mm:text-[32px] md:text-[40px] cs:text-[55px] lg:text-[60px] lgg:text-[72px] xl:text-[80px] xll:text-[90px]  ">
            ONE MILLION TREES{" "}
          </h1>
          <h1 className="text-[10px] mm:text-[14px] md:text-[15px] cs:text-[20px] lg:text-[20px] lgg:text-[25px] xl:text-[30px] xll:text-[40px] mt-3 mm:mt-5 md:mt-8 cs:mt-9 lg:mt-10 xl:mt-12 xll:mt-10 ">
            BY
          </h1>
          <h1 className="text-[20px] mm:text-[32px] md:text-[40px] cs:text-[55px] lg:text-[60px] lgg:text-[72px] xl:text-[80px] xll:text-[90px]  ">
            {" "}
            2030
          </h1>
        </div>
      </div>
      <footer className="relative flex flex-col bg-footer-image bg-cover bg-center w-auto h-auto  py-[8px]  px-10">
        <div className="relative flex ml-[-50px] mm:ml-0">
          <div>
            <img
              src={logo}
              alt="logo"
              className="w-[120px] h-[120px] cs:w-[150px] cs:h-[150px] xl:w-[191px] xl:h-[191px]"
            />
          </div>
          <div>
            <h1 className="p-[8px] my-[32px] mx-[-35px] cs:my-10 cs:mx-[-45px] xl:my-14 xl:mx-[-55px] text-custom-green1 font-jostSemiBold text-4xl cs:text-5xl xl:text-6xl">
              Vriksh
            </h1>
          </div>
        </div>
        <div className="flex flex-col-reverse m-auto items-center mm:m-0 mm:flex-row justify-evenly ">
          <div className="flex text-center gap-[40px] xl:gap-20">
            <div>
              <h1 className="text-3xl cs:text-4xl xl:text-5xl font-jostSemiBold mb-[24px] cs:mb-8 xl:mb-10">
                Our Social
              </h1>
              <h2 className="text-2xl cs:text-3xl xl:text-4xl font-jostSemiBold text-white mb-[24px] cs:mb-8 xl:mb-10">
                Instagram
              </h2>
              <h2 className="text-2xl cs:text-3xl xl:text-4xl font-jostSemiBold text-white mb-[24px] cs:mb-8 xl:mb-10">
                Facebook
              </h2>
              <h2 className="text-2xl cs:text-3xl xl:text-4xl font-jostSemiBold text-white mb-[24px] cs:mb-8 xl:mb-10">
                Twitter
              </h2>
            </div>
            <div>
              <h1 className="text-3xl cs:text-4xl xl:text-5xl font-jostSemiBold mb-[24px] cs:mb-8 xl:mb-10">
                Discover
              </h1>
              <h2 className="text-2xl cs:text-3xl xl:text-4xl font-jostSemiBold text-white mb-[24px] cs:mb-8 xl:mb-10">
                Home
              </h2>
              <h2 className="text-2xl cs:text-3xl xl:text-4xl font-jostSemiBold text-white mb-[24px] cs:mb-8 xl:mb-10">
                Projects
              </h2>
              <h2 className="text-2xl cs:text-3xl xl:text-4xl font-jostSemiBold text-white mb-[24px] cs:mb-8 xl:mb-10">
                About
              </h2>
            </div>
          </div>
          <div className="pb-10 mm:pb-0 mm:py-[8px]">
            <h1 className="text-3xl cs:text-4xl xl:text-5xl px-[16px] text-center mm:text-left font-jostSemiBold py-[10px] mm:py-[30px] cs:py-[40px] xl:py-[50px]  ">
              Subscribe To <br /> Hear From Us
            </h1>
            <input
              type="text"
              placeholder="Email"
              className="text-2xl cs:text-3xl xl:text-4xl  py-[8px] px-[16px] rounded-2xl w-auto h-auto border border-black"
            />
          </div>
        </div>
        <p className="font-jostRegular text-sm text-center mb-[16px] mt-[0px]">
          Copyright 2024 Vriksh
        </p>
      </footer>
    </>
  );
};
