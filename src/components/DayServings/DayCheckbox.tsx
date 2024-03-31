import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { NoMeals, Restaurant } from "@mui/icons-material";

interface Props {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DayCheckbox = ({ label, onChange, ...otherProps }: Props) => {
  const checkboxProps = { inputProps: { "aria-label": label } };
  return (
    <Checkbox
      defaultChecked
      onChange={onChange}
      icon={<NoMeals />}
      checkedIcon={<Restaurant />}
      {...checkboxProps}
      {...otherProps}
    />
  );
};
export default DayCheckbox;
