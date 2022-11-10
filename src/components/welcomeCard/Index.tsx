import Load from "./Load"

export default function NewCardPanel() {
    
    const user_name = localStorage.getItem('user_name')

    return (
        <>
            <Load nomeCompleto={String(user_name)}/>
        </>
    )
}