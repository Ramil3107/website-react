import { AppBar, Avatar, Button, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, NavLink, } from "react-router-dom";
import styles from "./Navbar.module.css"


function Navbar(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={styles.wrapper}>

            <AppBar position="fixed" color="default">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", }}>

                    <Typography
                        variant="h6"
                        component={Link}
                        to="/website-react"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }} >
                        REACT APP
                    </Typography>
                    <Button component={Link} to="/website-react" variant="text" color="inherit"> Home</Button>
                    <Button component={Link} to="/almanac" variant="text" color="inherit">Almanac</Button>
                    <Button component={Link} to="/todo" variant="text" color="inherit">ToDo List</Button>
                    <Button component={Link} to="/contacts" variant="text" color="inherit">Contacts</Button>
                    {/* <Button component={Link} to="/login" variant="text" color="inherit">Log In</Button> */}

                    <Avatar
                        id="avatar"
                        aria-controls={open ? 'menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        R
                    </Avatar>

                    <Menu
                        id="menu"
                        aria-labelledby="avatar"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItem component={Link} to="/login" onClick={handleClose}>Log In</MenuItem>
                        <MenuItem component={Link} to="/login" onClick={handleClose}>Sign In</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            {/* <div className={styles.item}>
                <NavLink to="/website-react" className={({ isActive }) => (isActive ? [styles.active] : [])}>Home</NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to="/almanac" className={({ isActive }) => (isActive ? [styles.active] : [])}>Almanac</NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to="/todo" className={({ isActive }) => (isActive ? [styles.active] : [])}>To Do List</NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to="/contacts" className={({ isActive }) => (isActive ? [styles.active] : [])}>Contacts</NavLink>
            </div>

            <div className={styles.login}>
                <NavLink to="/login" className={({ isActive }) => (isActive ? [styles.active] : [])}>Login</NavLink>
            </div> */}

        </div>
    )
}

export default Navbar;