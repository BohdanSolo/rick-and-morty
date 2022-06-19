import React, {useCallback, useContext} from "react";
import AuthWrapper from "../../components/Auth/AuthWrapper";
import LoginForm from "../../components/Auth/LoginForm";
import Typography from "@mui/material/Typography";
import {useAuth} from "reactfire";
import {UIContext} from "../../UI/UIContext";
import {RouteNames} from "../../types/routes";
import firebase from "firebase/app";
import {useActions} from "../../hooks/useActions";
import {useCurrentUser} from "../../hooks/useCurrentUser";
import {Navigate, useLocation} from "react-router-dom";

const LoginPage = (): JSX.Element => {
    const {setAlert} = useContext(UIContext);
    const {setCurrentUser} = useActions();
    const auth = useAuth();
    const FbProvider = new firebase.auth.FacebookAuthProvider();
    const GoogleProvider = new firebase.auth.GoogleAuthProvider();
    const {isAuth} = useCurrentUser();
    const location = useLocation();

    const handleSignIn = useCallback(
        async (email: string, password: string) => {
            try {
                await auth.signInWithEmailAndPassword(email, password);
                const user = auth.currentUser;
                if (user) {
                    setCurrentUser({
                        name: user.displayName,
                        email: user.email,
                    });
                }
                setAlert({
                    show: true,
                    severity: "success",
                    message: "Signed in ",
                });
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
        [setAlert, auth, setCurrentUser]
    );

    const handleFacebookSignIn = useCallback(async () => {
        try {
            await auth.signInWithPopup(GoogleProvider);
            const user = auth.currentUser;
            if (user) {
                setCurrentUser({
                    name: user.displayName,
                    email: user.email,
                    img: user.photoURL,
                });
            }
            setAlert({
                show: true,
                severity: "success",
                message: "Signed in with Google",
            });
        } catch (e) {
            if (e instanceof Error) {
                setAlert({
                    show: true,
                    severity: "error",
                    message: e.message,
                });
            }
        }
    }, [setAlert, auth, setCurrentUser]);


    const handleGoogleSignIn = useCallback(async () => {
        try {
            await auth.signInWithPopup(FbProvider);
            const user = auth.currentUser;
            if (user) {
                setCurrentUser({
                    name: user.displayName,
                    email: user.email,
                    img: user.photoURL,
                });
            }
            setAlert({
                show: true,
                severity: "success",
                message: "Signed in with Facebook",
            });
        } catch (e) {
            if (e instanceof Error) {
                setAlert({
                    show: true,
                    severity: "error",
                    message: e.message,
                });
            }
        }
    }, [setAlert, auth, setCurrentUser]);


    if (isAuth) {
        return <Navigate to={RouteNames.HOME_PAGE} state={{from: location}}/>;
    }

    return (
        <AuthWrapper
            question="Don`t have an account?"
            text="register"
            route={RouteNames.REGISTRATION}
        >
            <Typography
                variant="h1"
                component="div"
                fontSize="40px"
                fontWeight="700"
                lineHeight="112px"
                marginBottom="30px"
                color="#00b2c7"
            >
                Login
            </Typography>
            <LoginForm
                handleSignIn={handleSignIn}
                handleFacebookSignIn={handleFacebookSignIn}
                handleGoogleSignIn={handleGoogleSignIn}
            />
        </AuthWrapper>
    );
};

export default LoginPage;
