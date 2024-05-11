import React, { useEffect, useRef, useState } from "react";
import styles from "./Page4.module.css";

const Page4 = () => {
  const [hovering, setHovering] = useState(""); //To change the text on the table when hovering
  const [width, setWidth] = useState(window.innerWidth);

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

  function Table() {
    function Row({ url, hov, name, category, year }) {
      if (width > 1032) {
        return (
          <>
            <button
              onClick={() => window.open(url, "_blank")}
              onMouseEnter={() => setHovering(hov)}
              onMouseLeave={() => setHovering("")}
              className="font-Tanker text-3xl h-16 my-2 pl-5 text-white text-left"
              style={
                hovering === hov
                  ? { backgroundColor: "rgba(216, 219, 58, 0.75)" }
                  : {}
              }
            >
              {name}
            </button>
            <button
              onClick={() => window.open(url, "_blank")}
              onMouseEnter={() => setHovering(hov)}
              onMouseLeave={() => setHovering("")}
              className="font-Tanker text-3xl my-2 text-center"
              style={
                hovering === hov
                  ? { backgroundColor: "rgba(216, 219, 58, 0.75)" }
                  : {}
              }
            >
              {category}
            </button>
            <button
              onClick={() => window.open(url, "_blank")}
              onMouseEnter={() => setHovering(hov)}
              onMouseLeave={() => setHovering("")}
              className={`font-Tanker text-3xl my-2 pr-5 text-right ${
                hovering === hov ? "text-white" : ""
              }`}
              style={
                hovering === hov
                  ? { backgroundColor: "rgba(216, 219, 58, 0.75)" }
                  : {}
              }
            >
              {hovering === hov ? "VISIT" : year}
            </button>
          </>
        );
      } else if (width <= 1032) {
        return (
          <>
            <button
              onClick={() => window.open(url, "_blank")}
              onMouseEnter={() => setHovering(hov)}
              onMouseLeave={() => setHovering("")}
              className="font-Tanker text-3xl h-16 my-2 pl-5 text-white text-left"
              style={
                hovering === hov
                  ? { backgroundColor: "rgba(216, 219, 58, 0.75)" }
                  : {}
              }
            >
              {name}
            </button>
            <button
              onClick={() => window.open(url, "_blank")}
              onMouseEnter={() => setHovering(hov)}
              onMouseLeave={() => setHovering("")}
              className={`font-Tanker text-3xl my-2 pr-5 text-right ${
                hovering === hov ? "text-white" : ""
              }`}
              style={
                hovering === hov
                  ? { backgroundColor: "rgba(216, 219, 58, 0.75)" }
                  : {}
              }
            >
              {hovering === hov ? "VISIT" : year}
            </button>
          </>
        );
      }
    }

    if (width > 1032) {
      return (
        <div className="grid grid-cols-3 w-9/12 mt-10">
          {/* TABLE HEADER */}
          <p className={styles.headerText}>PROJECT</p>
          <p
            className={styles.headerText}
            style={{ color: "white", textAlign: "center" }}
          >
            CATEGORY
          </p>
          <p className={styles.headerText} style={{ textAlign: "end" }}>
            DATE
          </p>
          <Row
            url="https://vivicuevas.com"
            hov="vivi"
            name="VIVI CUEVAS"
            category="ART"
            year="2024"
          />
          <div className="w-full bg-white" style={{ height: "0.5px" }} />
          <div className="w-full bg-white" style={{ height: "0.5px" }} />
          <div className="w-full bg-white" style={{ height: "0.5px" }} />
          <Row
            url="https://hotelmarcosgamero.cl"
            hov="hotel"
            name="MARCOS GAMERO"
            category="TOURISM"
            year="2023"
          />
          <div className="w-full bg-white" style={{ height: "0.5px" }} />
          <div className="w-full bg-white" style={{ height: "0.5px" }} />
          <div className="w-full bg-white" style={{ height: "0.5px" }} />
          <Row
            url="https://kamilarusso.com"
            hov="kamila"
            name="Kamila Russo"
            category="FASHION"
            year="2022"
          />
          <div className="w-full bg-white" style={{ height: "0.5px" }} />
          <div className="w-full bg-white" style={{ height: "0.5px" }} />
          <div className="w-full bg-white" style={{ height: "0.5px" }} />
          <Row
            url="https://vza.cl"
            hov="vincenza"
            name="Vincenza Films"
            category="ADVERTISING"
            year="2022"
          />
          <div className="w-full bg-white" style={{ height: "0.15rem" }} />
          <div className="w-full bg-white" style={{ height: "0.15rem" }} />
          <div className="w-full bg-white" style={{ height: "0.15rem" }} />
        </div>
      );
    } else if (width <= 1032) {
      return (
        <div className="grid grid-cols-2 w-9/12 mt-10">
          {/* TABLE HEADER */}
          <p className={styles.headerText}>PROJECT</p>

          <p className={styles.headerText} style={{ textAlign: "end" }}>
            DATE
          </p>
          <Row
            url="https://vivicuevas.com"
            hov="vivi"
            name="VIVI CUEVAS"
            year="2024"
          />
          <div className="w-full bg-white" style={{ height: "0.5px" }} />
          <div className="w-full bg-white" style={{ height: "0.5px" }} />
          <Row
            url="https://hotelmarcosgamero.cl"
            hov="hotel"
            name="MARCOS GAMERO"
            year="2023"
          />
          <div className="w-full bg-white" style={{ height: "0.5px" }} />
          <div className="w-full bg-white" style={{ height: "0.5px" }} />
          <Row
            url="https://kamilarusso.com"
            hov="kamila"
            name="Kamila Russo"
            year="2022"
          />
          <div className="w-full bg-white" style={{ height: "0.5px" }} />
          <div className="w-full bg-white" style={{ height: "0.5px" }} />
          <Row
            url="https://vza.cl"
            hov="vincenza"
            name="Vincenza Films"
            year="2022"
          />
          <div className="w-full bg-white" style={{ height: "0.15rem" }} />
          <div className="w-full bg-white" style={{ height: "0.15rem" }} />
        </div>
      );
    }
  }

  if (width > 970) {
    return (
      <div className={styles.mainContainer}>
        {/* THIS DIV MAKES AN EMPTY SPACE ON TOP */}
        <div className="h-40 w-full" />

        {/* THE MAIN CONTENT */}
        <div className="w-full h-full flex">
          {/* the title to the left */}
          <h2 className={styles.title}>
            LINKS
            <span className="text-black">
              <br />
              WEBSITES
            </span>
          </h2>
          {/* CONTAINER FOR THE TEXT, YELLOW LINE AND TABLE */}
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "9",
              height: "100%",
              // backgroundColor: "red",
              marginLeft: "3rem",
            }}
          >
            {/* CONTAINER FOR THE TEXT AND LINE */}
            <div className="flex relative">
              {/* Main Text */}
              <p className={styles.mainText}>
                For Websites I know mainly React and
                <br /> Wordpress. I always try to focus on
                <br /> responsiveness, clean cand reusable code.
              </p>
              {/* Yellow line, the white line is an ::after for yellowLine */}
              <div
                className="w-1/3 h-3 ml-auto mr-20"
                style={{ backgroundColor: "#D8DB3A" }}
              />
              <div
                className="absolute h-52 bg-white right-36 -top-10"
                style={{ width: "0.15rem" }}
              />
            </div>
            <Table />
          </section>
        </div>
      </div>
    );
  } else if (width > 712 && width <= 970) {
    return (
      <div className={styles.mainContainer}>
        {/* THE MAIN CONTENT */}
        <div className="w-full h-full flex flex-col">
          {/* the title to the left */}
          <h2 className={styles.title}>
            LINKS
            <span className="text-black">WEBSITES</span>
          </h2>
          {/* CONTAINER FOR THE TEXT, YELLOW LINE AND TABLE */}
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "9",
              height: "100%",
              // backgroundColor: "red",
              marginLeft: "3rem",
            }}
          >
            {/* CONTAINER FOR THE TEXT AND LINE */}
            <div className="flex relative">
              {/* Main Text */}
              <p className={styles.mainText}>
                For Websites I know mainly React and
                <br /> Wordpress. I always try to focus on
                <br /> responsiveness, clean cand reusable code.
              </p>
              {/* Yellow line, the white line is an ::after for yellowLine */}
              <div
                className="w-1/3 h-3 ml-auto mr-20"
                style={{ backgroundColor: "#D8DB3A" }}
              />
              <div
                className="absolute h-52 bg-white right-36 -top-10"
                style={{ width: "0.15rem" }}
              />
            </div>
            <Table />
          </section>
        </div>
      </div>
    );
  } else if (width <= 712) {
    return (
      <div className={styles.mainContainer}>
        {/* THE MAIN CONTENT */}
        <div className="w-full h-full flex flex-col">
          {/* the title to the left */}
          <h2 className={styles.title}>
            LINKS
            <span className="text-black">WEBSITES</span>
          </h2>
          {/* CONTAINER FOR THE TEXT, YELLOW LINE AND TABLE */}
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "9",
              height: "100%",
              // backgroundColor: "red",
              marginLeft: "3rem",
            }}
          >
            {/* CONTAINER FOR THE TEXT AND LINE */}
            <div className="flex relative">
              {/* Main Text */}
              <p className={styles.mainText}>
                For Websites I know mainly React and
                <br /> Wordpress. I always try to focus on
                <br /> responsiveness, clean cand reusable code.
              </p>
              {/* Yellow line, the white line is an ::after for yellowLine */}
              <div
                className="w-1/4 h-3 ml-auto mr-2"
                style={{ backgroundColor: "#D8DB3A" }}
              />
              <div
                className="absolute h-52 bg-white right-10 -top-10"
                style={{ width: "0.15rem" }}
              />
            </div>
            <Table />
          </section>
        </div>
      </div>
    );
  }
};

export default Page4;
