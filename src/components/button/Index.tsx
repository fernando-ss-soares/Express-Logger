interface PropsButton {
    titleProps : String,
    typeProps : any
}

export default function Button({ titleProps, typeProps } : PropsButton) {
    return (
        <button type={ typeProps }>
            {titleProps}
        </button>
    )
}