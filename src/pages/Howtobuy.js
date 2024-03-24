import React from "react";
import "./styles/HowToBuy.css";
import pepeTop from "./images/pepetop.png";
import dextoolsLogo from "./images/dexscreener.png";
import pancakeswapLogo from "./images/CAKE-logo.png";
import bscscanLogo from "./images/injective.webp";
import twitterLogo from "./images/x.png";
import telegramLogo from "./images/telegram.webp";

function HowToBuy() {
  return (
    <div className="container-fluid bg-green">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="how-to-buy-box p-5">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0 text-center">
                <img
                  src={pepeTop}
                  className="img-fluid pepeastro-img"
                  alt="Pepe Top"
                />
              </div>
              <div className="col-md-6 howtobuytext">
                <h2>How to Buy PepeAstro</h2>
                <p>
                  Discover the power of astrology combined with cutting-edge
                  technology through PepeAstro. Our advanced AI-driven forecasts
                  predict market movements, guiding you on the best times to
                  invest in PepeAstro.
                </p>
                <p>
                  Ready to harness the celestial advantage? You can acquire
                  PepeAstro on leading decentralized exchanges such as
                  Astroport, DojoSwap, and more. For direct access and detailed
                  instructions, follow the link below.
                </p>
                <div className="mt-5 d-flex justify-content-center">
                  <a
                    href="https://www.dextools.io/app/pancakeswap/pair-explorer/0x92c2a1e89b801c44046f464489c78e79fa5d5c1d"
                    className="mx-3"
                    target="_blank"
                    rel="noreferrer">
                    <img
                      src={dextoolsLogo}
                      alt="DexTools"
                      className="how-to-buy-logo"
                    />
                  </a>
                  <a
                    href="https://app.astroport.fi/swap?to=factory/inj1gaf6yxle4h6993qwsxdg0pkll57223qjetyn3n/PEPEA&from=inj"
                    className="mx-3"
                    target="_blank"
                    rel="noreferrer">
                    <img
                      src={pancakeswapLogo}
                      alt="AstroPort"
                      className="how-to-buy-logo"
                    />
                  </a>
                  <a
                    href="https://bscscan.com/token/0x9e48c2b0a2f6f908a09a61188a33bdec98c68a99"
                    className="mx-3"
                    target="_blank"
                    rel="noreferrer">
                    <img
                      src={bscscanLogo}
                      alt="BSC Scan"
                      className="how-to-buy-logo"
                    />
                  </a>
                  <a
                    href="https://twitter.com/astropepeai"
                    className="mx-3"
                    target="_blank"
                    rel="noreferrer">
                    <img
                      src={twitterLogo}
                      alt="Twitter"
                      className="how-to-buy-logo"
                    />
                  </a>
                  <a
                    href="https://t.me/willlaunchsoon"
                    className="mx-3"
                    target="_blank"
                    rel="noreferrer">
                    <img
                      src={telegramLogo}
                      alt="Telegram"
                      className="how-to-buy-logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToBuy;
