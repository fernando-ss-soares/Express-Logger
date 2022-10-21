import "react";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { ExpandMore } from "@mui/icons-material"
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Button } from "@mui/material"
import Menu from "../../components/menu/Index";
import Title from "../../components/title/Index";
import Input from "../../components/input/Index";

export default function Pedido() {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 16, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 20, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
        ];

    return (
            <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#EAEAEA'}}>
                <Menu/>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>

                    <Title title={'Pesquisa de Pedidos'} subtitle={'A tela de Pesquisa de Pedidos é uma geral para visualização de produtos.'}/>

                    <Accordion sx={{ width: '90%' }} defaultExpanded={true}>
                        
                        <AccordionSummary
                          expandIcon={<ExpandMore/>}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                            <Typography>Filtros de Pesquisa</Typography>
                        </AccordionSummary>
                        
                        <AccordionDetails sx={{ width: '100%', height: '300px' }}>

                            <Box sx={{ width: '98%', height: '70%' }}>

                                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '90%', gap: 2}}>

                                    <Input label={'ID do Pacote'}/>

                                    <Input label={'Nome do Produto'}/>

                                    <Input label={'Descrição do Produto'}/>

                                    <Input label={'Data de Entrega'}/>

                                </Box>

                            </Box>

                            <Box sx={{ width: '98%', height: '30%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'center', }}>

                                <Box>

                                    <Button variant="contained">
                                        Pesquisar
                                    </Button>

                                </Box>

                            </Box>

                        </AccordionDetails>

                    </Accordion>

                    <Accordion sx={{ width: '90%' }} defaultExpanded={false}>

                        <AccordionSummary
                            expandIcon={<ExpandMore/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>Resultado de Pesquisa</Typography>
                        </AccordionSummary>

                        <AccordionDetails sx={{ width: '100%', height: '300px' }}>

                            <Box sx={{ width: '98%', height: '100%' }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    pageSize={10}
                                    rowsPerPageOptions={[5]}
                                    sx={{ padding: 0 }}
                                />
                            </Box>

                        </AccordionDetails>

                    </Accordion>

                </div>

            </div>
    )
}