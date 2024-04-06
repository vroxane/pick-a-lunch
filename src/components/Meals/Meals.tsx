import { Slider } from "@mui/material";
import React, { useState } from "react";
import CONSTANT from "../../app/constants";

interface Props {
  maxMeals: number;
}

function valuetext(value: number) {
  return `${value} meals`;
}

const Meals = ({ maxMeals }: Props) => {
  const [mealCount, setMealCount] = useState(CONSTANT.MEALS_PER_WEEK);
  return (
    <>
      <p>{mealCount}</p>
      <Slider
        aria-label="Meals"
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={1}
        step={1}
        marks
        min={1}
        max={maxMeals}
      />
    </>
  );
};

export default Meals;
