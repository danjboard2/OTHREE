import { useState} from "react";
import React from 'react';
import { Player, ControlBar, LoadingSpinner, BigPlayButton } from 'video-react';
import "/node_modules/video-react/dist/video-react.css"; 

const Info = () => {
  const TABS = [
    {
      name: "Lending Platform",
      img: "/lending.png",
      video: "../videos/LENDING_PLATFORM.mp4",
    },
    {
      name: "Marketplace",
      img: "/marketplace.png",
      video: "../videos/MARKETPLACE.mp4",
    },
    {
      name: "Token",
      img: "/token.png",
    },
    {
      name: "Council",
      img: "/council.png",
    },
    {
      name: "Governance",
      img: "/governance.png",
    },
    {
      name: "Due Diligence",
      img: "/diligence.png",
    },
    {
      name: "Treasury",
      img: "/treasury.png",
    },
    {
      name: "Insurance Fund",
      img: "/insurance.png",
    },
  ];
  const TABS__DATA = {
    "lending platform": {
      heading: "Lending Platform",
      desc: "O3 Lending Platform reshapes the lending concept, democratizing access to AAA contracts to build a sustainable economy and future. Utilizing smart contract, we democratize the future of finance and create a capital conduit to green initiatives in a transparent, secure, and decentralized way.",
      url: "/whitepaper.pdf#page=10",
      img: "/lending-info.png",
      video: "../videos/LENDING_PLATFORM.mp4",
    },
    marketplace: {
      heading: "Marketplace",
      desc: "O3 Marketplace is your key to an easy access to the burgeoning carbon credit market. Offering a reliable, blockchain-powered exchange, we streamline the buying, selling, and holding of verified Digital Carbon Credits.  Our open and dynamic approach leads to the evolution of a healthier and more sustainable market landscape for all.",
      url: "/whitepaper.pdf#page=10",
      img: "/marketplace-info.png",
      video: "../videos/MARKETPLACE.mp4",
    },
    token: {
      heading: "Token",
      desc: "O3 Token, the cornerstone of our ecosystem, embodies our vision for a sustainable and impactful future. By being a holder, O3 Token opens up a world of opportunities – from access to premium lending contracts, earning DCC rewards, to having a significant voice in governance decisions. In essence, it's the tangible form of empowerment, offering both value and utility while driving positive global impact decisions.",
      url: "/whitepaper.pdf#page=15",
      img: "/token-info.png",
      video: "../videos/TOKEN.mp4",
    },
    council: {
      heading: "Council",
      desc: "Composed of a select group of professionals with a wealth of experience in sustainable finance, environmental policy, and blockchain technology, the O3 Council is tasked to facilitate, oversee, and align O3's operations and initiatives with the organization's and community’s broader vision for a sustainable future.",
      url: "/whitepaper.pdf#page=11",
      img: "/council-info.png",
      video: "../videos/COUNCIL.mp4",
    },
    governance: {
      heading: "Governance",
      desc: "Community members become active investors in the O3 Ecosystem. They hold an influential voice in the ecosystem's decisions, reflecting our belief in democratized governance. By holding O3 Token, community members have governance rights on the course of our platform from project listings to funding.",
      url: "/whitepaper.pdf#page=12",
      img: "/governance-info.png",
      video: "../videos/GOVERNANCE.mp4",
    },
    "due diligence": {
      heading: "Due Diligence",
      desc: "Our dedicated team of due diligence experts takes on the crucial task of ensuring the credibility and viability of every project within our ecosystem. Their comprehensive process involves a deep dive into the project's potential for scalability and environmental impact. Simultaneously, they scrutinize the track record, credentials, and governance practices of organizations applying for our support.",
      url: "/whitepaper.pdf#page=13",
      img: "/diligence-info.png",
      video: "../videos/DUE_DILIGENCE.mp4",
    },
    treasury: {
      heading: "Treasury",
      desc: "The O3 Treasury is designed to ensure the long-term sustainability and growth of our platform. A designated percentage of the revenue generated from each project is methodically allocated to the O3 Treasury. The continuous flow of funds into the treasury not only aids in its growth and ability to fund more projects but also increases the inherent value of the deflationary O3 Token.",
      url: "/whitepaper.pdf#page=13",
      img: "/treasury-info.png",
      video: "../videos/TREASURY.mp4",
    },

    "insurance fund": {
      heading: "Insurance Fund",
      desc: "The O3 Insurance Fund is designed with the principal aim of protecting our invested community of lenders from any unforeseen contractual defaults. We place paramount value on the security and transparency of our operations. Every lending funneled towards the listed projects that have successfully navigated through our multi-layered due diligence process is enveloped in the safety net of this fund.",
      url: "/whitepaper.pdf#page=14",
      img: "/insurance-info.png",
      video: "../videos/INSURANCE_FUND.mp4",
    },
  };
  const [selectedTab, setSetselectedTab] = useState("Lending Platform");

  return (
    <section className="wrapper my-10 sm:my-20">
      <div className="flex justify-start items-start flex-col w-[90%] max-w-[1350px] gap-10">
        <div className="grid grid-cols-2 lg:grid-cols-4  w-full gap-y-12">
          {TABS.map((elem, idx) => {
            return (
              <Tab
                {...elem}
                key={idx + elem.name}
                handleFunction={setSetselectedTab}
                activeTab={selectedTab}
              />
            );
          })}
        </div>
            <div id="info"></div>
        {selectedTab && <TabDesc {...TABS__DATA[selectedTab.toLowerCase()]} />}
      </div>
    </section>
  );
};


