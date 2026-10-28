function Habilidades() {
  const tecnologias = [
    { nombre: 'HTML', nivel: '70%', icono: '🌐' },
    { nombre: 'CSS', nivel: '85%', icono: '🎨' },
    { nombre: 'JavaScript', nivel: '65%', icono: '⚡' },
    { nombre: 'React', nivel: '50%', icono: '⚛️' },
    { nombre: 'TypeScript', nivel: '60%', icono: '📘' },
    { nombre: 'Python', nivel: '70%', icono: '🐍' },
  ]

  const herramientas = ['Git', 'GitHub', 'VS Code', 'Figma', 'Node.js', 'FastAPI', 'Postman']

  return (
    <section className="habilidades">
      <h1>Habilidades y Lenguajes</h1>

      {/* Bloque 1: Tecnologías */}
      <div className="seccion-habilidades">
        <h2>Tecnologías</h2>
        <div className="grid-tecnologias">
          {tecnologias.map((tech) => (
            <div key={tech.nombre} className="tarjeta-tech">
              <div className="tech-header">
                <span className="tech-icono">{tech.icono}</span>
                <span className="tech-nombre">{tech.nombre}</span>
              </div>
              <div className="barra-contenedor">
                <div 
                  className="barra-progreso" 
                  style={{ width: tech.nivel }}
                ></div>
              </div>
              <span className="tech-porcentaje">{tech.nivel}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bloque 2: Herramientas */}
      <div className="seccion-habilidades">
        <h2>Herramientas</h2>
        <div className="lista-herramientas">
          {herramientas.map((herramienta) => (
            <span key={herramienta} className="tag-herramienta">
              {herramienta}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Habilidades