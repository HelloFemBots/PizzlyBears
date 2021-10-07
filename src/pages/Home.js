import React from "react";
import CountdownTimer from "../components/CountdownTimer";
import bear from "../assets/images/bear.jpeg";
import bearreport from "../assets/images/bearreport.png";
import discord from "../assets/images/discord.png";
import medium from "../assets/images/medium.png";
import twitter from "../assets/images/twitter.png";
import nft_calender from "../assets/images/nft_calender.png";
import nonfungi from "../assets/images/nonfungi.png";
import howrareis from "../assets/images/howrareis.png";
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
          <a
            href="https://discord.com/invite/SRG77c7629"
            target="_blank"
            rel="noreferrer"
          >
            <i>Discord</i>
          </a>
        </div>
        <div className="nav-item">
          <HashLink smooth to="/#mint">
            <i>Mint</i>
          </HashLink>
        </div>
        <div className="nav-item">
          <a href="mailto:pizzlybearsonsolana@protonmail.com">
            <i>Contact</i>
          </a>
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

      <div className="sec3">
        <h3>Join Our Community</h3>
        <div className="row">
          <div>
            <a
              href="https://discord.com/invite/SRG77c7629"
              target="_blank"
              rel="noreferrer"
            >
              <img src={discord} alt="" srcset="" />
            </a>
          </div>
          <div>
            <a href="" target="_blank" rel="noreferrer">
              <img src={medium} alt="" srcset="" />
            </a>
          </div>
          <div>
            <a
              href="http://twitter.com/PizzlyBearsNFT"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="" srcset="" />
            </a>
          </div>
        </div>
      </div>
      <div className="sec4">
        <div className="row">
          <h2><i>As Seen On:</i></h2>
        </div>
        <div className="row">
          <a href="https://nftcalendar.io/" target="_blank" rel="noreferrer">
            <img src={nft_calender} alt="" srcset="" />
          </a>
          <a href="https://www.non-fungi.com/" target="_blank" rel="noreferrer">
            <img src={nonfungi} alt="" srcset="" />
          </a>
          <a href="https://howrare.is/" target="_blank" rel="noreferrer">
            <img src={howrareis} alt="" srcset="" />
          </a>
        </div>
      </div>
    </>
  );
}
