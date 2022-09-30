import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme } from './themes';
import { AppRouter } from './router/AppRouter';



const App = () => {
  return (
    <ThemeProvider theme={ darkTheme }>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  )
};

export default App;

