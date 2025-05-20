const Contact = () => (
  <section
    id="contato"
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
        maxWidth: '700px',
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
          marginBottom: '1rem',
          color: '#1e293b',
          borderBottom: '2px solid #fbbf24',
          paddingBottom: '0.5rem'
        }}
      >
        Contato
      </h2>
      <p style={{ fontSize: '1.1rem', color: '#334155', marginBottom: '1.5rem' }}>
        Vamos conversar sobre tecnologia, projetos ou oportunidades?
      </p>
      <a
        href="mailto:wanderley.eduardo@gmail.com"
        style={{
          display: 'inline-block',
          marginBottom: '1rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#fbbf24',
          color: '#1e293b',
          fontWeight: '600',
          borderRadius: '0.5rem',
          textDecoration: 'none'
        }}
      >
        Me envie um e-mail
      </a>
      <br />
      <a
        href="/CV/Eduardo_Wanderley_CV_rb.pdf"
        download
        style={{
          display: 'inline-block',
          marginBottom: '1.5rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#1e293b',
          color: '#f8fafc',
          fontWeight: '600',
          borderRadius: '0.5rem',
          textDecoration: 'none'
        }}
      >
        Baixar Currículo (PDF)
      </a>
      <div style={{ marginBottom: '1rem', color: '#475569' }}>
        <span>📞 +55 (81) 9 9490-8227</span> | <span>📍 Recife, PE</span>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/eduardowanderleyde/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#0ea5e9', textDecoration: 'underline' }}
        >
          LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default Contact;