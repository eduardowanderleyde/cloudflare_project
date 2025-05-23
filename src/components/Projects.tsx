import { motion } from 'framer-motion';
import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'Plataforma Social para Pets',
      description: 'Rede social focada em pets com funcionalidades de perfil, posts, likes e comentários.',
      technologies: ['React', 'Node.js', 'MongoDB', 'JWT'],
      icon: <BrushIcon />,
      github: 'https://github.com/eduardowanderleyde/pet-social',
      demo: 'https://pet-social-demo.vercel.app'
    },
    {
      title: 'Sistema de Gestão de Tarefas',
      description: 'Aplicação para gerenciamento de tarefas com drag-and-drop, filtros e estatísticas.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      icon: <CodeIcon />,
      github: 'https://github.com/eduardowanderleyde/task-manager',
      demo: 'https://task-manager-demo.vercel.app'
    },
    {
      title: 'API de E-commerce',
      description: 'Backend robusto para e-commerce com autenticação, pagamentos e gestão de produtos.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
      icon: <StorageIcon />,
      github: 'https://github.com/eduardowanderleyde/ecommerce-api',
      demo: 'https://ecommerce-api-docs.vercel.app'
    }
  ];

  return (
    <motion.section
      id="projetos"
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
          Projetos
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
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
                marginBottom: '0.5rem'
              }}>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {project.icon}
                </motion.div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  margin: 0
                }}>
                  {project.title}
                </h3>
              </div>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6',
                margin: 0
              }}>
                {project.description}
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginTop: 'auto'
              }}>
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      padding: '0.25rem 0.75rem',
                      backgroundColor: '#f1f5f9',
                      borderRadius: '1rem',
                      fontSize: '0.875rem',
                      color: '#1e293b',
                      fontWeight: '500'
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div style={{
                display: 'flex',
                gap: '1rem',
                marginTop: '1rem'
              }}>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#1e293b',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}
                >
                  <GitHubIcon />
                  GitHub
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#1e293b',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}
                >
                  <LaunchIcon />
                  Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Projects; 