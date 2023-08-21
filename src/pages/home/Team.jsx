const Team = () => {
  return (
    <section className="wrapper py-14 lg:py-20">
      <div className="w-[90%] max-w-[1800px] flex justify-start sm:items-start items-center flex-col gap-8">
        <h3 className=" text-black   font-bold font-agency text-[45px] sm:text-[70px] md:pl-20">
          MEET THE <span className="text-primary">TEAM</span>
        </h3>
        <div className="flex mt-0 sm:mt-10 justify-center sm:justify-between flex-wrap items-center gap-5 w-full">
          <TeamBox img="/team1.png" linkedin="#" />
          <TeamBox img="/team2.png" linkedin="#" />
          <TeamBox img="/team3.png" linkedin="#" />
          <TeamBox img="/team4.png" linkedin="#" />
          <TeamBox img="/team5.png" linkedin="#" />
          <TeamBox img="/team6.png" linkedin="#" />
        </div>
      </div>
    </section>
  );
};

export default Team;

const TeamBox = ({ img, linkedin }) => {
  return (
    <div className="w-full max-w-[277px] relative">
      <a
        href={linkedin}
        className="absolute top-14 left-6 -translate-x-1/2 -translate-y-1/2"
        target="blank"
      >
        <img
          src="/linkedin-team.svg"
          className="w-[43px] object-contain"
          alt=""
        />
      </a>
      <img src={img} className="w-full object-contain" alt="" />
    </div>
  );
};
