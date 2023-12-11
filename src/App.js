import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";

const App = () => (
    <Box>
        <Navbar />
        <HeroBanner />
        <Stack width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>
            <Footer />
        </Stack>
    </Box>
);

export default App;
