import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddIcon from "@mui/icons-material/Add";
import { JSX } from "react";

export type ActionType = "view" | "edit" | "delete" | "add";

interface ActionConfig {
  icon: JSX.Element;
  tooltip: string;
  sx: SxProps;
}

export const getActionConfig = (theme: Theme, type: ActionType): ActionConfig => {
  switch (type) {
    case "view":
      return {
        icon: <VisibilityIcon />,
        tooltip: "Ver",
        sx: {
          color: theme.palette.primary.main,
          "&:hover": {
            bgcolor: theme.palette.primary.light + "22",
          },
        },
      };

    case "edit":
      return {
        icon: <EditIcon />,
        tooltip: "Editar",
        sx: {
          color: theme.palette.secondary.main,
          "&:hover": {
            bgcolor: theme.palette.secondary.light + "22",
          },
        },
      };

    case "delete":
      return {
        icon: <DeleteIcon />,
        tooltip: "Eliminar",
        sx: {
          color: theme.palette.error.main,
          "&:hover": {
            bgcolor: theme.palette.error.light + "22",
          },
        },
      };

    case "add":
      return {
        icon: <AddIcon />,
        tooltip: "Agregar",
        sx: {
          color: theme.palette.success.main,
          "&:hover": {
            bgcolor: theme.palette.success.light + "22",
          },
        },
      };

    default:
      return {
        icon: <></>,
        tooltip: "",
        sx: {},
      };
  }
};
