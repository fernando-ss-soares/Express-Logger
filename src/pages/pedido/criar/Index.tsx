import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import Menu from "../../../components/menu/Index";

export default function CriarPedido() {

    const notifySucess = () => toast.success('Pedido efetuado com sucesso!', {
        "duration": 4000,
        "position": "top-right"
    });

    const notifyError = () => toast.error('Pedido falhou! Tente mais tarde.', {
        "duration": 4000,
        "position": "top-right"
    });

    const Pedido = { product_name:'', product_describe:'', request_status:'Aguardando Recebimento', request_address: localStorage.getItem('user_address'), request_email: localStorage.getItem('user_email'), user_id: localStorage.getItem('user_id') }
    const Navigate = useNavigate();
    const [pedido, setPedido] = useState(Pedido)

    function onChange(event: any) {
        const { name, value } = event.target;

        setPedido({ ...pedido, [name]: value });
    }

    function onSubmit(event: any) {
        event.preventDefault();
        
        axios.post('https://express-back-end-1.herokuapp.com/request',{
            product_name: pedido.product_name, 
            product_describe: pedido.product_describe, 
            request_status: pedido.request_status, 
            request_address: pedido.request_address, 
            request_email: pedido.request_email, 
            user_id: pedido.user_id
        })
            .then((response) => {
                if (response.status == 200) {
                    notifySucess();
                    
                    setTimeout(() => {
                        Navigate(`/request`);
                    }, 3000);
                }
            })
            .catch(() => {
                notifyError();
            })

    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#EAEAEA' }}>
            <Menu />

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>


                <div className="container py-5 col-md-7 col-lg-8">
                    <h3 className="pb-2 border-bottom">Solicitar Pedido</h3>
                    <form className="needs-validation" onSubmit={onSubmit}>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label">Nome Produto</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" name="product_name" onChange={onChange}/>
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label">Status</label>
                                <input type="text" className="form-control" id="lastName" placeholder="" name="request_status" disabled readOnly onChange={onChange} defaultValue={pedido.request_status}/>
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Descrição Produto</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" name="product_describe" rows={2} onChange={onChange}></textarea>
                            </div>

                        </div>

                        <hr className="my-4" />

                        <button className="w-100 btn btn-primary btn-lg" type="submit">Cadastrar Pedido</button>
                    </form>
                </div>


            </div>
            <Toaster />
        </div>
    )
}