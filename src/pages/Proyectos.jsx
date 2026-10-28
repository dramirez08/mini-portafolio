import TarjetaProyecto from '../components/TarjetaProyecto'

function Proyectos() {
  const listaProyectos = [
    {
      id: 1,
      titulo: 'Base de Datos FastAPI (Backend)',
      descripcion: 'API REST desarrollada en Python con FastAPI y Pydantic para la gestión de películas y series, aplicando arquitectura limpia.',
      enlace: 'https://github.com/dramirez08/backend-2026-grupo-4'
    },
    {
      id: 2,
      titulo: 'Portafolio Web Personal Artistico',
      descripcion: 'Sitio web interactivo y responsivo diseñado con java, html, css y buenas prácticas de accesibilidad WCAG.',
      enlace: 'https://github.com/dramirez08/Frontend-Portafolio'
    },
    {
      id: 3,
      titulo: 'Proyecto de Cálculo Básico - Límites',
      descripcion: 'Aplicación web para la resolución de problemas de límites en cálculo, desarrollada con HTML, CSS y JavaScript, enfocada en la educación matemática.',
      enlace: 'http://github.com/vfonseca2026-afk/Calculo-Basico-Proyecto-Limites'
    }
  ]

  return (
    <section className="proyectos-container">
      <h1>Mis Proyectos</h1>
      <p>Aquí puedes explorar algunos de los trabajos y proyectos que he desarrollado:</p>

      <div className="grid-proyectos">
        {listaProyectos.map((proyecto) => (
          <TarjetaProyecto
            key={proyecto.id}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            enlace={proyecto.enlace}
          />
        ))}
      </div>
    </section>
  )
}

export default Proyectos