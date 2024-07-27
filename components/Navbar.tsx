"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background py-1 backdrop-blur-lg">
      <div className="flex h-16 items-center justify-between py-8 pl-8 pr-8 md:pl-40 md:pr-20">
        <div>
          <a href="/">
            <Image src="/ronDev.png" alt="ron.dev" width={150} height={35} />
          </a>
        </div>
        <div className="hidden items-center space-x-6 md:flex">
          <ul className="flex items-center space-x-6">
            <li>
              <Button
                className={"transition-all duration-300 hover:text-accent"}
              >
                <a href="#About">About</a>
              </Button>
            </li>
            <li>
              <Button
                className={"transition-all duration-300 hover:text-accent"}
              >
                <a href="#Experience">Experience</a>
              </Button>
            </li>
            <li>
              <Button
                primary={true}
                className={"transition-all duration-300 hover:text-accent"}
              >
                <a href="#Resume">Résumé</a>
              </Button>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-12 w-12 cursor-pointer flex-col items-center justify-center"
          >
            <span
              className={`mb-2 block h-1 w-8 bg-gray-800 transition-transform duration-300 ${
                isOpen
                  ? "translate-y-3 rotate-45 transform"
                  : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`mb-2 block h-1 w-8 bg-gray-800 transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block h-1 w-8 bg-gray-800 transition-transform duration-300 ${
                isOpen
                  ? "-translate-y-3 -rotate-45 transform"
                  : "translate-y-0.5"
              }`}
            ></span>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="bg-background md:hidden">
          <ul className="flex flex-col items-center space-y-6 py-6">
            <li>
              <Button
                className={"transition-all duration-300 hover:text-accent"}
              >
                <a href="#About">About</a>
              </Button>
            </li>
            <li>
              <Button
                className={"transition-all duration-300 hover:text-accent"}
              >
                <a href="#Experience">Experience</a>
              </Button>
            </li>
            <li>
              <Button
                className={"transition-all duration-300 hover:text-accent"}
              >
                <a href="#Resume">Résumé</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
