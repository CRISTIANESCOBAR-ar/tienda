import React, { useState } from 'react'

const itemCount = () => {

const [count, setCount] = useState(1)

  return (
      <div className='container'>
          <Boton texto="+" />
          <span>{count  }</span>
          <Boton texto="-" />
          
    </div>
  )
}

export default itemCount