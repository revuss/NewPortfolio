import "./style.css";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import React from "react";
import FirstPage from "./firstPage";
import SecondPage from "./secondPage";
import ThirdPage from "./thirdPage";
import FourPage from "./fourPage";

gsap.registerPlugin(ScrollTrigger);

const AboutMain = () => {
  useEffect(() => {
    const sectoin1 = document.getElementById("vertical");
    const col_left = document.querySelector(".col_left");
    const timeln = gsap.timeline({ paused: true });

    timeln.fromTo(col_left, { y: 0 }, { y: "0", duration: 2, ease: "none" });

    const scroll_1 = ScrollTrigger.create({
      animation: timeln,
      trigger: sectoin1,
      start: "top top",
      end: "bottom center",
      scrub: true,
    });
  });

  return (
    <section id="vertical" className="snap-y snap-mandatory snap-mandatory">
      <div className="container ">
        <div className="vertical_content">
          <div className="col col_left ">
            <h2 className="vertical_heading">
              <h1>
                <span className="text-sa mt-56 text-3xl lg:text xl:text-6xl">
                  About
                </span>
              </h1>
            </h2>
          </div>
          <div className="col col_right">
            <FirstPage className="snap-always snap-start" />
            <SecondPage className="snap-always snap-start" />
            <ThirdPage className="snap-always snap-start" />
            <FourPage className="snap-always snap-start" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
