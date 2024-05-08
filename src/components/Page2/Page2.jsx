import React, { useEffect, useRef, useState } from "react";
import styles from "./Page2.module.css";

const Page2 = () => {
  const textRef = useRef();
  const [animations, setAnimations] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // isVisible function recieves textRef and calculates when the main text passes a certain point
    function isVisible(textR) {
      const rect = textR.getBoundingClientRect();
      return rect.bottom < window.innerHeight;
    }

    const handleScroll = () => {
      // Scrolling passes the ref in the main div to isVisible function
      if (isVisible(textRef.current)) {
        setAnimations(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // LISTENER FOR WIDTH CHANGES
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (width > 1318) {
    return (
      <div className={styles.mainContainer}>
        {/* THIS DIV MAKES AN EMPTY SPACE ON TOP */}
        <div className="h-40 w-full" />
        {/* THE MAIN CONTENT */}
        <div className="w-full h-full flex">
          <h2 className={styles.title}>
            ABOUT
            <span className="text-black">
              <br />
              MY JOURNEY
            </span>
          </h2>
          {/* IMAGE AND YELLOW RECTANGLE */}
          <section className={styles.backgroundImage}>
            <div
              className="absolute w-2/5 h-3/4 right-12 -top-6 opacity-75"
              style={{ backgroundColor: "#D8DB3A" }}
            />
          </section>
          {/* SUBTITLE AND MAIN TEXT */}
          <section className="flex flex-col text-white" style={{ flex: "5" }}>
            <h2 className={styles.subTitle}>
              CODED <span className="text-black">WITHOUT PLUGINS</span>
            </h2>
            {/* A CONTAINER FOR THE P TAGS AND THE DIV THAT MAKES THE WHITE LINE */}
            <div className="flex">
              {/* A CONTAINER FOR THE P TAGS */}
              <div className="flex flex-col gap-y-10 ml-24 mt-10" ref={textRef}>
                <p className={styles.animatedText}>
                  This site has been made 100% by me using React
                  <br />
                  and the library Framer Motion for the transitions.
                </p>
                <p className={styles.animatedText}>
                  I’ve been freelancing for a couple of years and
                  <br />
                  my main skills are: REACT, CSS/TAILWIND, JAVASCRIPT & HTML.
                  <br />
                  SECONDARILY: NODE, SQL & PYTHON
                </p>
                <p className={styles.animatedText}>
                  I HAVE A DUAL CITIZENSHIP, BOTH ITALIAN AND CHILEAN
                  <br />
                  AND I'M CURRENTLY BASED IN MILAN, ITALY.
                </p>
              </div>
              {/* WHITE VERTICAL LINE */}
              <div className={animations ? styles.whiteLine : null} />
            </div>
          </section>
        </div>
      </div>
    );
  } else if (1201 < width && width <= 1318) {
    return (
      <div className={styles.mainContainer}>
        {/* THIS DIV MAKES AN EMPTY SPACE ON TOP */}
        <div className="h-40 w-full" />
        {/* THE MAIN CONTENT */}
        <div className="w-full h-full flex">
          <h2 className={styles.title}>
            ABOUT
            <span className="text-black">
              <br />
              MY JOURNEY
            </span>
          </h2>
          {/* IMAGE AND YELLOW RECTANGLE */}
          <section className={styles.backgroundImage}>
            <div
              className="absolute w-2/5 h-3/4 right-12 -top-6 opacity-75"
              style={{ backgroundColor: "#D8DB3A" }}
            />
          </section>
          {/* SUBTITLE AND MAIN TEXT */}
          <section
            className="flex flex-col text-white items-center"
            style={{ flex: "5" }}
          >
            <h2 className={styles.subTitle}>
              CODED <span className="text-black">WITHOUT PLUGINS</span>
            </h2>
            {/* A CONTAINER FOR THE P TAGS AND THE DIV THAT MAKES THE WHITE LINE */}
            <div className="flex">
              {/* A CONTAINER FOR THE P TAGS */}
              <div className="flex flex-col gap-y-10 mt-10" ref={textRef}>
                <p className={styles.animatedText}>
                  This site has been made 100% by me using React
                  <br />
                  and the library Framer Motion for the transitions.
                </p>
                <p className={styles.animatedText}>
                  I’ve been freelancing for a couple of years and
                  <br />
                  my main skills are: REACT, CSS, JAVASCRIPT & HTML.
                  <br />
                  SECONDARILY: NODE, SQL & PYTHON
                </p>
                <p className={styles.animatedText}>
                  I HAVE A DUAL CITIZENSHIP, BOTH ITALIAN AND CHILEAN
                  <br />
                  AND I'M CURRENTLY BASED IN MILAN, ITALY.
                </p>
              </div>
              {/* WHITE VERTICAL LINE */}
              <div className={animations ? styles.whiteLine : null} />
            </div>
          </section>
        </div>
      </div>
    );
  } else if (923 < width && width <= 1201) {
    return (
      <div className={styles.mainContainer}>
        {/* TITLE */}
        <h2 className={styles.title}>
          ABOUT
          <span className="text-black ml-4">MY JOURNEY</span>
        </h2>
        {/* THE MAIN CONTENT */}
        <div className="w-full h-full flex">
          {/* IMAGE AND YELLOW RECTANGLE */}
          <img src="/imgs/bg-img-2.jpg" className="absolute z-10" />
          <div
            className="absolute w-1/2 h-3/4 left-80 opacity-75 z-20"
            style={{ backgroundColor: "#D8DB3A" }}
          />
          {/* AN EMPTY DIV TO ALIGN THE TEXT ON TOP OF THE YELLOW RECTANGLE BECAUSE THE RECTANGLE HAS POSITION ABSOLUTE */}
          <div className="h-full " style={{ width: "330px" }} />
          {/* SUBTITLE AND MAIN TEXT */}
          <section className="flex flex-col text-white items-center">
            <h2 className={styles.subTitle}>
              CODED <span className="text-black">WITHOUT PLUGINS</span>
            </h2>
            {/* A CONTAINER FOR THE P TAGS AND THE DIV THAT MAKES THE WHITE LINE */}
            <div className="flex">
              {/* A CONTAINER FOR THE P TAGS */}
              <div className="flex flex-col gap-y-10 mt-10" ref={textRef}>
                <p className={styles.animatedText}>
                  This site has been made 100% by me using React
                  <br />
                  and the library Framer Motion for the transitions.
                </p>
                <p className={styles.animatedText}>
                  I’ve been freelancing for a couple of years and
                  <br />
                  my main skills are: REACT, CSS, JAVASCRIPT & HTML.
                  <br />
                  SECONDARILY: NODE, SQL & PYTHON
                </p>
                <p className={styles.animatedText}>
                  I HAVE A DUAL CITIZENSHIP, BOTH ITALIAN AND CHILEAN
                  <br />
                  AND I'M CURRENTLY BASED IN MILAN, ITALY.
                </p>
              </div>
              {/* WHITE VERTICAL LINE */}
              <div className={animations ? styles.whiteLine : null} />
            </div>
          </section>
        </div>
      </div>
    );
  } else if (670 < width && width <= 923) {
    return (
      <div className={styles.mainContainer}>
        {/* TITLE */}
        <h2 className={styles.title}>
          ABOUT
          <span className="text-black ml-4">MY JOURNEY</span>
        </h2>
        {/* THE MAIN CONTENT */}
        <div className="w-full h-full flex">
          {/* IMAGE AND YELLOW RECTANGLE */}
          <img src="/imgs/bg-img-2.jpg" className="absolute z-10" />
          <div
            className="absolute w-3/4 h-3/4 left-1/2 transform -translate-x-1/2 opacity-75 z-20"
            style={{ backgroundColor: "#D8DB3A" }}
          />
          {/* SUBTITLE AND MAIN TEXT */}
          <section className="flex flex-col w-full text-white items-center ">
            <h2 className={styles.subTitle}>
              CODED <span className="text-black">WITHOUT PLUGINS</span>
            </h2>
            {/* A CONTAINER FOR THE P TAGS AND THE DIV THAT MAKES THE WHITE LINE */}
            <div className="flex">
              {/* A CONTAINER FOR THE P TAGS */}
              <div className="flex flex-col gap-y-10 mt-10" ref={textRef}>
                <p className={styles.animatedText}>
                  This site has been made 100% by me using React
                  <br />
                  and the library Framer Motion for the transitions.
                </p>
                <p className={styles.animatedText}>
                  I’ve been freelancing for a couple of years and
                  <br />
                  my main skills are: REACT, CSS, JAVASCRIPT & HTML.
                  <br />
                  SECONDARILY: NODE, SQL & PYTHON
                </p>
                <p className={styles.animatedText}>
                  I HAVE A DUAL CITIZENSHIP, BOTH ITALIAN AND CHILEAN
                  <br />
                  AND I'M CURRENTLY BASED IN MILAN, ITALY.
                </p>
              </div>
              {/* WHITE VERTICAL LINE */}
              <div className={animations ? styles.whiteLine : null} />
            </div>
          </section>
        </div>
      </div>
    );
  } else if (width <= 670) {
    return (
      <div className={styles.mainContainer}>
        {/* TITLE */}
        <h2 className={styles.title}>
          ABOUT
          <span className="text-black ml-4">ME</span>
        </h2>
        {/* THE MAIN CONTENT */}
        <div className="w-full h-full flex">
          {/* IMAGE AND YELLOW RECTANGLE */}
          <img src="/imgs/bg-img-2.jpg" className="absolute z-10" />
          <div
            className="absolute w-3/4 h-3/4 left-1/2 transform -translate-x-1/2 opacity-75 z-20"
            style={{ backgroundColor: "#D8DB3A" }}
          />
          {/* SUBTITLE AND MAIN TEXT */}
          <section className="flex flex-col w-full text-white items-center ">
            {/* A CONTAINER FOR THE P TAGS*/}

            <div className="flex flex-col gap-y-10 mt-10 ml-10" ref={textRef}>
              <p className={styles.animatedText}>
                This site has been made
                <br /> 100% by me using React
                <br />
                and the library Framer <br />
                Motion for the transitions.
              </p>
              <p className={styles.animatedText}>
                Main skills: REACT, CSS,
                <br />
                JAVASCRIPT & HTML.
                <br />
                NODE, SQL & PYTHON
              </p>
              <p className={styles.animatedText}>
                I'M ITALIAN AND CHILEAN
                <br />
                BASED IN MILAN, ITALY.
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
};

export default Page2;
