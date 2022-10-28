import "react";

import Menu from "../../components/menu/Index";

export default function Perfil() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#EAEAEA' }}>
            <Menu />
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>


                    <div className="container py-5 col-md-7 col-lg-8">
                        <h3 className="pb-2 border-bottom">Cadastro Perfil</h3>
                        <form className="needs-validation" >
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
                                    <input type="text" className="form-control" id="lastName" placeholder="" />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">CPF</label>
                                    <input type="email" className="form-control" id="email" placeholder="" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address htmlFor shipping updates.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Código de Usuário</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input type="text" className="form-control" id="username" placeholder="U00-000000000" disabled readOnly />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Endereço</label>
                                    <input type="email" className="form-control" id="email" placeholder="" />
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

                            <button className="w-100 btn btn-primary btn-lg" type="submit">Atualizar Perfil</button>
                        </form>
                    </div>


                </div>

            </div>

        </div>
    )
}