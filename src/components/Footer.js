import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#FF3F4">
            <Stack
                gap="40px"
                sx={{ alignItems: "center" }}
                flexWrap="wrap"
                px="40px"
                pt="24px"
            >
                <img
                    src={Logo}
                    alt="logo"
                    style={{ width: "150px", height: "auto", xs: "20px" }}
                    mt="41px"
                />
            </Stack>
            <Typography
                variant="h5"
                sx={{ fontSize: { lg: "28px", xs: "20px" } }}
                mt="41px"
                textAlign="center"
                pb="40px"
                color="#2B2D42"
            >
                Start Your Fitness Journey 💪 by Steve De La Rosa
            </Typography>
        </Box>
    );
};

export default Footer;
