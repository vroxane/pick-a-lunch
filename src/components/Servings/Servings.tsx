import React from "react";
import { Card, Typography } from "@mui/material";
import DayServings from "@/components/DayServings";

const DEFAULT_SERVINGS_PER_DAY = 3;

const Servings = () => {
  const handleServingsChange = (name: string, value: number) => {
    console.log(name, value);
  };
  const defaultDayProps = {
    defaultValue: DEFAULT_SERVINGS_PER_DAY,
    onChange: handleServingsChange,
  };
  return (
    <Card sx={{ padding: 4 }}>
      <Typography variant="h5">Servings</Typography>
      <DayServings weekday="Saturday" {...defaultDayProps} />
      <DayServings weekday="Sunday" {...defaultDayProps} />
      <DayServings weekday="Monday" {...defaultDayProps} />
      <DayServings weekday="Tuesday" {...defaultDayProps} />
      <DayServings weekday="Wednesday" {...defaultDayProps} />
      <DayServings weekday="Thursday" {...defaultDayProps} />
      <DayServings weekday="Friday" shouldHideDivider {...defaultDayProps} />
    </Card>
  );
};

export default Servings;
