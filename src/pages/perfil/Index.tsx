import "react";

import Menu from "../../components/menu/Index";

export default function Perfil() {
    return (
            <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#EAEAEA'}}>
                <Menu/>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    <h1>Perfil</h1>

                </div>

            </div>
    )
}