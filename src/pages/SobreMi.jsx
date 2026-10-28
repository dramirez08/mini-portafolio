import fotoPerfil from '../assets/foto-perfil.jpg'

function SobreMi() {
  return (
    <section className="sobre-mi">
      <h1>Sobre mí</h1>

      {/* Bloque superior: Avatar + Descripción */}
      <div className="perfil-contenedor">
        <div className="avatar-placeholder">
          <img src={fotoPerfil} alt="Foto de perfil" className="avatar-img" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>

        <div className="perfil-texto">
          <p>
            Soy <strong>Danna</strong>, estudiante de <strong>Ingeniería Civil Informática</strong>. 
            Me apasiona el desarrollo web y me interesa crear soluciones tecnológicas 
            eficientes que mejoren la experiencia de las personas.
          </p>
        </div>
      </div>

      {/* Subsección: ¿Qué estudio? */}
      <div className="seccion-info">
        <h3>¿Qué estudio?</h3>
        <p>
          Estudio Ingeniería Civil Informática en el
          instituto tecnológico de la Universidad Catolica de Temuco.
        </p>
      </div>

      {/* Subsección: ¿Qué me interesa? */}
      <div className="seccion-info">
        <h3>¿Qué me interesa?</h3>
        <ul className="lista-intereses">
          <li>Desarrollo web y tecnologías backend (FastAPI, Python, Node.js).</li>
          <li>Aprender nuevas herramientas y arquitecturas de software.</li>
          <li>Construir proyectos que generen un impacto real.</li>
        </ul>
      </div>
    </section>
  )
}

export default SobreMi