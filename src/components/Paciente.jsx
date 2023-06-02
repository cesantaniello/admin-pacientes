const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, fecha, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('¿Deseas eliminar a este paciente?');

    if(respuesta){
      eliminarPaciente(id);
    }
  }

  return (
  <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 normal-case">
      Nombre: {''}
      <span className="font-normal">{nombre}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 normal-case">
      Propietario: {''}
      <span className="font-normal">{propietario}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 normal-case">
      Email: {''}
      <span className="font-normal">{email}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 normal-case">
      Fecha de Alta: {''}
      <span className="font-normal">{fecha}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 normal-case">
      Síntomas: {''}
      <span className="font-normal">{sintomas}</span>
    </p>
    <div className="flex justify-between mt-10">
      <button 
        type="button"
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" 
        onClick={() => setPaciente(paciente)}
        >
          Editar
      </button>
      <button 
        type="button"
        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" 
        onClick={handleEliminar}
        >
          Eliminar
      </button>
    </div>                          
  </div>
  )
}

export default Paciente