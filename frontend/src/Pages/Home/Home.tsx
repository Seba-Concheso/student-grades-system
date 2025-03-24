import React, { JSX, useState } from "react";
import { Avatar, Box, Card, CardContent, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { MenuBook, School, StarRateRounded } from "@mui/icons-material";
import { PaletteColor } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Input from "../../components/Input/Input";
import CustomButton from "../../components/Button/CustomButton";

type AllowedColor = "info" | "success" | "warning";

const Home: React.FC = () => {
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [country, setCountry] = useState("");
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
      <Box sx={{ width: { xs: "100%", md: "50%" }, mx: "auto" }}>
        <form>
          <Input id="email">
            <Input.Label sx={{ color: "primary.main" }}>Descripción</Input.Label>
            <Input.Field
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              sx={{ bgcolor: "white", borderRadius: 2 }}
            ></Input.Field>
            <Input.HelperText>Ingresa email válido</Input.HelperText>
          </Input>
          <Input id="desc">
            <Input.Label>Descripción</Input.Label>
            <Input.TextArea
              rows={4}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              sx={{ bgcolor: "grey.100" }}
            />
          </Input>

          <Input id="accept">
            <Input.Checkbox checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />
            <Input.Label sx={{ ml: 1 }}>Acepto términos</Input.Label>
          </Input>

          <Input id="country">
            <Input.Label>País</Input.Label>
            <Input.Select
              options={[
                { label: "Argentina", value: "ar" },
                { label: "Brasil", value: "br" },
              ]}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              sx={{ bgcolor: "background.paper" }}
            />
          </Input>
        </form>

        <CustomButton actionType="aceptar">guardar</CustomButton>
      </Box>
    </Box>
  );
};

export default Home;
