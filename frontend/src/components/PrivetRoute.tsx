import { Navigate, Outlet } from "react-router-dom";
import { userStore } from "../store/userStore";

const PrivateRoute = () => {
  const { user } = userStore();

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
