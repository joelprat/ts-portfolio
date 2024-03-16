import React, { useEffect, useState } from "react";
import "../css/About.css";

export default function About() {
  const [difDate, setDifDate] = useState<string>();

  useEffect(() => {
    const initialDate = BigInt(new Date(2022, 6, 7).getTime());
    const intervalId = setInterval(() => {
      const currentDate = BigInt(new Date().getTime());
      const milsecDif = currentDate - initialDate;
      const yearDif = Number(milsecDif) / (365.25 * 24 * 60 * 60 * 1000);
      setDifDate(yearDif.toFixed(8));
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="about animation">
      <p>
        I'm Joel, a junior software engineer who loves the world of computing. I
        have studied the degree of computer engineering at the UAB, with a
        mention in software engineering.
      </p>
      <div className="about-exp">
        <h3>EXPERIENCE YEARS</h3>
        <h3 className="exp">{difDate}</h3>
      </div>
    </div>
  );
}
