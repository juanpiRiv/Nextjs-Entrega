import React from "react";
import { Box, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import WatchTwoToneIcon from '@mui/icons-material/WatchTwoTone';
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
    return (
        <Box sx={{ backgroundColor: "background.default", padding: 8, minHeight: "60vh", mt: 2 }}>
            <Grid container spacing={4}>

                {/* Tarjeta principal (Laptops) */}
                <Grid item xs={12} md={8}>
                    <Card sx={{ position: "relative", minHeight: 200, borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 15px rgba(0,0,0,0.5)" }}>
                        {/* Imagen de fondo con next/image */}
                        <Box sx={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}>
                            <Image
                                src="/laptop2.jpg"
                                alt="Laptops"
                                fill
                                quality={100}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                            />
                        </Box>

                        <CardContent sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 2, color: "#fff" }}>
                            <Typography variant="overline" sx={{ color: "accent.main", fontWeight: "bold" }}>
                                Oferta Especial
                            </Typography>
                            <Typography variant="h4" fontWeight="bold" gutterBottom>
                                Laptops
                            </Typography>
                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                Última generación de computadoras portátiles.
                            </Typography>
                            <Button component={Link} href="/products" variant="outlined" color="accent">
                                Explorar Colección →
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Tarjeta de Relojes */}
                <Grid item xs={12} md={4}>
                    <Card sx={{ backgroundColor: "#e644e7", color: "#fff", minHeight: 200, borderRadius: "16px", boxShadow: "0 4px 10px rgba(0,0,0,0.3)", filter: "brightness(0.8)" }}>
                        <CardContent>
                            <WatchTwoToneIcon sx={{ marginRight: 6, fontSize: 40 }} />
                            <Typography variant="h6" fontWeight="bold">Relojes</Typography>
                            <Typography variant="body2">Relojes de alta calidad.</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Tarjetas con imágenes */}
                {[
                    { img: "/smartwatch.jpg", title: "Smartwatches", desc: "Listos para ti.", price: "$195000", oldPrice: "$250000" },
                    { img: "/tablet.jpg", title: "Tablets y accesorios", desc: "Lo que buscas para tu dispositivo.", link: "/contact", btnText: "Contáctanos Ahora" }
                ].map(({ img, title, desc, price, oldPrice, link, btnText }, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card sx={{ position: "relative", minHeight: 200, borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 10px rgba(0,0,0,0.3)" }}>
                            {/* Imagen con next/image */}
                            <Box sx={{ width: "100%", height: 200, position: "relative" }}>
                                <Image
                                    src={img}
                                    alt={title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 30vw"
                                    style={{ objectFit: "cover", filter: "brightness(0.7)" }}
                                />
                            </Box>

                            <CardContent sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 2, color: "#fff" }}>
                                <Typography variant="overline" sx={{ color: "accent.main", fontWeight: "bold" }}>
                                    Oferta Especial
                                </Typography>
                                <Typography variant="h5" fontWeight="bold">{title}</Typography>
                                <Typography variant="body2" sx={{ marginBottom: 2 }}>{desc}</Typography>
                                {price && (
                                    <Typography variant="h6" fontWeight="bold" sx={{ color: "accent.main" }}>
                                        {price} <s style={{ color: "#aaa" }}>{oldPrice}</s>
                                    </Typography>
                                )}
                                {link && btnText && (
                                    <Button component={Link} href={link} variant="outlined" color="accent">
                                        {btnText}
                                    </Button>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}

                {/* Tarjeta de Entrega a Todo el País */}
                <Grid item xs={12} md={4}>
                    <Card sx={{ backgroundColor: "secondary.main", color: "#fff", minHeight: 200, borderRadius: "16px", boxShadow: "0 4px 10px rgba(0,0,0,0.3)", filter: "brightness(0.9)" }}>
                        <CardContent>
                            <LocalShippingTwoToneIcon sx={{ marginRight: 6, fontSize: 40 }} />
                            <Typography variant="h6" fontWeight="bold">Entrega a Todo el País</Typography>
                            <Typography variant="body2">
                                Compras mayores a $250000 son sin cargo.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomePage;
