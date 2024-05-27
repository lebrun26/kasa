import React from "react";

const PresentationLogement = ({ presentation }) => {
  return (
    <div>
      <div>
        <h1>{presentation.title}</h1>
        <p>{presentation.location}</p>
        {/*Ici je pense qu'il faut faire un .map pour parcourir l'onglet tag  */}
      </div>
      <div>
        <div>
          <p>{presentation.host.name}</p>
          <img
            src={presentation.host.picture}
            alt={`Img de la propriétaire ${presentation.host.name}`}
          />
        </div>
        <div>
          {/*Mettre en place le systeme d'etoile avec pareil // logement.rating */}
        </div>
      </div>
    </div>
  );
};

export default PresentationLogement;
