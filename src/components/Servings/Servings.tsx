import React, { useState } from "react";

import { Box, Card, Stack, Typography } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";

import DayServings, { Weekday } from "@/components/DayServings";
import { SoupKitchen } from "@mui/icons-material";
import CONSTANT from "../../app/constants";

type ServingsType = {
  [key in Weekday]: number;
};

interface Props {
  handleServingsUpdate: (totalServings: number) => void;
}

const Servings = ({ handleServingsUpdate }: Props) => {
  const [totalServings, setTotalServings] = useState(0);
  const servings: ServingsType = {
    monday: CONSTANT.SERVINGS_PER_DAY,
    tuesday: CONSTANT.SERVINGS_PER_DAY,
    wednesday: CONSTANT.SERVINGS_PER_DAY,
    thursday: CONSTANT.SERVINGS_PER_DAY,
    friday: CONSTANT.SERVINGS_PER_DAY,
    saturday: CONSTANT.SERVINGS_PER_DAY,
    sunday: CONSTANT.SERVINGS_PER_DAY,
  };

  const handleServingsChange = (name: string, value: number) => {
    servings[name as Weekday] = value;
    setTotalServings(
      Object.values(servings).reduce((acc, val) => acc + val, 0),
    );
    handleServingsUpdate(totalServings);
  };

  const defaultDayProps = {
    defaultValue: CONSTANT.SERVINGS_PER_DAY,
    defaultMaxValue: CONSTANT.MAX_SERVINGS_PER_DAY,
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
