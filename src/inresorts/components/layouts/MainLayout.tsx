import { FC } from 'react';
import { Box, Container, Toolbar } from '@mui/material';
import { NavBar } from '../NavBar';

type MainLayoutProps =  {
  children: JSX.Element | JSX.Element[];
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box>
        <NavBar />
        <Box 
            component='main'
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{marginTop: 2}}>
            {children}
          </Container>
        </Box>
    </Box>
  )
}
