import { Link, NavLink } from 'react-router-dom';
import { Container } from '@mui/material';

export const NavBar = () => {
  return (
    <Container maxWidth="lg" className='bg-dark'> 
       <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Bienvenidos
            </Link>
      
            <div className="navbar-collapse">
                <div className="navbar-nav">
                  <NavLink 
                      className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                      to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
      
                  <NavLink 
                      className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                      to="/camisas"
                  >
                      Camisas
                  </NavLink>
                </div>
            </div>
        </nav>
    </Container>
  )
}
