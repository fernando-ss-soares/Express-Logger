import "react";
import Menu from "../../components/menu/Index";
import WelcomeCard from "../../components/welcomeCard/Index"
import PanelCard from "../../components/panelCard/Index";

export default function Painel() {

    return (
            <div style={{ display: 'flex', flexDirection: 'row'}}>
                <Menu/>
                 <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                     <div id="panel" style={{ width: '80%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>

                         <WelcomeCard nomeCompleto={'Fernando Santos Soares'}/>

                        <PanelCard/>

                     </div>
                 </div>
            </div>
            )
}