import React from "react";
import { Container, Button } from "@mui/material"
import IconDash from "@mui/icons-material/dashboard"
import IconSetting from "@mui/icons-material/ManageAccounts"
import IconPackages from "@mui/icons-material/Inventory"
import Logo from "../../assets/logo.png"

export default function MenuTop() {

    return (
            <Container disableGutters={false} fixed={false} sx={{backgroundColor:'#06283D', margin: 0, width:'180px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'left', alignContent: 'left',  alignItems: 'left', alignSelf: 'flex-start', color: 'white'}}>

                <img src={Logo} style={{width:"100%", margin: "20px 0px"}} alt=""/>

                <Button sx={{color: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <IconDash/>
                    <span style={{ margin: '0 5px' }}>Painel</span>
                </Button>

                <Button sx={{color: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <IconPackages/>
                    <span style={{ margin: '0 5px' }}>Pedido</span>
                </Button>

                <Button sx={{color: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <IconSetting/>
                    <span style={{ margin: '0 5px' }}>Perfil</span>
                </Button>

            </Container>
            )
}