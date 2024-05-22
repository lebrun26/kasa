import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import HomePicture from "../components/HomePicture";

const Home = () => {
  return (
    <div>
      <Banner />
      <div>
        <HomePicture />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
