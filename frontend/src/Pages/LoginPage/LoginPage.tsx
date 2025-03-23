import { Box, Paper, Typography, TextField, Button, Stack, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Por favor completá todos los campos.");
      return;
    }

    // Simulación de login – acá iría el fetch al backend
    try {
      // TODO: conectar con tu backend real
      if (email === "admin@example.com" && password === "123456") {
        // login exitoso
        login({
          id: 1,
          name: "Admin",
          email,
          role: "admin",
        });
        navigate("/"); // redirigir al dashboard
      } else {
        setError("Credenciales inválidas.");
      }
    } catch (err) {
      console.error(err);
      setError("Ocurrió un error al iniciar sesión.");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "background.default",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 400,
          width: "100%",
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Iniciar sesión
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Correo electrónico"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <Alert severity="error">{error}</Alert>}

          <Button variant="contained" color="primary" onClick={handleLogin}>
            Iniciar sesión
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default LoginPage;
