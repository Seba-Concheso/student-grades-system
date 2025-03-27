import { Typography, Chip, IconButton, Tooltip, Stack } from "@mui/material";
import { Column } from "../../../components/Table/interface/interface";
import { Theme } from "@mui/material/styles";
import { getActionConfig } from "../../../utils/getIconButtonStyle";

export interface Grade {
  id: number;
  student: string;
  subject: string;
  score: number;
  status: "approved" | "rejected";
}

export const gradeColumns = (theme: Theme): Column<Grade>[] => [
  { id: "student", label: "Estudiante" },
  { id: "subject", label: "Materia" },
  {
    id: "score",
    label: "Nota",
    render: (value, row) => (
      <Typography variant="h6" fontWeight="bold" color={row.status === "approved" ? "success.main" : "error.main"}>
        {value}
      </Typography>
    ),
  },
  {
    id: "status",
    label: "Estado",
    render: (value) => (
      <Chip
        label={value === "approved" ? "Aprobado" : "Desaprobado"}
        color={value === "approved" ? "success" : "error"}
        size="small"
        variant="outlined"
      />
    ),
  },
  {
    id: "id",
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
