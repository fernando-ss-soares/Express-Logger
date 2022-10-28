import { useNavigate, Link } from "react-router-dom"
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

        Navigate('/panel')
    }

    return (

        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#06283D', color: 'white' }}>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>


                <div className="container py-5 col-md-7 col-lg-8">
                    <h3 className="pb-2 border-bottom">Cadastro de Cliente</h3>
                    <form className="needs-validation" onSubmit={onSubmit}>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label">Nome</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label">Sobrenome</label>
                                <input type="text" className="form-control" id="lastName" placeholder=""/>
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="username" className="form-label">CPF</label>
                                <div className="input-group has-validation">
                                    <input type="text" className="form-control" id="username" placeholder="000.000.000-00"  />
                                    <div className="invalid-feedback">
                                        Your username is required.
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Endereço</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" />
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email</label>
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