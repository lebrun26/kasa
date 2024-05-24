import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HomePicture from "../components/Banner";
import CardsLogements from "../components/CardsLogements";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div>
        <HomePicture />
      </div>
      <div className="container">
        <CardsLogements />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
