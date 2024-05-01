import React, { useEffect, useRef, useState } from "react";
import styles from "./Page2.module.css";

const Page2 = () => {
  const textRef = useRef();
  const [animations, setAnimations] = useState(false);

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

  return (
    <div className={styles.mainContainer}>
      {/* THIS DIV MAKES AN EMPTY SPACE ON TOP */}
      <div className="h-40 w-screen" />
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
                without any extra libraries or plugins.
              </p>
              <p className={styles.animatedText}>
                I’ve been freelancing for a couple of years and
                <br />
                my main skills are: REACT, CSS, JAVASCRIPT & HTML.
                <br />
                SECONDARILY: NODE, SQL & PYTHON
              </p>
              <p className={styles.animatedText}>
                I HAVE DUAL CITIZENSHIP, ITALIAN AND CHILEAN
                <br />
                CURRENTLY BASED IN MILAN, ITALY.
              </p>
            </div>
            {/* WHITE VERTICAL LINE */}
            <div className={animations ? styles.whiteLine : null} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page2;
