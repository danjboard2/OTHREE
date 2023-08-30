import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <header className="wrapper fixed lg:sticky top-0 left-0 z-50 bg-header lg:drop-shadow-header">
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="bg-black w-full h-full fixed top-0 left-0 bg-opacity-60 lg:hidden block z-[100]"
        ></div>
      )}
      <div className="flex min-h-0 lg:py-0 py-4 max-w-[1500px] lg:min-h-[125px] justify-between items-center w-[90%] gap-5">
        <div className="flex justify-start items-center gap-8 xl:gap-14">
          <Link to="/">
            <img
              src="/logo.svg"
              className="object-contain w-[60px] lg:w-[75px]"
              alt=""
            />
          </Link>
          <div className="w-[1px] lg:block hidden h-[80px] bg-[#5B5B5B]"></div>
          <h4 className="font-bold text-white text-[30px] md:text-[60px] font-agency">
            ECOSYSTEM
          </h4>
        </div>
        <div className="flex justify-center sm:pr-8 items-center gap-7">
          <div className="w-[1px] h-[80px] sm:block hidden bg-[#5B5B5B]"></div>
          <a
            href="whitepaper.pdf"
            target="blank"
            className="flex justify-center items-center gap-7"
          >
            <p className="font-bold sm:block hidden text-xl text-white">
              Whitepaper
            </p>
            <img
              className="w-10 xl:w-[56px] object-contain"
              src="/arrow-right.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
