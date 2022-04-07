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
        Made with{" "}
        <span onClick={() => setIcon(icon === "heart" ? "react" : "heart")}>
          {icon === "heart" ? <HeartIcon /> : <ReactIcon />}
        </span>
        by Mahendra
      </p>
      <div className="footer-socials">
        <GithubIcon />
        <LinkedInIcon />
        <TwitterIcon />
      </div>
    </footer>
  );
}
