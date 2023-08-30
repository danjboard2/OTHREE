import React, {useEffect,Suspense } from "react";
import Doughnut from './DoughnutChart'

const Tokenomics = () => {
  useEffect(() => {
}, []);
  return (
    <section
      id="tokenomics"
      className="wrapper relative bg-cover bg-no-repeat py-6 sm:py-16 min-h-[600px] overflow-hidden"
    >
      <div className="w-full  h-auto min-[900px]:w-[90%] flex-col min-[1240px]:flex-row max-w-[1400px] flex justify-between items-center min-[1240px]:items-start gap-10 min-[1240px]:max-h-[600px]">
        <div className="flex  justify-start items-center text-center min-[1240px]:text-left min-[1240px]:items-start flex-col gap-3 sm:gap-5">
          <h3 className=" text-black font-bold font-agency text-[45px] sm:text-[70px]">
            TOKEN<span className="text-primary">O</span>MICS
          </h3>
          <p className="px-6 py-5 pl-0  text-lg sm:text-2xl 2xl:text-[30px] font-bold leading-[1.4]">
            Total supply <br /> <span className="font-normal">150,000,000</span>
          </p>
        </div>
          <Doughnut/>
      {/* <img
          src="/pie-chart.png"
          className="w-full max-w-[600px] xl:max-w-[800px] 2xl:max-w-[1000px] object-contain"
          alt=""
  /> */}
      </div>
      { /* <img
        src="/grass.png"
        className="object-cover w-full min-h-[60px] absolute top-full translate-y-1 left-0"
        alt=""
  />  */ }
    </section>
  );
};

export default Tokenomics;
