import "react"
import { Box } from "@mui/material"
import { Link } from "react-router-dom"
import CardAlert from "../card/Index";

export default function PanelCard() {

    return (
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: '10px',}}>

                <Link style={{color: '#FFFFFF', textDecoration: 'none'}} to={'/request'}>
                    <CardAlert title={'Total de Pacotes Recebidos'} number={'65'} backgroundColor1={'#DDF3F5'} backgroundColor2={'#8ecfd5'} textColor={'#1b7c7c'}/>
                </Link>

                <Link style={{color: '#FFFFFF', textDecoration: 'none'}} to={'/request'}>
                    <CardAlert title={'Total de Pedidos Enviados'} number={'65'} backgroundColor1={'#CCF6C8'} backgroundColor2={'#8ced83'} textColor={'#407c1b'}/>
                </Link>

                <Link style={{color: '#FFFFFF', textDecoration: 'none'}} to={'/request'}>
                    <CardAlert title={'Pagamentos Pendentes'} number={'65'} backgroundColor1={'#F8C4B4'} backgroundColor2={'#FF8787'} textColor={'#990909'}/>
                </Link>

                <Link style={{color: '#FFFFFF', textDecoration: 'none'}} to={'/request'}>
                    <CardAlert title={'Aviso de Venda de Pacote'} number={'65'} backgroundColor1={'#F69E7B'} backgroundColor2={'#ff7944'} textColor={'#935719'}/>
                </Link>

                {/*<CardAlert title={'Aviso de Venda de Pacote'} number={'65'} backgroundColor1={'#FAFCC2'} backgroundColor2={'#f0f73c'} textColor={'#78891c'}/>*/}

            </Box>
    )
}