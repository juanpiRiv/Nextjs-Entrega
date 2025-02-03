

import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { RemoveShoppingCart } from "@mui/icons-material";

const CartItem = ({ item, onRemove }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
            <img
                src={item.thumbnail || "https://via.placeholder.com/150"}
                alt={item.title}
                style={{ width: 50, height: 50, objectFit: "cover", marginRight: 10 }}
            />
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body1" className="font-bold tracking-tighter">{item.title}</Typography>
                <Typography variant="body2" className="font-bold tracking-tighter" sx={{ color: "text" }}>
                    ${item.price} x {item.quantity}
                </Typography>
            </Box>
            <IconButton color="error" onClick={() => onRemove(item.id)}>
                <RemoveShoppingCart />
            </IconButton>
        </Box>
    );
};

export default CartItem;