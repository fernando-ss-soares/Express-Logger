import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

export default function CadastroUsuario() {

    const Register: any = {
        user_name: '',
        user_lastname: '',
        user_cpf: '',
        user_address: '',
        user_email: '',
        user_password: ''
    }

    let Navigate = useNavigate();

    const [register, setRegister] = useState<object>(Register)

    function onChange(event: any) {

        const { name, value } = event.target

        setRegister({ ...register, [name]: value })
    }

    function onSubmit(event: any) {
        event.preventDefault();

        axios.post('https://express-back-end-1.herokuapp.com/user', register)
        .then(() => {
            Navigate(`/login`)
        })
        .catch((error) => {
            Navigate(`/error/${error}\n${error.response.data.message}`)
        })

    }

    return (

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'left', minHeight: '100vh', backgroundColor: '#06283D', color: 'white' }}>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>


                <div className="container py-5 col-md-7 col-lg-8">
                    <h3 className="pb-2 border-bottom">Solicitar Pedido</h3>
                    <form className="needs-validation" onSubmit={onSubmit}>
                        <div className="row g-3">
                            
                            <h4 className="py-2">Dados Pessoais</h4>
                            
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label">Nome</label>
                                <input type="text" className="form-control" id="user_name" name="user_name" placeholder="" onChange={onChange} required/>
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label">Sobrenome</label>
                                <input type="text" className="form-control" id="user_lastname" name="user_lastname" placeholder="" onChange={onChange} required/>
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label">CPF</label>
                                <input type="number" className="form-control" id="user_cpf" name="user_cpf" onChange={onChange} required/>
                                <div className="invalid-feedback">
                                    Please enter a valid email address htmlFor shipping updates.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="user_email" name="user_email" placeholder="you@example.com" onChange={onChange} required/>
                                <div className="invalid-feedback">
                                    Please enter a valid email address htmlFor shipping updates.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Senha</label>
                                <input type="password" className="form-control" id="user_password" name="user_password" onChange={onChange} required/>
                                <div className="invalid-feedback">
                                    Please enter a valid email address htmlFor shipping updates.
                                </div>
                            </div>

                            <hr className="my-4" />

                            <h4 className="py-2">Endereço</h4>
                            
                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Endereço Completo</label>
                                <input type="text" className="form-control" id="user_endereco" name="user_address" onChange={onChange} required/>
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