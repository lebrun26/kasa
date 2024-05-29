import React from "react";
import DropMenu from "./DropMenu";

const DescriptionLogement = ({ description }) => {
  return (
    <div className="container__dropMenu">
      <DropMenu equipments={description.description} title="Description" />
      <DropMenu equipments={description.equipments} title="Équipements" />
    </div>
  );
};

export default DescriptionLogement;
