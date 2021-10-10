import React from "react";
import AOS from "aos";

export default function Roadmap() {
  AOS.init();

  return (
    <>
      <div className="roadmap-page">
        <section id="roadmap"></section>
        <div className="row">
          <div data-aos="slide-right" className="col-4 aos-init aos-animate">
            <div className="step-item">
              <h2 className="step-header">
                Launch on <br /> October 11th Time TBA:{" "}
              </h2>
              <p className="step-description">
                On October 11th 2021 8888 PizzlyBears will be available for
                minting on this website.
              </p>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-4"></div>
          <div data-aos="slide-left" className="col-4 aos-init aos-animate">
            <div className="step-item">
              <h2 className="step-header"> Immediately after sell out: </h2>
              <p className="step-description">
                Once all of the 8888 PizzlyBears have been minted and adopted,
                we will announce our secondary marketplace partnerships. Shortly
                after listing, in late November 2021, 2222 PizzlyBears holders
                will receive an exclusive airdrop from an upcoming
                collaboration.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div data-aos="slide-right" className="col-4 aos-init aos-animate">
            <div className="step-item">
              <h2 className="step-header">Onwards:</h2>
              <p className="step-description">
                Look forward to partnerships with emerging Solana protocols that
                allow you to stake your PizzlyBear NFTs and earn passive income,
                cross-chain swap your Solana PizzlyBears using the two way ETH
                bridge Wormhole, and we are looking at protocols like Larix, an
                NFT backed lending service. At face value PizzlyBears are a fun
                PFP project but we aim to inspire a new wave of utility, not
                only our NFT but others coming out of the Solana ecosystem.
              </p>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-4"></div>
          <div data-aos="slide-left" className="col-4 aos-init aos-animate">
            <div className="step-item">
              <h2 className="step-header">Future </h2>
              <p className="step-description">
                All the updates will Announced Soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
