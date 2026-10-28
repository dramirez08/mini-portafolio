function TarjetaProyecto({ titulo, descripcion, enlace }) {
  return (
    <div className="tarjeta-proyecto">
      <div className="proyecto-img-placeholder">
        <span>🖼️ [Imagen del proyecto]</span>
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