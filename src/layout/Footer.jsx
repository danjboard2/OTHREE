const Footer = () => {
  return (
    <footer className="wrapper bg-[rgb(24,24,24)] py-12 ">
      <div className="flex justify-center sm:flex-row flex-col items-center w-[90%] gap-4 md:gap-8">
        <p className="text-white font-normal text-base md:text-2xl">
          <span className="text-primary">Connect</span> with us on our social
          platforms
        </p>
        <div className="flex justify-center items-center gap-4 md:gap-8">
          <a href="#" target="blank">
            <img
              src="/twitter.svg"
              className="max-w-[25px] md:max-w-[31px] object-contain"
              alt=""
            />
          </a>
          <a href="#" target="blank">
            <img
              src="/insta.svg"
              className="object-contain max-w-[20px] md:max-w-[27px]"
              alt=""
            />
          </a>
          <a href="#" target="blank">
            <img
              src="/linkedin.svg"
              className="object-contain max-w-[20px] md:max-w-[28px]"
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
