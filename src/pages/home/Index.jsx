import HomeHeader from "../../layout/HomeHeader";
import About from "./About";
import Hero from "./Hero";
import Partners from "./Partners";
import Platform from "./Platform";
import Team from "./Team";
import Roadmap from "./Roadmap";
import Tokenomics from "./Tokenomics";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Hero />
      <div className="wrapper bg-[#334B08]">
        <div className=" py-10 xl:flex-row flex-col flex justify-between items-start xl:items-center gap-4 w-[90%] max-w-[1400px]">
          <div className="flex justify-center items-center gap-5 2xl:gap-10">
            <h3 className="uppercase font-bold font-agency text-[30px] sm:text-[40px] 2xl:text-[50px] text-white">
              Enter the whitelisting
            </h3>
            <img
              src="/arrow-right.png"
              className="w-8 sm:w-[45px] 2xl:w-[56px] object-contain"
              alt=""
            />
          </div>
          <p className="xl:max-w-[650px] text-white font-normal text-base sm:text-xl 2xl:text-2xl">
            <span className="font-bold">
              Secure your position in O3's environmental revolution.
            </span>{" "}
            <br /> Join the whitelist now and step forward in a privileged
            journey towards a more sustainable and prosperous future.
          </p>
        </div>
      </div>
      <About />
      <Partners />
      <Platform />
      <div className="wrapper bg-[rgb(24,24,24)]">
        <div className=" py-10 xl:flex-row flex-col flex justify-between items-start xl:items-center gap-4 w-[90%] max-w-[1400px]">
          <div className="flex justify-center items-center gap-5 2xl:gap-10">
            <h3 className="uppercase font-bold font-agency text-[30px] sm:text-[40px] 2xl:text-[50px] text-white">
              Enter the whitelisting
            </h3>
            <img
              src="/arrow-right.png"
              className="w-8 sm:w-[45px] 2xl:w-[56px] object-contain"
              alt=""
            />
          </div>
          <p className="xl:max-w-[650px] text-white font-normal text-base sm:text-xl 2xl:text-2xl">
            <span className="font-bold">
              Secure your position in O3's environmental revolution.
            </span>{" "}
            <br /> Join the whitelist now and step forward in a privileged
            journey towards a more sustainable and prosperous future.
          </p>
        </div>
      </div>
      <Tokenomics />
      { /* <img
        src="/grass.png"
        className="object-cover w-full min-h-[60px] -mb-2"
        alt=""
  /> */}
       <Roadmap /> 
      {/* <Team /> */}
    </>
  );
};

export default Home;
