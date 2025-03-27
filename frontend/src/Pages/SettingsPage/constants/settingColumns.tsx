import { Chip, IconButton, Tooltip, Stack } from "@mui/material";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import EditIcon from "@mui/icons-material/Edit";
import { Column } from "../../../components/Table/interface/interface";
import { Theme } from "@mui/material/styles";
import { getActionConfig } from "../../../utils/getIconButtonStyle";

export interface UserProps {
  id: number;
  username: string;
  email: string;
  score: number;
  status: "active" | "inactive";
}

export const settingsColumns = (theme: Theme): Column<UserProps>[] => [
  { id: "username", label: "Nombre" },
  {
    id: "email",
    label: "Email",
  },
  {
    id: "status",
    label: "Estado",
    render: (value) => (
      <Chip
        label={value === "active" ? "Activo" : "Inactivo"}
        color={value === "active" ? "success" : "error"}
        size="small"
        variant="outlined"
      />
    ),
  },
  {
    id: "actions",
    label: "Acciones",
    align: "right",
    render: (_value, row) => {
      const view = getActionConfig(theme, "view");
      const edit = getActionConfig(theme, "edit");

      return (
        <Stack direction="row" spacing={1} justifyContent="flex-end">
          <Tooltip title={view.tooltip}>
            <IconButton sx={view.sx} onClick={() => console.log("Ver", row)}>
              {view.icon}
            </IconButton>
          </Tooltip>

          <Tooltip title={edit.tooltip}>
            <IconButton sx={edit.sx} onClick={() => console.log("Editar", row)}>
              {edit.icon}
            </IconButton>
          </Tooltip>
        </Stack>
      );
    },
  },
];
