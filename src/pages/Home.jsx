import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardsLogements from "../components/CardsLogements";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Banner
        title="Chez vous, partout et ailleurs"
        img="/images/image_accueil.jpg"
        spanOpacity="60%"
      />
      <div className="container">
        <CardsLogements />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
