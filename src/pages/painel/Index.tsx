import { useState } from "react";
import Menu from "../../components/menu/Index";
import NewCardPanel from "../../components/welcomeCard/Index";
import BounceLoader from "react-spinners/BounceLoader";

export default function Painel() {

    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false)
    }, 3000);

    if (loading) {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#EAEAEA' }}>
                <Menu />
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>


                        <div className="d-flex flex-column justify-content-center align-items-center w-100 vh-100">
                            <BounceLoader size={80} color="#06283D"></BounceLoader>

                            <div className="my-3">
                                <p>Carregando...</p>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        )

    } else {

        return (
            <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#EAEAEA' }}>
                <div style={{ position: 'relative', minHeight: '100vh' }}>
                    <Menu />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', minHeight: '100vh' }}>

                    <div id="panel" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>

                        <NewCardPanel />

                    </div>
                </div>
            </div>

        )
    }

}