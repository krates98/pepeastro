import React from "react";
import "./styles/HowToBuy.css";
import pepeTop from "./images/pepetop.png";
import dextoolsLogo from "./images/dextools.webp";
import pancakeswapLogo from "./images/CAKE-logo.png";
import bscscanLogo from "./images/bsc.png";
import twitterLogo from "./images/twitter.webp";
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
                <h2>How to buy PepeAstro</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  eleifend mauris in dui mattis, at suscipit lacus malesuada.
                  Vestibulum ac velit id lectus molestie sodales vel vitae
                  tellus.
                </p>
                <p>
                  Sed bibendum eros mi, vel ullamcorper ipsum dapibus a. Morbi
                  ac tortor nisl. Donec vel faucibus justo. Aliquam erat
                  volutpat. Ut vehicula, ante eget sagittis fringilla, nunc est
                  convallis mi, eu ultrices est nunc sit amet ex.
                </p>
                <div className="mt-5 d-flex justify-content-center">
                  <a
                    href="https://www.dextools.io/app/pancakeswap/pair-explorer/0x92c2a1e89b801c44046f464489c78e79fa5d5c1d"
                    className="mx-3"
                  >
                    <img
                      src={dextoolsLogo}
                      alt="DexTools"
                      className="how-to-buy-logo"
                    />
                  </a>
                  <a
                    href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x9e48c2b0a2f6f908a09a61188a33bdec98c68a99"
                    className="mx-3"
                  >
                    <img
                      src={pancakeswapLogo}
                      alt="PancakeSwap"
                      className="how-to-buy-logo"
                    />
                  </a>
                  <a
                    href="https://bscscan.com/token/0x9e48c2b0a2f6f908a09a61188a33bdec98c68a99"
                    className="mx-3"
                  >
                    <img
                      src={bscscanLogo}
                      alt="BSC Scan"
                      className="how-to-buy-logo"
                    />
                  </a>
                  <a
                    href="https://twitter.com/PepeCoinOfficial"
                    className="mx-3"
                  >
                    <img
                      src={twitterLogo}
                      alt="Twitter"
                      className="how-to-buy-logo"
                    />
                  </a>
                  <a href="https://t.me/PepeCoinOfficial" className="mx-3">
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
