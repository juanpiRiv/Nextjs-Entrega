import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#7bc4ee", // Color principal
        },
        secondary: {
            main: "#4c128c", // Color secundario
        },
        text: {
            primary: "#e7f6fc", // Color para texto
        },
        background: {
            default: "#04161e", // Fondo general
        },
        accent: {
            main: "#e644e7", // Color adicional
        },
    },
});

export default theme;