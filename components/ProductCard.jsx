import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link'; // Importar Link para redirigir a la página de detalle del producto

const ProductCard = ({ product }) => {
    if (!product) return null;

    return (
        <Link href={`/products/${product.id}`} passHref>
            <Card
                sx={{
                    width: '300px', // Tamaño uniforme en ancho
                    height: 'auto', // Altura dinámica para acomodar contenido
                    cursor: 'pointer',
                    bgcolor: 'rgba(128, 128, 128, 0.8)', // Fondo gris semitransparente
                    backdropFilter: 'blur(15px)', // Mayor desenfoque
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)', // Sombra moderna
                    borderRadius: '16px', // Bordes redondeados
                    overflow: 'hidden', // Evitar que contenido se desborde fuera de la tarjeta
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between', // Asegurar equilibrio en el diseño
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.05)', // Efecto de aumento en hover
                        boxShadow: '0 6px 30px rgba(0, 0, 0, 0.25)', // Sombra más intensa en hover
                    },
                }}
            >
                <CardMedia
                    component="img"
                    image={product.thumbnail || 'https://via.placeholder.com/300x200'} // Imagen o placeholder
                    alt={product.title || 'Producto'}
                    sx={{
                        height: '200px', // Altura fija para imágenes
                        objectFit: 'cover', // Ajustar imagen al contenedor
                    }}
                />
                <CardContent
                    sx={{
                        padding: '16px',
                        textAlign: 'center', // Centrar el contenido
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1, // Permitir que el contenido crezca para llenar espacio
                        gap: '8px', // Separación entre elementos
                    }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            color: 'text',
                            fontWeight: 'bold',
                            whiteSpace: 'nowrap', // Evitar que el título se desborde
                            textOverflow: 'ellipsis',
                            overflow: 'hidden', // Si es muy largo, mostrar "..."
                        }}
                    >
                        {product.title || 'Sin título'}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text"
                        sx={{
                            overflow: 'hidden', // Cortar texto si es muy largo
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3, // Limitar a 3 líneas
                        }}
                    >
                        {product.description || 'Descripción no disponible'}
                    </Typography>
                    <Typography
                        variant="h6"
                        color="text"
                        sx={{
                            fontWeight: 'bold',
                        }}
                    >
                        ${product.price || '0.00'}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default ProductCard;
