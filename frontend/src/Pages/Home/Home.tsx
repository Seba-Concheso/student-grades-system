import React, { JSX } from "react";
import { Avatar, Box, Card, CardContent, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { MenuBook, School, StarRateRounded } from "@mui/icons-material";
import { PaletteColor } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

type AllowedColor = "info" | "success" | "warning";

const Home: React.FC = () => {
  const theme = useTheme();

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
      label: "Materias",
      value: 15,
      icon: <MenuBook />,
      color: "success",
    },
    {
      label: "Promedio General",
      value: 8.4,
      icon: <StarRateRounded />,
      color: "warning",
    },
  ];

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, p: 2 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
        Panel Principal
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
    </Box>
  );
};

export default Home;
