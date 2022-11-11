import Panel from "./Load";

export default function NewCardPanel() {
    
    const user_name = localStorage.getItem('user_name');

    return (
        <>
            <Panel nomeCompleto={String(user_name)}/>
        </>
    )
}