import { useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, Box, AppBar, Toolbar, IconButton, Typography, Link as MuiLink } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Profile from './components/Profile';
import Education from './components/Education';
import Experience from './components/Experience';
import ProjectsCarousel from './components/ProjectsCarousel';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [dark, setDark] = useState(true);
  const theme = useMemo(() => createTheme({
    palette: {
      mode: dark ? 'dark' : 'light',
      primary: {
        main: '#1e293b', // azul escuro
        contrastText: '#fff',
      },
      secondary: {
        main: '#fbbf24', // dourado
      },
      background: {
        default: dark ? '#18181b' : '#f3f4f6',
        paper: dark ? '#232336' : '#fff',
      },
      text: {
        primary: dark ? '#f3f4f6' : '#1e293b',
        secondary: dark ? '#fbbf24' : '#6366f1',
      },
    },
    shape: { borderRadius: 18 },
    typography: {
      fontFamily: 'Inter, Arial, sans-serif',
      h3: { fontWeight: 800 },
      h4: { fontWeight: 700 },
      h6: { fontWeight: 700 },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: '0 8px 32px #0003',
            border: '1.5px solid #fbbf24',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 24,
            fontWeight: 700,
            textTransform: 'none',
          },
        },
      },
    },
  }), [dark]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky" color="inherit" elevation={2} sx={{ mb: 4, background: dark ? 'linear-gradient(90deg, #1e293b 60%, #6366f1 100%)' : 'linear-gradient(90deg, #fbbf24 0%, #1e293b 100%)' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center" gap={2}>
            <img src={viteLogo} alt="Vite" style={{ height: 36 }} />
            <img src={reactLogo} alt="React" style={{ height: 36 }} />
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <MuiLink href="#perfil" underline="none" color="inherit">Perfil</MuiLink>
            <MuiLink href="#educacao" underline="none" color="inherit">Educação</MuiLink>
            <MuiLink href="#experiencia" underline="none" color="inherit">Experiência</MuiLink>
            <MuiLink href="#projetos" underline="none" color="inherit">Projetos</MuiLink>
            <MuiLink href="#contato" underline="none" color="inherit">Contato</MuiLink>
            <IconButton onClick={() => setDark((d) => !d)} color="secondary">
              {dark ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Profile />
      <Container maxWidth="md" sx={{ pb: 6 }}>
        <Education />
        <Experience />
        <ProjectsCarousel />
        <Contact />
      </Container>
      <Box component="footer" sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
        <Typography variant="body2">
          Feito com 💙 por Eduardo Wanderley &middot; {new Date().getFullYear()}
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
