import React, { useState,useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


const About = () => {

  
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: window.innerWidth > 1024 ? "top top" : "20% 20%",
          end: "+=3000px",
          pin: true,
          scrub: 1,
          pinSpacing: true,
          markers: true,
          onEnter: () => timeline.to(bulb, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
              trigger: ".canvas-container",
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

  const canvas = document.getElementById("hero-lightpass");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const frameCount =95;
  const currentFrame = (index) =>
    `/images/light/Landing_Page_Ani_${(
      index + 1
    )
      .toString()
      .padStart(3, "00")}.webp`;
  
  const images = [];
  const bulb = {
    frame: 0
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }
  
    timeline.set( "#intro", { top: -400, position:"absolute"});
    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#pintext",
        start: window.innerWidth > 1024 ? "top bottom" : "20% 20%",
        end: "+=1000px",
        pin: false,
        scrub: true,
        pinSpacing: false,
        markers: true,
        id:"pintext",
        onEnter: () => timeline2.to(
          "#intro", { top: 150,  position:"absolute"}, {duration:5}
        )
      }
  }) 
  

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[bulb.frame], 0, 0);
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
    <div id="pintext"></div>
    <section id="about" className="wrapper overflow-hidden">
      <div className="grid place-items-center xl:gap-0 gap-10  w-full grid-cols-1 xl:grid-cols-2 lg:h-[100vh] 2xl:max-w-[1600px]">
        <div  className="flex px-4 sm:px-8  justify-center items-center w-full pt-8 sm:pt-14 pb-0 xl:py-14 lg:bg-white">
          <div id="intro" className="flex justify-start items-start flex-col gap-5">
            <h3 className="text-black font-agency font-bold text-[40px] md:text-[50px] 2xl:text-[70px] uppercase xl:max-w-[531px]">
              "Leading the path to a{" "}
              <span className="text-primary">brighter</span> future with
              Regenerative Finance"
            </h3>
            <div className="w-full max-w-[600px] xl:max-w-[412px] bg-primary h-2"></div>
            <p className="text-black xl:max-w-[645px] text-base xl:text-xl font-normal leading-[1.4]">
              <strong>
                We are <span className="text-primary">O</span>3
              </strong>
              , an alliance of environmental visionaries, blockchain experts,
              and industry leaders committed to leading the path to a brighter
              future with Regenerative Finance. Our vision interweaves
              sustainability with economic growth, fostering a symbiosis of
              environmental preservation and prosperity. Leveraging blockchain's
              transformative power, O3 provides a secure, efficient, and
              transparent platform, shifting governance to the true stakeholders
              - the residents of the world. At O3, every step we take is a step
              towards a sustainable tomorrow. Join us today and be a part of a
              rewarding, greener future.
            </p>
          </div>
        </div>
        <div id="aboutimage" className="canvas-container xl:max-w-[100%] xlg:max-w-[100%] w-full xl:h-full overflow-hidden">
            <canvas id="hero-lightpass" />
      </div>
      </div>
    </section>
    </>
  );
};

export default About;
