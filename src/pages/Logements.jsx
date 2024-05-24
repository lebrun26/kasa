import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Logements = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((reponse) => {
        setData(reponse.data);
        const foundLogement = reponse.data.find(
          (log) => log.id.toString() === id
        );
        if (foundLogement) {
          setLogement(foundLogement);
        } else {
          navigate("/error");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
        navigate("/error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, navigate]);

  if (loading) {
    return <div>Chargemement....</div>;
  }

  if (!logement) {
    return null;
  }

  return (
    <div>
      <NavBar />
      <div>
        <div>
          <img
            src="/images/arrow_left.png"
            alt="Fleche de gauche pour le caroussel"
          />
          <img
            src={logement.cover}
            alt={`Caroussel qui correspond au logement ${logement.title}`}
          />
          <span>?/4</span>
          <img
            src="/images/arrow_right.png"
            alt="Flèche de droite pour le caroussel"
          />
        </div>
        <div>
          <div>
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            {/*Ici je pense qu'il faut faire un .map pour parcourir l'onglet tag  */}
          </div>
          <div>
            <div>
              <p>{logement.host.name}</p>
              <img
                src={logement.host.picture}
                alt={`Img de la propriétaire ${logement.host.name}`}
              />
            </div>
            <div>
              {/*Mettre en place le systeme d'etoile avec pareil // logement.rating */}
            </div>
          </div>
        </div>
        <div>{/*Ici il y a la description et l'équipement */}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Logements;
