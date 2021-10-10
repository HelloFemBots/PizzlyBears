import React from "react";
import HeroArea from "../components/HeroArea";
import Story from "../components/Story";
import Roadmap from "../components/Roadmap";
import FAQ from "../components/Faq";
import CountdownTimer from "../components/CountdownTimer";
import bearreport from "../assets/images/bearreport.png";
import discord from "../assets/images/discord.png";
import medium from "../assets/images/medium.png";
import twitter from "../assets/images/twitter.png";


export default function Home() {
  return (
    <div className="home-page">
      <HeroArea></HeroArea>
      <Story></Story>
      <Roadmap></Roadmap>
      <FAQ></FAQ>
    </div>
  );
}
