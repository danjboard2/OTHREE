import React, { useState,useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Partners = () => {

  
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    //responsive
let mm = gsap.matchMedia();

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#partners",
          start: window.innerWidth > 800 ? "top top" : "20% 20%",
          end: window.innerWidth > 800 ? "+=2000px" : "+=100px",
          pin: window.innerWidth > 800 ? true : false,
          scrub: 1,
          pinSpacing: true,
          //markers: true,
          onEnter: () => timeline.to(partner, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
              trigger: ".canvas-container-partner",
              start: window.innerWidth > 800 ? "top top" : "top bottom",
              //once: true,
              //markers: true,
              scrub: 1,
            },
            onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
          })
        }
    })
      // images 

  const canvas = document.getElementById("hero-partner");
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

  const frameCount =230;
  const currentFrame = (index) =>
    `/images/light/Landing_Page_Ani_${(
      index + 1
    )
      .toString()
      .padStart(3, "00")}.webp`;
  
  const images = [];
  const partner = {
    frame: 114
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }
  
    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#pintext-partners",
        start: window.innerWidth > 1024 ? "top bottom" :"top bottom" ,
        end: "+=1000px",
        pin: false,
        scrub: true,
        pinSpacing: false,
        //markers: true,
        id:"pintext",
        onEnter: () => 
        
         mm.add("(min-width: 800px)", () => {
          timeline.set( "#partners-intro", { top: -400, position:"absolute"});
        timeline2.to(
          
          "#partners-intro", { top: 150,  position:"absolute"}, {duration:5}
        )
      })
      }
  }) 
  

//images[0].onload = render;

let render = images[0].onload = () => {
  let img = images[partner.frame];
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
  context.drawImage(img, x, y, newWidth, newHeight);

  /* var ratio = img.naturalWidth / img.naturalHeight;
var width = canvas.width;
var height = width / ratio;
context.drawImage(img, 0, 0, width, height);  */

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
    <div id="pintext-partners"></div>
    <section id="partners" className="wrapper overflow-hidden">
      <div className="grid min-h-[100vh] place-items-flex-start  w-full grid-cols-1 xl:grid-cols-2 2xl:max-w-[1600px]">
        <div className="flex px-4  sm:px-8 bg-[rgb(24,24,24)] justify-center items-center w-full py-8 sm:py-14 xl:py-14">
          <div  id="partners-intro" className="flex justify-start items-start flex-col gap-5">
            <h3 className="text-white font-agency font-bold text-[30px] md:text-[40px] 2xl:text-[50px] uppercase xl:max-w-[550px] 2xl:max-w-[672px]">
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
