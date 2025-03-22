import {
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  IconButton,
  Paper,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTheme } from "@mui/material/styles";

const students = [
  {
    id: 1,
    name: "Juan Pérez",
    email: "juan@example.com",
    status: "active",
  },
  {
    id: 2,
    name: "María López",
    email: "maria@example.com",
    status: "inactive",
  },
  {
    id: 3,
    name: "Carlos Ramírez",
    email: "carlos@example.com",
    status: "active",
  },
];

const StudentsPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, p: 2 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
        Estudiantes
      </Typography>

      <Paper
        elevation={2}
        sx={{
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `0px 2px 8px ${theme.palette.grey[200]}`,
          p: 2,
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Nombre</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Estado</TableCell>
              <TableCell align="right">Acción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id} hover>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>
                  <Chip
                    label={student.status === "active" ? "Activo" : "Inactivo"}
                    color={student.status === "active" ? "success" : "default"}
                    size="small"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell align="right">
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default StudentsPage;
