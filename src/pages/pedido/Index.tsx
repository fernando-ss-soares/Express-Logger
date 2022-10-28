import Menu from "../../components/menu/Index";
import { Container } from "@mui/system";

export default function Pedido() {

    return (
        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#EAEAEA' }}>
            <Menu />

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>

                <Container>
                    <h3 className="pb-2 border-bottom">Pesquisa de Pedido</h3>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
                    </div>
                </Container>

                <Container>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </Container>

            </div>

        </div>
    )
}