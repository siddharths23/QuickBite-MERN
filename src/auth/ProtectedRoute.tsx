import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  //OUTLET - RENDER all child if user is authenticated
  //return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
  if (isLoading) {
    return null;
  }
  if (isAuthenticated) {
    return <Outlet />;
  }
  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
