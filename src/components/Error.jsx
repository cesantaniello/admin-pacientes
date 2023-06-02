const Error = ({children}) => {
  return (
    <p className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
        {children}
    </p>
  )
}

export default Error