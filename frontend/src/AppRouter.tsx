import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import GradesPage from "./Pages/GradesPage/GradesPage";
import StudentsPage from "./Pages/StudentsPage/StudentsPage";
import SubjectsPage from "./Pages/SubjectsPage/SubjectsPage";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";

const AppRouter: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/grades" element={<GradesPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
