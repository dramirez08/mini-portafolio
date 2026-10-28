import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <section className="inicio">
      <h1>Hola, soy Danna</h1>
      <h2>Estudiante de Ingeniería Civil Informática</h2>
      <p>
        Te doy la bienvenida a mi portafolio web. Aquí podrás conocer mis proyectos,
        habilidades técnicas y trayectoria.
      </p>
      
      <Link to="/proyectos" className="btn-explorar">
        Explorar Proyectos
      </Link>
    </section>
  )
}

export default Inicio