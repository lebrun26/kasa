import React, { useState } from "react";
import DropMenuItems from "./DropMenuItems";

const DropMenu = ({ title, equipments }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
      <div onClick={toggleMenu} className="dropdown-trigger">
        <p>{title}</p>
        <span className={`arrow ${isOpen ? "open" : ""}`}>
          <i className="fa-solid fa-chevron-up"></i>
        </span>
      </div>
      <ul className={`dropdown-list ${isOpen ? "open" : ""}`}>
        <DropMenuItems items={equipments} />
      </ul>
    </div>
  );
};
export default DropMenu;
