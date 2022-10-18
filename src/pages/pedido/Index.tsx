import "react";

import Menu from "../../components/menu/Index";

export default function Pedido() {
    return (
            <div style={{ display: 'flex', flexDirection: 'row'}}>
                <Menu/>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <h1>Pedido</h1>
                </div>
            </div>
    )
}