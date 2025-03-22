import { Box, Typography, Table, TableHead, TableBody, TableRow, TableCell, IconButton, Paper } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTheme } from "@mui/material/styles";

const subjects = [
  { id: 1, code: "MAT101", name: "Matemática I", teacher: "Prof. López" },
  { id: 2, code: "INF102", name: "Programación I", teacher: "Ing. Ramírez" },
  { id: 3, code: "FIS103", name: "Física I", teacher: "Lic. Gómez" },
];

const SubjectsPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, p: 2 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
        Materias
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
              <TableCell sx={{ fontWeight: "bold" }}>Código</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Nombre</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Docente</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Acción
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subjects.map((subject) => (
              <TableRow key={subject.id} hover>
                <TableCell>{subject.code}</TableCell>
                <TableCell>{subject.name}</TableCell>
                <TableCell>{subject.teacher}</TableCell>
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

export default SubjectsPage;
