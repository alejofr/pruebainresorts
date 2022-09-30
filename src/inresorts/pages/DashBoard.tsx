import { useEffect } from 'react';
import { Grid, CircularProgress, Typography } from '@mui/material';
import { usePokemon } from '../hooks';
import { PokemonCard } from '../components';


export const DashBoard = () => {
  const { loading, getDatos, data, response } = usePokemon();

  useEffect(() => {
    getDatos();
  }, [])
  
  return (
   <>
     <Grid
      container
      spacing={2}
      justifyContent='flex-start'
      sx={{padding: 2}}
     >
        <Grid
            item
            display={ loading || response?.ok === false ? 'flex' : 'none' }
            justifyContent='center'
            alignItems='center'
            sx={{width: '100%', minHeight: 'calc(100vh - 100px)'}}
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
          !loading &&
            data.map( (poke, i)  => {
              return (
                <Grid
                  item
                  key={i}
                  xs={ 6 }
                  sm={ 3 }
                  md= { 2 }
                  xl= { 3 }
                >
                  <PokemonCard  {...poke} />
                </Grid>
              )
            })
          }
     </Grid>
     
   </>
  )
}
