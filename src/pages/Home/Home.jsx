import React, { useRef } from "react";
import "./Home.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Home() {
  const wrapperRef = useRef();
  const bottomImageRef = useRef();
  const topTitleRef = useRef();
  const bottomTitlesRef = useRef([]);

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    // const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });
    const tl = gsap.timeline({ 
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top center',
        end: "bottom center",
        scrub: true,
      }
    });

    if (bottomTitlesRef.current) {
      gsap.set(bottomTitlesRef.current[0], {
        scaleX: 1.8,
        xPercent: 40,
      });
      gsap.set(bottomTitlesRef.current[1], {
        scaleX: 1.45,
        xPercent: -25,
      });

      tl.to(
        bottomImageRef.current,
        {
          clipPath: "inset(0%)",
          duration: 0.55,
        },
        0
      );
      tl.to(
        bottomTitlesRef.current[0],
        {
          scaleX: 1.08,
          scaleY: 1.3,
          yPercent: 10.5,
          xPercent: 4.5,
          duration: 0.6,
        },
        0
      );
      tl.to(
        bottomTitlesRef.current[1],
        {
          scaleX: 1.08,
          scaleY: 1.3,
          yPercent: 10.5,
          xPercent: -5.5,
          duration: 0.6,
        },
        0
      );
      tl.to(topTitleRef.current, {
        scaleY: .3,
        yPercent: 30
      }, 0)
    }
  });

  return (
    <main className="home">
      <div className="build-title" ref={wrapperRef}>
        <h1 className="super-text" ref={topTitleRef}>Here to build</h1>
        <div className="bottom-title">
          <h1 ref={(el) => bottomTitlesRef.current.push(el)}>Brighter</h1>
          <img
            src="/images/build-brands.png"
            ref={bottomImageRef}
            className="bottom-title__image"
          />
          <h1 ref={(el) => bottomTitlesRef.current.push(el)}>Brands</h1>
      </div>
      </div>
    </main>
  );
}
