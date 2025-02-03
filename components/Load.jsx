
import React from "react";
import { CircularProgress } from "@mui/material"; // Asegúrate de que también tienes MUI instalado

const Load = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <CircularProgress />
        </div>
    );
};

export default Load;
