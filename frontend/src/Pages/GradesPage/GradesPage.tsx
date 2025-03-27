import { Box, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import EnhancedTable from "../../components/Table/CustomTable";
import { gradeColumns } from "./constants/gradesColumns";
import { grades } from "./constants/gradesRows";

const GradesPage = () => {
  const theme = useTheme();

  const handleAddGrade = () => {};

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, p: 2 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
        Calificaciones
      </Typography>

      <Box>
        <EnhancedTable
          columns={gradeColumns(theme)}
          defaultOrderBy="student"
          tableName="Calificaciones"
          rows={grades}
          onAdd={handleAddGrade}
        />
      </Box>
    </Box>
  );
};

export default GradesPage;

//En la parte superior colocar los filtros por: estudiante, materia estado

//Agregar calificación
