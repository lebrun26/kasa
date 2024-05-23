import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="container__404">
      <span className="container__404_error">404</span>
      <p className="container__404_text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/">
        <span className="container__404_link">
          Retourner sur la page d'accueil
        </span>
      </NavLink>
    </div>
  );
};

export default Error404;
