import React from "react";

const ImageCard = ({ image }) => {
  return (
    <div className="card">
      <img src={image.url} alt={image.title} loading="lazy" />
      <h3>{image.title}</h3>
    </div>
  );
};

export default ImageCard;