import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, Card, CardMedia, Typography, CardContent, ImageListItem, Button, CircularProgress} from '@mui/material';
import { usePokemon } from '../hooks';

export const Pokemon = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { loading, getPokemon, pokemonId, response } = usePokemon();

    useMemo( () => getPokemon( id ), [ id ] );

    console.log(pokemonId, loading, response);
    const onNavigateBack = () => {
        navigate(-1);
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
            <Grid
                display={ loading || response?.ok === false ? 'flex' : 'none' }
            >
                {
                    response != undefined && !response.ok && !loading ? (
                        <Typography>{response?.message}</Typography>
                    ): (
                        <CircularProgress sx={{color: '#fff'}} />
                    )
                }
            </Grid>
            {
                !loading && response != undefined && response.ok && pokemonId != undefined && 
                <Card
                    sx={{ maxWidth: 345 }}
                >
                    <CardMedia
                        component="img"
                        height="140"
                        image={ pokemonId != undefined ? pokemonId.sprites.other?.dream_world.front_default : ''  }
                        alt={ pokemonId != undefined ? pokemonId.name : '' }
                        sx={{objectFit: 'contain'}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {pokemonId?.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Sprites:
                        </Typography>
                        <Grid
                            spacing={2}
                            display='flex'
                        >
                            <ImageListItem cols={2} rows={2}>
                                <img
                                    src={ pokemonId?.sprites.front_default }
                                    alt={ pokemonId?.name }
                                    width={ 100 }
                                    height={ 100 }
                                />
                            </ImageListItem>
                            <ImageListItem cols={2} rows={2}>
                                <img
                                    src={ pokemonId?.sprites.back_default }
                                    alt={ pokemonId?.name }
                                    width={ 100 }
                                    height={ 100 }
                                />
                            </ImageListItem>
                            <ImageListItem cols={2} rows={2}>
                                <img
                                    src={ pokemonId?.sprites.front_shiny }
                                    alt={ pokemonId?.name }
                                    width={ 100 }
                                    height={ 100 }
                                />
                            </ImageListItem>
                            <ImageListItem cols={2} rows={2}>
                                <img
                                    src={ pokemonId?.sprites.back_shiny }
                                    alt={ pokemonId?.name }
                                    width={ 100 }
                                    height={ 100 }
                                />
                            </ImageListItem>
                        </Grid>
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
