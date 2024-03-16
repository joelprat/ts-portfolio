import React, { useState } from "react";
import "../css/Landing.css";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Landing() {
  const [rightContent, setRightContent] = useState<number>(0);
  const components = [<About />, <Projects />, <Contact />];

  return (
    <div className="landing">
      <div className="landing-left">
        <h1 className="">Joel Prat Vilanova</h1>
        <h3 className="snell">Software engineer</h3>
        <ul>
          <li
            className={rightContent === 0 ? "active" : ""}
            onClick={(e) => setRightContent(0)}
          >
            About
          </li>
          <li
            className={rightContent === 1 ? "active" : ""}
            onClick={(e) => setRightContent(1)}
          >
            Projects
          </li>
          <li
            className={rightContent === 2 ? "active" : ""}
            onClick={(e) => setRightContent(2)}
          >
            Contact
          </li>
        </ul>
      </div>
      <div className="landing-right">{components[rightContent]}</div>
    </div>
  );
}
