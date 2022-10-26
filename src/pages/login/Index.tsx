import "react";
import { Container, Box } from "@mui/material";
import Logo from "@mui/icons-material/LocalShipping"
import Title from "../../components/title/Index";
import Input from "../../components/input/Index";

export default function Login() {
    return (
        
        <Container sx={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign: 'center', minHeight: '100vh'}}>
    
            <main className="form-signin w-100 m-auto">
            <form>
                <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            
                <div className="form-floating my-1">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
                </div>
                
                <div className="form-floating my-1">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
                </div>
            
                <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
            </form>
            </main>
        
        </Container>
    )
}