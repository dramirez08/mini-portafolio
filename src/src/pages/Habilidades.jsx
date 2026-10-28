function Habilidades() {
  const habilidades = [
    { id: 1, nombre: 'Python / FastAPI', nivel: 'Intermedio' },
    { id: 2, nombre: 'JavaScript / React / Node.js', nivel: 'Basico' },
    { id: 3, nombre: 'Bases de Datos & SQL', nivel: 'Intermedio' },
    { id: 4, nombre: 'HTML5 & CSS3', nivel: 'Basico' },
    { id: 5, nombre: 'Redes de Computadores', nivel: 'Básico' }
  ]

  const herramientas = [
    'Visual Studio Code',
    'Git & GitHub',
    'PowerShell / Terminal',
    'Postman & Thunder Client',
    'Blender (Modelado 3D)',
    'LaTeX & Overleaf'
  ]

  return (
    <section className="habilidades">
      <h1>Habilidades Técnicas</h1>

      <div className="lista-habilidades">
        {habilidades.map((hab) => (
          <div key={hab.id} className="tarjeta-habilidad">
            <h3>{hab.nombre}</h3>
            <p><strong>Nivel:</strong> {hab.nivel}</p>
          </div>
        ))}
      </div>

      <h2>Herramientas y Tecnologías</h2>
      <ul>
        {herramientas.map((herramienta, index) => (
          <li key={index}>{herramienta}</li>
        ))}
      </ul>
    </section>
  )
}

export default Habilidades