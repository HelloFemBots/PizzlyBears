import React from "react";
import nft_calender from "../assets/images/nft_calender.png";
import nonfungi from "../assets/images/nonfungi.png";
import howrareis from "../assets/images/howrareis.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <h4>
          <i>As Seen On:</i>
        </h4>
        <div className="col-2">
          <a href="https://nftcalendar.io/" target="_blank" rel="noreferrer">
            <img src={nft_calender} alt="" srcset="" />
          </a>
        </div>
        <div className="col-2">
          <a href="https://www.non-fungi.com/" target="_blank" rel="noreferrer">
            <img src={nonfungi} alt="" srcset="" />
          </a>
        </div>
        <div className="col-2">
          <a href="https://howrare.is/" target="_blank" rel="noreferrer">
            <img className="howrareis" src={howrareis} alt="" srcset="" />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h3>Copyright &copy; 2021 PIZZLYBEARS</h3>
        </div>
      </div>
    </div>
  );
}
