import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../store/slices/products.slice';

//Components
import ManufacturersSelect from '../filters/ManufacturersSelect';
import CardProduct from '../products/CardProduct';

const Home = () => {
  const products = useSelector(state => state.products);

  useEffect(() => {

  }, [])



  console.log(products);

  return (
    <section className="home flex-grow-1">
      <div className="container">
        <section className="row">
          <div className="col">
            <div className="row my-3 my-md-4">
              <div className="col-md d-flex align-items-center">Suscripciones</div>
              <div className="col-md">
                <ManufacturersSelect />
              </div>
            </div>
            <div className="row">
              <div className="col">
                Precios mas IVA
                <hr />
              </div>
            </div>
          </div>
        </section>
        <section className="row">
          <div className="col-12">
            {products?.map(product => <CardProduct product={product} key={product.id} />)}
          </div>
        </section>
      </div>
    </section>
  )
}

export default Home