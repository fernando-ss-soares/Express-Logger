import Skeleton from "./Skeleton"
import Load from "./Load"

export default function NewCardPanel() {

    function teste() {
        return true
    }
    
    let user_name = localStorage.getItem('user_name')
    let exibir = true

    return (
        <>
            { 

                exibir ? <Load nomeCompleto={String(user_name)}/> : <Skeleton/>
            
            }
        </>
    )
}