import { Link } from "react-router-dom";

const Note = () => {
  return (
    <section className="wrapper bg-[#334B08] lg:mt-0 mt-[96px] md:mt-[120px] py-10">
      <div className="w-[90%] flex max-w-[1400px] justify-start items-start sm:items-center gap-8 lg:gap-32">
        <Link to="/">
          <img
            src="/arrow-left.png"
            className="min-w-[40px] w-10 lg:w-[56px] object-contain"
            alt=""
          />
        </Link>
        <p className="font-normal text-white text-base sm:text-lg lg:text-2xl max-w-[782px]">
          <strong>
            O3: An <span className="text-primary">all-in-one</span> ReFi
            platform for Sustainable Lending & Governance.
          </strong>{" "}
          Empowering projects and lenders by enhanced stability with insurance
          funds and community-driven growth.
        </p>
      </div>
    </section>
  );
};

export default Note;
