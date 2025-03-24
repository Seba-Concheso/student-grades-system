// TIENE que tener su interface para saber que props va a llevar

import { Button, ButtonProps } from "@mui/material";
import React from "react";

type ActionType = "aceptar" | "cancelar" | "guardar" | "enviar";

interface CustomButtonProps extends ButtonProps {
  actionType?: ActionType;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, variant, color, onClick, actionType, ...props }) => {
  const actionStyles: Record<ActionType, { color: ButtonProps["color"]; variant: ButtonProps["variant"] }> = {
    aceptar: { color: "success", variant: "contained" },
    cancelar: { color: "error", variant: "outlined" },
    guardar: { color: "primary", variant: "contained" },
    enviar: { color: "secondary", variant: "contained" },
  };

  const chosenStyles = actionType ? actionStyles[actionType] : { color, variant };

  return (
    <Button variant={chosenStyles.variant || variant} color={chosenStyles.color || color} onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
