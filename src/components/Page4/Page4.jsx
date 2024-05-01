import React, { useEffect, useRef, useState } from "react";
import styles from "./Page4.module.css";

const Page4 = () => {
  const [hovering, setHovering] = useState(""); //To change the text on the table when hovering

  return (
    <div className={styles.mainContainer}>
      {/* THIS DIV MAKES AN EMPTY SPACE ON TOP */}
      <div className="h-40 w-screen" />

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
              Looking for a Job I realized that Websites
              <br /> are more in demand than React Native so
              <br /> I transitioned to Web technologies such as
              <br /> React, Javascript, CSS and HTML.
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
          <table>
            <thead>
              <tr style={{ borderBottom: "2.4px solid white" }}>
                <th className="text-left w-1/3">PROJECT</th>
                <th className="text-white w-1/3">CATEGORY</th>
                <th className="text-right w-1/3">DATE</th>
              </tr>
            </thead>
            <tbody>
              <tr
                className="border-b border-white group"
                onMouseEnter={() => setHovering("vivi")}
                onMouseLeave={() => setHovering("")}
                onClick={() => window.open("https://vivicuevas.com", "_blank")}
                style={{ cursor: "pointer" }}
              >
                <td className="text-white pl-2">VIVI CUEVAS</td>
                <td className="text-center">ART</td>
                <td className="text-right group-hover:text-white pr-4">
                  {hovering === "vivi" ? "VISIT" : "2024"}
                </td>
              </tr>
              <tr
                className="border-b border-white group"
                onMouseEnter={() => setHovering("marcos")}
                onMouseLeave={() => setHovering("")}
                onClick={() =>
                  window.open("https://hotelmarcosgamero.cl", "_blank")
                }
                style={{ cursor: "pointer" }}
              >
                <td className="text-white pl-2">MARCOS GAMERO</td>
                <td className="text-center">TOURISM</td>

                <td className="text-right group-hover:text-white pr-4">
                  {hovering === "marcos" ? "VISIT" : "2023"}
                </td>
              </tr>
              <tr
                className="border-b border-white group"
                onMouseEnter={() => setHovering("vincenza")}
                onMouseLeave={() => setHovering("")}
                onClick={() => window.open("https://vza.cl", "_blank")}
                style={{ cursor: "pointer" }}
              >
                <td className="text-white pl-2">VINCENZA FILMS</td>
                <td className="text-center">ADVERTISING</td>
                <td className="text-right group-hover:text-white pr-4">
                  {hovering === "vincenza" ? "VISIT" : "2020"}
                </td>
              </tr>
              <tr
                className="group"
                style={{ borderBottom: "2.4px solid white", cursor: "pointer" }}
                onMouseEnter={() => setHovering("kamila")}
                onMouseLeave={() => setHovering("")}
                onClick={() => window.open("http://kamilarusso.com", "_blank")}
              >
                <td className="text-white pl-2">KAMILA RUSSO</td>
                <td className="text-center">FASHION</td>
                <td className="text-right group-hover:text-white pr-4">
                  {hovering === "kamila" ? "VISIT" : "2020"}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Page4;
