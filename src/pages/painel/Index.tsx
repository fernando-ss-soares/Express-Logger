import Menu from "../../components/menu/Index";
import NewCardPanel from "../../components/welcomeCard/Index";

export default function Painel() {

    return (
            <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#EAEAEA'}}>
                <div style={{position: 'relative', minHeight: '100vh'}}>
                    <Menu/>
                </div>
                 <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', minHeight: '100vh' }}>

                     <div id="panel" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>

                        <NewCardPanel/>

                     </div>
                 </div>
            </div>
            )
}