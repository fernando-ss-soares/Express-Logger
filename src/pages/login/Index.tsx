import { useNavigate } from "react-router-dom"
import Logo from "../../assets/logo1.png"
import { Container } from "@mui/material"
import { useState } from "react"

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

    function onSubmit (event : any ) {
        event.preventDefault();
        console.log("teste")

        Navigate('/panel')

    }

    return (
        
        <div style={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign: 'center', minHeight: '100vh', backgroundColor: '#06283D', color: 'white'}}>
    
            <Container className="form-signin w-100 m-auto" style={{ backgroundColor: '#06283D' }}>
            <form onSubmit={onSubmit} >
                
                <img src={Logo} alt="" width={'50%'}/>
                
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
                <button className="w-100 btn btn-lg btn-primary" type="submit">Acessar</button>
                <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
            </form>
            </Container>
        
        </div>
    )
}