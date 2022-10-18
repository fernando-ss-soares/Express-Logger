import "react";
import { Box } from "@mui/material"

import Menu from "../../components/menu/Index";

export default function Painel() {

    const nomeCompleto = "Fernando Soares"

    return (
            <div style={{ display: 'flex', flexDirection: 'row'}}>
                <Menu/>
                 <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                     <div id="panel" style={{ width: '80%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>

                         <Box sx={{ width: '100%', height: '20%', backgroundColor: '#EEEEEE', borderRadius: '8px', margin: '20px 10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

                             <h1 style={{ margin: '10px', fontWeight: 500 }}>Olá <span style={{ fontWeight: 700, color: '#06283D', }}>{nomeCompleto}</span>, estamos felizes em ter você conosco! 😊</h1>

                        </Box>

                     </div>
                 </div>
            </div>
            )
}