import React, { useState, useRef } from "react";
import "./styles/SpellCasting.css";

import pumpCryptoImage from "./images/pump.png";
import fallInLoveImage from "./images/love.png";
import makeCareerBetterImage from "./images/career.png";

const SpellCasting = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [problemDescription, setProblemDescription] = useState("");
  const [spellDescription, setSpellDescription] = useState("");

  const modalRef = useRef();

  const handleSpellBoxClick = () => {
    console.log("clicked");
    setModalOpen(true);
  };

  const handleCloseModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModalOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(`Transaction ID: ${transactionId}`);
    console.log(`Problem Description: ${problemDescription}`);
    console.log(`Spell Description: ${spellDescription}`);
    setTransactionId("");
    setProblemDescription("");
    setSpellDescription("");
    setModalOpen(false);
  };

  return (
    <div className="spell-casting" id="spellcasting">
      <h2 className="spell-casting-header">Spell Casting</h2>
      <div className="spell-box-container">
        <div className="spell-box" onClick={handleSpellBoxClick}>
          <img src={pumpCryptoImage} alt="Pump Your Crypto" />
          <h4>Pump Your Crypto</h4>
        </div>
        <div className="spell-box" onClick={handleSpellBoxClick}>
          <img src={fallInLoveImage} alt="Fall In Love" />
          <h4>Fall In Love</h4>
        </div>
        <div className="spell-box" onClick={handleSpellBoxClick}>
          <img src={makeCareerBetterImage} alt="Make Your Career Better" />
          <h4>Make Your Career Better</h4>
        </div>
      </div>

      {modalOpen && (
        <div className="spell-modal-container" onClick={handleCloseModal}>
          <div ref={modalRef} className="spell-modal">
            <h3 className="spell-modal-header">Cast a Spell</h3>
            <form onSubmit={handleSubmit} className="spell-form">
              <div className="form-group">
                <label htmlFor="transactionId">Transaction ID</label>
                <input
                  type="text"
                  id="transactionId"
                  placeholder="Enter your transaction ID"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="problemDescription">
                  Describe the problem you want us to solve
                </label>
                <textarea
                  id="problemDescription"
                  rows="3"
                  placeholder="Describe your problem"
                  value={problemDescription}
                  onChange={(e) => setProblemDescription(e.target.value)}
                  required></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="spellDescription">
                  What spell do you want us to cast?
                </label>
                <textarea
                  id="spellDescription"
                  rows="3"
                  placeholder="Describe the spell you want us to cast"
                  value={spellDescription}
                  onChange={(e) => setSpellDescription(e.target.value)}
                  required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpellCasting;
