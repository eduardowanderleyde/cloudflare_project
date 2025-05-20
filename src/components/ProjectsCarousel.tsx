import { useState } from 'react';

const projetos = [
  { nome: 'Blogs', imagem: '/projetos-web-devopment/blogs.png' },
  { nome: 'CarHub', imagem: '/projetos-web-devopment/carhub.jpeg' },
  { nome: 'Dog Social Media', imagem: '/projetos-web-devopment/dog-social-media.png' },
  { nome: 'Fantastic Beast', imagem: '/projetos-web-devopment/fantastic-beast.png' },
  { nome: 'Instagram Clone', imagem: '/projetos-web-devopment/instagram.jpeg' },
  { nome: 'Ping Pong', imagem: '/projetos-web-devopment/ping-pong.png' },
];

const ProjectsCarousel = () => {
  const [projIndex, setProjIndex] = useState(0);
  const nextProj = () => setProjIndex((i) => (i + 1) % projetos.length);
  const prevProj = () => setProjIndex((i) => (i - 1 + projetos.length) % projetos.length);

  return (
    <section
      id="projetos"
      style={{
        marginBottom: 64,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 1rem'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '900px',
          backgroundColor: '#f8fafc',
          border: '2px solid #1e293b',
          borderRadius: '1rem',
          padding: '2rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: '800',
            marginBottom: '1.5rem',
            color: '#1e293b',
            borderBottom: '2px solid #fbbf24',
            paddingBottom: '0.5rem'
          }}
        >
          Projetos
        </h2>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <button
            onClick={prevProj}
            style={{
              fontSize: '1.5rem',
              padding: '0.5rem 1rem',
              background: '#fbbf24',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              marginRight: '1rem'
            }}
          >
            &lt;
          </button>

          <div style={{ flex: 1 }}>
            <img
              src={projetos[projIndex].imagem}
              alt={projetos[projIndex].nome}
              style={{ maxWidth: '100%', maxHeight: '400px', borderRadius: '1rem' }}
            />
            <h3 style={{ marginTop: '1rem', fontSize: '1.25rem', color: '#334155' }}>
              {projetos[projIndex].nome}
            </h3>
          </div>

          <button
            onClick={nextProj}
            style={{
              fontSize: '1.5rem',
              padding: '0.5rem 1rem',
              background: '#fbbf24',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              marginLeft: '1rem'
            }}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
