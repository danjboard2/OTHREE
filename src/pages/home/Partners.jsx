import React, { useState,useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Partners = () => {

  
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#partners",
          start: window.innerWidth > 1024 ? "top top" : "20% 20%",
          end: "+=3000px",
          pin: true,
          scrub: 1,
          pinSpacing: true,
          markers: true,
          onEnter: () => timeline.to(partner, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
              trigger: ".canvas-container-partner",
              start: "top top",
              //once: true,
              markers: true,
              scrub: 1,
            },
            onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
          })
        }
    })
      // images 

  const canvas = document.getElementById("hero-partner");
  const context = canvas.getContext("2d");

  canvas.width = 800;
  canvas.height = window.innerHeight;

  const frameCount =210;
  const currentFrame = (index) =>
    `/images/light/Landing_Page_Ani_${(
      index + 1
    )
      .toString()
      .padStart(3, "00")}.webp`;
  
  const images = [];
  const partner = {
    frame: 135
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }
  
    timeline.set( "#partners-intro", { top: -400, position:"absolute"});
    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#pintext-partners",
        start: window.innerWidth > 1024 ? "top bottom" : "20% 20%",
        end: "+=1000px",
        pin: false,
        scrub: true,
        pinSpacing: false,
        markers: true,
        id:"pintext",
        onEnter: () => timeline2.to(
          "#partners-intro", { top: 150,  position:"absolute"}, {duration:5}
        )
      }
  }) 
  

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[partner.frame], 0, 0);
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
    <div id="pintext-partners"></div>
    <section id="partners" className="wrapper overflow-hidden">
      <div className="grid max-h-[100vh] place-items-flex-start  w-full grid-cols-1 xl:grid-cols-2 2xl:max-w-[1600px]">
        <div className="flex px-4  sm:px-8 bg-[rgb(24,24,24)] justify-center items-center w-full py-8 sm:py-14 xl:py-14">
          <div  id="partners-intro" className="flex justify-start items-start flex-col gap-5">
            <h3 className="text-white font-agency font-bold text-[40px] md:text-[50px] 2xl:text-[70px] uppercase xl:max-w-[550px] 2xl:max-w-[672px]">
              We are <span className="text-primary">proud to partner</span> with
              prestigious organizations and industry pioneers, creating a
              powerhouse of mutual growth and sustainability.
            </h3>
            <div className="w-full max-w-[600px] xl:max-w-[412px] bg-primary h-2"></div>
            <p className="text-white xl:max-w-[645px] text-base xl:text-xl font-normal leading-[1.4]">
              Through our alliance, we drive innovation, collaboration, and
              contribution worldwide, all steered towards the collective will of
              ecological transformation.
            </p>
            <Link
              to="/partners"
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
        <div id="partnerimage" className="canvas-container-partner bg-[#b1c6b7] flex justify-center items-center xl:max-w-[100%] xlg:max-w-[100%] w-full xl:h-full overflow-hidden">
            <canvas id="hero-partner" className="bg-black" />
      </div>
      </div>
    </section>
    </>
  );
};

export default Partners;
