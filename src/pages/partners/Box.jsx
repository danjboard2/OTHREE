const Box = () => {
  return (
    <section className="wrapper my-10">
      <div className="w-[90%] max-w-[1250px] flex justify-start items-start flex-col  border-2 border-dashed border-black border-opacity-50 rounded-[20px] overflow-hidden bg-[rgba(23,23,23,0.1)]">
        <div className="flex md:flex-row flex-col justify-between items-start gap-5 w-full p-8 bg-[rgba(23,23,23,0.1)]">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6">
            <div className="grid place-items-center rounded-full bg-white border-2 border-solid border-[#ababab] w-[150px]  h-[150px] ">
              <p className="text-[#767676] text-center text-2xl  uppercase font-bold">
                ORP LOGO
              </p>
            </div>
            <div className="grid place-items-center rounded-full bg-white border-2 border-solid border-[#ababab] w-[150px]  h-[150px] ">
              <p className="text-[#767676] text-center text-base  uppercase font-bold">
                FOREST ORGANIC LOGO
              </p>
            </div>
          </div>
          <a
            href="/whitepaper.pdf#page=27"
            target="blank"
            className="text-black self-end md:self-auto text-xl font-normal flex justify-start items-center gap-6"
          >
            More Information
            <img
              src="/arrow-right.png"
              className="w-[56px] object-contain invert"
              alt=""
            />
          </a>
        </div>
        <div className="flex justify-start items-center sm:items-start flex-col gap-7 px-14 py-7 w-full">
          <h4 className="text-black font-bold text-[35px]">
            <span className="text-primary">O</span>3 Sectors
          </h4>
          <div className="flex flex-wrap  justify-center sm:justify-around items-start w-full gap-8">
            <div className="flex justify-start items-center text-center sm:text-left sm:items-start flex-col gap-6">
              <img
                src="/government.svg"
                className="object-contain w-[80px]"
                alt=""
              />
              <div className="flex justify-start items-start text-left  flex-col gap-2 w-[230px] sm:w-auto">
                <h4 className="text-black font-bold text-2xl">Governments</h4>
                <ul className="flex justify-start  text-left items-start flex-col gap-2 list-disc list-inside w-full sm:w-auto">
                  <li className="text-lg sm:text-xl font-normal text-black">
                    Municipal
                  </li>
                  <li className="text-lg sm:text-xl font-normal text-black">
                    Provincial / State
                  </li>
                  <li className="text-lg sm:text-xl font-normal text-black">
                    Federal
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-start items-center text-center sm:text-left sm:items-start flex-col gap-6">
              <img
                src="/companies.png"
                className="object-contain w-[80px]"
                alt=""
              />
              <div className="flex justify-start items-center text-left sm:items-start flex-col gap-2 w-[230px] sm:w-auto">
                <h4 className="text-black font-bold text-2xl">Companies</h4>
                <ul className="flex justify-start  text-left items-start flex-col gap-2 list-disc list-inside w-full sm:w-auto">
                  <li className="text-lg sm:text-xl font-normal text-black">
                    Land developers
                  </li>
                  <li className="text-lg sm:text-xl font-normal text-black">
                    Real estate
                  </li>
                  <li className="text-lg sm:text-xl font-normal text-black">
                    Commercial residential
                  </li>
                  <li className="text-lg sm:text-xl font-normal text-black">
                    Engineering firms
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-start items-center text-center sm:text-left sm:items-start flex-col gap-6">
              <img
                src="/regions.svg"
                className="object-contain w-[80px]"
                alt=""
              />
              <div className="flex justify-start items-center text-left sm:items-start flex-col gap-2 w-[230px] sm:w-auto">
                <h4 className="text-black font-bold text-2xl">Regions</h4>
                <ul className="flex justify-start  text-left items-start flex-col gap-2 list-disc list-inside w-full sm:w-auto">
                  <li className="text-lg sm:text-xl font-normal text-black">
                    Canada
                  </li>
                  <li className="text-lg sm:text-xl font-normal text-black">
                    US
                  </li>
                  <li className="text-lg sm:text-xl font-normal text-black">
                    Australia
                  </li>
                  <li className="text-lg sm:text-xl font-normal text-black">
                    Caribien
                  </li>
                  <li className="text-lg sm:text-xl font-normal text-black">
                    UK
                  </li>
                  <li className="text-lg sm:text-xl font-normal text-black">
                    France
                  </li>
                  <li className="text-lg sm:text-xl font-normal text-black">
                    UAE
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Box;
