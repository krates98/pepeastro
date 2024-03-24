import React from "react";
import "./styles/Tokenomics.css";

function Tokenomics() {
  return (
    <div className="container-fluid bg-green text-white">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="headVal">Tokenomics</h2>
          <p className="textVal">
            No Taxes, No Nonsense. It's truly that simple. 90% of the tokens and
            the funds raised are directed towards the liquidity pool, enhancing
            its stability and security. The remaining 10% is securely held in a
            multi-signature wallet, earmarked specifically for future endeavors
            including listings on centralized exchanges, bridge integrations,
            and bolstering liquidity pools. This strategic allocation ensures a
            solid foundation for growth and accessibility.
          </p>
          <br />
          <br />
          <br />
          <p className="subtitle">
            $PEPEA is a meme coin with no intrinsic value or expectation of
            financial return. There is no formal team or roadmap. the coin is
            completely useless and for entertainment purposes only.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
