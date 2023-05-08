import React from "react";
import "./styles/Tokenomics.css";

function Tokenomics() {
  return (
    <div className="container-fluid bg-green text-white">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="headVal">Tokenomics</h2>
          <p className="textVal">
            No Taxes, No Bullshit. It’s that simple. 69.1% of the tokens were
            sent to the liquidity pool, LP tokens were burnt, and contract is
            renounced. The remaining 30.9% of the supply is being held in a
            multi-sig wallet only to be used as tokens for future centralized
            exchange listings, bridges, and liquidity pools.
          </p>
          <br />
          <br />
          <br />
          <p className="subtitle">
            $PEPE is a meme coin with no intrinsic value or expectation of
            financial return. There is no formal team or roadmap. the coin is
            completely useless and for entertainment purposes only.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
