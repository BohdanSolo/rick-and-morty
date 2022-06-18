import React from "react";
import {useLocation, Navigate} from "react-router-dom";
import {useCurrentUser} from "../../../hooks/useCurrentUser";

interface RequireAuthProps {
    children: JSX.Element;
}

const RequireAuth = ({children}: RequireAuthProps): JSX.Element => {
    const {isAuth} = useCurrentUser()
    const location = useLocation();
    if (!isAuth) {
        return <Navigate to={"/login"} state={{from: location}}/>;
    }
    return children;
};

export default RequireAuth;
