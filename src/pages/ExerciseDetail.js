import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Determine the id of current exercise to fetch additional data
import { Box } from "@mui/material";

import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExersices] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);

    const { id } = useParams(); // Access number ID in the URL

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
            const youtubeSearchUrl =
                "https://youtube-search-and-download.p.rapidapi.com";

            const exerciseDetailData = await fetchData(
                `${exerciseDbUrl}/exercises/exercise/${id}`,
                exerciseOptions
            );
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(
                `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
                youtubeOptions
            );
            setExerciseVideos(exerciseVideosData.contents);

            const targetMuscleExercisesData = await fetchData(
                `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
                exerciseOptions
            );
            setTargetMuscleExersices(targetMuscleExercisesData);

            const equipmentExercisesData = await fetchData(
                `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
                exerciseOptions
            );
            setEquipmentExercises(equipmentExercisesData);
        };
        fetchExercisesData();
    }, [id]);
    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos
                exerciseVideos={exerciseVideos}
                name={exerciseDetail.name}
            />
            <SimilarExercises
                targetMuscleExercises={targetMuscleExercises}
                equipmentExercises={equipmentExercises}
            />
        </Box>
    );
};

export default ExerciseDetail;
