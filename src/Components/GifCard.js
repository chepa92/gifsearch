import React from "react";

const GifCard = ({ gifObj }) => {
  return <img src={gifObj.images.fixed_height.url} alt="gif" />;
};

export default GifCard;
