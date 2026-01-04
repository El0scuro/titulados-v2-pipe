import React from 'react'
import { Box, Card, CardContent, CardActions, Button, Typography } from '@mui/material'

function Page() {
    const bull = '•' // si quieres usar este símbolo como separador

    return (
        <>
            <Box sx={{ padding: 2, textAlign: 'center' }}>
                <Typography variant="h1">Ficha de inscripción para alumnos</Typography>
                <Typography variant="body1" sx={{ marginTop: 2 }}>
                    Por favor, complete la ficha de inscripción para alumnos. Asegúrese de proporcionar toda
                    la información requerida de manera precisa y completa. Esto nos ayudará a procesar su inscripción
                    de manera eficiente y a mantener un registro adecuado de su información académica.
                </Typography>
            </Box>

            <Card sx={{ minWidth: 275, margin: 2 }}>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        be{bull}nev{bull}o{bull}lent
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                      <Button
                        variant="outlined"
                        component="a"
                        href="/auth/logout"
                        sx={{
                          width: '100%',
                          py: 1.5,
                          fontSize: '1rem',
                          borderRadius: '8px',
                          borderColor: 'divider', // Use theme divider color for border
                          color: 'text.primary', // Use theme primary text color
                          '&:hover': {
                            backgroundColor: 'action.hover', // Use theme hover color
                            borderColor: 'primary.main', // Highlight border on hover
                          },
                          transition: 'all 0.3s ease-in-out',
                        }}
                      >
                        No soy
                      </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Page
