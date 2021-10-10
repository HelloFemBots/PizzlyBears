import React from "react";
function toogle(x) {
  if (document.getElementById(x).style.display !== "block") {
    document.getElementById(x).style.display = "block";
  } else {
    document.getElementById(x).style.display = "none";
  }
}

export default function Faq() {
  return (
    <>
      <div className="faq-page">
        <section id="faq"></section>
        <h1 className="title">Frequently Asked Questions</h1>
        <div className="faq-item">
          <h2
            onClick={() => {
              toogle("desc1");
            }}
            className="header"
          >
            How many PizzlyBears are available to mint?{" "}
          </h2>
          <hr className="header" />
          <p className="description" id="desc1">
            8888 PizzlyBears have migrated into the Solana Mountains, 2222 of
            those PizzlyBears will receive our up and coming drop scheduled for
            late November.
          </p>
        </div>
        <div className="faq-item">
          <h2
            className="header"
            onClick={() => {
              toogle("desc2");
            }}
          >
            What's the minting cost for PizzlyBears?{" "}
          </h2>
          <hr className="header" />
          <p className="description" id="desc2">
            Fair-mint price is set @ .29 SOL
          </p>
        </div>
        <div className="faq-item">
          <h2
            className="header"
            onClick={() => {
              toogle("desc3");
            }}
          >
            When can I mint?
          </h2>
          <hr className="header" />
          <p className="description" id="desc3">
            October 11, 2021 Time: TBA via Discord and Twitter.
          </p>
        </div>
        <div className="faq-item">
          <h2
            className="header"
            onClick={() => {
              toogle("desc4");
            }}
          >
            Will I be able to trade my PizzlyBears?
          </h2>
          <hr className="header" />
          <p className="description" id="desc4">
            Our goal is to work with emerging Solana protocols that will allow
            the staking and cross-chain swapping. We will announce secondary
            Marketplace partnerships shortly.
          </p>
        </div>
      </div>
    </>
  );
}
