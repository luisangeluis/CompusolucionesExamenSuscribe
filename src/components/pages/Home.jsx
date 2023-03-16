import React from 'react'

const Home = () => {
  return (
    <section className="home flex-grow-1">
      <div className="container-fluid">
        <section className="row">
          <div className="col-md">Suscripciones</div>
          <div className="col-md">
            <label htmlFor="manufacturers-select">Filtrar por</label>
            <select className="form-select" id="manufacturers-select">
              <option defaultValue=''>Todos los fabricantes</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="row">
            <div className="col">
              Precios mas IVA
              <hr />
              <hr />
            </div>
          </div>
        </section>
        <section className="row">
          <div className="col-md-3">Lista</div>
          <div className="col-md-9">SECCION</div>
        </section>
      </div>



    </section>
  )
}

export default Home