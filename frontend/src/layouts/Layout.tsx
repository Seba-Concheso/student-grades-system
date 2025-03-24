import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemIcon,
  IconButton,
  Button,
  Switch,
  Tooltip,
} from "@mui/material";
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, MenuBook, People, School, Settings, Menu, Brightness7, Brightness4 } from "@mui/icons-material";
import { useAppStore } from "../store/useAppStore";
import { userStore } from "../store/userStore";
import { useSettingsStore } from "../store/useSettingsStore";

interface LayoutProps {
  children: ReactNode;
}

const drawerWidth = 240;
const collapsedWidth = 72;

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const { sidebarOpen, toggleSideBar } = useAppStore();
  const { user, logout } = userStore();
  const { themeMode, toggleThemeMode } = useSettingsStore();

  const drawerStyles = {
    width: sidebarOpen ? drawerWidth : collapsedWidth,
    transition: "width 0.3s",
    overflowX: "hidden",
    [`& .MuiDrawer-paper`]: {
      width: sidebarOpen ? drawerWidth : collapsedWidth,
      transition: "width 0.3s",
      overflowX: "hidden",
      boxSizing: "border-box",
    },
  };

  const navItems = [
    { text: "Inicio", path: "/", icon: <Home /> },
    { text: "Calificaciones", path: "/grades", icon: <School /> },
    { text: "Estudiantes", path: "/students", icon: <People /> },
    { text: "Materias", path: "/subjects", icon: <MenuBook /> },
    { text: "Configuración", path: "/settings", icon: <Settings /> },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit" edge="start" onClick={toggleSideBar} sx={{ mr: 2 }}>
              <Menu />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Mi Dashboard
            </Typography>
          </Box>
          {user ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography variant="body1">Hola, {user.username}</Typography>
              <Button color="inherit" onClick={logout}>
                Cerrar sesión
              </Button>
            </Box>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Iniciar sesión
            </Button>
          )}
        </Toolbar>
      </AppBar>

      {/* Sidebar */}

      <Drawer variant="permanent" sx={drawerStyles}>
        <Toolbar />
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                textDecoration: "none",
                color: "inherit",
                backgroundColor: location.pathname === item.path ? "rgba(0, 0, 0, 0.1)" : "transparent",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                },
                px: 2,
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: sidebarOpen ? 2 : "auto", justifyContent: "center" }}>
                {item.icon}
              </ListItemIcon>
              {sidebarOpen && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </List>
        <Box
          sx={{
            mt: "auto",
            px: 2,
            pb: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Tooltip title="Cambiar tema">
            <IconButton edge="start" size="small">
              {themeMode === "dark" ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Tooltip>
          <Switch checked={themeMode === "dark"} onChange={toggleThemeMode} size="small" />
        </Box>
      </Drawer>

      {/* Contenido Principal */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px`, mt: 8 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
