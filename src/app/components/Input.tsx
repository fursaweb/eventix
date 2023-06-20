import { FC, ReactElement, ChangeEvent } from "react";
import { TextField } from "@mui/material";

interface Props {
  type: string;
  fullWidth?: boolean | undefined;
  label: string;
  size: "small" | "medium";
  variant: "filled" | "outlined";
  value: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Props> = ({
  type,
  fullWidth,
  label,
  size,
  variant,
  value,
  id,
  onChange,
}): ReactElement => {
  return (
    <TextField
      type={type}
      fullWidth={fullWidth}
      label={label}
      size={size}
      variant={variant}
      value={value}
      id={id}
      onChange={onChange}
    />
  );
};

export default Input;
