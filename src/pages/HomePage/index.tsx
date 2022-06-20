import React from "react";
import Toolbar from "@mui/material/Toolbar";
import {
    Typography,
    IconButton,
    Avatar,
    MenuItem,
    Box,
    AppBar,
    Badge, styled
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuIcon from '@mui/icons-material/Menu';
import {useAuth} from "reactfire";
import logo from "../../components/Auth/AuthWrapper/RMlogo.png";
import {useCurrentUser} from "../../hooks/useCurrentUser";
import {useActions} from "../../hooks/useActions";
import clearFirestoreCache from "../../utils/clearFirestoreCache";
import Container from "@mui/material/Container";
import {Link, Outlet, useLocation} from "react-router-dom";
import {RouteNames} from "../../types/routes";
import {useAppSelector} from "../../hooks/reduxHooks";

const HomePage = (): JSX.Element => {
    const {name, img} = useCurrentUser();
    const {removeUser} = useActions();
    const location = useLocation();
    const auth = useAuth();
    const [anchorAvatarEl, setAnchorAvatarEl] = React.useState<null | HTMLElement>(null);
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const favoriteCharactersList = useAppSelector(
        (state) => state.favorite.favoriteCharacters
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    const handleAvatarMenuClose = (): void => {
        setAnchorAvatarEl(null);
    };
    const handleAvatarMenu = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorAvatarEl(event.currentTarget);
    };

    const logOut = async () => {
        await auth.signOut();
        removeUser();
        clearFirestoreCache();
        handleAvatarMenuClose();
    };

    const getInitials = (name: string | null | undefined): string | null => {
        if (name) {
            const [first, last] = name?.split(" ");
            return first[0] + last[0];
        }
        return null;
    };

    const menuItems = [
        {text: "home", link: RouteNames.HOME_PAGE},
        {text: "all characters", link: RouteNames.ALL_CHARACTERS},
        {text: "likes", link: RouteNames.LIKED},
    ];


    const typographyStyles = {
        textAlign: "center",
        textTransform: "uppercase",
        textDecoration: "none",
        padding: "20px",
    };


    return (
        <Box flexGrow={1}>
            <AppBar position="static" color="primary" sx={{marginBottom: "50px"}}>
                <Container maxWidth="xl" >
                    <Toolbar disableGutters>
                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon sx={{color: "white"}}/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none',},
                                }}
                            >
                                {menuItems.map((item) => (
                                    <MenuItem key={item.text}>
                                        <Link to={item.link} style={{textDecoration: "none"}}>
                                            <Typography variant="h6" sx={{
                                                ...typographyStyles, color: "#00b2c7",
                                                borderBottom: location.pathname === item.link ? "2px solid white" : 'none',
                                            }}>
                                                {item.text === 'likes' ?
                                                    <Badge badgeContent={favoriteCharactersList.length} color="success"
                                                           showZero
                                                           overlap='rectangular'>{item.text}</Badge> : item.text}
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Link to={RouteNames.HOME_PAGE}>
                            <Box sx={{display: {xs: 'none', sm: 'flex'}, flexGrow: 1}}>
                                <img
                                    src={logo}
                                    alt="logo"
                                    style={{maxWidth: "300px", height: "70px", flexGrow: 1}}
                                />
                            </Box>
                        </Link>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {menuItems.map((item) => (
                                <MenuItem key={item.text}>
                                    <Link to={item.link} style={{textDecoration: "none"}}>
                                        <Typography variant="h6" sx={{
                                            ...typographyStyles, color: "white",
                                            borderBottom: location.pathname === item.link ? "2px solid white" : 'none',
                                        }}>
                                            {item.text === 'likes' ?
                                                <Badge badgeContent={favoriteCharactersList.length} color="success"
                                                       showZero
                                                       overlap='rectangular'>{item.text}</Badge> : item.text}
                                        </Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Box>
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
                            anchorEl={anchorAvatarEl}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorAvatarEl)}
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
