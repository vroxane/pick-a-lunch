import React, { SyntheticEvent, useEffect, useState } from "react";

import { Divider, FormControlLabel, Rating, Stack } from "@mui/material";

import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import NoMealsIcon from "@mui/icons-material/NoMeals";
import DayCheckbox from "./DayCheckbox";

export type Weekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

interface Props {
  weekday: Weekday;
  shouldHideDivider?: boolean;
  onChange: (name: string, value: number) => void;
  defaultValue: number;
  defaultMaxValue: number;
}

const DayServings = ({
  weekday,
  shouldHideDivider,
  onChange,
  defaultValue,
  defaultMaxValue,
}: Props) => {
  const [dayIsDisabled, setDayIsDisabled] = useState(false);
  const [servingsValue, setServingsValue] = useState(defaultValue);

  useEffect(() => {
    if (dayIsDisabled) {
      onChange(weekday, 0);
    } else {
      onChange(weekday, servingsValue);
    }
  }, [dayIsDisabled, onChange, servingsValue, weekday]);

  const disabledColor = "#999";

  const handleRatingChange = (
    event: SyntheticEvent<Element, Event>,
    value: number | null,
  ) => {
    setServingsValue(value ?? defaultValue);
  };

  const handleDayCheck = (event: React.SyntheticEvent, checked: boolean) => {
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
          label={weekday}
          control={<DayCheckbox label={weekday} />}
          sx={{ width: 150, textTransform: "capitalize" }}
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
          max={defaultValue > defaultMaxValue ? defaultValue : defaultMaxValue}
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
