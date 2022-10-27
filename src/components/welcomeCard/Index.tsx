import { Link } from "react-router-dom"
import IconSegure from "@mui/icons-material/VpnLock"
import IconShipping from "@mui/icons-material/LocalShipping"
import IconOrder from "@mui/icons-material/Web"
import IconSupport from "@mui/icons-material/Groups"

interface NewCardPanel {
    nomeCompleto: String
}

export default function NewCardPanel({ nomeCompleto }: NewCardPanel) {
    return (
        <div className="d-flex flex-column container px-4 py-5 w-100">
            <h3 className="pb-2 border-bottom">Olá <b>{`${nomeCompleto},`}</b>{` estamos felizes por ter você conosco :)`}</h3>

            <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-2">
                
                <div className="d-flex flex-column align-items-start gap-2">
                    <h3 className="fw-bold">Redirecione seu pacote na melhor empresa de redirecionamento do mercado</h3>
                    <p className="text-muted">Empresa referência no processo de <b>Dropshipping Internacional</b> de produtos eletroeletrônico e indicado ao prêmio Ibest.</p>
                    <Link to={'/createrequest'}>
                        <button className="btn btn-primary btn-lg">Solicitar Pedido</button>
                    </Link>
                </div>
                
                <div className="row row-cols-1 row-cols-sm-2 g-4">
                    
                    <div className="d-flex flex-column gap-2">
                        <div className="feature-icon-small d-inline-flex align-items-center justify-content-left fs-4 rounded-3">
                            <IconShipping sx={{ fontSize: 30 }}/>
                        </div>
                        <h4 className="fw-semibold mb-0">Entrega Rápida</h4>
                        <p className="text-muted">Tenha seu pedido entregue em até 60 dias corridos.</p>
                    </div>

                    <div className="d-flex flex-column gap-2">
                        <div className="feature-icon-small d-inline-flex align-items-center justify-content-left fs-4 rounded-3">
                            <IconSegure sx={{ fontSize: 30 }}/>
                        </div>
                        <h4 className="fw-semibold mb-0">Segurança</h4>
                        <p className="text-muted">Segurança no processo de ponta a ponta.</p>
                    </div>

                    <div className="d-flex flex-column gap-2">
                        <div className="feature-icon-small d-inline-flex align-items-center justify-content-left fs-4 rounded-3">
                            <IconOrder sx={{ fontSize: 30 }}/>
                        </div>
                        <h4 className="fw-semibold mb-0">Praticidade</h4>
                        <p className="text-muted">Praticidade no processo de compra e redirecionamento de produtos.</p>
                    </div>

                    <div className="d-flex flex-column gap-2">
                        <div className="feature-icon-small d-inline-flex align-items-center justify-content-left fs-4 rounded-3">
                            <IconSupport sx={{ fontSize: 30 }}/>
                        </div>
                        <h4 className="fw-semibold mb-0">Suporte</h4>
                        <p className="text-muted">Acesso 24h ao suporte e atendimento remoto.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}