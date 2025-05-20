import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Link,
  useTheme
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';

const Profile = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <motion.section
      id="perfil"
      style={{
        marginBottom: 56,
        width: '100vw',
        minHeight: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        boxSizing: 'border-box',
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Card
        sx={{
          width: '100vw',
          borderRadius: 7,
          boxShadow: '0 12px 48px #0004',
          px: { xs: 2, sm: 10, md: 16 },
          py: { xs: 3, sm: 8, md: 10 },
          background: isDark
            ? 'linear-gradient(135deg, rgba(30,41,59,0.95) 60%, rgba(99,102,241,0.7) 100%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.98) 60%, #f3f4f6 100%)',
          color: isDark ? '#fff' : '#1e293b',
          textAlign: 'center',
          border: isDark ? '2.5px solid #fbbf24' : '2.5px solid #1e293b',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          boxSizing: 'border-box',
        }}
      >
        <CardContent sx={{ p: 0 }}>
          <Stack direction="column" spacing={3} alignItems="center" mb={2}>
            <motion.div
              whileHover={{ scale: 1.08, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ display: 'inline-block' }}
            >
              <Avatar
                src="/eu.jpeg"
                sx={{
                  width: 140,
                  height: 140,
                  border: isDark ? '5px double #fbbf24' : '5px double #1e293b',
                  boxShadow: '0 4px 32px #0005',
                  mb: 1,
                }}
              >
                <PersonIcon fontSize="large" />
              </Avatar>
            </motion.div>
            <Typography
              variant="h2"
              component="h1"
              fontWeight={900}
              gutterBottom
              sx={{ letterSpacing: -1 }}
            >
              Eduardo Wanderley
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOnIcon fontSize="small" />
                <Typography variant="subtitle1">Recife</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon fontSize="small" />
                <Typography variant="subtitle1">
                  wanderley.eduardo@gmail.com
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <LinkedInIcon fontSize="small" />
                <Link
                  href="https://www.linkedin.com/in/eduardowanderleyde/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={isDark ? '#fbbf24' : '#1e293b'}
                  underline="hover"
                >
                  LinkedIn
                </Link>
              </Stack>
            </Stack>
          </Stack>
          <Typography
            variant="h5"
            fontWeight={700}
            gutterBottom
            sx={{ color: isDark ? '#fbbf24' : '#1e293b', mt: 2 }}
          >
            Perfil Profissional
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: isDark ? '#f3f4f6' : '#1e293b',
              maxWidth: 800,
              mx: 'auto',
              fontSize: 20,
              fontWeight: 500,
              lineHeight: 1.7,
              letterSpacing: 0.1,
            }}
          >
            Aspiring software developer com sólido conhecimento em Python, Django, JavaScript, Ruby e Ruby on Rails. Experiência acadêmica e prática em soluções web com HTML, CSS, SQL e testes unitários. Rápido aprendizado, colaboração em equipe e foco em entregar features e corrigir bugs. Motivado por desafios em desenvolvimento e manutenção de sistemas, buscando crescimento contínuo e excelência em tecnologia.
          </Typography>
        </CardContent>
      </Card>
    </motion.section>
  );
};

export default Profile;