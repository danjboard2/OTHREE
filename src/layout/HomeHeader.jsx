import { useState } from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  const [headerToggle, setHeaderToggle] = useState(false);

  const ScrollIntoViewFunc = (id) => {
    setHeaderToggle(false);
    if (window.innerWidth > 1024) {
      document
        .querySelector(id)
        .scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      document
        .querySelector(id)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img
              src="/logo.svg"
              className="object-contain w-[60px] lg:w-[75px]"
              alt=""
            />
          </Link>
          <div className="w-[1px] lg:block hidden h-[80px] bg-[#5B5B5B]"></div>
          <nav
            className={`lg:static fixed top-0 ${
              headerToggle ? "right-0" : "-right-full"
            } flex justify-start lg:justify-center items-center sm:items-start lg:items-center gap-12 xl:gap-16 flex-col lg:flex-row px-[3rem] pt-[6rem] pb-[3rem] overflow-y-auto h-full w-full bg-header lg:bg-transparent z-[102] transition-all duration-700 sm:max-w-[450px] lg:p-0 lg:overflow-visible lg:h-auto lg:w-auto lg:max-w-none`}
          >
            <button
              onClick={() => {
                ScrollIntoViewFunc("#about");
              }}
              className="text-left text-white lg:w-min text-xl font-normal"
            >
              01. <span className="font-bold">About</span>
            </button>
            <button
              onClick={() => {
                ScrollIntoViewFunc("#partners");
              }}
              className="text-left text-white lg:w-min text-xl font-normal"
            >
              02. <span className="font-bold">Partners</span>
            </button>
            <button
              onClick={() => {
                ScrollIntoViewFunc("#ecosystem");
              }}
              className="text-left text-white lg:w-min text-xl font-normal"
            >
              03. <span className="font-bold">Ecosystem</span>
            </button>
            <a
              href="#tokenomics"
              onClick={() => setHeaderToggle(false)}
              className="text-white lg:w-min text-xl font-normal"
            >
              04. <span className="font-bold">Tokenomics</span>
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="flex lg:hidden justify-center  items-center gap-7"
            >
              <p className="font-bold text-xl text-white">Get in touch</p>
              <img
                className="w-10 xl:w-[56px] object-contain"
                src="/arrow-right.png"
                alt=""
              />
            </a>
          </nav>
        </div>
        <div className="hidden lg:flex justify-center pr-8 items-center gap-7">
          <div className="w-[1px] h-[80px] bg-[#5B5B5B]"></div>
          <a
            href="#"
            target="blank"
            className="flex justify-center items-center gap-7"
          >
            <p className="font-bold text-xl text-white">Get in touch</p>
            <img
              className="w-10 xl:w-[56px] object-contain"
              src="/arrow-right.png"
              alt=""
            />
          </a>
        </div>
        <button
          onClick={() => setHeaderToggle((prev) => !prev)}
          className="lg:hidden block text-white relative z-[103]"
        >
          {headerToggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
