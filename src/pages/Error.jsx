import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Error404 from "../components/Error404";

const Error = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Error404 />
      </div>
      <Footer />
    </div>
  );
};

export default Error;
