import React from "react";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";

export default function Story() {
  return (
    <>
      <div className="story-page">
        <section id="story"></section>
        <div className="row story-sec-1">
          <div className="col-2">
            <img className="story-sec-1" src={image1} alt="" srcset="" />
          </div>
          <div className="col-6">
            <p className="story-sec-1">
              Deep within the Solana Mountains you’ll find this new species
              known as Pizzly Bears. What is a Pizzly Bear, you ask? Pizzly’s
              are the mix of a polar bear, and a grizzly bear. Pizzly’s are
              cute, sweet, and swagged out. From the headwear to tattoos and
              tons of accessories. Pizzly Bears have arrived, and have a unique
              sense of fashion taste.
            </p>
          </div>
        </div>
        <div className="row story-sec-2">
          <div className="col-6">
            <p className="story-sec-2">
              Pizzly Bears is a fun generative art project built on Solana’s
              blockchain. We leveraged tools provided within Solana’s developing
              ecosystem, such as metaplex, to bring this new species to life!
              There are only 8888 Pizzly Bears available for mint. Hundreds of
              cool traits make up these creatures. Our mission is to launch a
              “fair-price” drop, our mint price is officially set @ .29 SOL
              which we believe will allow participation from ALL, both new and
              old to the blockchain.
            </p>
          </div>
          <div className="col-2">
            <img className="story-sec-2" src={image3} alt="" srcset="" />
          </div>
        </div>
        <div className="row story-sec-3">
          <div className="col-2">
            <img className="story-sec-3" src={image2} alt="" srcset="" />
          </div>
          <div className="col-6">
            <p className="story-sec-3">
              Look forward to partnerships with emerging Solana protocols that
              allow you to stake your PizzlyBear NFTs and earn passive income,
              cross-chain swap your Solana PizzlyBears using the two way ETH
              bridge Wormhole, and we are looking at protocols like Larix, an
              NFT backed lending service. At face value PizzlyBears are a fun
              PFP project but we aim to inspire a new wave of utility, not only
              our NFT but others coming out of the Solana ecosystem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
