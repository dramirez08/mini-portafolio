import FormularioContacto from '../components/FormularioContacto'

function Contacto() {
  return (
    <section className="contacto-container">
      <h1>Contacto</h1>
      <p>¿Tienes alguna duda o propuesta?
       ¡Me encantaria saber sobre ti!</p>
      
      <FormularioContacto />
    </section>
  )
}

export default Contacto