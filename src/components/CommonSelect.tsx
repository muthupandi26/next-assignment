import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

interface CommonSelectProps {
  label: string;
  name: string;
  options: { value: string | number; label: string }[];
  value: string | number;
  onChange: (name: string, value: string | number) => void;
  fullWidth?: boolean;
}

const CommonSelect: React.FC<CommonSelectProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  fullWidth = true,
}) => {
  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        label={label}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CommonSelect;
