import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "next/link";

export default function CategoryMenu({ categories }) {
    return (
        <Stack direction="row" spacing={2}>
            {categories.map((category) => (
                <Link key={category} href={`/products/${category}`} passHref>
                    <Button variant="outlined">{category}</Button>
                </Link>
            ))}
        </Stack>
    );
}