import React from "react";
import pepeAstro from "./images/pepeastro.png";
import { Link } from "react-scroll";
import "./styles/TopHeader.css";

function TopHeader() {
  return (
    <div className="container-fluid top-header bg-green container" id="aboutus">
      <div className="row align-items-center">
        <div className="col-md-6">
          <p>
            Pepe, a passionate astrologer, believed that the movements of the
            stars and planets had a direct impact on the crypto market. He spent
            months studying different cryptocurrencies and discovered patterns
            that correlated with astrological events. Excited by his findings,
            Pepe decided to create a token called Pepeastro that would predict
            the movements of the crypto market based on astrological events.
            Pepe's innovative approach attracted attention, and soon investors
            worldwide were using Pepeastro to make smart investment decisions.
            His work inspired others to explore the field, and Pepe became a
            legend in the world of crypto-based astrology. Today, Pepeastro
            remains one of the most popular and trusted tokens in the
            cryptocurrency market.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={pepeAstro}
            className="img-fluid rounded-circle pepeastro-img"
            alt="Pepe Astro"
          />
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
