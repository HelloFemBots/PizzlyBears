import React from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/images/logo.jpg";
import discord from "../assets/images/discord.png";
import twitter from "../assets/images/twitter.png";
import medium from "../assets/images/medium.png";

export default function Navbar() {
  return (
    <>
      <div className="navbar row">
        <div className="nav-item col-2">
          <img className="logo" src={logo} alt=""></img>
        </div>
        <div className="nav-item col-2">
          <a href="" target="_blank" rel="norefferer">
            <i> Mint</i>
          </a>
        </div>
        <div className="nav-item col-2">
          <HashLink smooth to="/#story">
            <i> story</i>
          </HashLink>
        </div>

        <div className="nav-item col-2">
          <HashLink smooth to="/#roadmap">
            <i>Roadmap</i>
          </HashLink>
        </div>
        <div className="nav-item col-2">
          <HashLink smooth to="/#faq">
            <i>faq</i>
          </HashLink>
        </div>

        <div className="nav-item col-2 social-icon-group">
          <a href="https://discord.com/invite/SRG77c7629" target="_blank" rel="noreffer">
            <img src={discord} alt=""></img>
          </a>
          <a href="" target="_blank" rel="noreffer">
            <img src={medium} alt=""></img>
          </a>
          <a href="https://twitter.com/PizzlyBearsNFT" target="_blank" rel="noreffer">
            <img src={twitter} alt=""></img>
          </a>
        </div>
      </div>
    </>
  );
}
