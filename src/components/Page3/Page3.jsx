import React, { useState, useEffect } from "react";
import styles from "./Page3.module.css";

const Page3 = () => {
  const [hovering, setHovering] = useState(""); // For the logic of hovering the displayApp cards
  const [imgIdx, setImgIdx] = useState(0); // To know if user is selecting the image 1,2 or 3
  const [width, setWidth] = useState(window.innerWidth);
  const [cardSelected, setCardSelected] = useState(1);

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

  // COMPONENT TO SHOW AN APP's IMAGE
  function DisplayApp({ titleWhite, titleBlack, imgs }) {
    return (
      <div className="flex flex-col rounded-2xl" style={{ height: "95%" }}>
        <div
          style={{
            height: "100%",
            width: "12rem",
            borderRadius: "1rem",
            backgroundColor: "#D8DB3A",
            backgroundImage:
              hovering === titleWhite && `url(${imgs[imgIdx - 1]})`, // if hovering this div then show the index of the imgs array selected
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onMouseEnter={() => {
            hovering !== titleWhite && setImgIdx(1); // This is for the imgIdx to always be on the first dot when going to other cards
            setHovering(titleWhite);
          }} // for the logic of hovering this specific card
        >
          {/* show text only if is not hovered */}
          {hovering !== titleWhite ? (
            <>
              <h3 className={styles.titleWhite}>{titleWhite}</h3>
              <h3 className={styles.titleBlack}>{titleBlack}</h3>
            </>
          ) : null}
        </div>
        {/* three bottom circles */}
        <section className="flex mx-auto mt-3 gap-2">
          <button
            onClick={() => {
              setHovering(titleWhite);
              setImgIdx(1);
            }}
            className="h-3 w-3 bg-white  rounded-full cursor-pointer"
            style={{
              backgroundColor:
                hovering === titleWhite && imgIdx === 1 && "#D8DB3A",
            }}
          />
          <button
            onClick={() => {
              setHovering(titleWhite);
              setImgIdx(2);
            }}
            className="h-3 w-3 bg-white rounded-full cursor-pointer"
            style={{
              backgroundColor:
                hovering === titleWhite && imgIdx === 2 && "#D8DB3A",
            }}
          />
          <button
            onClick={() => {
              setHovering(titleWhite);
              setImgIdx(3);
            }}
            className="h-3 w-3 bg-white rounded-full cursor-pointer"
            style={{
              backgroundColor:
                hovering === titleWhite && imgIdx === 3 && "#D8DB3A",
            }}
          />
        </section>
      </div>
    );
  }
  if (width > 1373) {
    return (
      <div className={styles.mainContainer}>
        {/* THIS DIV MAKES AN EMPTY SPACE ON TOP */}
        <div className="h-40 w-full" />
        {/* Main content */}
        <div className="w-full h-full flex">
          {/* the title to the left */}
          <h2 className={styles.title}>
            APP
            <span className="text-black">
              <br />
              PROJECTS
            </span>
          </h2>
          {/* TEXT AND APP DISPLAY */}
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "9",
              height: "100%",
              marginLeft: "3rem",
            }}
          >
            {hovering === "UNMATCHED" ? (
              <p className={styles.mainText}>
                AN APP TO CALCULATE
                <br />
                THE PROBABILITY OF
                <br /> EVERY DRAW IN A
                <br /> POPULAR BOARD GAME.
              </p>
            ) : hovering === "PERRO" ? (
              <p className={styles.mainText}>
                THE FIRST APP I MADE, <br />
                STILL AVAILABLE IN THE
                <br />
                GOOGLE PLAY STORE.
                <br />
                IT'S AN APP TO LEARN LANGUAGES.
              </p>
            ) : hovering === "HOTEL" ? (
              <p className={styles.mainText}>
                I WORKED AT THIS HOTEL <br />
                LAST YEAR AND THIS APP
                <br /> HELPED THEM TO ORGANIZE <br />
                MANY DAILY TASKS.
              </p>
            ) : hovering === "ROBIN" ? (
              <p className={styles.mainText}>
                A VERY AMBITIOUS START UP,
                <br />I CAN'T DISCLOSE MORE INFO. <br />
                THAN THIS BETA VERSION OF
                <br />
                THE APP DUE TO AN NDA.
              </p>
            ) : hovering === "OTHER" ? (
              <p className={styles.mainText}>
                BETA VERSIONS FOR <br />
                STARTUP APPS, OF WHICH <br />I CAN ONLY SHARE THE
                <br />
                PRELIMINARY DESIGNS.
              </p>
            ) : (
              <p className={styles.mainText}>
                I started coding because I wanted
                <br /> to make Mobile Apps so the first
                <br /> framework I learned to use was <br />
                React Native.
              </p>
            )}

            <div className="flex w-full h-full gap-10 ">
              <DisplayApp
                titleWhite="UNMATCHED"
                imgs={[
                  "/imgs/apps/unmatched1.png",
                  "/imgs/apps/unmatched2.png",
                  "/imgs/apps/unmatched3.png",
                ]}
              />
              <DisplayApp
                titleWhite="PERRO"
                titleBlack="GRINGO"
                imgs={[
                  "/imgs/apps/perrogringo1.png",
                  "/imgs/apps/perrogringo2.png",
                  "/imgs/apps/perrogringo3.png",
                ]}
              />
              <DisplayApp
                titleWhite="HOTEL"
                titleBlack="MARCOS G."
                imgs={[
                  "/imgs/apps/hmg1.png",
                  "/imgs/apps/hmg2.png",
                  "/imgs/apps/hmg3.png",
                ]}
              />
              <DisplayApp
                titleWhite="ROBIN"
                titleBlack="MONEY"
                imgs={[
                  "/imgs/apps/rbm1.jpg",
                  "/imgs/apps/rbm2.jpg",
                  "/imgs/apps/rbm3.jpg",
                ]}
              />
              <DisplayApp
                titleWhite="OTHER"
                titleBlack="PROJECTS"
                imgs={[
                  "/imgs/apps/thegym.png",
                  "/imgs/apps/dicci1.jpg",
                  "/imgs/apps/dicci2.jpg",
                ]}
              />
            </div>
          </section>
        </div>
      </div>
    );
  } else if (width <= 1373 && width > 1187) {
    return (
      <div className={styles.mainContainer}>
        {/* TEXTS */}
        <section className="w-full flex mt-5">
          <h2 className={styles.title}>
            APP
            <span className="text-black">PROJECTS</span>
          </h2>

          {hovering === "UNMATCHED" ? (
            <p className={styles.mainText}>
              AN APP TO CALCULATE THE PROBABILITY OF
              <br />
              EVERY DRAW IN A POPULAR BOARD GAME.
            </p>
          ) : hovering === "PERRO" ? (
            <p className={styles.mainText}>
              THE FIRST APP I MADE, STILL AVAILABLE IN THE
              <br />
              GOOGLE PLAY STORE. IT'S AN APP TO LEARN LANGUAGES.
            </p>
          ) : hovering === "HOTEL" ? (
            <p className={styles.mainText}>
              I WORKED AT THIS HOTEL LAST YEAR AND THIS APP
              <br /> HELPED THEM TO ORGANIZE MANY DAILY TASKS.
            </p>
          ) : hovering === "ROBIN" ? (
            <p className={styles.mainText}>
              A VERY AMBITIOUS START UP, I CAN'T DISCLOSE MORE INFO. <br />
              THAN THIS BETA VERSION OF THE APP DUE TO AN NDA.
            </p>
          ) : hovering === "OTHER" ? (
            <p className={styles.mainText}>
              BETA VERSIONS FOR STARTUP APPS, OF WHICH <br />I CAN ONLY SHARE
              THE PRELIMINARY DESIGNS.
            </p>
          ) : (
            <p className={styles.mainText}>
              I started coding because I wanted
              <br /> to make Mobile Apps so the first
              <br /> framework I learned to use was <br />
              React Native.
            </p>
          )}
        </section>

        <div className="flex w-5/6 h-4/6 mx-auto my-auto justify-between">
          <DisplayApp
            titleWhite="UNMATCHED"
            imgs={[
              "/imgs/apps/unmatched1.png",
              "/imgs/apps/unmatched2.png",
              "/imgs/apps/unmatched3.png",
            ]}
          />
          <DisplayApp
            titleWhite="PERRO"
            titleBlack="GRINGO"
            imgs={[
              "/imgs/apps/perrogringo1.png",
              "/imgs/apps/perrogringo2.png",
              "/imgs/apps/perrogringo3.png",
            ]}
          />
          <DisplayApp
            titleWhite="HOTEL"
            titleBlack="MARCOS G."
            imgs={[
              "/imgs/apps/hmg1.png",
              "/imgs/apps/hmg2.png",
              "/imgs/apps/hmg3.png",
            ]}
          />
          <DisplayApp
            titleWhite="ROBIN"
            titleBlack="MONEY"
            imgs={[
              "/imgs/apps/rbm1.jpg",
              "/imgs/apps/rbm2.jpg",
              "/imgs/apps/rbm3.jpg",
            ]}
          />
          <DisplayApp
            titleWhite="OTHER"
            titleBlack="PROJECTS"
            imgs={[
              "/imgs/apps/thegym.png",
              "/imgs/apps/dicci1.jpg",
              "/imgs/apps/dicci2.jpg",
            ]}
          />
        </div>
      </div>
    );
  } else if (width <= 1187 && width > 1136) {
    return (
      <div className={styles.mainContainer}>
        {/* TEXTS */}
        <section className="w-full flex mt-5">
          <h2 className={styles.title}>
            APP
            <span className="text-black">PROJECTS</span>
          </h2>

          {hovering === "UNMATCHED" ? (
            <p className={styles.mainText}>
              AN APP TO CALCULATE THE PROBABILITY OF
              <br />
              EVERY DRAW IN A POPULAR BOARD GAME.
            </p>
          ) : hovering === "PERRO" ? (
            <p className={styles.mainText}>
              THE FIRST APP I MADE, STILL AVAILABLE IN THE
              <br />
              GOOGLE PLAY STORE. IT'S AN APP TO LEARN LANGUAGES.
            </p>
          ) : hovering === "HOTEL" ? (
            <p className={styles.mainText}>
              I WORKED AT THIS HOTEL LAST YEAR AND THIS APP
              <br /> HELPED THEM TO ORGANIZE MANY DAILY TASKS.
            </p>
          ) : hovering === "ROBIN" ? (
            <p className={styles.mainText}>
              A VERY AMBITIOUS START UP, I CAN'T DISCLOSE MORE INFO. <br />
              THAN THIS BETA VERSION OF THE APP DUE TO AN NDA.
            </p>
          ) : hovering === "OTHER" ? (
            <p className={styles.mainText}>
              BETA VERSIONS FOR STARTUP APPS, OF WHICH <br />I CAN ONLY SHARE
              THE PRELIMINARY DESIGNS.
            </p>
          ) : (
            <p className={styles.mainText}>
              I started coding because I wanted
              <br /> to make Mobile Apps so the first
              <br /> framework I learned to use was <br />
              React Native.
            </p>
          )}
        </section>

        <div className="flex w-11/12 h-4/6 mx-auto my-auto justify-around">
          <DisplayApp
            titleWhite="UNMATCHED"
            imgs={[
              "/imgs/apps/unmatched1.png",
              "/imgs/apps/unmatched2.png",
              "/imgs/apps/unmatched3.png",
            ]}
          />
          <DisplayApp
            titleWhite="PERRO"
            titleBlack="GRINGO"
            imgs={[
              "/imgs/apps/perrogringo1.png",
              "/imgs/apps/perrogringo2.png",
              "/imgs/apps/perrogringo3.png",
            ]}
          />
          <DisplayApp
            titleWhite="HOTEL"
            titleBlack="MARCOS G."
            imgs={[
              "/imgs/apps/hmg1.png",
              "/imgs/apps/hmg2.png",
              "/imgs/apps/hmg3.png",
            ]}
          />
          <DisplayApp
            titleWhite="ROBIN"
            titleBlack="MONEY"
            imgs={[
              "/imgs/apps/rbm1.jpg",
              "/imgs/apps/rbm2.jpg",
              "/imgs/apps/rbm3.jpg",
            ]}
          />
          <DisplayApp
            titleWhite="OTHER"
            titleBlack="PROJECTS"
            imgs={[
              "/imgs/apps/thegym.png",
              "/imgs/apps/dicci1.jpg",
              "/imgs/apps/dicci2.jpg",
            ]}
          />
        </div>
      </div>
    );
  } else if (width <= 1136 && width > 943) {
    return (
      <div className={styles.mainContainer}>
        {/* TEXTS */}
        <section className="w-full flex mt-5">
          <h2 className={styles.title}>
            APP
            <span className="text-black">PROJECTS</span>
          </h2>

          {hovering === "UNMATCHED" ? (
            <p className={styles.mainText}>
              AN APP TO CALCULATE THE PROBABILITY OF
              <br />
              EVERY DRAW IN A POPULAR BOARD GAME.
            </p>
          ) : hovering === "PERRO" ? (
            <p className={styles.mainText}>
              THE FIRST APP I MADE, STILL AVAILABLE IN THE
              <br />
              GOOGLE PLAY STORE. IT'S AN APP TO LEARN LANGUAGES.
            </p>
          ) : hovering === "HOTEL" ? (
            <p className={styles.mainText}>
              I WORKED AT THIS HOTEL LAST YEAR AND THIS APP
              <br /> HELPED THEM TO ORGANIZE MANY DAILY TASKS.
            </p>
          ) : hovering === "ROBIN" ? (
            <p className={styles.mainText}>
              A VERY AMBITIOUS START UP, I CAN'T DISCLOSE MORE INFO. <br />
              THAN THIS BETA VERSION OF THE APP DUE TO AN NDA.
            </p>
          ) : hovering === "OTHER" ? (
            <p className={styles.mainText}>
              BETA VERSIONS FOR STARTUP APPS, OF WHICH <br />I CAN ONLY SHARE
              THE PRELIMINARY DESIGNS.
            </p>
          ) : (
            <p className={styles.mainText}>
              I started coding because I wanted to make Mobile Apps so the first
              framework I learned to use was React Native.
            </p>
          )}
        </section>
        <div className="flex w-11/12 h-4/6 mx-auto my-auto justify-around">
          {cardSelected === 1 ? (
            <DisplayApp
              titleWhite="UNMATCHED"
              imgs={[
                "/imgs/apps/unmatched1.png",
                "/imgs/apps/unmatched2.png",
                "/imgs/apps/unmatched3.png",
              ]}
            />
          ) : cardSelected === 2 ? (
            <DisplayApp
              titleWhite="PERRO"
              titleBlack="GRINGO"
              imgs={[
                "/imgs/apps/perrogringo1.png",
                "/imgs/apps/perrogringo2.png",
                "/imgs/apps/perrogringo3.png",
              ]}
            />
          ) : cardSelected === 3 ? (
            <DisplayApp
              titleWhite="HOTEL"
              titleBlack="MARCOS G."
              imgs={[
                "/imgs/apps/hmg1.png",
                "/imgs/apps/hmg2.png",
                "/imgs/apps/hmg3.png",
              ]}
            />
          ) : cardSelected === 4 ? (
            <DisplayApp
              titleWhite="ROBIN"
              titleBlack="MONEY"
              imgs={[
                "/imgs/apps/rbm1.jpg",
                "/imgs/apps/rbm2.jpg",
                "/imgs/apps/rbm3.jpg",
              ]}
            />
          ) : cardSelected === 5 ? (
            <DisplayApp
              titleWhite="OTHER"
              titleBlack="PROJECTS"
              imgs={[
                "/imgs/apps/thegym.png",
                "/imgs/apps/dicci1.jpg",
                "/imgs/apps/dicci2.jpg",
              ]}
            />
          ) : null}
        </div>
      </div>
    );
  } else if (width <= 943) {
    return (
      <div className={styles.mainContainer}>
        {/* TEXTS */}
        <h2 className={styles.title}>
          APPS
          {/* <span className="text-black">PROJECTS</span> */}
        </h2>

        {hovering === "UNMATCHED" ? (
          <p className={styles.mainText}>
            AN APP TO CALCULATE THE PROBABILITY OF
            <br />
            EVERY DRAW IN A POPULAR BOARD GAME.
          </p>
        ) : hovering === "PERRO" ? (
          <p className={styles.mainText}>
            THE FIRST APP I MADE, STILL AVAILABLE IN THE
            <br />
            GOOGLE PLAY STORE. IT'S AN APP TO LEARN LANGUAGES.
          </p>
        ) : hovering === "HOTEL" ? (
          <p className={styles.mainText}>
            I WORKED AT THIS HOTEL LAST YEAR AND THIS APP
            <br /> HELPED THEM TO ORGANIZE MANY DAILY TASKS.
          </p>
        ) : hovering === "ROBIN" ? (
          <p className={styles.mainText}>
            A VERY AMBITIOUS START UP, I CAN'T DISCLOSE MORE INFO. <br />
            THAN THIS BETA VERSION OF THE APP DUE TO AN NDA.
          </p>
        ) : hovering === "OTHER" ? (
          <p className={styles.mainText}>
            BETA VERSIONS FOR STARTUP APPS, OF WHICH <br />I CAN ONLY SHARE THE
            PRELIMINARY DESIGNS.
          </p>
        ) : (
          <p className={styles.mainText}>
            I started coding to make Mobile Apps so the first framework I
            learned to use was React Native.
          </p>
        )}
        <div className="flex w-11/12 h-4/6 mx-auto my-auto justify-around ">
          {cardSelected === 1 ? (
            <div className="flex w-full h-full justify-center items-center">
              <DisplayApp
                titleWhite="UNMATCHED"
                imgs={[
                  "/imgs/apps/unmatched1.png",
                  "/imgs/apps/unmatched2.png",
                  "/imgs/apps/unmatched3.png",
                ]}
              />
              <button
                style={{
                  position: "absolute",
                  backgroundImage: `url('/imgs/arrow-right.png')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "3rem",
                  height: "3rem",
                  transform: "translate(8rem, -1rem)",
                }}
                onClick={() => {
                  setImgIdx(1);
                  setCardSelected(2);
                }}
              />
            </div>
          ) : cardSelected === 2 ? (
            <div className="flex w-full h-full justify-center items-center">
              <button
                style={{
                  position: "absolute",
                  backgroundImage: `url('/imgs/arrow-right.png')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "3rem",
                  height: "3rem",
                  transform: "translate(8rem, -1rem)",
                }}
                onClick={() => {
                  setImgIdx(1);
                  setCardSelected(3);
                }}
              />
              <DisplayApp
                titleWhite="PERRO"
                titleBlack="GRINGO"
                imgs={[
                  "/imgs/apps/perrogringo1.png",
                  "/imgs/apps/perrogringo2.png",
                  "/imgs/apps/perrogringo3.png",
                ]}
              />

              <button
                style={{
                  position: "absolute",
                  backgroundImage: `url('/imgs/arrow-left.png')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "3rem",
                  height: "3rem",
                  transform: "translate(-8rem, -1rem)",
                }}
                onClick={() => {
                  setImgIdx(1);
                  setCardSelected(1);
                }}
              />
            </div>
          ) : cardSelected === 3 ? (
            <div className="flex w-full h-full justify-center items-center">
              <DisplayApp
                titleWhite="HOTEL"
                titleBlack="MARCOS G."
                imgs={[
                  "/imgs/apps/hmg1.png",
                  "/imgs/apps/hmg2.png",
                  "/imgs/apps/hmg3.png",
                ]}
              />
              <button
                style={{
                  position: "absolute",
                  backgroundImage: `url('/imgs/arrow-right.png')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "3rem",
                  height: "3rem",
                  transform: "translate(8rem, -1rem)",
                }}
                onClick={() => {
                  setImgIdx(1);
                  setCardSelected(4);
                }}
              />
              <button
                style={{
                  position: "absolute",
                  backgroundImage: `url('/imgs/arrow-left.png')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "3rem",
                  height: "3rem",
                  transform: "translate(-8rem, -1rem)",
                }}
                onClick={() => {
                  setImgIdx(1);
                  setCardSelected(2);
                }}
              />
            </div>
          ) : cardSelected === 4 ? (
            <div className="flex w-full h-full justify-center items-center">
              <button
                style={{
                  position: "absolute",
                  backgroundImage: `url('/imgs/arrow-right.png')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "3rem",
                  height: "3rem",
                  transform: "translate(8rem, -1rem)",
                }}
                onClick={() => {
                  setImgIdx(1);
                  setCardSelected(5);
                }}
              />
              <DisplayApp
                titleWhite="ROBIN"
                titleBlack="MONEY"
                imgs={[
                  "/imgs/apps/rbm1.jpg",
                  "/imgs/apps/rbm2.jpg",
                  "/imgs/apps/rbm3.jpg",
                ]}
              />
              <button
                style={{
                  position: "absolute",
                  backgroundImage: `url('/imgs/arrow-left.png')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "3rem",
                  height: "3rem",
                  transform: "translate(-8rem, -1rem)",
                }}
                onClick={() => {
                  setImgIdx(1);
                  setCardSelected(3);
                }}
              />
            </div>
          ) : cardSelected === 5 ? (
            <div className="flex w-full h-full justify-center items-center">
              <DisplayApp
                titleWhite="OTHER"
                titleBlack="PROJECTS"
                imgs={[
                  "/imgs/apps/thegym.png",
                  "/imgs/apps/dicci1.jpg",
                  "/imgs/apps/dicci2.jpg",
                ]}
              />
              <button
                style={{
                  position: "absolute",
                  backgroundImage: `url('/imgs/arrow-left.png')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "3rem",
                  height: "3rem",
                  transform: "translate(-8rem, -1rem)",
                }}
                onClick={() => {
                  setImgIdx(1);
                  setCardSelected(4);
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
};

export default Page3;
