import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const educacao = [
  {
    curso: 'Engenharia Mecatrônica (Bacharelado)',
    inst: 'UPE',
    data: 'Jan 2021'
  },
  {
    curso: 'Robótica e Inteligência Artificial (Pós-graduação)',
    inst: 'UFPE',
    data: 'Jan 2023'
  },
  {
    curso: 'Ciência da Computação e Engenharia de Software (Mestrado)',
    inst: 'UFPE',
    data: 'Jan 2026'
  }
];

const Education = () => (
  <section id="educacao" style={{ marginBottom: 48, display: 'flex', justifyContent: 'center' }}>
    <Card
      sx={{
        width: { xs: '95vw', md: '80vw', lg: '60vw' },
        borderRadius: 4,
        boxShadow: 6,
        border: '2px solid #fbbf24',
        backgroundColor: '#fefce8',
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          fontWeight={800}
          gutterBottom
          sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#92400e' }}
        >
          <SchoolIcon fontSize="large" sx={{ color: '#fbbf24' }} /> Educação
        </Typography>
        <List>
          {educacao.map((item, idx) => (
            <ListItem key={idx} disableGutters>
              <ListItemIcon>
                <SchoolIcon sx={{ color: '#fbbf24' }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1" fontWeight={600}>
                    <b>{item.inst}</b> — {item.curso}
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" color="textSecondary">
                    {item.data}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  </section>
);

export default Education;
