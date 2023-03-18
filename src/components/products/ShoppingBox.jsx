import React from 'react'

const ShoppingBox = () => {
  return (
    <article className='card-footer border-0'>
      <h3 className='subtitle-2'>Configura tus productos</h3>
      <h3 className='subtitle-2'>¿Cuantos quieres?</h3>
      <form action="">
        <div className="mb-3">
          <input type="text" className='form-control'/>
        </div>
        <button className='btn bg-green rounded-0 border border-1' >Agregar al carrito</button>
      </form>

    </article>
  )
}

export default ShoppingBox