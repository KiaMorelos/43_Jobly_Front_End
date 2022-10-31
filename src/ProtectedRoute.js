import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthedUserContext from "./AuthedUserContext";

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const { currentUser } = useContext(AuthedUserContext);
  if (!currentUser) {
    return <Navigate to={redirectPath} />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
