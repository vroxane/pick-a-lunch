import { Slider } from "@mui/material";
import React from "react";

interface Props {
  maxMeals: number;
}

function valuetext(value: number) {
  return `${value} meals`;
}

const Meals = ({ maxMeals }: Props) => (
  <Slider
    aria-label="Meals"
    defaultValue={30}
    getAriaValueText={valuetext}
    valueLabelDisplay="auto"
    shiftStep={5}
    step={1}
    marks
    min={1}
    max={maxMeals}
  />
);

export default Meals;
