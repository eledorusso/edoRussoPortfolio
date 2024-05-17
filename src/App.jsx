import { useState, useEffect } from "react";
import "./App.css";
import Page2 from "./components/Page2/Page2.jsx";
import Page3 from "./components/Page3/Page3.jsx";
import Page4 from "./components/Page4/Page4.jsx";
// import { isMobile, isBrowser } from "react-device-detect";

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

  //To change the scroll Arrow image, there is some weird behaviour in some screens so I do * 2.9 instead of * 3
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > window.innerHeight * 2.9) {
        setScrollArrow("up");
      }
      if (window.scrollY < window.innerHeight * 2.9) {
        setScrollArrow("down");
      }
      console.log(window.scrollY, window.innerHeight);
    }

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Logic for the Scroll button to scroll 100vh down or to the top.
  const scrollTo = () => {
    if (window.scrollY < window.innerHeight * 2.9) {
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
  // if (isBrowser) {
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
      <Page3 />
      <Page4 />
    </>
  );
  // }
  // else if (isMobile) {
  //   return (
  //     <div className="w-screen h-screen flex bg-black text-white items-center justify-center">
  //       <p style={{fontSize: '1.5rem'}}>
  //         THIS SITE HASN'T<br/> BEEN OPTIMIZED
  //         <br /> FOR MOBILE YET.<br/><br/>PLEASE USE BROWSER.

  //       </p>
  //     </div>
  //   );
  // }
}

export default App;
