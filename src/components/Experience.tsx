const Experience = () => (
  <section
    id="experiencia"
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
        backgroundColor: '#f1f5f9',
        border: '2px solid #1e293b',
        borderRadius: '1rem',
        padding: '2rem',
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
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
        Experiência Profissional
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>
            Campello & Siqueira
            <span style={{ fontWeight: '500', color: '#fbbf24', marginLeft: '0.5rem' }}>DevOps Developer</span>
            <span style={{ float: 'right', fontStyle: 'italic', color: '#64748b' }}>Jan 2024 - Presente</span>
          </h3>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem' }}>
            <li>Automatizou consultas de dados com scripts Python, aumentando a produtividade em 60%.</li>
            <li>Otimização de fluxos e colaboração ágil, com cobertura de testes acima de 85% (Pytest PIT, Jacoco).</li>
            <li>Integração de ferramentas de automação Python, melhorando prazos e coesão do time.</li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>
            Softex
            <span style={{ fontWeight: '500', color: '#fbbf24', marginLeft: '0.5rem' }}>Software Developer Resident</span>
            <span style={{ float: 'right', fontStyle: 'italic', color: '#64748b' }}>Jan 2023 - Jan 2024</span>
          </h3>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem' }}>
            <li>Desenvolvimento backend com Flask e frontend Flutter para controle de braço robótico.</li>
            <li>Melhoria de eficiência em 20% e redução de erros em 15%.</li>
            <li>Gestão de requisições HTTP, WebSocket e SSR, aumentando performance em 30%.</li>
            <li>Aplicação de Scrum/Kanban, aumento de 40% na produtividade do time.</li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>
            Freelance Developer
            <span style={{ fontWeight: '500', color: '#fbbf24', marginLeft: '0.5rem' }}>Frontend Developer</span>
            <span style={{ float: 'right', fontStyle: 'italic', color: '#64748b' }}>Feb 2020 - Nov 2022</span>
          </h3>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem' }}>
            <li>Projetos para C.E.S.A.R. e Hospital Português, com aumento de 50% em indicações.</li>
            <li>Desenvolvimento de plataforma social para pets com React, JWT, APIs e otimização de engajamento (+40%).</li>
            <li>Integração de bibliotecas externas, melhorando experiência e reduzindo bounce rate em 20%.</li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>
            Prefeitura de Recife
            <span style={{ fontWeight: '500', color: '#fbbf24', marginLeft: '0.5rem' }}>Robotics Intern</span>
            <span style={{ float: 'right', fontStyle: 'italic', color: '#64748b' }}>Jan 2017 - Jan 2019</span>
          </h3>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem' }}>
            <li>Ministrou cursos de Python e robótica para alunos do ensino fundamental.</li>
            <li>Preparou relatórios mensais e orientou equipes em torneios regionais (+15% no ranking).</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
