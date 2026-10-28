import { useState } from 'react'

function FormularioContacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  })

  const [errores, setErrores] = useState({})

 
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(false)
    
    const nuevosErrores = {}


    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.'
    }


    if (!formData.correo.trim()) {
      nuevosErrores.correo = 'El correo es obligatorio.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      nuevosErrores.correo = 'Por favor ingresa un correo electrónico válido.'
    }


    if (!formData.mensaje.trim()) {
      nuevosErrores.mensaje = 'El mensaje es obligatorio.'
    }

    setErrores(nuevosErrores)


    if (Object.keys(nuevosErrores).length > 0) {
      return
    }


    setEnviado(true)
    setFormData({
      nombre: '',
      correo: '',
      mensaje: ''
    })
  }

  return (
    <div className="contenedor-formulario">
      {enviado && (
        <div className="mensaje-exito">
          ¡Gracias por escribir! Tu mensaje ha sido enviado correctamente.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Campo Nombre */}
        <div className="campo-form">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          {errores.nombre && <span className="error-texto">{errores.nombre}</span>}
        </div>

        {/* Campo Correo */}
        <div className="campo-form">
          <label htmlFor="correo">Correo electrónico:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
          {errores.correo && <span className="error-texto">{errores.correo}</span>}
        </div>

        {/* Campo Mensaje */}
        <div className="campo-form">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            value={formData.mensaje}
            onChange={handleChange}
          />
          {errores.mensaje && <span className="error-texto">{errores.mensaje}</span>}
        </div>

        <button type="submit" className="btn-enviar">
          Enviar mensaje
        </button>
      </form>
    </div>
  )
}

export default FormularioContacto