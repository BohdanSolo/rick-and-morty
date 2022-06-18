import React from "react";
import Toolbar from "@mui/material/Toolbar";
import {
    Typography,
    IconButton,
    Avatar,
    MenuItem,
    Box,
    AppBar,
    Badge
} from "@mui/material";
import Menu from "@mui/material/Menu";
import {useAuth} from "reactfire";
import logo from "../../components/Auth/AuthWrapper/RMlogo.png";
import {useCurrentUser} from "../../hooks/useCurrentUser";
import {useActions} from "../../hooks/useActions";
import clearFirestoreCache from "../../utils/clearFirestoreCache";
import Container from "@mui/material/Container";
import {Link, Outlet, useLocation} from "react-router-dom";
import {RouteNames} from "../../types/routes";
import {useAppSelector} from "../../hooks/reduxHooks";

const HomePage: React.FC = () => {
    const {name, img} = useCurrentUser();
    const {removeUser} = useActions();
    const auth = useAuth();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const favoriteCharactersList = useAppSelector(
        (state) => state.favorite.favoriteCharacters
    );
    const handleAvatarMenuClose = () => {
        setAnchorEl(null);
    };

    const handleAvatarMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const logOut = async () => {
        await auth.signOut();
        removeUser();
        clearFirestoreCache();
        handleAvatarMenuClose();
    };

    const getInitials = (name: string | null | undefined) => {
        if (name) {
            const [first, last] = name?.split(" ");
            return first[0] + last[0];
        }
        return null;
    };

    const menuItems = [
        {text: "home", link: RouteNames.HOME_PAGE},
        {text: "all characters", link: RouteNames.ALL_CHARACTERS},
        {text: "liked", link: RouteNames.LIKED},
    ];

    const location = useLocation();

    const typographyStyles = {
        color: "white",
        textAlign: "center",
        textTransform: "uppercase",
        textDecoration: "none",
        padding: "20px",
    };

    return (
        <Box flexGrow={1}>
            <AppBar position="static" color="primary" sx={{marginBottom: "50px"}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{flexGrow: 1}}>
                            <img
                                src={logo}
                                alt="logo"
                                style={{width: "300px", height: "70px", flexGrow: 1}}
                            />
                        </Box>
                        {menuItems.map((item) => (
                            <MenuItem key={item.text}>
                                <Link to={item.link} style={{textDecoration: "none"}}>
                                    <Typography variant="h6" sx={{
                                        ...typographyStyles,
                                        borderBottom: location.pathname === item.link ? "2px solid white" : 'none',
                                    }}>
                                        {item.text === 'liked' ?
                                            <Badge badgeContent={favoriteCharactersList.length} color="success" showZero overlap='rectangular' >{item.text}</Badge> : item.text}
                                    </Typography>
                                </Link>
                            </MenuItem>
                        ))}
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleAvatarMenu}
                            color="inherit"
                        >
                            <Avatar alt={name || 'User'} src={img || ""} sx={{padding: "5px"}}>
                                {getInitials(name)}
                            </Avatar>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleAvatarMenuClose}
                        >
                            <MenuItem onClick={logOut}>Logout</MenuItem>
                        </Menu>
                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet/>
        </Box>
    );
};

export default HomePage;
