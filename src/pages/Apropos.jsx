import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import DropMenu from "../components/DropMenu";

const Apropos = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Banner title="" img="/images/image_about.png" spanOpacity="20%" />
      <div className="container__DropMenu__about">
        <DropMenu title="Fiabilité" />
        <DropMenu title="Respect" />
        <DropMenu title="Service" />
        <DropMenu title="Sécurité" />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Apropos;
