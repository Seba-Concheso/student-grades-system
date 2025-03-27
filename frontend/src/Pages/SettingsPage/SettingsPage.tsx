import {
  Avatar,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Container,
  PaletteColor,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { JSX } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { School } from "@mui/icons-material";

import EnhancedTable from "../../components/Table/CustomTable";
import { useUsers } from "../../hooks/useUsers";
import { settingsColumns } from "./constants/settingColumns";
type AllowedColor = "info" | "success" | "warning";

const SettingsPage = () => {
  const theme = useTheme();
  const { data: users = [], isLoading, isError } = useUsers();

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return <p>Error al cargar usuarios.</p>;
  }

  const stats: {
    label: string;
    value: number;
    icon: JSX.Element;
    color: AllowedColor;
  }[] = [
    {
      label: "Estudiantes",
      value: 120,
      icon: <School />,
      color: "info",
    },
    {
      label: "Profesores",
      value: 15,
      icon: <PersonIcon />,
      color: "success",
    },
  ];

  const handleAddGrade = () => {};

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, p: 2 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
        Configuraciones
      </Typography>

      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid key={stat.label} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              elevation={3}
              sx={{
                p: 2,
                minHeight: 120,
                height: "100%",
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: (theme) => `0px 4px 12px ${theme.palette.grey[200]}`,
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: (theme) => `0px 6px 16px ${theme.palette.grey[300]}`,
                },
              }}
            >
              <Avatar
                sx={{
                  bgcolor: `${(theme.palette[stat.color] as PaletteColor).main}22`,
                  color: (theme.palette[stat.color] as PaletteColor).main,
                  width: 64,
                  height: 64,
                  mr: 2,
                }}
              >
                {stat.icon}
              </Avatar>
              <CardContent sx={{ p: 0 }}>
                <Stack spacing={0.5}>
                  <Typography variant="subtitle1" color="text.secondary">
                    {stat.label}
                  </Typography>
                  <Typography variant="h4" fontWeight="bold">
                    {stat.value}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <EnhancedTable
          rows={users}
          columns={settingsColumns(theme)}
          defaultOrderBy={"id"}
          tableName={"Usuarios"}
          onAdd={handleAddGrade}
        />
      </Container>
    </Box>
  );
};

export default SettingsPage;
