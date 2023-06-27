import React from "react";
import Image from "./Image";
import Checkbox from "./Checkbox";

const Card = ({ idValue, cardWidth, srcUrl, checkboxValue }) => {
  const styleObj = {
    maxWidth: `${cardWidth}%`,
    flex: `0 0 ${cardWidth}%`,
  };

  return (
    <div style={styleObj} className="card">
      <Image srcUrl={srcUrl} altText="alt text placeholder" />
      <Checkbox
        idValue={idValue}
        classValue="sr-only"
        checkboxValue={checkboxValue}
      />
    </div>
  );
};

export default Card;
