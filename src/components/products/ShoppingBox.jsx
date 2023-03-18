import React, { useState } from 'react'

const ShoppingBox = ({ product }) => {
  const [total, setTotal] = useState(0);

  const handleOnChangeTotal = (e) => {
    const price = Number(product.price);
    let value = Number(e.target.value);

    if (value > 100 || value < 0) {
      e.target.value = 0;
      value = Number(e.target.value);
    }

    setTotal(value * price)
  }

  return (
    <article className='card-footer border-1 bg-gray border border-2 border-dark-subtle'>
      <h3 className='subtitle-2'>Configura tus productos</h3>
      <div className="mb-3 d-flex justify-content-center align-items-start flex-column flex-lg-row">
        <h3 className='subtitle-2 text-start text-md-start px-1'>¿Cuantos quieres?</h3>
        <p className='subtitle-3 fw-bolder'>Disponible de 1 a 100</p>
      </div>
      <form action="">
        <div className=" input-group mb-3 ">
          <span className='input-group-text bg-green text-white'>
            <i className="fa-solid fa-cart-shopping mx-1 "></i>
          </span>
          <input type="number" className='form-control' onChange={handleOnChangeTotal}
            placeholder="Numero de licencias" />
        </div>
        <div className="mb-3 text-end">
          Total: ${total.toFixed(2)}
        </div>
        <div className='text-end'>
          <button className='btn bg-green rounded-0 border border-1'>
            Agregar al carrito
          </button>
        </div>

      </form>
    </article>
  )
}

export default ShoppingBox