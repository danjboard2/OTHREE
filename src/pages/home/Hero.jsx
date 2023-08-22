const Hero = () => {
  return (
    <section className="wrapper bg-hero h-screen bg-no-repeat lg:h-[calc(100vh_-_125px)] min-h-[450px] lg:min-h-[650px] bg-cover bg-left">
      <div className="flex justify-center h-full lg:pt-0 pt-[140px] items-start flex-col gap-8 md:gap-12 w-[90%] max-w-[1400px]">
        <div className="flex max-h-[182px] justify-start items-stretch gap-5">
          <h3 className="font-bold leading-[0.75] font-agency text-[100px] md:text-[232px] text-white">
            <span className="text-primary">0</span>3
          </h3>
          <div className="w-2 bg-white"></div>
          <div className="flex justify-between items-start flex-col gap-4">
            <h4 className="text-white leading-[1] text-[30px] md:text-[50px] font-bold font-agency">
              <span className="text-primary">O</span>RGANIC
            </h4>
            <h4 className="text-white leading-[1] text-[30px] md:text-[50px] font-bold font-agency">
              <span className="text-primary">O</span>FFSET
            </h4>
            <h4 className="text-white leading-[1] text-[30px] md:text-[50px] font-bold font-agency">
              <span className="text-primary">O</span>PERATIONS
            </h4>
          </div>
        </div>
        <p className="max-w-[500px] font-normal text-white text-lg md:text-2xl">
        Restoring the Earth, Reshaping Finance, and Pioneering Re-Fi Innovations
        </p>
      </div>
    </section>
  );
};

export default Hero;
