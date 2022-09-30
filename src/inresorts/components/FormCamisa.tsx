import { useEffect, FormEvent } from 'react';
import { Grid, Typography, TextField, Button, CircularProgress, MenuItem } from '@mui/material';
import { useForm, usePokemon } from '../hooks';
import { CamisaForm, SmallPokemon } from '../interfaces';

type PropsFormCamisa = {
    typeForm?: 'agregar' | 'actualizar';
    nombre: string;
    talla: string;
    color: string;
    precio: string | number;
    cantidad: string | number;
    idPokemon: number | string;
    onSubmit: (form: CamisaForm, pokemon: SmallPokemon) => void;
}

export const FormCamisa = ({ typeForm = 'agregar', nombre, talla, color, precio, cantidad, idPokemon, onSubmit } : PropsFormCamisa) => {
    const { getDatos, data } = usePokemon();
    const { formulario, onChange } = useForm({
        nombre,
        talla, 
        color,
        precio,
        cantidad, 
        idPokemon
    });

    useEffect(() => {
        getDatos();
    }, []);

    const onSubmitForm = ( event : FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        const poke = data.find( item => item.id === formulario.idPokemon );

        if( poke != undefined ){
            onSubmit(formulario, poke);
        }
            
    }

    return (
        <form style={{width: '100%'}} onSubmit={onSubmitForm}>
            <Grid container spacing={2} marginTop={3}>
                <Grid item marginBottom={3} xs={ 12 } md={4} xl={4}>
                    <TextField
                        value={formulario.nombre}
                        name='nombre'
                        onChange={ ({ target }) => onChange( target.value, 'nombre') }
                        variant="outlined" 
                        label='Nombre Camisa'
                        type='text'
                        color="primary"
                        className='textFieldInput'
                        margin='dense'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item marginBottom={3} xs={ 12 } md={4} xl={4}>
                    <TextField
                        value={formulario.talla}
                        name='talla'
                        onChange={ ({ target }) => onChange( target.value, 'talla') }
                        variant="outlined" 
                        label='Talla Camisa'
                        type='text'
                        color="primary"
                        margin='dense'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item marginBottom={3} xs={ 12 } md={4} xl={4}>
                    <TextField
                        value={formulario.color}
                        name='color'
                        onChange={ ({ target }) => onChange( target.value, 'color') }
                        variant="outlined" 
                        label='Color Camisa'
                        type='text'
                        color="primary"
                        margin='dense'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item marginBottom={3} xs={ 12 } md={4} xl={4}>
                    <TextField
                        value={formulario.precio}
                        name='precio'
                        onChange={ ({ target }) => onChange( target.value, 'precio') }
                        variant="outlined" 
                        label='Precio Camisa'
                        type='text'
                        color="primary"
                        margin='dense'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item marginBottom={3} xs={ 12 } md={4} xl={4}>
                    <TextField
                        value={formulario.cantidad}
                        name='cantidad'
                        onChange={ ({ target }) => onChange( target.value, 'cantidad') }
                        variant="outlined" 
                        label='Cantidad Camisa'
                        type='text'
                        color="primary"
                        margin='dense'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item marginBottom={3} xs={ 12 } md={4} xl={4}>
                    <TextField
                        value={formulario.idPokemon}
                        name='idPokemon'
                        onChange={ ({ target }) => onChange( target.value, 'idPokemon') }
                        id="outlined-select-currency"
                        variant="outlined" 
                        margin='dense'
                        color="primary"
                        select
                        label="Seleccion de Pokemon"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    >
                        {data.map((option) => (
                            <MenuItem key={option.url} value={option.id}>
                            {option.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
            <Grid 
                sx={{
                    marginTop: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
              <Button 
                size='large'
                sx={{boxShadow: 'none', textTransform: 'capitalize', letterSpacing: 0.5, borderRadius: 12}}
                variant='contained' 
                type='submit'
              >
                <Typography>{ typeForm === 'agregar' ? 'Agregar Camisa' : 'Actualizar Camisa' }</Typography>
              </Button>
            </Grid>
        </form> 
    )
}
