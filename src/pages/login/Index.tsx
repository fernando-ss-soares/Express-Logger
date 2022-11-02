import { useNavigate, Link } from "react-router-dom"
import Logo from "../../assets/logo1.png"
import { Container } from "@mui/material"
import { useState } from "react"
import axios from "axios"

export default function Login() {

    const Login : any = {
        email: '',
        password: ''
    }

    let Navigate = useNavigate();
    
    const [login, setlogin] = useState<any>(Login)

    function onChange (event : any) {

        const { name, value } = event.target
        
        setlogin({... login, [name]:value })
    }

    function onSubmit (event : any) {
        event.preventDefault();
        Navigate('/panel')

    }

    return (
        
        <div style={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign: 'center', minHeight: '100vh', backgroundColor: '#06283D', color: 'white'}}>
    
            <Container className="form-signin w-100 m-auto gap-2" style={{ backgroundColor: '#06283D' }}>
            <form onSubmit={onSubmit}>
                
                <img src={Logo} alt="" width={'25%'}/>
                
                <h1 className="h3 mb-3 fw-normal">Por favor faça o login</h1>
            
                <div className="form-floating my-1">
                <input name="email" type="email" onChange={onChange} className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label style={{ color: 'black' }} htmlFor="floatingInput">Email address</label>
                </div>
                
                <div className="form-floating my-1">
                <input name="password" type="password" onChange={onChange} className="form-control" id="floatingPassword" placeholder="Password"/>
                <label style={{ color: 'black' }} htmlFor="floatingPassword">Password</label>
                </div>
            
                <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"/> Lembrar me
                </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary my-1" type="submit">Acessar</button>
                <Link to={'/register'}>
                    <button className="w-100 btn btn-lg btn-primary my-1">Cadastrar-se</button>
                </Link>
            </form>
            </Container>
        
        </div>
    )
}