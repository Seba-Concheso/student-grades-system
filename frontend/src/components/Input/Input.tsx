//Compound Components
//Compound Components
//Compound Components
//Compound Components
import {
  Box,
  Checkbox,
  MenuItem,
  Select,
  TextField,
  Typography,
  SelectChangeEvent,
  SxProps,
  Theme,
} from "@mui/material";
import React, { createContext, useContext } from "react";

interface InputContextProps {
  id: string;
  error?: boolean;
}

const InputContext = createContext<InputContextProps | undefined>(undefined);

interface InputProps {
  id: string;
  error?: boolean;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const Input = ({ id, error, children, sx }: InputProps) => (
  <InputContext.Provider value={{ id, error }}>
    <Box sx={{ mb: 2, ...sx }}>{children}</Box>
  </InputContext.Provider>
);

const useInputContext = () => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error("<Input> componentes hijos deben usarse dentro de <Input>");
  }
  return context;
};

const Label = ({ children, sx }: { children: React.ReactNode; sx?: SxProps<Theme> }) => {
  const { id } = useInputContext();
  return (
    <Typography htmlFor={id} component="label" fontWeight="bold" sx={sx}>
      {children}
    </Typography>
  );
};

const Field = ({
  type = "text",
  value,
  onChange,
  sx,
}: {
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
}) => {
  const { id, error } = useInputContext();
  return (
    <TextField id={id} type={type} value={value} onChange={onChange} error={error} fullWidth size="small" sx={sx} />
  );
};

const TextArea = ({
  rows = 3,
  value,
  onChange,
  sx,
}: {
  rows?: number;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  sx?: SxProps<Theme>;
}) => {
  const { id, error } = useInputContext();
  return (
    <TextField
      id={id}
      multiline
      rows={rows}
      value={value}
      onChange={onChange}
      error={error}
      fullWidth
      size="small"
      sx={sx}
    />
  );
};

const CheckboxInput = ({
  checked,
  onChange,
  sx,
}: {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  sx?: SxProps<Theme>;
}) => {
  const { id } = useInputContext();
  return <Checkbox id={id} checked={checked} onChange={onChange} sx={sx} />;
};

const SelectInput = <T extends string | number>({
  options,
  value,
  onChange,
  sx,
}: {
  options: Array<{ label: string; value: T }>;
  value: T;
  onChange: (event: SelectChangeEvent<T>) => void;
  sx?: SxProps<Theme>;
}) => {
  const { id, error } = useInputContext();
  return (
    <Select id={id} value={value} onChange={onChange} error={error} fullWidth size="small" sx={sx}>
      {options.map((opt) => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </Select>
  );
};

const HelperText = ({ children, sx }: { children: React.ReactNode; sx?: SxProps<Theme> }) => {
  const { error } = useInputContext();
  return (
    <Typography variant="caption" color={error ? "error" : "text.secondary"} sx={sx}>
      {children}
    </Typography>
  );
};

// Asignación Compound Components
Input.Label = Label;
Input.Field = Field;
Input.TextArea = TextArea;
Input.Checkbox = CheckboxInput;
Input.Select = SelectInput;
Input.HelperText = HelperText;

export default Input;
