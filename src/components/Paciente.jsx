const Paciente = () => {
  return (
  <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 normal-case">
      Nombre: {''}
      <span className="font-normal">Chip</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 normal-case">
      Propietario: {''}
      <span className="font-normal">Charlie</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 normal-case">
      Email: {''}
      <span className="font-normal">correo@correo.com</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 normal-case">
      Fecha de Alta: {''}
      <span className="font-normal">6 Junio 2023</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 normal-case">
      Síntomas: {''}
      <span className="font-normal">No presenta</span>
    </p>                          
  </div>
  )
}

export default Paciente