import { Navigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import Layout from "../layouts/Layout";

const PrivateRoute = () => {
  const user = useAuth();
  if (!user.token) return <Navigate to="/login" />;
  return <Layout />;
};

export default PrivateRoute;
