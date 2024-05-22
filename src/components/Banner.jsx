import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="Banner">
      <div className="Banner__Logo">
        <img src="/images/logo_kasa.png" alt="Logo du site Kasa" />
      </div>
      <div className="Banner__Nav">
        <NavLink to="/" className={(nav) => (nav.isActive ? "Nav-active" : "")}>
          <span>Accueil</span>
        </NavLink>
        <NavLink
          to="/Apropos"
          className={(nav) => (nav.isActive ? "Nav-active" : "")}
        >
          <span>A Propos</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Banner;
