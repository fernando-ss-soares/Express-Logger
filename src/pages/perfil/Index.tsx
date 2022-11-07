import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "../../components/menu/Index";

export default function Perfil() {

    const userLoad = {
        user_name: "",
        user_lastname: "",
        user_cpf: "",
        user_id: "",
        user_email: "",
        user_address: "",
    }

    const [viewUser, setViewUser] = useState(userLoad)

    const userEdit = {
        user_name: viewUser.user_name,
        user_lastname: viewUser.user_name,
        user_cpf: viewUser.user_name,
        user_id: viewUser.user_name,
        user_email: viewUser.user_name,
        user_address: viewUser.user_name,
    }

    const [editUser, setEditUser] = useState(userEdit)

    useEffect(() => {

        const params: any = {
            user_email: localStorage.getItem('user_email'),
            user_password: localStorage.getItem('user_password')
        }

        axios.get('https://express-back-end-1.herokuapp.com/user', {
            params: {
                user_email: params.user_email,
                user_password: params.user_password
            }
        })
            .then((response) => {

                setViewUser(response.data)

            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    function onChange(event: any) {

        const { name, value } = event.target

        setEditUser({ ...editUser, [name]: value })

        console.log(editUser, 'dados alterados')
    }

    function onSubmit(event: any) {
        event.preventDefault();

        console.log(editUser, 'dados alterados')

    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#EAEAEA' }}>
            <Menu />
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>


                    <div className="container py-5 col-md-7 col-lg-8">
                        <h3 className="pb-2 border-bottom">Cadastro Perfil</h3>
                        <form className="needs-validation" onSubmit={onSubmit}>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">Nome</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" name="user_name" disabled readOnly defaultValue={viewUser.user_name} />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Sobrenome</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" name="user_lastname" disabled readOnly defaultValue={viewUser.user_lastname} />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">CPF</label>
                                    <input type="email" className="form-control" id="email" placeholder="" name="user_email" disabled readOnly defaultValue={viewUser.user_cpf} />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address htmlFor shipping updates.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Código de Usuário</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input type="text" className="form-control" id="username" placeholder="U00-000000000" disabled readOnly defaultValue={viewUser.user_id} />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Endereço</label>
                                    <input type="text" className="form-control" id="email" placeholder="" name="user_address" disabled readOnly defaultValue={viewUser.user_address} />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" name="user_email" disabled readOnly defaultValue={viewUser.user_email} />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address htmlFor shipping updates.
                                    </div>
                                </div>

                            </div>

                            <hr className="my-4" />

                            <button className="w-100 btn btn-primary btn-lg" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal">Atualizar Cadastro</button>

                        </form>

                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Atualizar Cadastro</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="row g-3">

                                                <div className="col-12">
                                                    <label htmlFor="address" className="form-label">Endereço</label>
                                                    <input type="text" className="form-control" id="email" placeholder="" name="user_address" defaultValue={viewUser.user_address} onChange={onChange} />
                                                    <div className="invalid-feedback">
                                                        Please enter your shipping address.
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" name="user_email" defaultValue={viewUser.user_email} onChange={onChange} />
                                                    <div className="invalid-feedback">
                                                        Please enter a valid email address htmlFor shipping updates.
                                                    </div>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                        <button type="button" className="btn btn-primary">Gravar</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        </div>
    )
}