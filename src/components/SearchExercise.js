import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";

import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercise = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([]);

    // Fetching categories as soon as page loads
    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData(
                "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
                exerciseOptions
            );
            setBodyParts(["all", ...bodyPartsData]);
        };
        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData(
                "https://exercisedb.p.rapidapi.com/exercises",
                exerciseOptions
            );
            // Providing a more accurate search result
            const searchedExercises = exercisesData.filter(
                (item) =>
                    item.name.toLowerCase().includes(search) ||
                    item.target.toLowerCase().includes(search) ||
                    item.equipment.toLowerCase().includes(search) ||
                    item.bodyPart.toLowerCase().includes(search)
            );

            setSearch("");
            setExercises(searchedExercises);
        }
    };

    return (
        <Stack alignItems="center" mt="100px" justifyContent="center" p="20px">
            <Typography
                color="#2B2D42"
                fontWeight={700}
                sx={{
                    fontSize: { lg: "44px", xs: "30px" },
                }}
                mb="50px"
                textAlign="center"
            >
                Awsome Exercises You <br /> Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: "700",
                            border: "none",
                            borderRadius: "4px",
                        },
                        width: { lg: "800px", xs: "350px" },
                        backgroundColor: "#fff",
                        borderRadius: "40px",
                    }}
                    height="76px"
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value.toLocaleLowerCase())
                    }
                    placeholder="Search Excercises"
                    type="text"
                />
                <Button
                    className="search-btn"
                    sx={{
                        bgcolor: "#D90429",
                        color: "#fff",
                        textTransform: "none",
                        width: { lg: "175px", xs: "80px" },
                        fontSize: { lg: "20px", xs: "14px" },
                        height: "56px",
                        position: "absolute",
                        right: "0",
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
                <HorizontalScrollbar
                    data={bodyParts}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                    bodyParts
                />
            </Box>
        </Stack>
    );
};

export default SearchExercise;
