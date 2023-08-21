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
          end: "+=2000px",
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

  var canvas = document.getElementById("hero-lightpass");
  fitToContainer(canvas);
  
  function fitToContainer(canvas){
    // Make it visually fill the positioned parent
    canvas.style.width ='100%';
    canvas.style.height='100%';
    // ...then set the internal size to match
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  const context = canvas.getContext("2d");

  const frameCount =115;
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
  

  
    timeline.set( "#intro", { top: "-20%", position:"absolute"});
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
          "#intro", { top: "30%",  position:"absolute"}, {duration:5}
        )
      }
  }) 
  

//images[0].onload = render;

let render = images[0].onload = () => {
  let img = images[bulb.frame];
  // Once the image is loaded, we will get the width & height of the image
  let loadedImageWidth = img.width;
  let loadedImageHeight = img.height;

  // get the scale
  // it is the min of the 2 ratios
  let scaleFactor = Math.max(canvas.width / img.width, canvas.height / img.height);
  
  // Finding the new width and height based on the scale factor
  let newWidth = img.width * scaleFactor;
  let newHeight = img.height * scaleFactor;
  
  // get the top left position of the image
  // in order to center the image within the canvas
  let x = (canvas.width / 2) - (newWidth / 2);
  let y = (canvas.height / 2) - (newHeight / 2);
  
  // When drawing the image, we have to scale down the image
  // width and height in order to fit within the canvas
  //context.drawImage(img, x, y, newWidth, newHeight);

//  var ratio = img.naturalWidth / img.naturalHeight;
//var width = canvas.width;
//var height = width / ratio;
//context.drawImage(img, 0, 0, width, height);

context.translate(canvas.width/2,canvas.height/2);
context.drawImage(img,-img.width/2,-img.height/2);
context.translate(-canvas.width/2,-canvas.height/2);
};

// Now that we have set up the image "onload" handeler, we can assign
// an image URL to the image.
//img.src = imageUrl;
//};
/*
function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[bulb.frame], 0, 0);
} */
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
            <h3 className="text-black font-agency font-bold text-[40px] md:text-[50px] 2xl:text-[60px] uppercase xl:max-w-[531px]">
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
        <div id="aboutimage" className="canvas-container xl:max-w-[100%] xlg:max-w-[100%] w-full xl:h-full overflow-hidden bg-black">
            <canvas id="hero-lightpass" />
      </div>
      </div>
    </section>
    </>
  );
};

export default About;
