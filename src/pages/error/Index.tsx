import { Link, useParams } from "react-router-dom"
import { Container } from "@mui/material"
import Logo from "../../assets/logo1.png"

export default function ErrorPage() {

    let {id} = useParams();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#06283D', color: 'white' }}>

            <Container className="form-signin w-100 m-auto gap-2" style={{ backgroundColor: '#06283D' }}>
                <form>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{textAlign: 'center'}} src={Logo} alt="" width={'25%'} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Erro Inesperado:</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} disabled={true} readOnly={true} value={id}></textarea>
                    </div>

                    <Link to={'/login'}>
                        <button className="w-100 btn btn-lg btn-primary my-1">Voltar</button>
                    </Link>
                </form>
            </Container>

        </div>
    )
}