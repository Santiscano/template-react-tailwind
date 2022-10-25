import React from 'react'
import { useNavigate } from "react-router-dom";


// componentes importados
import Header from '../components/Header'

const Init = () => {
  // const handleClick = () => {}
  // const [isLoading, setisLoading] = useState(false);
  // const [error, seterror] = useState(false);
  
  return (
    <div>
      <Header/>


      {/* {isLoading && <h6 className="mt-8">Cargando...</h6>} */}
      {/* {error && <h6 className="text-red">Ha ocurrido un error</h6>} */}
      <div>
        {/* {!isLoading && searchResults?.map(() => <RenderElements key={} onclick={handleClick} />)} */}
      </div>
    </div>
  )
}

export default Init
