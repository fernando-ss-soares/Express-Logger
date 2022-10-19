import "react"
import { Card, CardContent, Typography } from "@mui/material"

interface CardAlert {
    title: String,
    number: String,
    backgroundColor1?: String,
    backgroundColor2?: String,
    textColor?: String

}

export default function CardAlert( {title, number, backgroundColor1, backgroundColor2, textColor} : CardAlert) {

    return (
            <Card sx={{ maxWidth: 375, minHeight: 100, display: 'flex', flexDirection: 'row', justifyContent: 'center', verticalAlign: 'center', backgroundColor: `${backgroundColor1}`, color: `${textColor}`, borderRadius: '10px'}}>

                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '16px'}}>

                    <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
                        {title}
                    </Typography>

                </CardContent>

                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '24px', backgroundColor: `${backgroundColor2}`}}>

                    <Typography sx={{ fontSize: 28, fontWeight: 400 }}>
                        {number}
                    </Typography>

                </CardContent>

            </Card>
    )
}