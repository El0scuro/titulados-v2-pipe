'use client';
import React, { useState, useEffect } from "react";
import { Box, Button, Card, Grid, Paper, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import __url from "../lib/const"; // Assuming this path is correct for your project
import { useAccessToken } from './context/TokenContext'; // Assuming this path is correct
import { useUser } from "@auth0/nextjs-auth0";
import handleLogin from "./components/handleLogin/page";
import { useRouter } from "next/navigation";

/**
 * Home Component
 *
 * This component serves as a user confirmation page after authentication.
 * It displays the user's name and email, and provides options to confirm
 * identity or log out.
 *
 * It is styled to align with Material-UI v7 aesthetics, ensuring content
 * centering, responsive design, and enhanced visual elements.
 *
 * @returns {JSX.Element} The Home component.
 */
export default function Home() {
  
  
  

  // Styled component for generic Paper items (not directly used in this specific layout,
  // but kept as it was in the original snippet, useful for other parts of your app).
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  // Auth0 hook to get user information and loading state
  const { user, isLoading } = useUser();
  // Custom hook to get the access token
  const token = useAccessToken();
  // Next.js router hook for navigation
  const router = useRouter();
  // Display a loading indicator while user data is being fetched
  
    
  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 md:p-24">
        <Typography variant="h6" color="text.secondary">
          Cargando información de usuario...
        </Typography>
      </main>
    );
  }
  if(!isLoading && token){
    handleLogin(token, router);
  }
  
  /**
   * Handles the login confirmation.
   * It validates the user's role by making an API call and
   * redirects them based on their role (admin or student).
   */
  
  
  
}
