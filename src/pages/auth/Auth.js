import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useLogin } from "../../context";

export const Auth = () => {
  const { login } = useLogin();
  let location = useLocation()
  return login ? <Outlet /> : <Navigate to="/login" state={{from:location}} replace />;
};
