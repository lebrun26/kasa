import React from "react";

const DropMenuItems = ({ items }) => {
  if (!items) {
    return null;
  }

  if (Array.isArray(items)) {
    return (
      <>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </>
    );
  }

  return <li>{items}</li>;
};

export default DropMenuItems;
