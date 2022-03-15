import React from "react";
import { GithubIcon, HeartIcon, LinkedInIcon, TwitterIcon } from "../../icons/icons";
import "./Footer.css";
export function Footer() {
  return (
    <footer className="footer-home">
      <p className="ft-w-300">
        Made with{" "}
        <HeartIcon/>{" "}
        by Mahendra
      </p>
      <div className="footer-socials">
        <GithubIcon/>
        <LinkedInIcon/>
        <TwitterIcon/>
      </div>
    </footer>
  );
}
