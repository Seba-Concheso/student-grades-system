import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import GradesPage from "./Pages/GradesPage/GradesPage";
import StudentPage from "./Pages/StudentPage/StudentPage";
import SubjectPage from "./Pages/SubjectPage/SubjectPage";
import SettingPage from "./Pages/SettingPage/SettingPage";

const AppRouter: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/grades" element={<GradesPage />} />
        <Route path="/students" element={<StudentPage />} />
        <Route path="/subjects" element={<SubjectPage />} />
        <Route path="/settings" element={<SettingPage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
