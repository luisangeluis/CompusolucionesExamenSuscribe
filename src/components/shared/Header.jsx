import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <div className="row w-100">
            <div className="col-12">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end align-items-center">
                <li className="nav-item">
                  <a className="nav-link active">Ver todos los productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Cliente</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ">Siclick</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ">Soporte</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ">A</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ">B</a>
                </li>
              </ul>
            </div>
            <div className="col-12">
              <form className="d-flex w-100" role="search">
                <div className="input-group mb-3">
                  <input type="text" className="form-control rounded-0" placeholder="Recipient's username"
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <span className="input-group-text" id="basic-addon2">@example.com</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header