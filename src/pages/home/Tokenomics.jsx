const Tokenomics = () => {
  return (
    <section
      id="tokenomics"
      className="wrapper bg-cover bg-no-repeat py-6 sm:py-16"
    >
      <div className="w-[90%] lg:flex-row flex-col max-w-[1400px] flex justify-between items-center lg:items-start gap-10">
        <div className="flex  justify-start items-center text-center lg:text-left lg:items-start flex-col gap-3 sm:gap-5">
          <h3 className=" text-black font-bold font-agency text-[45px] sm:text-[70px]">
            TOKEN<span className="text-primary">O</span>MICS
          </h3>
          <p className="border-2 rounded-2xl px-6 py-5 border-solid border-primary text-lg sm:text-2xl 2xl:text-[30px] font-bold leading-[1.4]">
            Total supply <br /> <span className="font-normal">150,000,000</span>
          </p>
        </div>
       <img
          src="/pie-chart.png"
          className="w-full max-w-[600px] xl:max-w-[800px] 2xl:max-w-[1000px] object-contain"
          alt=""
        />
      </div>
    </section>
  );
};

export default Tokenomics;
