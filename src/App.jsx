import { useState, useEffect } from "react";
import "./App.css";
import Page2 from "./components/Page2/Page2.jsx";
import Page3 from "./components/Page3/Page3.jsx";
import Page4 from "./components/Page4/Page4.jsx";

function App() {
  const [smoke, setSmoke] = useState(false);
  const [afterSmoke, setAfterSmoke] = useState(false);
  const [scrollArrow, setScrollArrow] = useState("down");

  // Event Listener for the Mouse Movement as soon as the App Starts.
  useEffect(() => {
    function handleMouseMove() {
      setSmoke(true);
      setTimeout(() => setAfterSmoke(true), 1000);
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  //To change the scroll Arrow image
  useEffect(() => {
    function handleScroll() {
      if (Math.ceil(window.scrollY) >= window.innerHeight * 2) {
        setScrollArrow("up");
      }
      if (
        scrollArrow === "up" &&
        Math.ceil(window.scrollY) < window.innerHeight * 2
      ) {
        setScrollArrow("down");
      }
    }

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Logic for the Scroll button to scroll 100vh down or to the top.
  const scrollTo = () => {
    if (Math.ceil(window.scrollY) < window.innerHeight * 2) {
      window.scrollTo({
        top: window.scrollY + window.innerHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="mainContainer">
        <h1 className="mainTitle">
          <span className="hidden md:block text-4xl">HELLO, </span>
          <span className="imEdoRusso">
            I'M <span style={{ color: "black" }}>EDO RUSSO</span>
          </span>
          <span className="text-4xl">& THIS IS MY PORTFOLIO</span>
        </h1>
        {/* BACKGROUND IMAGE */}
        <img
          className="absolute h-full right-0 object-cover z-10"
          src="/imgs/bg-img-1.jpg"
        />
        {/* This can not be inside the yellow rectangle because the recangle changes it's opacity */}

        <p
          className={
            smoke ? "scrollToSeeMyProjectsSmoke" : "scrollToSeeMyProjects"
          }
        >
          SCROLL TO <br />
          <span style={{ textDecoration: "underline" }}>SEE MY PROJECTS</span>
        </p>
        <div className="yellowHorizontalRectangle" />

        {/* Scroll Button POSITION STATIC */}
        <button
          onClick={scrollTo}
          className={!afterSmoke ? "scrollIcon" : "scrollIconJumping"}
        >
          <img
            src={
              scrollArrow === "down"
                ? "/imgs/scroll-icon.png"
                : "/imgs/scroll-icon-up.jpg"
            }
          />
        </button>
      </div>

      <Page2 />
      {/* <Page3 /> */}
      <Page4 />
    </>
  );
}

export default App;
