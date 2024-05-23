import React, { useEffect, useState } from "react";
import axios from "axios";

const CardsLogements = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/data.json").then((reponse) => setData(reponse.data));
  }, []);

  return (
    <div className="container__structure">
      {data.map((tab) => (
        <div key={tab.id} className="container__structure_cards">
          <img
            src={tab.cover}
            alt="Images de couverture du logemement" /*Mettre {} du  titre du logement*/
          />
          <p>{tab.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CardsLogements;
