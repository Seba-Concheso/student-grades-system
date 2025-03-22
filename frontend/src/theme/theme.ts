import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#5e35b1",
        light: "#9162c0",
        dark: "#280680",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#00acc1",
        light: "#5ddef4",
        dark: "#007c91",
        contrastText: "#ffffff",
      },
      info: {
        main: "#1e88e5",
        light: "#6ab7ff",
      },
      success: {
        main: "#43a047",
        light: "#76d275",
      },
      warning: {
        main: "#ffa726",
        light: "#ffcc80",
      },
      error: {
        main: "#e53935",
      },
      background: {
        default: mode === "dark" ? "#121212" : "#f4f5fa",
        paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#2c2c2c",
        secondary: mode === "dark" ? "#b0b0b0" : "#6b6b6b",
      },
    },
    shape: {
      borderRadius: 8,
    },
    typography: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(", "),
      fontSize: 14,
      h4: {
        fontWeight: 600,
      },
    },
  });

export default getTheme;

// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#5e35b1", // Violeta intenso (Berry-style)
//       light: "#9162c0",
//       dark: "#280680",
//       contrastText: "#ffffff",
//     },
//     secondary: {
//       main: "#00acc1", // Cian (fresco y moderno)
//       light: "#5ddef4",
//       dark: "#007c91",
//       contrastText: "#ffffff",
//     },
//     info: {
//       main: "#1e88e5",
//       light: "#6ab7ff",
//     },
//     success: {
//       main: "#43a047",
//       light: "#76d275",
//     },
//     warning: {
//       main: "#ffa726",
//       light: "#ffcc80",
//     },
//     error: {
//       main: "#e53935",
//     },
//     background: {
//       default: "#f4f5fa", // Gris muy claro (estilo dashboard)
//       paper: "#ffffff",
//     },
//     text: {
//       primary: "#2c2c2c",
//       secondary: "#6b6b6b",
//     },
//   },
//   shape: {
//     borderRadius: 8, // Bordes suaves
//   },
//   typography: {
//     fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(", "),
//     fontSize: 14,
//     h4: {
//       fontWeight: 600,
//     },
//   },
// });

// export default theme;
