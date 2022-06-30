import React from "react";

const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <>
      <img src={image} alt={name}></img>
    </>
  );
};

export default Cocktail;
