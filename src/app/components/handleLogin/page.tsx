'use client';
import React, { useState, useEffect } from "react";
import __url from "../../../lib/const"; // Assuming this path is correct for your project
import { useAccessToken } from '../../context/TokenContext'; // Assuming this path is correct
import { useUser } from "@auth0/nextjs-auth0";
import axios from "axios";
import Alerta from "../alerta/alert";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default async function handleLogin(token: string, router: AppRouterInstance) {
    
    
    try {
      // Make an API call to validate the user's role, including the access token
      const response = await axios.get(`${__url}/user/validate`, {
      headers: { Authorization: `Bearer ${token}` }
      });

      // Redirect based on the user's role
      let lista: string[] = ["profesor", "estudiante", "jefatura", "secretario"];
      for (let i = 0; i < lista.length; i++) {
        if (response.data?.user === lista[i]) {
        router.push(`/${lista[i]}`); // Redirect to profesores dashboard
      }
      }
      if (response.data?.user === 'profesor') {
        router.push("/profesor"); // Redirect to profesores dashboard
      } else if (response.data?.user === 'estudiante') {
        router.push("/estudiante"); // Redirect to student dashboard
      } else if (response.data?.user === 'jefatura') {
        router.push("/jefatura"); // Redirect to jefatura dashboard
      } else if (response.data?.user === 'secretario') {
        router.push("/secretario"); // Redirect to secretary dashboard
      } 

      
    } catch (error:any) {
      // Log any errors that occur during the login process
      router.push('/no_registrado');
      if (error.response?.status === 404) {
        const rol = error.response.data?.user;
        alertaLogin(token, rol);
      }
      
      // Optionally, display an error message to the user
      // For example, using a Snackbar or a custom modal
    }
  }
export function alertaLogin(token: string, rol:any){
  const [alerta, setAlerta] = useState<{
    type: 'info' | 'error' | 'success' | 'warning';
    message: React.ReactNode;
    } | null>(null);
  setAlerta({
        type: 'warning',
        message:(
          <>
             <b>{rol}</b> no registrado/a en el sistema.<br/>
            Contactar al académico Sergio Gonzalez al correo:<br/>
            <a href="mailto:SERGIO.GONZALEZ@UV.CL?subject=Problema%20de%20acceso&body=No%20puedo%20ingresar%20al%20sistema">
              SERGIO.GONZALEZ@UV.CL
            </a>
          </> 
        )
    });
}