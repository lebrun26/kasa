import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Error404 from "../components/Error404";

const Error = () => {
  return (
    <div>
      <Banner />
      <div>
        <Error404 />
      </div>
      <Footer />
    </div>
  );
};

export default Error;
