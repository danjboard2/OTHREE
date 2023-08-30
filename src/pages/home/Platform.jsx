import React, { useState,useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Platform = () => {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();
    
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#ecosystem",
          start: window.innerWidth > 1024 ? "top top" : "20% 20%",
          end: "+=1300px",
          pin: window.innerWidth > 1024 ? true : false,
          scrub: 1,
          pinSpacing: true,
        //  markers: true,
        }
    })
    const timeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#pin-eco",
        start: window.innerWidth > 767 ? "top top" : "top bottom",
        end: window.innerWidth > 767 ? "+=2000px" : "+=100px",
        pin: window.innerWidth > 1024 ? true : false,
        scrub: 1,
        pinSpacing: false,
       // markers: true,
        onEnter: () => timeline3.to(ecosystem, {
          frame: frameCount - 1,
          snap: "frame",
          ease: "none",
          scrollTrigger: {
            trigger: ".canvas-container-ecosystem",
            start: window.innerWidth > 1024 ? "top top" : "top bottom",
           //markers: true,
            //once: true,
            scrub: 1,
          },
          onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
        }),
      }
  })
      // images 

  const canvas = document.getElementById("hero-ecosystem");
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
  
    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#pin-eco",
        start: window.innerWidth > 1024 ? "top bottom" :"top bottom" ,
        end: "+=1000px",
        pin: false,
        scrub: true,
        pinSpacing: false,
        //markers: true,
        id:"pintext",
        onEnter: () =>
        mm.add("(min-width: 1280px)", () => {
          timeline.set( "#eco-intro", { top: -400, position:"absolute"});
        timeline2.to(
          "#eco-intro", { top: 150,  position:"absolute"}, {duration:5}
        )
      })
      }
  }) 
  


  let render = images[0].onload = () => {
    let img = images[ecosystem.frame];
    // Once the image is loaded, we will get the width & height of the image
    let loadedImageWidth = img.width;
    let loadedImageHeight = img.height;
  console.log(img)
    // get the scale
    // it is the min of the 2 ratios
    let scaleFactor = Math.max(canvas.width / loadedImageWidth, canvas.height / loadedImageHeight);
    
    // Finding the new width and height based on the scale factor
    let newWidth = loadedImageWidth* scaleFactor;
    let newHeight = loadedImageHeight * scaleFactor;
    console.log(newWidth + '    ' + newHeight) 
    // get the top left position of the image
    // in order to center the image within the canvas
    let x = (canvas.width / 2) - (newWidth / 2);
    let y = (canvas.height / 2) - (newHeight / 2);
    
    // When drawing the image, we have to scale down the image
    // width and height in order to fit within the canvas
    context.drawImage(img, x, y, newWidth, newHeight);
 // context.drawImage(img, 0, 0, img.width,    img.height,     // source rectangle
            //       0, 0, canvas.width, canvas.height);  // destination rectangle
/*ratio = img.naturalWidth / img.naturalHeight;
var width = canvas.width;
var height = width / ratio;
context.drawImage(img, 0, 0, width, height); */
/*
context.translate(canvas.width/2,canvas.height/2);
context.drawImage(img,-img.width/2,-img.height/2);
context.translate(-canvas.width/2,-canvas.height/2); */
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
    <div id="pin-eco"></div>
    <section id="ecosystem" className="wrapper overflow-hidden">
      <div className="grid  items-stretch place-items-center min-h-[100vh]  w-full grid-cols-1 md:grid-cols-2 2xl:max-w-[1600px]">
        <div className="flex px-4  sm:px-8 bg-[#334B08] justify-center items-center w-full py-8 sm:py-14 xl:py-14">
          <div  id="eco-intro" className="flex justify-start items-start flex-col gap-5">
            <h3 className="text-white font-agency font-bold text-[30px] md:text-[40px] 2xl:text-[50px] uppercase xl:max-w-[550px] 2xl:max-w-[672px]">
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
              O3 Ecosystem
              <img
                src="/arrow-right.png"
                className="w-10 md:w-[56px] object-contain"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div id="ecosystemimage" className="canvas-container-ecosystem h-[500px] md:h-full sm:min-h-[400px] bg-black flex justify-center items-center xl:max-w-[100%] xlg:max-w-[100%] w-full  overflow-hidden">
            <canvas id="hero-ecosystem" className="bg-black" />
      </div>
      </div>
    </section>
    </>
  );
};

export default Platform;
