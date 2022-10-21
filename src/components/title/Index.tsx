import "react"

interface Title {
    title: String,
    subtitle?: String
}

export default function Title( { title, subtitle } : Title ) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', width: '90%', margin: '10px' }}>
            <h1 style={{ marginBottom: '5px', fontSize: 26 }}>{title}</h1>
            <p style={{ fontSize: 14, marginTop: '5px', fontStyle: 'italic' }}>{subtitle}</p>
        </div>
    )
}