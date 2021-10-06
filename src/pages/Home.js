import React from "react";
import CountdownTimer from "../components/CountdownTimer";
import bear from "../assets/images/bear.jpeg";
import bearreport from "../assets/images/bearreport.png";
import discord from "../assets/images/discord.png";
import medium from "../assets/images/medium.png";
import twitter from "../assets/images/twitter.png";
import { HashLink } from "react-router-hash-link";
export default function Home() {
  return (
    <>
      <section id="mint"></section>
      <div className="navbar row">
        <div className="nav-item">
          <HashLink smooth to="/#roadmap">
            <i> Roadmap</i>
          </HashLink>
        </div>
        <div className="nav-item">
          <HashLink smooth to="/#discord">
            <i>Discord</i>
          </HashLink>
        </div>
        <div className="nav-item">
          <HashLink smooth to="/#mint">
            <i>Mint</i>
          </HashLink>
        </div>
      </div>
      <div className="row sec1">
        <img className="bear" src={bear} alt="" srcset="" />
      </div>

      <div className="sec2">
        <CountdownTimer></CountdownTimer>
        <h2>PizzlyBears</h2>
        <h4>A Fun Generative Art Project</h4>
        <p>
          built on <b>Solanas Blockchain</b>
        </p>
      </div>
      <section id="roadmap"></section>
      <div className="row">
        <img className="roadmap" src={bearreport} alt="roadmap" />
      </div>
      <section id="discord"></section>
      <div className="sec3">
        <h3>Join Our Community</h3>
        <div className="row">
          <div>
            <a href="https://discord.com/invite/wZnb5cQu" target="_blank">
              <img src={discord} alt="" srcset="" />
            </a>
          </div>
          <div>
            <a href="" target="_blank">
              <img src={medium} alt="" srcset="" />
            </a>
          </div>
          <div>
            <a href="http://twitter.com/PizzlyBearsNFT" target="_blank">
              <img src={twitter} alt="" srcset="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}