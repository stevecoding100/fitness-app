import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import Logo from "../assets/images/Logo.png";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 900);
        };

        handleResize(); // Set initial value
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Paper elevation={3}>
            <Stack
                width="100%"
                direction="row"
                justifyContent="space-between"
                backgroundColor="white"
                sx={{
                    gap: { sm: "122px", xs: "50px" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: { sm: "120px", xs: "100px" },
                    px: { sm: "100px", xs: "60px" },
                }}
            >
                <Link>
                    <img
                        src={Logo}
                        alt="logo"
                        style={{
                            width: "150px",
                            height: "auto",
                            paddingTop: "10px",
                            objectFit: "cover",
                        }}
                    />
                </Link>
                {isSmallScreen ? (
                    <HamburgerMenu />
                ) : (
                    <Stack
                        direction="row"
                        gap="40px"
                        fontFamily="Montserrat"
                        fontWeight="500"
                        fontSize="18px"
                        alignItems="center"
                    >
                        <Link
                            to="/"
                            style={{
                                textDecoration: "none",
                                color: "#2B2D42",
                                borderBottom: "3px solid #D90000",
                            }}
                        >
                            Home
                        </Link>
                        <a
                            href="#exercises"
                            style={{
                                textDecoration: "none",
                                color: "#2B2D42",
                            }}
                        >
                            Exercises
                        </a>
                        <Link
                            to="/bodycalculator"
                            style={{
                                textDecoration: "none",
                                color: "#2B2D42",
                            }}
                        >
                            Body Calculator
                        </Link>
                        <Stack direction="row" gap="20px" alignItems="flex-end">
                            <Link to="/signin">
                                <button className="sign_in_btn">Sign in</button>
                            </Link>
                            <Link to="/signup">
                                <button className="sign_up_btn">Sign up</button>
                            </Link>
                        </Stack>
                    </Stack>
                )}
            </Stack>
        </Paper>
    );
};

export default Navbar;
