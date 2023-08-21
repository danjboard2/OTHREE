import { Link } from "react-router-dom";

const Note = () => {
  return (
    <section className="wrapper bg-[#334B08] lg:mt-0 mt-[96px] md:mt-[120px] py-6">
      <div className="w-[90%] flex max-w-[1400px] justify-start items-start sm:items-center gap-8 lg:gap-32">
        <Link to="/">
          <img
            src="/arrow-left.png"
            className="min-w-[40px] w-10 lg:w-[56px] object-contain"
            alt=""
          />
        </Link>
        <p className="font-normal text-white text-base sm:text-lg  max-w-[782px]">
          <strong>
            We are <span className="text-primary">proud to partner</span> with
            prestigious organizations and industry pioneers, creating a
            powerhouse of mutual growth and sustainability.
          </strong>{" "}
          Through our alliance, we drive innovation, collaboration, and
          contribution worldwide, all steered towards the collective will of
          ecological transformation.
        </p>
      </div>
    </section>
  );
};

export default Note;
