import React from "react";
import "./CollectionsCards.css";
const CollectionsCard = ({ image, video }) => {
  return (
    <div className="collectionsCards">
      <div className="collectionsCards__container">
        <img className="collectionsCards__image" src={image} alt="" />
        <video
          className="collectionsCards__video"
          width="320"
          height="240"
          loop={true}
          playsInline={true}
          muted
          onMouseOver={(event) => event.target.play()}
          onMouseOut={(event) => event.target.pause()}
        >
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
};

export default CollectionsCard;
