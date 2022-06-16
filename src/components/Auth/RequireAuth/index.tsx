import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import {useCurrentUser} from "../../../hooks/useCurrentUser";

type RequireAuthProps = {
  children: JSX.Element;
};

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const {isAuth} = useCurrentUser()
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }
  return children;
};

export default RequireAuth;
