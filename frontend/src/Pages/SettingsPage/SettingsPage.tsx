import {
  Box,
  Typography,
  Paper,
  FormControlLabel,
  Switch,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  TextField,
  Stack,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useSettingsStore } from "../../store/useSettingsStore";

const SettingsPage = () => {
  const theme = useTheme();
  const { username, language, notificationsEnabled, setUsername, setLanguage, setNotificationsEnabled } =
    useSettingsStore();

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSave = () => {
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, p: 2 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
        Configuración
      </Typography>

      <Paper
        elevation={3}
        sx={{
          borderRadius: theme.shape.borderRadius,
          p: 3,
          maxWidth: 600,
        }}
      >
        <Stack spacing={3}>
          <TextField
            label="Nombre de usuario"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />

          <FormControl fullWidth>
            <InputLabel id="lang-label">Idioma</InputLabel>
            <Select labelId="lang-label" label="Idioma" value={language} onChange={(e) => setLanguage(e.target.value)}>
              <MenuItem value="es">Español</MenuItem>
              <MenuItem value="en">Inglés</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            control={
              <Switch checked={notificationsEnabled} onChange={(e) => setNotificationsEnabled(e.target.checked)} />
            }
            label="Notificaciones activadas"
          />

          <Box display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" onClick={handleSave}>
              Guardar cambios
            </Button>
          </Box>
        </Stack>
      </Paper>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" variant="filled">
          Cambios guardados correctamente
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SettingsPage;
