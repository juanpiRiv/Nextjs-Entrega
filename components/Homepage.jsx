"use client";
import React from "react";
import { Box, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import WatchTwoToneIcon from '@mui/icons-material/WatchTwoTone';

const HomePage = () => {
    return (
        <Box sx={{ backgroundColor: "secondary", padding: 4, minHeight: "90vh", mt: 6 }}>
            <Grid container spacing={4}>
                {/* Tarjeta principal (grande) */}
                <Grid item xs={12} md={8}>
                    <Card
                        sx={{
                            position: "relative",
                            minHeight: 200,
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
                        }}
                    >
                        <Box
                            sx={{
                                backgroundImage: "url('/laptop.jpg')",
                                backgroundSize: "full",
                                backgroundPosition: "center",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 1,
                                filter: "brightness(0.7)",
                            }}
                        />
                        <CardContent
                            sx={{
                                position: "relative",
                                zIndex: 2,
                                color: "#fff",
                            }}
                        >
                            <Typography variant="overline" sx={{ color: "accent.main" }}>
                                Oferta Especial
                            </Typography>
                            <Typography variant="h4" gutterBottom>
                                Laptops
                            </Typography>
                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                Última generación de computadoras portátiles.
                            </Typography>
                            <Button variant="outlined" color="accent">
                                Explorar Colección →
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={12} md={4}>
                    <Card
                        sx={{
                            backgroundColor: "#e644e7",
                            color: "#fff",
                            minHeight: 200,
                            borderRadius: "16px",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                            filter: "brightness(0.8)"
                        }}
                    >
                        <CardContent>
                            <WatchTwoToneIcon sx={{ marginRight: 6 }} />
                            <Typography variant="h6">Relojes</Typography>
                            <Typography variant="body2">Relojes de alta calidad.</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Tarjetas pequeñas (alternadas) */}
                <Grid item xs={12} md={4}>
                    <Card
                        sx={{
                            position: "relative",
                            minHeight: 200,
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                        }}
                    >
                        <Box
                            sx={{
                                backgroundImage: "url('/smartwatch.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 1,
                                filter: "brightness(0.7)",
                            }}
                        />
                        <CardContent
                            sx={{
                                position: "relative",
                                zIndex: 2,
                                color: "#fff",
                            }}
                        >
                            <Typography variant="overline" sx={{ color: "accent.main" }}>
                                Oferta Especial
                            </Typography>
                            <Typography variant="h5">Smartwatches</Typography>
                            <Typography variant="body2" sx={{ marginBottom: 2 }}>
                                Listos para ti.
                            </Typography>
                            <Typography variant="h6" color="accent.main">
                                $195000 <s style={{ color: "#aaa" }}>$250000</s>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                                {/* Tarjetas secundarias (colores sólidos) */}
                <Grid item xs={12} md={4}>
                    <Card
                        sx={{
                            backgroundColor: "secondary.main",
                            color: "#fff",
                            minHeight: 200,
                            borderRadius: "16px",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                            filter: "brightness(0.9)",
                        }}
                    >
                        <CardContent>
                        <LocalShippingTwoToneIcon sx={{ marginRight: 6 }} />
                            <Typography variant="h6">Entrega a Todo el País</Typography>
                            <Typography variant="body2">
                                Compras mayores a $250000 son sin cargo.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card
                        sx={{
                            position: "relative",
                            minHeight: 200,
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                        }}
                    >
                        <Box
                            sx={{
                                backgroundImage: "url('/tablet.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 1,
                                filter: "brightness(0.7)",
                            }}
                        />
                        <CardContent
                            sx={{
                                position: "relative",
                                zIndex: 2,
                                color: "#fff",
                            }}
                        >
                            <Typography variant="h6">Tablets y accesorios</Typography>
                            <Typography variant="body2" sx={{ marginBottom: 2 }}>
                                Lo que buscas para tu dispositivo.
                            </Typography>
                            <Button variant="outlined" color="accent">
                                Contáctanos Ahora
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </Box>
    );
};

export default HomePage;
