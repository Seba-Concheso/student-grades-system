import {
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Paper,
  Chip,
  Stack,
  Tooltip,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { useTheme } from "@mui/material/styles";
import EnhancedTable from "../../components/Table/CustomTable";

const grades = [
  {
    id: 1,
    student: "Juan Pérez",
    subject: "Matemática I",
    score: 8.5,
    status: "approved",
  },
  {
    id: 2,
    student: "María López",
    subject: "Programación I",
    score: 5.0,
    status: "rejected",
  },
  {
    id: 3,
    student: "Carlos Ramírez",
    subject: "Física I",
    score: 9.0,
    status: "approved",
  },
];

const GradesPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, p: 2 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
        Calificaciones
      </Typography>

      <Paper
        elevation={3}
        sx={{
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `0px 4px 12px ${theme.palette.grey[200]}`,
          p: 2,
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Estudiante</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Materia</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Nota</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Estado</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {grades.map((grade) => {
              const isApproved = grade.status === "approved";
              return (
                <TableRow
                  key={grade.id}
                  hover
                  sx={{
                    backgroundColor: isApproved ? theme.palette.success.light + "11" : theme.palette.error.light + "11",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <TableCell>{grade.student}</TableCell>
                  <TableCell>{grade.subject}</TableCell>
                  <TableCell>
                    <Typography variant="h6" fontWeight="bold" color={isApproved ? "success.main" : "error.main"}>
                      {grade.score}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={isApproved ? "Aprobado" : "Desaprobado"}
                      color={isApproved ? "success" : "error"}
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={1} justifyContent="flex-end">
                      <Tooltip title="Ver">
                        <IconButton
                          sx={{
                            color: theme.palette.primary.main,
                            "&:hover": {
                              bgcolor: theme.palette.primary.light + "22",
                            },
                          }}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Editar">
                        <IconButton
                          sx={{
                            color: theme.palette.secondary.main,
                            "&:hover": {
                              bgcolor: theme.palette.secondary.light + "22",
                            },
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
      <Box>
        <EnhancedTable />
      </Box>
    </Box>
  );
};

export default GradesPage;
