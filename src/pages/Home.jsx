import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import HomePicture from "../components/HomePicture";
import CardsLogements from "../components/CardsLogements";

const Home = () => {
  return (
    <div>
      <Banner />
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
