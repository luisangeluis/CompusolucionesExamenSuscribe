import React from 'react'

const ShoppingBox = () => {
  return (
    <article className='card-footer border-0'>
      <h3 className='card-title'>Configura tus productos</h3>
      <h3 className='card-title'>¿Cuantos quieres?</h3>
      <form action="">
        <div className="mb-3">
          <input type="text" className='form-control'/>
        </div>
        <button className='btn'>Agregar al carrito</button>
      </form>

    </article>
  )
}

export default ShoppingBox