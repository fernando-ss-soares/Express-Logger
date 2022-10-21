import React from "react";
import { Link } from "react-router-dom"
import { Container, Button, Tooltip, Divider} from "@mui/material"
import IconDash from "@mui/icons-material/Dashboard"
import IconSetting from "@mui/icons-material/ManageAccounts"
import IconPackages from "@mui/icons-material/Unarchive"
import IconLogout from "@mui/icons-material/Logout"
import Logo from "@mui/icons-material/LocalShipping"

export default function MenuTop() {

    return (
            <Container disableGutters={false} fixed={false} sx={{backgroundColor:'#06283D', margin: 0, width:'80px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'left',  alignItems: 'left', alignSelf: 'flex-start', color: 'white'}}>
                
                <div>
                    <Logo sx={{width:"100%", margin: "20px 0px"}}/>

                    <Divider sx={{ borderColor: 'white', color: 'white', height: '1', width: '100%' }}>

                    </Divider>

                    <Tooltip sx={{ backgroundColor: 'black' }} title="Painel" placement="right">
                        <Link to={'/panel'} style={{color: '#FFFFFF', textDecoration: 'none', margin: '10px 0', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <Button sx={{color: 'white'}}>
                                <IconDash/>
                            </Button>
                        </Link>
                    </Tooltip>


                    <Tooltip title="Pacotes" placement="right">
                        <Link to={'/request'} style={{color: '#FFFFFF', textDecoration: 'none', margin: '10px 0', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <Button sx={{color: 'white'}}>
                                <IconPackages/>
                            </Button>
                        </Link>
                    </Tooltip>

                </div>

                <div>

                    <Divider sx={{ borderColor: 'white', color: 'white', height: '1', width: '100%' }}>

                    </Divider>
                    
                    <Tooltip title="Perfil" placement="right">
                        <Link to={'/profile'} style={{color: '#FFFFFF', textDecoration: 'none', margin: '10px 0', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <Button sx={{color: 'white'}}>
                                <IconSetting/>
                            </Button>
                        </Link>
                    </Tooltip>

                    <Tooltip title="Perfil" placement="right">
                        <Link to={'/'} style={{color: '#FFFFFF', textDecoration: 'none', margin: '10px 0', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <Button sx={{color: 'white'}}>
                                <IconLogout/>
                            </Button>
                        </Link>
                    </Tooltip>
                </div>
                


            </Container>
            )
}