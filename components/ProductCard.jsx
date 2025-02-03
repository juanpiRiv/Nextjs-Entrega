
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';


const ProductCard = ({ product }) => {
    if (!product) return null;

    return (
        
            <Link href={`/products/${product.id}`} passHref>
                <Card
                    sx={{
                        width: '300px',
                        height: 'auto',
                        cursor: 'pointer',
                        bgcolor: 'rgba(128, 128, 128, 0.3)',
                        backdropFilter: 'blur(45px)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '10px',
                        gap: '10px',
                        alignSelf: 'center',
                        justifyContent: 'space-between',
                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 6px 30px rgba(0, 0, 0, 0.25)',
                        },
                        position: 'relative', // Asegura que se posicione correctamente dentro del contenedor
                    }}
                >
                    <CardMedia
                        component="img"
                        image={product.thumbnail || 'https://via.placeholder.com/300x200'}
                        alt={product.title || 'Producto'}
                        sx={{
                            height: '200px',
                            objectFit: 'cover',
                            borderRadius: '8px', // Opcional: añade un pequeño borde redondeado
                        }}
                    />
                    <CardContent
                        sx={{
                            padding: '16px',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: 1,
                            gap: '8px',
                        }}
                    >
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                color: 'text',
                                fontWeight: 'bold',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                            }}
                        >
                            {product.title || 'Sin título'}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text"
                            sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 3,
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
