import React from 'react'
import ShoppingBox from './ShoppingBox'

import convertFirstToUpper from '../../utils/convertFirstToUpper';

const CardProduct = ({ product }) => {
  return (
    <article className='card py-2 py-md-3 border-0 border-top border-bottom rounded-0'>
      <div className="row">
        <div className="col-sm-3 text-center d-flex justify-content-center align-items-center">
          <img src={`/img/${product.imageUrl}`} alt={product.imageUrl} className="img-fluid w-75" />
        </div>
        <div className="col-sm-5">
          <div className="card-body">
            <h2 className=" title-1 mb-4">{convertFirstToUpper(product.maker)}</h2>
            <ul className='list-group'>
              <li className='list-group-item border-0 p-0 mb-2'>
                <span className='fw-bold'>Descripcion:</span> {convertFirstToUpper(product.maker)}
              </li>
              <li className='list-group-item border-0 p-0 mb-2'>
                <span className='fw-bold'>Fabricante:</span> {convertFirstToUpper(product.maker)}
              </li>
              <li className='list-group-item border-0 p-0 mb-2'>
                <span className='fw-bold'>Articulo Id:</span> {product.id}
              </li>
              <li className='list-group-item border-0 p-0 mb-2'>
                <span className='fw-bold'>Precio:</span> ${Number(product.price).toFixed(2)}
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <ShoppingBox product={product} />
        </div>
      </div>

    </article>
  )
}

export default CardProduct
