import React from "react";

const HomePicture = ({ title, img, spanOpacity }) => {
  return (
    <div className="Picture__Banner">
      <img src={img} alt="Les falaise, Montagne" />
      <span style={{ opacity: spanOpacity }} />
      <p>{title}</p>
    </div>
  );
};

export default HomePicture;
