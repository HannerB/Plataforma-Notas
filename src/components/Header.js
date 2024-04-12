import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import Logo from "../../src/assets/logo.png"

export default function Header() {
    return (
        <AppBar position="static" style={{ backgroundColor: "#2196f3" }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    {/* <img src={Logo} alt="Logo" style={{ width: 50, height: 50 }} /> */}
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
				Note-Taking Platform
                </Typography>
                {/* <Button color="inherit">Iniciar Sesión</Button>
                <Button color="inherit">Registrarse</Button> */}
            </Toolbar>
        </AppBar>
    );
}
