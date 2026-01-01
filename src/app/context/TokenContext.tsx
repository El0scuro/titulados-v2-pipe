'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';


const TokenContext = createContext<string | null>(null);

export const useAccessToken = () => useContext(TokenContext);

console.log("WHAT'S UPPPPPPPPPPPP")

export const TokenProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
  console.log("ENTRÉ AL USEEFFECT"); // <-- primer log
  axios.get('/api/users')
    .then(res => {
      console.log("RESPUESTA DEL ROUTE:", res.data);
      setToken(res.data.accessToken);
    })
    .catch(err => {
      console.error("ERROR EN AXIOS:", err);
      setToken(null);
    });
}, []);
  console.log("TOKENCONTEXT",token)
  return (
    <TokenContext.Provider value={token}>
      
      {children}
    </TokenContext.Provider>
  );
};
