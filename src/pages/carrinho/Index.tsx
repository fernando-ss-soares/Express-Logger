import "react";

import Menu from "../../components/menu/Index";

export default function Checkout() {
    return (
            <div style={{ display: 'flex', flexDirection: 'row'}}>
                <Menu/>
                 <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <h1>Checkout</h1>
                 </div>
            </div>
            )
}