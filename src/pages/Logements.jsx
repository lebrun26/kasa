import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CarousselLogement from "../components/CarousselLogement";
import PresentationLogement from "../components/PresentationLogement";
import DescriptionLogement from "../components/DescriptionLogement";

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
      <header>
        <NavBar />
      </header>
      <div className="container__logement">
        <CarousselLogement images={logement.pictures} />
        <div>
          <PresentationLogement presentation={logement} />
        </div>
        <div>
          <DescriptionLogement description={logement} />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Logements;
