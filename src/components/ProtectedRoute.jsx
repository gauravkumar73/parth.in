import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("isAdmin");

  return isAdmin === "true" ? children : <Navigate to="/" />;
};

export default ProtectedRoute;