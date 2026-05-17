import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Attendance from "../Pages/Attendance";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="workers">
            <Route path="attendance" element={<Attendance />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;