import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Roadmap = () => {
  const container = useRef();
  const dot1 = useRef();
  const dot2 = useRef();
  const dot3 = useRef();
  const dot4 = useRef();
  const dot5 = useRef();
  const dot6 = useRef();
  const dotOuter1 = useRef();
  const dotOuter2 = useRef();
  const dotOuter3 = useRef();
  const dotOuter4 = useRef();
  const dotOuter5 = useRef();
  const dotOuter6 = useRef();
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();
  const box4 = useRef();
  const box5 = useRef();
  const box6 = useRef();
  const blueLine = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: window.innerWidth > 1024 ? "top top" : "20% 20%",
          end: "+=3000px",
          pin: true,
          scrub: 1,
          pinSpacing: true,
        },
      });

      timeline
        .fromTo(
          [dot1.current],
          { backgroundColor: "white" },
          { backgroundColor: "rgb(148,190,127)" },
          "boxTog"
        )
        .fromTo(
          [dotOuter1.current],
          { backgroundColor: "transparent" },
          { backgroundColor: "#3AA417" },
          "boxTog"
        )
        .fromTo(
          box1.current,
          { y: -100, opacity: 0, color: "white" },
          { opacity: 1, y: 0, color: "#3AA417" },
          "boxTog"
        )
        .to(dot1.current, { backgroundColor: "white" }, "tog")
        .to([dotOuter1.current], { backgroundColor: "transparent" }, "tog")
        .to([box1.current], { color: "white" }, "tog")
        .to(dot2.current, { backgroundColor: "rgb(148,190,127)" }, "tog")
        .fromTo(
          dotOuter2.current,
          { backgroundColor: "transparent" },
          { backgroundColor: "#3AA417" },
          "tog"
        )
        .fromTo(
          box2.current,
          { y: 100, opacity: 0, color: "white" },
          { opacity: 1, y: 0, color: "#3AA417" },
          "tog"
        )
        .to(dot2.current, { backgroundColor: "white" }, "tog2")
        .to(dotOuter2.current, { backgroundColor: "transparent" }, "tog2")
        .to([box2.current], { color: "white" }, "tog2")
        .to(dot3.current, { backgroundColor: "rgb(148,190,127)" }, "tog2")
        .fromTo(
          [dotOuter3.current],
          { backgroundColor: "transparent" },
          { backgroundColor: "#3AA417" },
          "tog2"
        )
        .fromTo(
          box3.current,
          { y: -100, opacity: 0, color: "white" },
          { opacity: 1, y: 0, color: "#3AA417" },
          "tog2"
        )
        .to(dot3.current, { backgroundColor: "white" }, "tog3")
        .to(dotOuter3.current, { backgroundColor: "transparent" }, "tog3")
        .to([box3.current], { color: "white" }, "tog3")
        .fromTo(
          box4.current,
          { y: 100, opacity: 0, color: "white" },
          { opacity: 1, y: 0, color: "#3AA417" },
          "tog3"
        )
        .to(dot4.current, { backgroundColor: "rgb(148,190,127)" }, "tog3")
        .fromTo(
          [dotOuter4.current],
          { backgroundColor: "transparent" },
          { backgroundColor: "#3AA417" },
          "tog3"
        )
        .to(dot4.current, { backgroundColor: "white", delay: 0.2 }, "tog4")
        .to(
          dotOuter4.current,
          { backgroundColor: "transparent", delay: 0.2 },
          "tog4"
        )
        .to([box4.current], { color: "white" }, "tog4")
        .to(
          dot5.current,
          { backgroundColor: "rgb(148,190,127)", delay: 0.2 },
          "tog4"
        )
        .fromTo(
          [dotOuter5.current],
          { backgroundColor: "transparent" },
          { backgroundColor: "#3AA417" },
          "tog4"
        )
        .fromTo(
          box5.current,
          { y: -100, opacity: 0, color: "white" },
          { opacity: 1, y: 0, delay: 0.2, color: "#3AA417" },
          "tog4"
        )
        .to(dot5.current, { backgroundColor: "white", delay: 0.2 }, "tog5")

        .to(
          dotOuter5.current,
          { backgroundColor: "transparent", delay: 0.2 },
          "tog5"
        )
        .to([box5.current], { color: "white" }, "tog5")
        .to(
          dot6.current,
          { backgroundColor: "rgb(148,190,127)", delay: 0.2 },
          "tog5"
        )
        .fromTo(
          [dotOuter6.current],
          { backgroundColor: "transparent" },
          { backgroundColor: "#3AA417" },
          "tog5"
        )
        .to(
          dot6.current,
          { backgroundColor: "rgb(148,190,127)", delay: 0.2 },
          "tog5"
        )
        .fromTo(
          box6.current,
          { y: 100, opacity: 0, color: "white" },
          { opacity: 1, y: 0, delay: 0.2, color: "#3AA417" },
          "tog5"
        );
      if (window.innerWidth > 1024) {
        timeline.fromTo(
          blueLine.current,
          { scaleX: 0 },
          { scaleX: "1", transformOrigin: "left", duration: 2.9, delay: 0.1 },
          0
        );
      } else {
        timeline.fromTo(
          blueLine.current,
          { scaleY: 0 },
          { scaleY: "1", transformOrigin: "top", duration: 3, delay: 0.1 },
          0
        );
      }
    });

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      ref={container}
      className="wrapper  bg-[rgb(24,24,24)] relative mt-20"
    >
      <img
        src="/grass.png"
        className="object-cover w-full min-h-[60px] absolute top-[-60px] sm:top-[-80px] lg:top-[-120px] 2xl:top-[-140px] translate-y-1 left-0"
        alt=""
      />
      <div className="w-[90%] relative flex max-w-[1600px] py-[50px] sm:pt-[170px] min-h-[100dvh] justify-center items-center flex-col gap-10">
        <h3 className="absolute top-5 sm:top-10 left-0 text-white font-bold font-agency text-[45px] sm:text-[70px]">
          R<span className="text-primary">O</span>ADMAP
        </h3>
        <div className="grid sm:mt-0 mt-8 grid-cols-[48px__1fr] lg:gap-x-0 gap-x-3 lg:grid-cols-6 gap-y-8 lg:gap-y-4 grid-rows-6 lg:grid-rows-[1fr__auto__1fr] w-full">
          {/* //line div --------------------- */}
          <div className="col-span-1 lg:col-span-6 row-start-1 lg:row-start-2 row-span-6 lg:row-span-1 isolate relative grid grid-rows-6 lg:gap-0 gap-8 lg:grid-rows-1 lg:grid-cols-6">
            <div className="bg-white w-4 h-4 rounded-full absolute lg:block hidden left-[2%] top-1/2 -translate-y-1/2 "></div>
            <div className="bg-white w-4 h-4 rounded-full absolute lg:block hidden right-[2%] top-1/2 -translate-y-1/2 "></div>
            <div className="lg:flex-row flex-col gap-3 lg:gap-0 text-center relative   w-full flex lg:justify-center justify-start items-center">
              <div
                ref={dotOuter1}
                className="w-8 h-8 rounded-full bg-transparent border-[3px] border-solid border-white relative"
              >
                <div
                  ref={dot1}
                  className="bg-[#d9d9d9] w-4 h-4 left-1/2 -translate-x-1/2 rounded-full -translate-y-1/2 absolute top-1/2"
                ></div>
              </div>
              {/* <p className="lg:absolute bottom-full left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 text-white fontuppercase -bold text-base  xl:text-lg lg:block hidden">
                Checkpoint 1
              </p> */}
            </div>
            <div className="lg:flex-row flex-col gap-3 lg:gap-0 text-center relative   w-full flex lg:justify-center justify-start items-center">
              <div
                ref={dotOuter2}
                className="w-8 h-8 rounded-full bg-transparent border-[3px] border-solid border-white relative"
              >
                <div
                  ref={dot2}
                  className="bg-[#d9d9d9] w-4 h-4 left-1/2 -translate-x-1/2 rounded-full -translate-y-1/2 absolute top-1/2"
                ></div>
              </div>
              {/* <p className="lg:absolute bottom-full left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 text-white fontuppercase -bold text-base  xl:text-lg lg:block hidden">
                Checkpoint 1
              </p> */}
            </div>
            <div className="lg:flex-row flex-col gap-3 lg:gap-0 text-center relative   w-full flex lg:justify-center justify-start items-center">
              <div
                ref={dotOuter3}
                className="w-8 h-8 rounded-full bg-transparent border-[3px] border-solid border-white relative"
              >
                <div
                  ref={dot3}
                  className="bg-[#d9d9d9] w-4 h-4 left-1/2 -translate-x-1/2 rounded-full -translate-y-1/2 absolute top-1/2"
                ></div>
              </div>
              {/* <p className="lg:absolute bottom-full left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 text-white fontuppercase -bold text-base  xl:text-lg lg:block hidden">
                Checkpoint 1
              </p> */}
            </div>
            <div className="lg:flex-row flex-col gap-3 lg:gap-0 text-center relative   w-full flex lg:justify-center justify-start items-center">
              <div
                ref={dotOuter4}
                className="w-8 h-8 rounded-full bg-transparent border-[3px] border-solid border-white relative"
              >
                <div
                  ref={dot4}
                  className="bg-[#d9d9d9] w-4 h-4 left-1/2 -translate-x-1/2 rounded-full -translate-y-1/2 absolute top-1/2"
                ></div>
              </div>
              {/* <p className="lg:absolute bottom-full left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 text-white fontuppercase -bold text-base  xl:text-lg lg:block hidden">
                Checkpoint 1
              </p> */}
            </div>
            <div className="lg:flex-row flex-col gap-3 lg:gap-0 text-center relative   w-full flex lg:justify-center justify-start items-center">
              <div
                ref={dotOuter5}
                className="w-8 h-8 rounded-full bg-transparent border-[3px] border-solid border-white relative"
              >
                <div
                  ref={dot5}
                  className="bg-[#d9d9d9] w-4 h-4 left-1/2 -translate-x-1/2 rounded-full -translate-y-1/2 absolute top-1/2"
                ></div>
              </div>
              {/* <p className="lg:absolute bottom-full left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 text-white fontuppercase -bold text-base  xl:text-lg lg:block hidden">
                Checkpoint 1
              </p> */}
            </div>
            <div className="lg:flex-row flex-col gap-3 lg:gap-0 text-center relative   w-full flex lg:justify-center justify-start items-center">
              <div
                ref={dotOuter6}
                className="w-8 h-8 rounded-full bg-transparent border-[3px] border-solid border-white relative"
              >
                <div
                  ref={dot6}
                  className="bg-[#d9d9d9] w-4 h-4 left-1/2 -translate-x-1/2 rounded-full -translate-y-1/2 absolute top-1/2"
                ></div>
              </div>
              {/* <p className="lg:absolute bottom-full left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 text-white fontuppercase -bold text-base  xl:text-lg lg:block hidden">
                Checkpoint 1
              </p> */}
            </div>
            <div className="absolute top-0 lg:top-1/2 -z-20 lg:-translate-y-1/2 w-auto lg:w-[95%] left-1/2 -translate-x-1/2 col-span-1 lg:row-auto row-span-5 lg:h-auto h-full lg:col-span-5 border border-dashed border-white "></div>
            <div
              ref={blueLine}
              className="absolute top-0 lg:top-1/2 -z-10 lg:-translate-y-1/2 w-auto lg:w-[95%] left-1/2 -translate-x-1/2 col-span-1 lg:row-auto row-span-5 lg:h-auto  h-full lg:col-span-5 border border-solid border-cyan "
            ></div>
          </div>
          {/* //first part -------------------- */}
          <div className="lg:block hidden col-start-2 lg:col-start-1 col-span-1 row-start-3 row-span-1"></div>
          <div
            ref={box1}
            className="col-start-2 lg:col-start-1 col-span-1 row-start-1 lg:row-start-1 gap-1 lg:gap-3 row-span-1 flex justify-start items-start flex-col text-left "
          >
            <h4 className="uppercase  leading-[1] font-agency font-bold text-2xl lg:text-[30px] 2xl:text-[40px]  block">
              Checkpoint 1
            </h4>
            <p className=" text-base lg:text-xl min-w-[250px]">
              Subtitle text and description
            </p>
            <div className="lg:block hidden border-white border-solid self-center border h-full min-h-[60px]"></div>
          </div>
          {/* //second part -------------------- */}
          <div className="lg:block hidden col-start-2 lg:col-start-2 col-span-1 row-start-1 row-span-1"></div>
          <div
            ref={box2}
            className="col-start-2 lg:col-start-2 col-span-1 row-start-2 lg:row-start-3 gap-1 lg:gap-3 row-span-1 flex justify-start items-start lg:items-end flex-col  text-left lg:text-right "
          >
            <div className="lg:block hidden border-white border-solid self-center border h-full min-h-[60px]"></div>
            <h4 className="uppercase  leading-[1] font-agency font-bold text-2xl lg:text-[30px] 2xl:text-[40px]  block">
              Checkpoint 2
            </h4>
            <p className=" text-base lg:text-xl min-w-[250px]">
              Subtitle text and description
            </p>
          </div>{" "}
          {/* //third part -------------------- */}
          <div className="lg:block hidden col-start-2 lg:col-start-3 col-span-1 row-start-3 row-span-1"></div>
          <div
            ref={box3}
            className="col-start-2 lg:col-start-3 col-span-1 row-start-3 lg:row-start-1 gap-1 lg:gap-3 row-span-1 flex justify-start items-start  flex-col text-left "
          >
            <h4 className="uppercase  leading-[1] font-agency font-bold text-2xl lg:text-[30px] 2xl:text-[40px]  block">
              Checkpoint 3
            </h4>
            <p className=" text-base lg:text-xl min-w-[250px]">
              Subtitle text and description
            </p>
            <div className="lg:block hidden border-white border-solid self-center border h-full min-h-[60px]"></div>
          </div>{" "}
          {/* //fourth part -------------------- */}
          <div className="lg:block hidden col-start-2 lg:col-start-4 col-span-1 row-start-1 row-span-1"></div>
          <div
            ref={box4}
            className="col-start-2 lg:col-start-4 col-span-1 row-start-4 lg:row-start-3 gap-1 lg:gap-3 row-span-1 flex justify-start items-start lg:items-end flex-col text-left lg:text-right "
          >
            <div className="lg:block hidden border-white border-solid self-center border h-full min-h-[60px]"></div>
            <h4 className="uppercase  leading-[1] font-agency font-bold text-2xl lg:text-[30px] 2xl:text-[40px]  block">
              Checkpoint 4
            </h4>
            <p className=" text-base lg:text-xl min-w-[250px]">
              Subtitle text and description
            </p>
          </div>
          {/* //fifth part -------------------- */}
          <div className="lg:block hidden col-start-2 lg:col-start-5 col-span-1 row-start-3 row-span-1"></div>
          <div
            ref={box5}
            className="col-start-2 lg:col-start-5 col-span-1 row-start-5 lg:row-start-1 gap-1 lg:gap-3 row-span-1 flex justify-start items-start  flex-col text-left "
          >
            <h4 className="uppercase  leading-[1] font-agency font-bold text-2xl lg:text-[30px] 2xl:text-[40px]  block">
              Checkpoint 5
            </h4>
            <p className=" text-base lg:text-xl min-w-[250px]">
              Subtitle text and description
            </p>
            <div className="lg:block hidden border-white border-solid self-center border h-full min-h-[60px]"></div>
          </div>
          {/* //sixth part -------------------- */}
          <div className="lg:block hidden col-start-2 lg:col-start-6 col-span-1 row-start-1 row-span-1"></div>
          <div
            ref={box6}
            className="col-start-2 lg:col-start-6 col-span-1 row-start-6 lg:row-start-3 gap-1 lg:gap-3 row-span-1 flex justify-start items-start lg:items-end  flex-col text-left lg:text-right"
          >
            <div className="lg:block hidden border-white border-solid self-center border h-full min-h-[60px]"></div>
            <h4 className="uppercase  leading-[1] font-agency font-bold text-2xl lg:text-[30px] 2xl:text-[40px]  block">
              Checkpoint 6
            </h4>
            <p className=" text-base lg:text-xl min-w-[250px]">
              Subtitle text and description
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
