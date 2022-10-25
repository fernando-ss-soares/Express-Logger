import "react";
import { Container, Box } from "@mui/material";
import Logo from "@mui/icons-material/LocalShipping"
import Title from "../../components/title/Index";
import Input from "../../components/input/Index";

export default function Login() {
    return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', minHeight: '100vh', backgroundColor: '#2FA4FF'}}>
                <Container sx={{ backgroundColor: 'white' }}>
                    
                    <Box sx={{ padding: 1 }}>
                        <Logo sx={{width:"100%", height:"100px", margin: "20px 0px"}}/>
                    </Box>
                    
                    <Box sx={{ padding: 5 }}>
                        <Title title={'Login'} subtitle={'Acesse sua Conta'}/>
                    </Box>
                    
                    <Box sx={{ padding: 5, display: 'flex', flexDirection: 'column', gap: 5 }}>
                        <Input label={'Usuário ou E-mail'} />
                        <Input label={'Senha'} />
                    </Box>

                </Container>

            </div>
    )
}