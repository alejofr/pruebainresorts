import { useMemo, useContext } from 'react';
import { CamisasContext } from '../../context';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { Grid, Card, Typography, CardContent, Button } from '@mui/material';

export const ShowCamisa = () => {
    const { getCamisaId } = useContext(CamisasContext);

    const { id } = useParams();
    const navigate = useNavigate();

    const camisa = useMemo( () => getCamisaId( id === undefined ? '' : parseInt(id) ), [ id ]); 

    const onNavigateBack = () => {
        navigate(-1);
    }

    if ( !camisa ) {
        return <Navigate to="/camisas" />
    }
   

    return (
        <Grid
            container
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            sx={{
                minHeight: ' calc( 100vh - 70px )',
                width: '100%'
            }}
        >
            {
                <Card
                    sx={{ maxWidth: 345 }}
                >
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {camisa.nombre} #{ camisa.id }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Descripcion:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           Color:  {camisa.color}. Talla {camisa.talla}. Cantidad: {camisa.cantidad}. Precio: {camisa.precio}
                           Pokemon: { camisa.pokemon }
                        </Typography>
                    </CardContent>
                </Card>
            }
            <Grid
                mt={4}
            >
                <Button
                    size="small"
                    onClick={onNavigateBack}
                >
                    Regresar
                </Button>
            </Grid>
        </Grid>
    )
}

