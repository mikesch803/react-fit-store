import React, { useState } from "react";
import {
  GithubIcon,
  HeartIcon,
  LinkedInIcon,
  ReactIcon,
  TwitterIcon,
} from "../../icons/icons";
import "./Footer.css";
export function Footer() {
  const [icon, setIcon] = useState("heart");
  return (
    <footer className="footer-home">
      <p className="ft-w-300 footer-p">
        Made with
        <button className="btn" onClick={() => setIcon(icon === "heart" ? "react" : "heart")}>
          {icon === "heart" ? <HeartIcon /> : <ReactIcon />}
        </button>
        by Mahendra
      </p>
      <div className="footer-socials">
        <a href="https://github.com/mikesch803mikesch803">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/mahendra-chauhan-b111561b1/">
          <LinkedInIcon />
        </a>
        <a href="https://twitter.com/mikesch_34">
          <TwitterIcon />
        </a>
      </div>
    </footer>
  );
}
