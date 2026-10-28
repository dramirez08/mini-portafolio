import fotoPerfil from '../assets/foto-perfil.jpg'

function TarjetaProyecto({ titulo, descripcion, enlace, imagen }) {
  return (
    <div className="tarjeta-proyecto">
      <div className="proyecto-img-contenedor">
        {/* Usamos la imagen que viene por props, o la imagen por defecto */}
        <img 
          src={imagen || fotoPerfil} 
          alt={titulo} 
          className="proyecto-img"
        />
      </div>
      <div className="proyecto-info">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        {enlace ? (
          <a href={enlace} target="_blank" rel="noopener noreferrer">
            Ver proyecto &rarr;
          </a>
        ) : (
          <span className="sin-repositorio">Próximamente</span>
        )}
      </div>
    </div>
  )
}

export default TarjetaProyecto