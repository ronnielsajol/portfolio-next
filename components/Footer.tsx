"use client";

import { useState } from "react";
import FooterIcon from "./FooterIcon";

const Footer = () => {
  const [isPunching, setIsPunching] = useState(false);

  const handlePunch = () => {
    setIsPunching(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        setIsPunching(false);
      }, 300);
    }, 300);
  };

  const icons = {
    fb: ["/fb.svg", "https://www.facebook.com/ronnieldaven.sajol"],
    x: ["/x.svg", "https://x.com/Rnnldvn"],
    ig: ["/ig.svg", "https://www.instagram.com/ron.nxxl/"],
    spotify: [
      "/spotify.svg",
      "https://open.spotify.com/user/h03o3nh0y4zvvrkwm74dp6pxa?si=57c45380ac2e48c2",
    ],
    github: ["/github.svg", "https://github.com/ronnielsajol"],
    linkedin: [
      "/linkedin.svg",
      "https://linkedin.com/in/ronniel-daven-sajol-42ab47169",
    ],
  };

  return (
    <footer className="mt-52 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-4">
        <div
          className={`flex items-center justify-center gap-4 ${isPunching ? "animate-split1" : ""}`}
        >
          {Object.entries(icons)
            .slice(0, 3)
            .map(([name, [src, link]], index) => (
              <FooterIcon key={index} src={src} link={link} alt={name} />
            ))}
        </div>

        <div
          className={`flex items-center justify-center gap-4 ${isPunching ? "animate-split2" : ""}`}
        >
          {Object.entries(icons)
            .slice(3)
            .map(([name, [src, link]], index) => (
              <FooterIcon key={index} src={src} link={link} alt={name} />
            ))}
        </div>
      </div>
      <div className="group mt-6 flex flex-col items-center justify-center">
        <a>
          <svg
            onClick={handlePunch}
            className={`stroke-accent opacity-75 transition-transform duration-300 group-hover:translate-y-[-10px] group-hover:opacity-100 ${isPunching ? "animate-punch" : ""}`}
            height="48"
            viewBox="0 0 48 48"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              className="fill-none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              strokeWidth="4"
            >
              <path d="m13 26h2c2.76 0 5-2.24 5-5s-2.24-5-5-5h-4c-2.76 0-5 2.24-5 5v9c0 3.3137 2.68629 6 6 6h24c3.3137 0 6-2.6863 6-6v-4c0-2.2091-1.7909-4-4-4h-14" />
              <path d="m34 44h-20c-1.11 0-2-.9-2-2v-6h24v6c0 1.1-.9 2-2 2z" />
              <path d="m6 20c-1 0-2-2-2-4v-4c0-4.42 3.58-8 8-8h24c4.42 0 8 3.58 8 8v4c0 3.31-2.69 6-6 6h-18.1" />
            </g>
          </svg>
        </a>
        <p className="text-sm font-semibold text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Knock me up, Champ!
        </p>
      </div>
      <div className="copyright mt-2">© Ronniel Sajol 2024</div>
    </footer>
  );
};

export default Footer;
