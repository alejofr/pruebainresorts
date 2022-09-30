import { useMemo, useContext } from 'react';
import { CamisasContext } from '../../context';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { Grid, Button} from '@mui/material';
import { FormCamisa } from '../../components';
import { CamisaForm, SmallPokemon } from '../../interfaces';

export const EditCamisa = () => {
    const { getCamisaId, updateCamisa } = useContext(CamisasContext);

    const { id } = useParams();
    const navigate = useNavigate();

    const camisa = useMemo( () => getCamisaId( id === undefined ? '' : parseInt(id) ), [ id ]); 

    const onNavigateBack = () => {
        navigate(-1);
    }

    if ( !camisa ) {
        return <Navigate to="/camisas" />
    }

    console.log(camisa, 'camisa', id);
    const editCamisa = (form: CamisaForm, pokemon: SmallPokemon) => {
        const { nombre, talla, color, precio, cantidad, idPokemon } = form;
        const { name } = pokemon;

        updateCamisa({
            id: camisa.id,
            nombre,
            talla,
            color,
            precio,
            cantidad,
            idPokemon,
            pokemon: name
        });

        setTimeout(() => {
            navigate(-1);
        }, 2000);
    }

    return (
        <Grid>
            <FormCamisa 
                {...camisa} 
                typeForm='actualizar' 
                onSubmit={editCamisa} 
            />
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
