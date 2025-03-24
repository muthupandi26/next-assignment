import React from "react";
import { TextField } from "@mui/material";

interface CommonTextFieldProps {
  label: string;
  name: string;
  value: string | number;
  onChange: (name: string, value: string | number) => void;
  type?: string;
  fullWidth?: boolean;
}

const CommonTextField: React.FC<CommonTextFieldProps> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  fullWidth = true,
}) => {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      type={type}
      fullWidth={fullWidth}
      onChange={(e) => onChange(name, e.target.value)}
      variant="outlined"
    />
  );
};

export default CommonTextField;
