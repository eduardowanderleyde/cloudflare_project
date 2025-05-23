import { motion } from 'framer-motion';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactLinks = [
    {
      icon: <EmailIcon />,
      label: 'Email',
      href: 'mailto:wanderley.eduardo@gmail.com',
      value: 'wanderley.eduardo@gmail.com'
    },
    {
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/eduardowanderleyde/',
      value: 'eduardowanderleyde'
    },
    {
      icon: <GitHubIcon />,
      label: 'GitHub',
      href: 'https://github.com/eduardowanderleyde',
      value: 'eduardowanderleyde'
    },
    {
      icon: <WhatsAppIcon />,
      label: 'WhatsApp',
      href: 'https://wa.me/5581999999999',
      value: '(81) 99999-9999'
    }
  ];

  return (
    <motion.section
      id="contato"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        marginBottom: 64,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 1rem',
        background: '#fff'
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          width: '100%',
          maxWidth: '900px',
          backgroundColor: '#fff',
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
          Contato
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          padding: '1rem',
          marginBottom: '2rem'
        }}>
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
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
                textDecoration: 'none',
                color: '#1e293b',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
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
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                style={{
                  fontSize: '2rem',
                  color: '#fbbf24'
                }}
              >
                {link.icon}
              </motion.div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  margin: '0 0 0.5rem 0'
                }}>
                  {link.label}
                </h3>
                <p style={{
                  color: '#64748b',
                  margin: 0,
                  fontSize: '0.9rem'
                }}>
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            padding: '2rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ color: '#1e293b', fontWeight: '600' }}>Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '2px solid #e2e8f0',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ color: '#1e293b', fontWeight: '600' }}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '2px solid #e2e8f0',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ color: '#1e293b', fontWeight: '600' }}>Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                style={{
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '2px solid #e2e8f0',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  resize: 'vertical'
                }}
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '1rem 2rem',
                backgroundColor: '#fbbf24',
                color: '#1e293b',
                border: 'none',
                borderRadius: '0.5rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}
            >
              <SendIcon />
              Enviar Mensagem
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '2rem',
            color: '#64748b'
          }}
        >
          <LocationOnIcon />
          <span>Recife, PE - Brasil</span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;