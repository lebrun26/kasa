import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Error404 from "../components/Error404";

const Error = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div>
        <Error404 />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Error;
