import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <section className="inicio">
      {/* Sección Hero / Principal */}
      <div className="hero-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '280px' }}>
          <h1>Hola, soy Danna</h1>
          <h2 style={{ color: 'var(--primary-hover)', fontSize: '1.2rem', marginBottom: '1rem' }}>
            Desarrolladora Frontend
          </h2>
          <p>
            Bienvenido a mi portafolio. Aquí puedes conocer más sobre mí, 
            mis habilidades y proyectos.
          </p>
          <Link to="/proyectos" className="btn-explorar" style={{ marginTop: '1rem', display: 'inline-block' }}>
            Explorar
          </Link>
        </div>

        {/* Caja de imagen según el wireframe */}
        <div className="hero-img-placeholder" style={{ 
          flex: '1', 
          minWidth: '240px', 
          height: '180px', 
          backgroundColor: 'var(--card-bg)', 
          border: '1px dashed var(--border-color)', 
          borderRadius: '12px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'var(--text-muted)'
        }}>
          <img src="assets/foto-perfil.jpg" alt="Foto de perfil" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
      </div>

      {/* 4 Tarjetas Destacadas inferiores del wireframe */}
      <div className="grid-destacadas" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
        gap: '1rem' 
      }}>
        <div className="tarjeta-min" style={{ backgroundColor: 'var(--card-bg)', padding: '1.2rem', borderRadius: '8px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
          <span style={{ fontSize: '1.5rem' }}>💻</span>
          <h4 style={{ fontSize: '1rem', marginTop: '0.5rem', color: 'var(--text-main)' }}>Desarrollo Backend</h4>
        </div>
        <div className="tarjeta-min" style={{ backgroundColor: 'var(--card-bg)', padding: '1.2rem', borderRadius: '8px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
          <span style={{ fontSize: '1.5rem' }}>📂</span>
          <h4 style={{ fontSize: '1rem', marginTop: '0.5rem', color: 'var(--text-main)' }}>Proyectos Reales</h4>
        </div>
        <div className="tarjeta-min" style={{ backgroundColor: 'var(--card-bg)', padding: '1.2rem', borderRadius: '8px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
          <span style={{ fontSize: '1.5rem' }}>⚡</span>
          <h4 style={{ fontSize: '1rem', marginTop: '0.5rem', color: 'var(--text-main)' }}>Aprendizaje Continuo</h4>
        </div>
        <div className="tarjeta-min" style={{ backgroundColor: 'var(--card-bg)', padding: '1.2rem', borderRadius: '8px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
          <span style={{ fontSize: '1.5rem' }}>⭐</span>
          <h4 style={{ fontSize: '1rem', marginTop: '0.5rem', color: 'var(--text-main)' }}>Compromiso y Pasión</h4>
        </div>
      </div>
    </section>
  )
}

export default Inicio