import { Grid, Card, CardHeader, Avatar, Typography, CardContent, CardActions, Link} from '@mui/material';
import { LinkedIn, WhatsApp } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export const Bienvenida = () => {
  return (
    <Grid
        container
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        sx={{
            minHeight: '100vh',
            width: '100%'
        }}
    >
        <Card
            sx={{ maxWidth: 345 }}
        >
            <CardHeader
                avatar={
                <Avatar aria-label="recipe">
                    R
                </Avatar>
                }
                title={<Typography variant='h1' fontSize={'0.875rem'} letterSpacing={0.5} sx={{color: '#FF0032', fontWeight: '500'}}> Abraham Freitez </Typography>}
                subheader={<Typography fontSize={'0.80rem'} letterSpacing={0.5} sx={{color: 'rgba(255, 255, 255, 0.7)'}}>Desarrollador FullStack</Typography>}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" fontSize={'0.775rem'} lineHeight={1.599}>
                    ¡Bienvenido a mi prueba!, mi nombre es <strong>Abraham</strong>, soy de Venezuela, estado Lara. Me encanta mi trabajo y me esmero por hacerlo cumplir de manera eficiente y excelente. Muchas gracias por su tiempo.
                </Typography>
            </CardContent>
            <CardActions 
                disableSpacing
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Grid   
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
                >
                    <Link
                        href='https://www.linkedin.com/in/abrahamfreitez98/'
                        target='_blank'
                        sx={{display: 'flex', alignItems: 'center'}}
                    >
                        <LinkedIn sx={{height: 21, width: 21, color: '#0a66c2', marginRight: 0.8}} />
                    </Link>
                    <Link
                        href='https://walink.co/d48355'
                        target='_blank'
                        sx={{display: 'flex', alignItems: 'center'}}
                    >
                        <WhatsApp sx={{height: 19, width: 19, color: '#4cca5a'}} />
                    </Link>
                </Grid>
                <NavLink
                    to='/dashboard'
                    style={{
                        fontSize: 14,
                        color: '#FF0032',
                        textDecoration: 'none'
                    }}
                >
                    Ver prueba
                </NavLink>
            </CardActions>
        </Card>
        <Grid
            mt={4}
        >
            <Link
                href='https://github.com/alejofr/pruebainresorts'
                target='_blank'
                sx={{display: 'flex', alignItems: 'center'}}
            >
               <Typography>
                 Repositorio
               </Typography>
            </Link>
        </Grid>
    </Grid>
  )
}
