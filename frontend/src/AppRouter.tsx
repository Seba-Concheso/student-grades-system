import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import GradesPage from "./Pages/GradesPage/GradesPage";
import StudentsPage from "./Pages/StudentsPage/StudentsPage";
import SubjectsPage from "./Pages/SubjectsPage/SubjectsPage";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import PrivateRoute from "./components/PrivetRoute";

const AppRouter: FC = () => {
  return (
    <Routes>
      {/* Ruta pública */}
      <Route path="/login" element={<LoginPage />} />

      {/* Rutas protegidas */}
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/grades" element={<GradesPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
