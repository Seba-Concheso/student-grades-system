import { Box, Paper, Typography, TextField, Button, Stack, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import { userStore } from "../../store/userStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const loginUser = userStore((state) => state.login);

  const handleLogin = async (event: React.FormEvent) => {
    if (!email || !password) {
      setError("Por favor completá todos los campos.");
      return;
    }
    event.preventDefault();
    try {
      const data = await login(email, password);
      loginUser(data.token, data.user);
      navigate("/");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
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
