import { useNavigate } from "react-router-dom"
import Logo from "../../assets/logo1.png"
import { Container } from "@mui/material"
import { useState } from "react"

export default function CadastroUsuario() {

    const Register: any = {
        email: '',
        password: ''
    }

    let Navigate = useNavigate();

    const [register, setRegister] = useState<any>(Register)

    function onChange(event: any) {

        const { name, value } = event.target

        setRegister({ ...register, [name]: value })
    }

    function onSubmit(event: any) {
        event.preventDefault();
    }

    return (

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: '100vh', backgroundColor: '#06283D', color: 'white' }}>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>


                <div className="container py-5 col-md-7 col-lg-8">
                    <h3 className="pb-2 border-bottom">Solicitar Pedido</h3>
                    <form className="needs-validation" >
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label">Nome Produto</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label">Status</label>
                                <input type="text" className="form-control" id="lastName" placeholder="" value={"Aguardando Recebimento"} disabled readOnly />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Descrição Produto</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={2}></textarea>
                            </div>

                            <div className="col-12">
                                <label htmlFor="username" className="form-label">Código do Pedido</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text">@</span>
                                    <input type="text" className="form-control" id="username" placeholder="P00-000000000" disabled readOnly />
                                    <div className="invalid-feedback">
                                        Your username is required.
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Endereço</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                <div className="invalid-feedback">
                                    Please enter a valid email address htmlFor shipping updates.
                                </div>
                            </div>

                        </div>

                        <hr className="my-4" />

                        <button className="w-100 btn btn-primary btn-lg" type="submit">Cadastrar</button>
                    </form>
                </div>


            </div>

        </div>
    )
}