import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "@mui/lab";
import { Work, School, TrendingUp, Forward } from "@mui/icons-material";
import { MarqueeReviews } from "@/components/ui/MarqueeReviews" // Importamos el Marquee de reseñas

export default function SobreNosotros() {
    return (
        <Container maxWidth="md" sx={{ py: 5 }}>
            <Typography variant="h5" align="center" gutterBottom fontWeight="bold" className="text-text tracking-tighter">
                Sobre Nosotros
            </Typography>

            <Timeline position="alternate" className="md:flex md:flex-col">
                {/* Primer Hito */}
                <TimelineItem className="flex flex-col md:flex-row">
                    <TimelineSeparator>
                        <TimelineDot className="bg-primary">
                            <School className="text-white" />
                        </TimelineDot>
                        <TimelineConnector className="bg-gray-500 hidden md:block" />
                    </TimelineSeparator>
                    <TimelineContent className="w-full md:w-auto">
                        <Card className="bg-background bg-opacity-80 shadow-lg transition duration-300 hover:shadow-xl p-4">
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold" className="text-primary tracking-tighter">
                                    Nuestro Inicio
                                </Typography>
                                <Typography variant="body1" className="text-gray-200 tracking-tighter">
                                    En 2010 comenzamos con una pequeña idea de negocio en el sector de tecnología, con el objetivo de ofrecer soluciones innovadoras.
                                </Typography>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>

                {/* Segundo Hito */}
                <TimelineItem className="flex flex-col md:flex-row">
                    <TimelineSeparator>
                        <TimelineDot className="bg-secondary">
                            <Work className="text-white" />
                        </TimelineDot>
                        <TimelineConnector className="bg-gray-500 hidden md:block" />
                    </TimelineSeparator>
                    <TimelineContent className="w-full md:w-auto">
                        <Card className="bg-background bg-opacity-80 shadow-lg transition duration-300 hover:shadow-xl p-4">
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold" className="text-secondary tracking-tighter">
                                    Expansión
                                </Typography>
                                <Typography variant="body1" className="text-gray-200 tracking-tighter">
                                    En 2015 expandimos nuestras operaciones a nivel nacional, consolidándonos como una de las empresas líderes en el mercado.
                                </Typography>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>

                {/* Tercer Hito */}
                <TimelineItem className="flex flex-col md:flex-row">
                    <TimelineSeparator>
                        <TimelineDot className="bg-accent">
                            <TrendingUp className="text-white" />
                        </TimelineDot>
                        <TimelineConnector className="bg-gray-500 hidden md:block" />
                    </TimelineSeparator>
                    <TimelineContent className="w-full md:w-auto">
                        <Card className="bg-background bg-opacity-80 shadow-lg transition duration-300 hover:shadow-xl p-4">
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold" className="text-accent tracking-tighter">
                                    Innovación Continua
                                </Typography>
                                <Typography variant="body1" className="text-gray-200 tracking-tighter">
                                    Hoy en día seguimos creciendo, siempre a la vanguardia de la tecnología, y con el firme compromiso de ofrecer productos de calidad.
                                </Typography>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>

                {/* Cuarto Hito */}
                <TimelineItem className="flex flex-col md:flex-row">
                    <TimelineSeparator>
                        <TimelineDot className="bg-green-500">
                            <Forward className="text-white" />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent className="w-full md:w-auto">
                        <Card className="bg-background bg-opacity-80 shadow-lg transition duration-300 hover:shadow-xl p-4">
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold" className="text-green-500 tracking-tighter">
                                    El Futuro
                                </Typography>
                                <Typography variant="body1" className="text-gray-200 tracking-tighter">
                                    Con nuevas metas para el futuro, nos comprometemos a seguir ofreciendo soluciones que mejoren la vida de nuestros clientes.
                                </Typography>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>

            {/* Sección de Reseñas con Marquee */}
            <div className="mt-12">
                <Typography variant="h6" align="center" fontWeight="bold" className="text-text tracking-tighter mb-4">
                    Lo que dicen nuestros clientes
                </Typography>
                <MarqueeReviews />
            </div>
        </Container>
    );
}
