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
        background: isDark
          ? 'radial-gradient(circle at center, rgba(30,41,59,0.8) 0%, rgba(15,23,42,0.95) 100%)'
          : 'radial-gradient(circle at center,  rgba(30,41,59,0.8)0%, rgba(30,41,59,0.8) 100%)',
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Card
        sx={{
          width: '100vw',
          maxWidth: '1200px',
          borderRadius: 7,
          boxShadow: '0 12px 48px #0004',
          px: { xs: 2, sm: 10, md: 16 },
          py: { xs: 3, sm: 8, md: 10 },
          background: isDark
            ? 'linear-gradient(135deg, rgba(30,41,59,0.95) 60%, rgba(99,102,241,0.7) 100%)'
            : 'linear-gradient(135deg, rgba(30,41,59,0.95) 60%, rgba(30,41,59,0.95) 100%)',
          color: isDark ? '#1e293b' : '#1e293b',
          textAlign: 'center',
          border: isDark ? '2.5px solid #fbbf24' : '2.5px solid #1e293b',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isDark
              ? 'radial-gradient(circle at 50% 0%, rgba(251,191,36,0.1) 0%, transparent 50%)'
              : 'radial-gradient(circle at 50% 0%, rgba(30,41,59,0.05) 0%, transparent 50%)',
            pointerEvents: 'none',
          }
        }}
      >
        <CardContent sx={{ p: 0, position: 'relative', zIndex: 1 }}>
          <Stack direction="column" spacing={3} alignItems="center" mb={2}>
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 2,
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ display: 'inline-block' }}
            >
              <Avatar
                src="/eu.jpeg"
                sx={{
                  width: 160,
                  height: 160,
                  border: isDark ? '5px double #fbbf24' : '5px double #1e293b',
                  boxShadow: '0 4px 32px #0005',
                  mb: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: isDark ? '#fbbf24' : '#1e293b',
                    transform: 'scale(1.05)',
                  }
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
              sx={{
                letterSpacing: -1,
                color: isDark ? '#1e293b' : '#1e293b',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              Eduardo Wanderley
            </Typography>
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
              sx={{
                '& > *': {
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    color: isDark ? '#fbbf24' : '#1e293b'
                  }
                }
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOnIcon fontSize="small" sx={{ color: isDark ? '#fbbf24' : '#1e293b' }} />
                <Typography variant="subtitle1">Recife</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon fontSize="small" sx={{ color: isDark ? '#fbbf24' : '#1e293b' }} />
                <Typography variant="subtitle1">
                  wanderley.eduardo@gmail.com
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <LinkedInIcon fontSize="small" sx={{ color: isDark ? '#fbbf24' : '#1e293b' }} />
                <Link
                  href="https://www.linkedin.com/in/eduardowanderleyde/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={isDark ? '#fbbf24' : '#1e293b'}
                  underline="hover"
                  sx={{
                    '&:hover': {
                      color: isDark ? '#f59e0b' : '#334155'
                    }
                  }}
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
            sx={{
              color: isDark ? '#fbbf24' : '#1e293b',
              mt: 2,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 3,
                background: isDark ? '#fbbf24' : '#1e293b',
                borderRadius: 2
              }
            }}
          >
            Perfil Profissional
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: isDark ? '#1e293b' : '#1e293b',
              maxWidth: 800,
              mx: 'auto',
              fontSize: 20,
              fontWeight: 500,
              lineHeight: 1.7,
              letterSpacing: 0.1,
              textShadow: isDark ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
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