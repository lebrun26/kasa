import React from "react";
import StarRating from "./StarRating";

const PresentationLogement = ({ presentation }) => {
  return (
    <div className="presentation">
      <div className="presentation__main">
        <h1>{presentation.title}</h1>
        <span>{presentation.location}</span>
        <div className="presentation__main__tags">
          {presentation.tags &&
            presentation.tags.map((tag, index) => <p key={index}>{tag}</p>)}
        </div>
        {/*Ici je pense qu'il faut faire un .map pour parcourir l'onglet tag  */}
      </div>
      <div className="presentation__second">
        <div className="presentation__second__profil">
          <p>{presentation.host.name}</p>
          <img
            src={presentation.host.picture}
            alt={`Img de la propriétaire ${presentation.host.name}`}
          />
        </div>
        <div className="presentation__second__rating">
          <StarRating rating={presentation.rating} />
        </div>
        <div>
          {/*Mettre en place le systeme d'etoile avec pareil // logement.rating */}
        </div>
      </div>
    </div>
  );
};

export default PresentationLogement;
