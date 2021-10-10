import React from "react";
import animatedimage from "../assets/images/image0.gif";
import CountdownTimer from "./CountdownTimer";

export default function HeroArea() {
  return (
    <div className="row hero-area">
      <div className="col-4 hero-para">
        <h1><i>PizzlyBears</i></h1>
        <p>Collection of 8888 Bears with a fair mint price</p>
        <CountdownTimer></CountdownTimer>
      </div>
      <div className="col-4">
        <img className="animation" src={animatedimage} alt="" srcset="" />
      </div>
    </div>
  );
}
