import React, {useContext} from "react";
import Typography from "@mui/material/Typography";
import {useAuth} from "reactfire";
import AuthWrapper from "../../components/Auth/AuthWrapper";
import {UIContext} from "../../UI/UIContext";
import RegisterForm from "../../components/Auth/RegisterForm";
import {useActions} from "../../hooks/useActions";
import {useCurrentUser} from "../../hooks/useCurrentUser";
import {Navigate, useLocation} from "react-router-dom";
import {RouteNames} from "../../types/routes";

const RegisterPage = (): JSX.Element => {
    const {setAlert} = useContext(UIContext);
    const {setCurrentUser} = useActions();
    const auth = useAuth();
    const {isAuth} = useCurrentUser();
    const location = useLocation();

    const handleSignup = React.useCallback(
        async (name: string, email: string, password: string) => {
            try {
                await auth.createUserWithEmailAndPassword(email, password);
                setCurrentUser({
                    name: name,
                    email: email,
                });
                setAlert({
                    show: true,
                    message: "Welcome on board 🚀",
                });
                const user = auth.currentUser;
                if (user) {
                    await user.updateProfile({
                        displayName: name,
                    });
                }
            } catch (e) {
                if (e instanceof Error) {
                    setAlert({
                        show: true,
                        severity: "error",
                        message: e.message,
                    });
                }
            }
        },
        [setAlert, setCurrentUser, auth]
    );

    if (isAuth) {
        return <Navigate to={RouteNames.HOME_PAGE} state={{from: location}}/>;
    }

    return (
        <AuthWrapper
            question="Already have an account?"
            text="login"
            route="/login"
        >
            <Typography
                variant="h1"
                component="div"
                fontSize="40px"
                fontWeight="700"
                lineHeight="50px"
                marginBottom="30px"
                color="#00b2c7"
            >
                Register
            </Typography>
            <RegisterForm handleSignup={handleSignup}/>
        </AuthWrapper>
    );
};

export default RegisterPage;
