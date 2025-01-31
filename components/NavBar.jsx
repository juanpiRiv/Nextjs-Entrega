"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";
import useCartStore from "@/app/context/useCartStore";
import useAuthStore from "@/app/context/useAuthStore";

const pages = ["Home", "Productos", "Contacto", "Sobre nosotros"];

const CartBadge = styled(Badge)({
    "& .MuiBadge-dot": {
        top: -4,
        right: -4,
    },
});

const NavbarButton = styled(Button)(({ theme }) => ({
    "&:hover": {
        backgroundColor: theme.palette.primary.light,
        transform: "scale(1.05)",
    },
    padding: "8px 16px",
    margin: "0 10px",
    fontWeight: 600,
    color: "white",
    "&.active": {
        color: theme.palette.primary.main,
    },
}));

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { user, role, loading, initAuth, logout } = useAuthStore();
    const totalQuantity = useCartStore((state) =>
        state.cart.reduce((total, item) => total + item.quantity, 0)
    );

    React.useEffect(() => {
        initAuth();
    }, [initAuth]);

    // 🔹 Cierra el menú automáticamente cuando el usuario cambia
    React.useEffect(() => {
        setAnchorElUser(null);
    }, [user]);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="sticky" sx={{ boxShadow: 3, bgcolor: "background.default" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Logo en vista de escritorio */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}>
                        <Link href="/" passHref>
                            <img
                                src="/resize.svg"
                                alt="Logo"
                                style={{ width: "50px", height: "50px", cursor: "pointer" }}
                            />
                        </Link>
                    </Box>

                    {/* Menú para dispositivos pequeños */}
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            onClick={handleOpenNavMenu}
                            sx={{ color: "white" }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            keepMounted
                            transformOrigin={{ vertical: "top", horizontal: "left" }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Link
                                        href={page === "Productos" ? "/products" : page === "Contacto" ? "/contact" : page === "Sobre nosotros" ? "/informacion" : "/"}
                                        passHref
                                    >
                                        <Typography sx={{ textAlign: "center", color: "black" }}>
                                            {page}
                                        </Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Logo centrado en vista móvil */}
                    <Box
                        sx={{
                            paddingRight: 10,
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                            justifyContent: "center",
                        }}
                    >
                        <Link href="/" passHref>
                            <img
                                src="/resize.svg"
                                alt="Logo"
                                style={{ width: "50px", height: "50px", cursor: "pointer" }}
                            />
                        </Link>
                    </Box>

                    {/* Menú de navegación en escritorio */}
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => (
                            <Link
                                key={page}
                                href={page === "Productos" ? "/products" : page === "Contacto" ? "/contact" : page === "Sobre nosotros" ? "/informacion" : "/"}
                                passHref
                            >
                                <NavbarButton>{page}</NavbarButton>
                            </Link>
                        ))}
                    </Box>

                    {/* Ícono del carrito */}
                    <Box sx={{ mr: 2 }}>
                        <Link href="/cart" passHref>
                            <IconButton sx={{ color: "white" }}>
                                <CartBadge badgeContent={totalQuantity} color="primary">
                                    <ShoppingCartIcon fontSize="small" />
                                </CartBadge>
                            </IconButton>
                        </Link>
                    </Box>

                    {/* Usuario */}
                    <Box sx={{ flexGrow: 0 }}>
                        {loading ? (
                            <Typography sx={{ color: "white" }}>Cargando...</Typography>
                        ) : user ? (
                            <>
                                <Tooltip title={user.email}>
                                    <IconButton onClick={handleOpenUserMenu}>
                                        <Avatar src={user?.photoURL || ""} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: "45px" }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                                    keepMounted
                                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <MenuItem disabled>
                                        <Typography sx={{ color: "black", textAlign: "center" }}>
                                            {user.email}
                                        </Typography>
                                    </MenuItem>
                                    {role === "admin" && (
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Link href="/dashboard">
                                                <Typography sx={{ color: "black", textAlign: "center" }}>
                                                    Panel Admin
                                                </Typography>
                                            </Link>
                                        </MenuItem>
                                    )}
                                    <MenuItem onClick={() => logout()}>
                                        <Typography sx={{ color: "black", textAlign: "center" }}>
                                            Cerrar sesión
                                        </Typography>
                                    </MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <>
                                <Link href="/auth/login">
                                    <Button className="font-bold tracking-tighter" sx={{ color: "white" }}>Iniciar sesión</Button>
                                </Link>
                                <Link href="/auth/register">
                                    <Button className="font-bold tracking-tighter" sx={{ color: "white" }}>Registrarse</Button>
                                </Link>
                            </>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;

