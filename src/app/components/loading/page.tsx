'use client';
import { Typography } from "@mui/material";
export default function loading(){
    return (
          <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 md:p-24">
            <Typography variant="h6" color="text.secondary">
              Cargando información de usuario...
            </Typography>
          </main>
        );
}