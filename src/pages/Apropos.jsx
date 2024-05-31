import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import DropMenu from "../components/DropMenu";
import axios from "axios";

const Apropos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/data_about.json").then((reponse) => {
      setData(reponse.data);
    });
  }, []);

  // Récupération des textes
  const texteId1 = data.find((item) => item.id === "1")?.texte;
  const texteId2 = data.find((item) => item.id === "2")?.texte;
  const texteId3 = data.find((item) => item.id === "3")?.texte;
  const texteId4 = data.find((item) => item.id === "4")?.texte;

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Banner title="" img="/images/image_about.png" spanOpacity="20%" />
      <div className="container__DropMenu__about">
        <DropMenu title="Fiabilité" equipments={texteId1} />
        <DropMenu title="Respect" equipments={texteId2} />
        <DropMenu title="Service" equipments={texteId3} />
        <DropMenu title="Sécurité" equipments={texteId4} />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Apropos;
