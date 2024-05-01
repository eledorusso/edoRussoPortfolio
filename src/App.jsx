import { useState, useEffect } from "react";
import "./App.css";
import Page2 from "./components/Page2/Page2.jsx";
import Page3 from './components/Page3/Page3.jsx'
import Page4 from "./components/Page4/Page4.jsx";

function App() {
  const [smoke, setSmoke] = useState(false);
  const [afterSmoke, setAfterSmoke] = useState(false);

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

  //Logic for the Scroll button to scroll 100vh down.
  const scrollDown = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="mainContainer">
        <h1 className="mainTitle">
          <span className="text-4xl">HELLO,</span>
          <span style={{ fontSize: "6rem", fontFamily: "Impact" }}>
            I'M <span style={{ color: "black" }}>EDO RUSSO</span>
          </span>
          <span className="text-4xl">& THIS IS MY PORTFOLIO</span>
        </h1>
        {/* BACKGROUND IMAGE */}
        <img className="ml-auto" src="/imgs/bg-img-1.jpg" />
        {/* This abosolutely positioned children can not be inside the yellow rectangle because of it's opacity */}
        <div className="absolute flex flex-col w-5/12 h-full right-0">
          <p
            className={
              smoke ? "scrollToSeeMyProjectsSmoke" : "scrollToSeeMyProjects"
            }
          >
            SCROLL TO <br />
            <span style={{ textDecoration: "underline" }}>SEE MY PROJECTS</span>
          </p>
          <div className="yellowHorizontalRectangle" />
        </div>
        {/* Scroll Button POSITION STATIC */}
        <button
          onClick={scrollDown}
          className={!afterSmoke ? "scrollIcon" : "scrollIconJumping"}
        >
          <img src="/imgs/scroll-icon.png" />
        </button>
      </div>

      <Page2 />
      <Page3 />
      <Page4 />
    </>
  );
}

export default App;
