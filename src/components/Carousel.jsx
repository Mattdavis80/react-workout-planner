import React, { useState } from "react";
import Button from "./Button";
import BoxCards from "./BoxCards";

const Carousel = ({ data, setSelectedCardsArr }) => {
  const [x, setX] = useState(0);
  const [count, setCount] = useState(0);

  const slideStep = 2;
  const numVisibleCards = 3;
  const cardWidth = 100 / numVisibleCards;
  const endPoint = (data.length - numVisibleCards) / slideStep;

  const handleBtnClick = (target) => {
    if (target.classList.contains("prev")) {
      if (count <= 0) {
        setX(() => endPoint * slideStep * -1);
        setCount(() => endPoint);
      } else {
        setX((prev) => prev + (count < 1 ? slideStep * count : slideStep));
        setCount((prev) => prev - (count < 1 ? count : 1));
      }
    } else if (target.classList.contains("next")) {
      if (count >= endPoint) {
        setX(() => 0);
        setCount(() => 0);
      } else {
        setX(
          (prev) =>
            prev -
            (endPoint - count < 1 ? slideStep * (endPoint - count) : slideStep)
        );

        setCount(
          (prev) => prev + (endPoint - count < 1 ? endPoint - count : 1)
        );
      }
    }
  };

  const handleCardClick = (target) => {
    const image = [...target.children].find((item) => item.tagName === "IMG");
    const checkbox = [...target.children].find(
      (item) => item.tagName === "INPUT"
    );

    if (!image || !checkbox) return;

    image.classList.toggle("selected");
    checkbox.checked = !checkbox.checked;

    if (checkbox.checked) {
      setSelectedCardsArr((prev) => prev.concat(checkbox.value));
    } else {
      setSelectedCardsArr((prev) => {
        const position = prev.indexOf(checkbox.value);
        if (position != -1) return prev.toSpliced(position, 1);
      });
    }
  };

  const handleClickCarousel = (event) => {
    const target = event.target.closest(".btn-carousel, .card");
    if (!target) return;

    if (target.classList.contains("btn-carousel")) {
      handleBtnClick(target);
    } else if (target.classList.contains("card")) {
      handleCardClick(target);
    }
  };

  return (
    <div
      onClick={(event) => {
        handleClickCarousel(event);
      }}
      className="carousel"
    >
      <Button classValue="btn-carousel prev" value="<" />
      <BoxCards xPosition={x} cardWidth={cardWidth} data={data} />
      <Button classValue="btn-carousel next" value=">" />
    </div>
  );
};

export default Carousel;
