import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: "212px", xs: "70px" },
                ml: { sm: "50px" },
            }}
            position="relative"
            p="20px"
        >
            <Typography color="#D90429" fontWeight="600" fontSize="26px">
                Fitness Club
            </Typography>
            <Typography
                fontWeight={700}
                color="#2B2D42"
                sx={{
                    fontSize: { lg: "44px", xs: "40px" },
                }}
                mb="23px"
                mt="30px"
            >
                Unlock Your Potential,
                <br /> One Rep at a Time!
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={4}></Typography>
            <Button
                variant="contained"
                color="error"
                href="#exercises"
                sx={{ backgroundColor: "#D90429", padding: "10px" }}
            >
                Explore Exercises
            </Button>
            <Typography
                fontWeight={600}
                color="#D90429"
                sx={{
                    opacity: 0.1,
                    display: {
                        lg: "block",
                        xs: "none",
                    },
                }}
                fontSize="220px"
            >
                Exercise
            </Typography>
            <img
                src={HeroBannerImage}
                alt="banner"
                className="hero-banner-img"
            />
        </Box>
    );
};

export default HeroBanner;
