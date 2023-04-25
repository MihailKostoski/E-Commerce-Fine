import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ rate, setRate }) => {
  const [hoverFill, setHoverFill] = useState(null);
  console.log(rate, "rate");

  const handleClick = (value) => {
    if (rate === value) {
      setRate(null);
    } else {
      setRate(value);
    }
  };
  return (
    <div className="flex flex-row">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <button
            key={index}
            onMouseEnter={() => setHoverFill(ratingValue)}
            onMouseLeave={() => setHoverFill(null)}
            onClick={() => handleClick(ratingValue)}
          >
            <FaStar
              className="FaStar"
              size={15}
              style={{
                color: ratingValue <= (hoverFill || rate) ? "#ffe101" : "#ccc",
              }}
              onChange={() => setRating(ratingValue)}
              value={ratingValue}
            />
          </button>
        );
      })}
    </div>
  );
};

export const MemoizedStar = React.memo(Star);
