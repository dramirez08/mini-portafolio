function SobreMi() {
  const intereses = [
    'Desarrollo Backend y diseño de APIs REST con FastAPI y Node.js',
    'Desarrollo Frontend con React y Next.js',
    'Arte digital 2D y modelado 3D de personajes en Blender'
  ]

  return (
    <section className="sobre-mi">
      <h1>Sobre mí</h1>
      
      <p>
        Actualmente soy estudiante de segundo semestre de <strong>Ingeniería Civil Informática</strong>. 
        Me apasiona construir soluciones de software estructuradas, limpias y eficientes, combinando 
        el rigor de la ingeniería con la creatividad del diseño.
      </p>

      <h2>¿Qué me interesa?</h2>
      <ul>
        {intereses.map((interes, index) => (
          <li key={index}>{interes}</li>
        ))}
      </ul>

      <h2>Hacia dónde voy</h2>
      <p>
        Busco seguir fortaleciendo mis competencias en el desarrollo de software backend y arquitectura de sistemas,
        participando en proyectos colaborativos de alto impacto e integrando tecnologías modernas para resolver problemas complejos.
      </p>
    </section>
  )
}

export default SobreMi