import React from "react";
import { BsFillStarFill } from "react-icons/bs";
const Rating = ({ rating }) => (
  <span>
    {[...Array(5)].map((stars, index) => (
      <BsFillStarFill
        size={20}
        color={index + 1 <= rating ? "#FFDF00" : "#D1D3CE"}
      />
    ))}
  </span>
);

export default Rating;
