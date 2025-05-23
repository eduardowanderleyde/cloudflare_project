import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import { useState } from 'react';

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experiences = [
    {
      icon: <WorkIcon />,
      company: 'Campello & Siqueira',
      role: 'DevOps Developer',
      period: 'Jan 2024 - Presente',
      items: [
        'Automatizou consultas de dados com scripts Python, aumentando a produtividade em 60%.',
        'Otimização de fluxos e colaboração ágil, com cobertura de testes acima de 85% (Pytest PIT, Jacoco).',
        'Integração de ferramentas de automação Python, melhorando prazos e coesão do time.'
      ]
    },
    {
      icon: <CodeIcon />,
      company: 'Softex',
      role: 'Software Developer Resident',
      period: 'Jan 2023 - Jan 2024',
      items: [
        'Desenvolvimento backend com Flask e frontend Flutter para controle de braço robótico.',
        'Melhoria de eficiência em 20% e redução de erros em 15%.',
        'Gestão de requisições HTTP, WebSocket e SSR, aumentando performance em 30%.',
        'Aplicação de Scrum/Kanban, aumento de 40% na produtividade do time.'
      ]
    },
    {
      icon: <BusinessIcon />,
      company: 'Freelance Developer',
      role: 'Frontend Developer',
      period: 'Feb 2020 - Nov 2022',
      items: [
        'Projetos para C.E.S.A.R. e Hospital Português, com aumento de 50% em indicações.',
        'Desenvolvimento de plataforma social para pets com React, JWT, APIs e otimização de engajamento (+40%).',
        'Integração de bibliotecas externas, melhorando experiência e reduzindo bounce rate em 20%.'
      ]
    },
    {
      icon: <SchoolIcon />,
      company: 'Prefeitura de Recife',
      role: 'Robotics Intern',
      period: 'Jan 2017 - Jan 2019',
      items: [
        'Ministrou cursos de Python e robótica para alunos do ensino fundamental.',
        'Preparou relatórios mensais e orientou equipes em torneios regionais (+15% no ranking).'
      ]
    }
  ];

  return (
    <motion.section
      id="experiencia"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        marginBottom: 64,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 1rem'
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          width: '100%',
          maxWidth: '900px',
          backgroundColor: '#f1f5f9',
          border: '2px solid #1e293b',
          borderRadius: '1rem',
          padding: '2rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            fontSize: '2rem',
            fontWeight: '800',
            marginBottom: '1.5rem',
            color: '#1e293b',
            borderBottom: '2px solid #fbbf24',
            paddingBottom: '0.5rem',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          Experiência Profissional
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              position: 'absolute',
              bottom: -2,
              left: 0,
              height: 2,
              background: 'linear-gradient(90deg, #fbbf24, transparent)'
            }}
          />
        </motion.h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{
                y: -4,
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                scale: 1.02
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 300
              }}
              style={{
                padding: '1.5rem',
                borderRadius: '0.75rem',
                backgroundColor: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #fbbf24, transparent)'
                }}
              />
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '0.5rem',
                position: 'relative'
              }}>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {exp.icon}
                </motion.div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  margin: 0
                }}>
                  {exp.company}
                  <span style={{
                    fontWeight: '500',
                    color: '#fbbf24',
                    marginLeft: '0.5rem'
                  }}>
                    {exp.role}
                  </span>
                  <span style={{
                    float: 'right',
                    fontStyle: 'italic',
                    color: '#64748b',
                    fontSize: '0.9rem'
                  }}>
                    {exp.period}
                  </span>
                </h3>
              </div>
              <ul style={{
                paddingLeft: '1.25rem',
                marginTop: '0.5rem',
                color: '#1e293b'
              }}>
                {exp.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + i * 0.1,
                      type: 'spring',
                      stiffness: 200
                    }}
                    style={{
                      marginBottom: '0.5rem',
                      lineHeight: '1.6',
                      position: 'relative',
                      paddingLeft: '0.5rem'
                    }}
                  >
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: hoveredIndex === index ? '100%' : 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      style={{
                        position: 'absolute',
                        left: -20,
                        top: '50%',
                        height: '2px',
                        background: '#fbbf24',
                        transform: 'translateY(-50%)'
                      }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;
