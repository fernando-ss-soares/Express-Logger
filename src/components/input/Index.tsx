import "react"
import { TextField } from "@mui/material"

interface inputInterface {
    label: String,

}

export default function Input( { label } : inputInterface) {
    return (
        <div>
            <p style={{ marginTop: 2, marginBottom: 2 }}>{label}</p>
            <TextField style={{ width: '100%' }} variant={'outlined'}/>
        </div>
    )
}