import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthedUserContext from "../context/AuthedUserContext";

const ProtectedRoutes = () => {
  const { currentUser } = useContext(AuthedUserContext);
  const isAuth = localStorage.getItem("token");
  return currentUser || isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
