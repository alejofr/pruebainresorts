import { useContext } from 'react';
import { CamisasContext } from '../../context';
import { NavLink } from 'react-router-dom';
import { Grid, Paper, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, IconButton, Button } from '@mui/material';
import { Delete, Edit, Info } from '@mui/icons-material';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

export const CamisasList = () => {
    const { camisas, destroyCamisa } = useContext(CamisasContext);

    const deleteCamisa = (id?: number) => {
        if( id != undefined ){
            destroyCamisa(id);
        }
    }

    const exportExcel = () => {
        if( camisas != null ){
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Camisas');

            worksheet.mergeCells("A2:I2");

            const countriesColumns = [
                { key: 'id', header: 'id' },
                { key: 'nombre', header: 'nombre' },
                { key: 'talla', header: 'talla' },
                { key: 'color', header: 'color' },
                { key: 'precio', header: 'precio' },
                { key: 'cantidad', header: 'cantidad' },
                { key: 'idPokemon', header: 'Id Pokemon' },
                { key: 'pokemon', header: 'pokemon' },
            ];
            
            worksheet.columns = countriesColumns;
            const camisa = 'camisas';

            camisas.forEach((item) => {
                worksheet.addRow(item);
            });
            

            workbook.xlsx.writeBuffer().then(function(buffer) {
                saveAs(
                    new Blob([buffer], { type: "application/octet-stream" }),
                    `${camisa}.xlsx`
                );
            });
        }
    }

    return (
        <Grid sx={{width: '100%', marginTop: 2, backgroundColor: 'rgba(16, 19, 22, 1)', padding: 2, borderRadius: 2}}>
            <Grid
                mb={2}
            >
                <NavLink
                    to='/camisas/add'
                    style={{
                        fontSize: 14,
                        color: '#FF0032',
                        textDecoration: 'none'
                    }}
                >
                    Agregar Camisa
                </NavLink>
            </Grid>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Camiseta</TableCell>
                        <TableCell align="right">Color</TableCell>
                        <TableCell align="right">Talla</TableCell>
                        <TableCell align="right">Precio</TableCell>
                        <TableCell align="right">Cantidad</TableCell>
                        <TableCell align="right">Pokemon</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        camisas != null && 
                        camisas.map(({id, nombre, color, cantidad, talla, precio, pokemon}) => (
                            <TableRow
                                key={id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {nombre}
                                </TableCell>
                                <TableCell align="right">{color}</TableCell>
                                <TableCell align="right">{talla}</TableCell>
                                <TableCell align="right">{precio}</TableCell>
                                <TableCell align="right">{cantidad}</TableCell>
                                <TableCell align="right">{pokemon}</TableCell>
                                <TableCell align="right">
                                    <Grid>
                                        <IconButton aria-label="eliminar" onClick={() => deleteCamisa(id)} >
                                            <Delete sx={{color: '#fff'}} />
                                        </IconButton>
                                        <NavLink
                                            to={`/camisas/edit/${id}`}
                                        >
                                            <IconButton aria-label="editar">
                                                <Edit sx={{color: '#fff'}} />
                                            </IconButton>
                                        </NavLink>
                                        <NavLink
                                            to={`/camisas/show/${id}`}
                                        >
                                            <IconButton aria-label="editar">
                                                <Info sx={{color: '#fff'}} />
                                            </IconButton>
                                        </NavLink>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid
                mt={4}
            >
                <Button
                    size="small"
                    onClick={exportExcel}
                >
                    Exportar
                </Button>
            </Grid>
        </Grid>
    )
}
