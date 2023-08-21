import React, { useState,useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Platform = () => {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#ecosystem",
          start: window.innerWidth > 1024 ? "top top" : "20% 20%",
          end: "+=3000px",
          pin: true,
          scrub: 1,
          pinSpacing: true,
          markers: true,
        }
    })
    const timeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#pin-eco",
        start: window.innerWidth > 1024 ? "top top" : "20% 20%",
        end: "+=3000px",
        pin: false,
        scrub: 1,
        pinSpacing: false,
        markers: true,
        onEnter: () => timeline3.to(ecosystem, {
          frame: frameCount - 1,
          snap: "frame",
          ease: "none",
          scrollTrigger: {
            trigger: ".canvas-container-ecosystem",
            start: "top top",
            markers: true,
            //once: true,
            scrub: 1,
          },
          onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
        }),
      }
  })
      // images 

  const canvas = document.getElementById("hero-ecosystem");
  const context = canvas.getContext("2d");

  canvas.width = 800;
  canvas.height = window.innerHeight;

  const frameCount =348;
  const currentFrame = (index) =>
    `/images/light/Landing_Page_Ani_${(
      index + 1
    )
      .toString()
      .padStart(3, "00")}.webp`;
  
  const images = [];
  const ecosystem = {
    frame: 230
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    
    img.src = currentFrame(i);
    images.push(img);
  }
  
    timeline.set( "#eco-intro", { top: -400, position:"absolute"});
    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#pin-eco",
        start: window.innerWidth > 1024 ? "top bottom" : "20% 20%",
        end: "+=1000px",
        pin: false,
        scrub: true,
        pinSpacing: false,
        markers: true,
        id:"pintext",
        onEnter: () => timeline2.to(
          "#eco-intro", { top: 150,  position:"absolute"}, {duration:5}
        )
      }
  }) 
  

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[ecosystem.frame], 0, 0);
}
    });

    return () => {
      context.revert();
    };
  }, []);

  const [isVisible, setIsVisible] = useState(true);
 
  useEffect(() => {
  window.addEventListener("scroll" , () => {}, []) 

})

  return (
    <>
    <div id="pin-eco"></div>
    <section id="ecosystem" className="wrapper overflow-hidden">
      <div className="grid  items-stretch place-items-center  w-full grid-cols-1 xl:grid-cols-2 2xl:max-w-[1600px]">
        <div className="flex px-4  sm:px-8 bg-[#334B08] justify-center items-center w-full py-8 sm:py-14 xl:py-14">
          <div  id="eco-intro" className="flex justify-start items-start flex-col gap-5">
            <h3 className="text-white font-agency font-bold text-[40px] md:text-[50px] 2xl:text-[70px] uppercase xl:max-w-[550px] 2xl:max-w-[672px]">
              An <span className="text-primary">all-in-one</span> ReFi Platform
              for Sustainable Lending & Governance.
            </h3>
            <div className="w-full max-w-[600px] xl:max-w-[412px] bg-white h-2"></div>
            <p className="text-white xl:max-w-[645px] text-base xl:text-xl font-normal leading-[1.4]">
              Empowering projects and lenders by enhanced stability with
              insurance funds and community-driven growth.
            </p>
            <Link
              to="/ecosystem"
              className="font-bold text-xl text-white flex justify-end items-center w-full gap-5"
            >
              Learn More
              <img
                src="/arrow-right.png"
                className="w-10 md:w-[56px] object-contain"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div id="ecosystemimage" className="canvas-container-ecosystem bg-black flex justify-center items-center xl:max-w-[100%] xlg:max-w-[100%] w-full xl:h-full overflow-hidden">
            <canvas id="hero-ecosystem" className="bg-black" />
      </div>
      </div>
    </section>
    </>
  );
};

export default Platform;
