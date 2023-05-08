import React from "react";
import "./styles/Header.css";

const Header = () => {
  const sunSigns = [
    {
      sign: "Aries",
      date: "Mar 21 - Apr 19",
      horoscope: "Today is a good day to start a new project.",
    },
    {
      sign: "Taurus",
      date: "Apr 20 - May 20",
      horoscope: "Your hard work will pay off today.",
    },
    {
      sign: "Gemini",
      date: "May 21 - Jun 20",
      horoscope:
        "You may face some challenges today, but you will overcome them.",
    },
    {
      sign: "Cancer",
      date: "Jun 21 - Jul 22",
      horoscope:
        "Your emotional intelligence will help you navigate difficult situations today.",
    },
    {
      sign: "Leo",
      date: "Jul 23 - Aug 22",
      horoscope:
        "Your natural charisma will help you achieve your goals today.",
    },
    {
      sign: "Virgo",
      date: "Aug 23 - Sep 22",
      horoscope:
        "Your attention to detail will be appreciated by others today.",
    },
    {
      sign: "Libra",
      date: "Sep 23 - Oct 22",
      horoscope: "Your diplomacy skills will help you resolve conflicts today.",
    },
    {
      sign: "Scorpio",
      date: "Oct 23 - Nov 21",
      horoscope:
        "Your intuition will guide you in making important decisions today.",
    },
    {
      sign: "Sagittarius",
      date: "Nov 22 - Dec 21",
      horoscope:
        "You may feel restless today, but try to channel that energy into something productive.",
    },
    {
      sign: "Capricorn",
      date: "Dec 22 - Jan 19",
      horoscope: "Your hard work will lead to success today.",
    },
    {
      sign: "Aquarius",
      date: "Jan 20 - Feb 18",
      horoscope: "Your creativity will be valued by others today.",
    },
    {
      sign: "Pisces",
      date: "Feb 19 - Mar 20",
      horoscope: "Your sensitivity will help you connect with others today.",
    },
  ];

  const sunSignElements = sunSigns.map((sunSign, index) => (
    <div key={index} className="col-md-4 mb-4">
      <div className="astro-box rounded">
        <h3 className="text-white mb-3">{sunSign.sign}</h3>
        <div className="text-light mb-3">
          <hr className="bg-white my-1" />
          <span>{sunSign.date}</span>
          <hr className="bg-white my-1" />
        </div>
        <p className="text-light mb-0">{sunSign.horoscope}</p>
      </div>
    </div>
  ));

  return (
    <div className="astro-container" id="top-header">
      <div className="text-center text-white mb-4">
        <h1 className="display-4">Astrology for 12 Sun Signs</h1>
      </div>
      <div className="row">{sunSignElements}</div>
    </div>
  );
};

export default Header;
