import React, { useState } from "react";

import { Box, Card, Stack, Typography } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";

import DayServings, { Weekday } from "@/components/DayServings";
import { SoupKitchen } from "@mui/icons-material";

const DEFAULT_SERVINGS_PER_DAY = 3;
const DEFAULT_MAX_SERVINGS_PER_DAY = 6;

type ServingsType = {
  [key in Weekday]: number;
};

const Servings = () => {
  const [totalServings, setTotalServings] = useState(0);
  const servings: ServingsType = {
    monday: DEFAULT_SERVINGS_PER_DAY,
    tuesday: DEFAULT_SERVINGS_PER_DAY,
    wednesday: DEFAULT_SERVINGS_PER_DAY,
    thursday: DEFAULT_SERVINGS_PER_DAY,
    friday: DEFAULT_SERVINGS_PER_DAY,
    saturday: DEFAULT_SERVINGS_PER_DAY,
    sunday: DEFAULT_SERVINGS_PER_DAY,
  };

  const handleServingsChange = (name: string, value: number) => {
    servings[name as Weekday] = value;
    setTotalServings(
      Object.values(servings).reduce((acc, val) => acc + val, 0),
    );
  };

  const defaultDayProps = {
    defaultValue: DEFAULT_SERVINGS_PER_DAY,
    defaultMaxValue: DEFAULT_MAX_SERVINGS_PER_DAY,
    onChange: handleServingsChange,
  };

  return (
    <Card>
      <Stack
        flexDirection="row"
        alignItems="center"
        gap={2}
        sx={{ padding: 3, background: "#fbcc2a" }}
      >
        <TuneIcon />
        <Typography variant="h5">Servings settings</Typography>
      </Stack>
      <Stack
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: 3 }}
      >
        <div>
          <DayServings weekday="saturday" {...defaultDayProps} />
          <DayServings weekday="sunday" {...defaultDayProps} />
          <DayServings weekday="monday" {...defaultDayProps} />
          <DayServings weekday="tuesday" {...defaultDayProps} />
          <DayServings weekday="wednesday" {...defaultDayProps} />
          <DayServings weekday="thursday" {...defaultDayProps} />
          <DayServings
            weekday="friday"
            shouldHideDivider
            {...defaultDayProps}
          />
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Typography textAlign="center" variant="h6">
            Total :
          </Typography>
          <Typography textAlign="center" variant="h3">
            <SoupKitchen fontSize="large" /> x {totalServings}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
};

export default Servings;
