"use client";

import React, { useState } from "react";
import { Container, Box, Typography, Grid, TextField, Button, IconButton, Snackbar, Alert } from "@mui/material";
import { Email, Phone, AccessTime, Facebook, Instagram, LinkedIn, GitHub, WhatsApp } from "@mui/icons-material";
import Load from "@/components/Load"; // Importa el componente Load

export default function ContactPage() {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        mensaje: ""
    });

    const [isLoading, setIsLoading] = useState(false); // El estado de carga, por ejemplo, si estás esperando una API

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Guardar los datos en el localStorage
        localStorage.setItem("contactData", JSON.stringify(formData));

        setSnackbarOpen(true);

        setFormData({
            nombre: "",
            correo: "",
            mensaje: ""
        });
    };

    // Mostrar el componente Load si isLoading es true
    if (isLoading) return <Load />;

    return (
        <Box
            sx={{
                minHeight: "100vh",
                background: "background.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                py: 5,
            }}
        >
            <Container maxWidth="md">
                <Box
                    sx={{
                        backgroundColor: "background.main",
                        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
                        borderRadius: 3,
                        p: 4,
                    }}
                >
                    <Typography variant="h4" className="font-bold tracking-tighter" textAlign="center" fontWeight="bold" gutterBottom>
                        Contáctanos
                    </Typography>

                    <Grid container spacing={3} sx={{ mt: 2 }}>
                        <Grid item xs={12} md={4}>
                            <Box display="flex" alignItems="center" gap={1}>
                                <Email color="primary" />
                                <Typography variant="subtitle1" className="font-bold tracking-tighter">contacto@ejemplo.com</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box display="flex" alignItems="center" gap={1}>
                                <Phone color="secondary" />
                                <Typography variant="subtitle1" className="font-bold tracking-tighter">+54 9 341 123 4567</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box display="flex" alignItems="center" gap={1}>
                                <AccessTime color="accent" />
                                <Typography variant="subtitle1" className="font-bold tracking-tighter">Lun-Vie: 9:00 - 18:00</Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box component="form" sx={{ mt: 4 }} onSubmit={handleSubmit}>
                        <TextField
                            label="Nombre"
                            variant="outlined"
                            fullWidth
                            required
                            sx={{
                                mb: 2,
                                "& .MuiInputLabel-root": {
                                    color: "white", 
                                },
                                "& .MuiInputBase-root": {
                                    color: "white", 
                                },
                            }}
                            value={formData.nombre}
                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        />
                        <TextField
                            label="Correo Electrónico"
                            variant="outlined"
                            fullWidth
                            required
                            sx={{
                                mb: 2,
                                "& .MuiInputLabel-root": {
                                    color: "white", 
                                },
                                "& .MuiInputBase-root": {
                                    color: "white", 
                                },
                            }}
                            value={formData.correo}
                            onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                        />
                        <TextField
                            label="Mensaje"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            required
                            sx={{
                                mb: 3,
                                "& .MuiInputLabel-root": {
                                    color: "white",
                                },
                                "& .MuiInputBase-root": {
                                    color: "white", 
                                },
                            }}
                            value={formData.mensaje}
                            onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        />
                        <Button variant="outlined" className="ont-bold tracking-tighter" color="primary" size="large" fullWidth type="submit">
                            Enviar
                        </Button>
                    </Box>

                    <Box display="flex" justifyContent="center" mt={3} sx={{ gap: 2 }}>
                        <IconButton href="https://www.instagram.com" color="primary" target="_blank" rel="noopener noreferrer" sx={{ "&:hover": { color: "#E1306C" } }}>
                            <Instagram fontSize="large" />
                        </IconButton>
                        <IconButton href="https://x.com" color="primary" target="_blank" rel="noopener noreferrer" sx={{ "&:hover": { color: "#1DA1F2" } }}>
                            <GitHub fontSize="large" />
                        </IconButton>
                        <IconButton href="https://www.facebook.com" color="primary" target="_blank" rel="noopener noreferrer" sx={{ "&:hover": { color: "#1877F2" } }}>
                            <Facebook fontSize="large" />
                        </IconButton>
                        <IconButton href="https://www.linkedin.com" color="primary" target="_blank" rel="noopener noreferrer" sx={{ "&:hover": { color: "#0077B5" } }}>
                            <LinkedIn fontSize="large" />
                        </IconButton>
                        <IconButton href="https://wa.me/3411234567" color="primary" target="_blank" rel="noopener noreferrer" sx={{ "&:hover": { color: "#25D366" } }}>
                            <WhatsApp fontSize="large" />
                        </IconButton>
                    </Box>

                    <Snackbar
                        open={snackbarOpen}
                        autoHideDuration={3000}
                        onClose={handleSnackbarClose}
                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    >
                        <Alert
                            onClose={handleSnackbarClose}
                            severity="success"
                            sx={{
                                width: "100%",
                                backgroundColor: "primary.main",
                                color: "background.default",
                                borderRadius: 3,
                                fontWeight: "bold",
                            }}
                        >
                            ¡Mensaje enviado con éxito!
                        </Alert>
                    </Snackbar>
                </Box>
            </Container>
        </Box>
    );
}