export default Info;

const Tab = ({ img, name, handleFunction, activeTab }) => {
  function smoothScroll(){
    document.querySelector('#info').scrollIntoView({
        behavior: 'smooth'
    });
  }
  function handleClick(name) {
    handleFunction(name);
    setTimeout(function() { smoothScroll(); }, 300);
  }
  return (
    <>
    <button
      onClick={() => handleClick(name)}
      className={`w-full flex justify-start items-center flex-col gap-4 pb-3 border-b-4 border-solid ${
        activeTab === name ? "border-primary" : "border-[#b3b3b3]"
      }`}
    >
      <div
        className={`${
          activeTab === name ? "bg-primary" : "bg-[#333]"
        } grid place-items-center  rounded-full w-[60px] sm:w-[101px] aspect-square`}
      >
        <img
          src={img}
          className="max-w-[30px] sm:max-w-[50px] object-contain"
          alt=""
        />
      </div>
      <p className="text-black font-bold text-base sm:text-xl">
        <span className="text-primary">0</span>3 {name}
      </p>
    </button>
    </>
  );
};
const TabDesc = ({ video, heading, desc, url }) => {
  return (
    <div className="w-full lg:flex-row flex-col self-center max-w-[1250px] bg-[rgba(23,23,23,0.1)] border-2 rounded-[20px] flex justify-between items-stretch gap-10 p-5 sm:p-8 border-dashed border-white border-opacity-50">
      <div className="flex justify-start flex-col items-start gap-4">
        <h4 className="text-black text-[28px] sm:text-3xl xl:text-[35px] font-bold">
          <span className="text-primary">0</span>3 {heading}
        </h4>
        <p className="text-black lg:mt-4 font-normal text-base xl:text-xl max-w-[550px] leading-[1.67]">
          {desc}
        </p>
        <a
          href={url}
          target="blank"
          className="lg:self-end mt-auto flex justify-center items-center gap-4 text-black  text-xl font-normal"
        >
         O3 Whitepaper
          <img
            src="/arrow-right.png"
            className="invert w-10 xl:w-[56px] object-contain"
            alt=""
          />
        </a>
      </div>
      <div className="video-wrap flex justify-start flex-col max-w-[100%] md:max-w-[50%] items-start gap-4 w-[100%]">
        <Player  disableremoteplayback
        playsInline
        fluid 
        autoPlay
        muted
        src={video}>
          <LoadingSpinner />
        <ControlBar disabled={true}/>
        <BigPlayButton disabled={true} />
          </Player>
    </div>
     </div>
     );
};