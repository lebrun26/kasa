import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CardsLogements = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/data.json").then((reponse) => setData(reponse.data));
  }, []);
  return (
    <div className="container__structure">
      {data.map((logement) => (
        <Link to={`/logements/${logement.id}`} key={logement.id}>
          <div className="container__structure_cards">
            <img
              src={logement.cover}
              alt={`Images de couverture du logemement ${logement.title}`}
            />
            <p>{logement.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardsLogements;
