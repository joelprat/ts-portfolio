import React from "react";
import "../css/Contact.css";

interface ImagesFormat {
  img: string;
  alt: string;
  url: string;
}

export default function Contact() {
  const images: ImagesFormat[] = [
    {
      img: "/github.svg",
      alt: "Github Joel Prat Vilanova",
      url: "https://github.com/joelprat",
    },
    {
      img: "/linkedin.svg",
      alt: "LinkedIn Joel Prat Vilanova",
      url: "https://www.linkedin.com/in/joelpratvilanova/",
    },
  ];
  return (
    <div className="contact animation">
      {images.map((image) => (
        <a target="_blank" href={image.url} rel="noreferrer">
          <img src={image.img} alt={image.alt} />
        </a>
      ))}
    </div>
  );
}
