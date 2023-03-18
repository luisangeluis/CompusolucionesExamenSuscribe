//Components
import SearchByTerm from '../filters/SearchByTerm'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-blue-1 p-0 position-fixed">
      <div className="container-fluid p-0">
        <a className="navbar-brand m-0 p-0"
          href="/">
          <img src="/img/clicksuscribe.png" alt="logo" className='main-img img-fluid' />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div className="row w-100 mx-auto p-0">
            <div className="col-12 p-0">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end ">
                <li className="nav-item p-1 p-md-2 ">
                  <a className="nav-link active text-white">
                    <i className="fa-solid fa-bag-shopping mx-1"></i>
                    Ver todos los productos
                  </a>
                </li>
                <li className="nav-item bg-yellow p-1 p-md-2">
                  <a className="nav-link">Cliente</a>
                </li>
                <li className="nav-item bg-green p-1 p-md-2">
                  <a className="nav-link ">Siclick</a>
                </li>
                <li className="nav-item bg-red p-1 p-md-2">

                  <a className="nav-link ">
                    <i className="fa-solid fa-ticket mx-1"></i>
                    Soporte
                  </a>
                </li>
                <li className="nav-item bg-blue-2 p-1 p-md-2">
                  <a className="nav-link ">
                    <i className="fa-solid fa-cart-shopping mx-1"></i>
                    0
                  </a>
                </li>
                <li className="nav-item bg-red p-1 p-md-2">
                  <a className="nav-link ">
                    <i className="fa-solid fa-user mx-1"></i>
                    <i className="fa-solid fa-caret-down"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 p-0">
              <SearchByTerm />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header