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

  const titles = ["Fiablilité", "Respect", "Service", "Sécurité"];

  return (
    <div className="body__container">
      <header>
        <NavBar />
      </header>
      <Banner title="" img="/images/image_about.png" spanOpacity="20%" />
      <div className="container__DropMenu__about">
        {data.map((item, index) => (
          <DropMenu
            key={item.id}
            title={titles[index]}
            equipments={item.texte}
          />
        ))}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Apropos;
