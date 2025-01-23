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
            <Card sx={{ maxWidth: 345, cursor: 'pointer' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.thumbnail || 'https://via.placeholder.com/150'}  // URL de la imagen o placeholder
                    alt={product.title || 'Producto'}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title || 'Sin título'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                        {product.description || 'Descripción no disponible'}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" color="primary">
                            ${product.price || '0.00'}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Link>
    );
};

export default ProductCard;
