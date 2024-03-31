import React, { useState } from "react";

import { Divider, FormControlLabel, Rating, Stack } from "@mui/material";

import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import NoMealsIcon from "@mui/icons-material/NoMeals";
import DayCheckbox from "./DayCheckbox";

export type Weekday =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

interface Props {
  weekday: Weekday;
  shouldHideDivider?: boolean;
  onChange: (name: string, value: number) => void;
  defaultValue: number;
}

const DayServings = ({
  weekday,
  shouldHideDivider,
  onChange,
  defaultValue,
}: Props) => {
  const [dayIsDisabled, setDayIsDisabled] = useState(false);
  const disabledColor = "#999";
  const handleRatingChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: number,
  ) => {
    onChange(event.target.name, value);
  };
  const handleDayCheck = (event: React.SyntheticEvent, checked: boolean) => {
    if (!checked) {
      onChange(event.target.name, 0);
    }
    setDayIsDisabled(!checked);
  };

  return (
    <>
      <Stack
        sx={{
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          "&, & *": {
            color: dayIsDisabled ? disabledColor : undefined,
            textDecoration: dayIsDisabled && "line-through",
          },
        }}
      >
        <FormControlLabel
          onChange={handleDayCheck}
          name={weekday}
          control={<DayCheckbox label={weekday} />}
          label={weekday}
          sx={{ width: 150 }}
        />

        <Rating
          name={weekday}
          defaultValue={defaultValue}
          icon={
            dayIsDisabled ? (
              <NoMealsIcon sx={{ color: "#eee" }} />
            ) : (
              <SoupKitchenIcon sx={{ color: "#6ac730" }} />
            )
          }
          emptyIcon={<NoMealsIcon sx={{ color: "#eee" }} />}
          max={defaultValue > 6 ? defaultValue : 6}
          size="large"
          disabled={dayIsDisabled}
          onChange={handleRatingChange}
        />
      </Stack>
      {!shouldHideDivider && <Divider flexItem />}
    </>
  );
};

export default DayServings;
