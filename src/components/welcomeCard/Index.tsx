import "react"

import { Box } from "@mui/material"

interface WelcomeCard {
    nomeCompleto: String
}

export default function WelcomeCard( {nomeCompleto} : WelcomeCard) {
    return (
            <Box sx={{ width: '100%', height: '10%', backgroundColor: '#06283D', borderRadius: '10px', margin: '20px 10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white'}}>

                <h1 style={{ margin: '10px', fontWeight: 500, fontSize: 18 }}>Olá <span style={{ fontWeight: 700 }}>{nomeCompleto}</span>, estamos felizes em ter você conosco! 😊</h1>

            </Box>
    )
}